# Xogot on Apple Vision Pro

Learn the core concepts of visionOS spatial computing, run your Godot projects across windows, RealityKit volumes, and immersive spaces, and understand how Xogot's settings and preflight checks guide every launch.

## What is visionOS?

If you have built games for desktop, mobile, or consoles—and have never used Apple Vision Pro or visionOS before—it helps to forget the idea of a single rectangular monitor.

**visionOS** is Apple's spatial operating system for Apple Vision Pro. Instead of filling one flat screen, apps appear in the 3D space around you while cameras stream a low-latency view of your physical room (**passthrough**). You look at an element with your eyes and tap your thumb and index finger together (**gaze and pinch**) to interact, or reach out and touch virtual objects directly with your hands. Game controllers, Bluetooth keyboards, and trackpads also work just as they do on iPad and Mac.

Three spatial concepts govern how every app and game behaves on visionOS:

* **Shared Space vs. Full Space**: By default, you live in the **Shared Space**, where multiple apps float side by side in your room—like windows on a desktop, except arranged in 3D space. An app can also enter a **Full Space**, where visionOS temporarily hides all other apps so that one experience has exclusive access to your surroundings.
* **Windows, Volumes, and Immersive Spaces**:
  * A **Window** is a familiar flat 2D rectangle floating in your room. Any existing 2D or 3D Godot game can run in a Window immediately.
  * A **Volume** is a bounded 3D box floating in Shared Space—like a hologram or a tabletop diorama on your desk. You can walk around it, grab its bottom bar to move or resize it, and keep other apps (including the Xogot editor) open right next to it.
  * An **Immersive Space** is unbounded 3D content that can fill your entire room. It runs in a Full Space and supports **Mixed** immersion (your 3D game blends over your real room via passthrough) or **Full** immersion (your game replaces your physical surroundings completely, like VR).
* **Real-World Scale (1 unit = 1 meter)**: On visionOS, Godot's 3D units represent physical meters. A `1.0` meter cube looks the size of a washing machine in an Immersive Space, whereas a tabletop board game inside a Volume might fit within `0.8 × 0.5 × 0.8` meters.

## The Xogot Editor in Spatial Computing

Xogot itself runs natively on Apple Vision Pro as a floating window in Shared Space. Your projects, `.tscn` scenes, GDScript files, and assets are 100% standard Godot projects—you can edit them on Mac, iPad, iPhone, or directly inside the headset.

@Image(source: "vision-project-browser.png",
       alt: "The Xogot project browser floating in a room on Apple Vision Pro")

When you open a project, the full Xogot workspace—Scene tree, 3D/2D viewport, Inspector, Script editor, Output, and Debugger—floats comfortably in front of you. Because Xogot stays in Shared Space, you can launch a game in a separate Window or a 3D RealityKit Volume right alongside the editor, watch live logs in the Output pad, and stop or replay without losing your workspace layout.

@Image(source: "vision-editor-workspace.png",
       alt: "The Xogot 3D editor workspace floating in visionOS Shared Space with the scene tree, 3D viewport, and Output panel")

## Four Ways to Run Your Game

Xogot on Apple Vision Pro supports four distinct run modes. Each mode makes a different tradeoff between zero-effort compatibility, native visionOS integration, and full-room XR immersion:

| Mode | What You See | Best For |
| --- | --- | --- |
| **Game Tab** | Flat viewport embedded inside the Xogot editor window | Fast iteration, live 2D/3D node selection, and Remote scene tree inspection |
| **Window** | Standalone floating 2D window in Shared Space | Running any existing 2D or 3D Godot game on visionOS without XR changes |
| **RealityKit Volume** | Bounded 3D holographic box rendered via Apple's `GodotRealityKit` plugin | Tabletop games, dioramas, interactive 3D toys, and spatial apps that coexist with other apps |
| **Immersive Space** | Full-room stereo 3D rendered directly by Godot's Metal renderer via CompositorServices | VR games, room-scale AR/passthrough experiences, and projects needing full Godot shaders and post-processing |

> Tip: For a detailed feature-by-feature breakdown—including every mode's limitations and drawbacks—see <doc:vision_modes_and_reference>.

## Configuring Launch Settings

Open the editor menu (**…**) and choose **Xogot Settings → Running** to choose what happens when you tap the **Play** button.

@Image(source: "vision-running-settings.png",
       alt: "Xogot Settings showing the Running pane on Apple Vision Pro with Launch Mode, Presentation, and Action on Play options")

Three settings control how games launch on Apple Vision Pro:

* **Launch Mode** — picks the default target for the toolbar **Play** button:
  * **Game Tab**: Runs inside the editor's embedded Game tab (see <doc:Embedded-Game-View>).
  * **Window** *(default on visionOS)*: Opens a separate floating 2D window.
  * **Immersive**: Launches spatially—using either a **RealityKit Volume** or an **Immersive Space**, depending on **Presentation** below.
* **Presentation** — selects which spatial runtime is used whenever you run spatially:
  * **Automatic** *(default)*: Opens a **RealityKit Volume** if the project sets `application/run/main_loop_type = "RealitySceneTree"` and `GodotRealityKit` is loaded; otherwise opens an **Immersive Space**.
  * **Immersive**: Always uses Godot's CompositorServices **Immersive Space** (temporarily overriding the main loop to `SceneTree` if the project uses `RealitySceneTree`).
  * **RealityKit Volume**: Always uses a **RealityKit Volume** (passing `--main-loop RealitySceneTree` when `GodotRealityKit` is available).
* **Action on Play**: Chooses whether Xogot opens the **Output** panel, the **Debugger** panel, or does nothing when a run starts.

### One-Time Spatial Launches and Live Switching

You do not have to change your saved **Launch Mode** just to test a different mode once:

* **From the Game Tab**: Tap the Game tab (gamepad icon) and choose **Start Game Here**, **Start Game in New Window**, or **Start in Volume** / **Start in Immersive Space**.
* **From the Play Button**: Long-press the **Play** button in the toolbar and choose **Run in Volume** or **Run Immersive** from the menu.
* **While Running Spatially**:
  * If `GodotRealityKit` is available, Xogot shows a **Switch to RealityKit Volume** or **Switch to Immersive** button. Tapping it cleanly stops the running game, waits for teardown, updates **Presentation**, and relaunches in the other mode (runtime state is not carried across the restart).
  * While running in an **Immersive Space**, Xogot shows a **Full Immersion** / **Show Surroundings** toggle so you can test both Full and Mixed passthrough modes immediately without editing your export preset.

@Image(source: "vision-realitykit-volume.png",
       alt: "A live GodotRealityKit 1.2 volume floating in visionOS Shared Space alongside the Xogot editor")

## Automatic Preflight Checks

Because visionOS has stricter renderer, camera, and main-loop requirements than desktop platforms, Xogot runs three automatic **preflight checks** before launching a game and offers one-tap fixes when something does not match.

### 1. Renderer Check (Vulkan to Metal)

visionOS uses Apple's **Metal** graphics API and does not support Vulkan. If you open a Godot project configured for Vulkan (`rendering/rendering_device/driver`), Xogot detects it before running and offers to switch the project to Metal (`mobile` rendering method with the `metal` driver) so it can run on Apple Vision Pro.

### 2. Launch Mode Check (RealityKit Volume Projects)

Projects built with `GodotRealityKit` set `application/run/main_loop_type = "RealitySceneTree"`. That custom main loop expects a RealityKit volume host—if you launch it directly in a flat Window or Game Tab without adjustment, the engine cannot open its volume.

When you tap **Play** on a `RealitySceneTree` project while **Launch Mode** is set to **Window** or **Game Tab** (or while **Presentation** is locked to **Immersive**), Xogot presents the **Launch Mode Check** sheet:

@Image(source: "vision-preflight-launch-mode.png",
       alt: "The Launch Mode Check sheet offering to change Launch Mode and run a GodotRealityKit project in a Volume, run in a Volume once, or fall back to a flat Window using SceneTree")

From this sheet you can:

* **Change Launch Mode & Run in Volume** — updates **Launch Mode** to spatial (and resets **Presentation** from **Immersive** to **Automatic** if needed) so future Play presses open a RealityKit Volume automatically, while non-RealityKit projects still open in Immersive Space.
* **Run in Volume Once** — opens this run in a RealityKit Volume without changing your saved settings.
* **Run in Window (`SceneTree`)** / **Run in Game Tab (`SceneTree`)** / **Run Immersive Anyway** — launches with `--main-loop SceneTree` so the project runs in Godot's standard Metal viewport as a fallback.
* Check **Don't warn again for this project** to remember your choice for this project.

### 3. Immersive Camera Check (Stereo XR Scenes)

Godot's **Immersive Space** renders a stereoscopic left-eye and right-eye view via CompositorServices, which requires an active `XRCamera3D` child under an `XROrigin3D`. A standard `Camera3D` or a 2D `CanvasItem` scene cannot render stereoscopically in an Immersive Space.

Before launching an Immersive Space, Xogot inspects your target scene (and autoloads, ignoring cameras inside `SubViewport`s) using Godot's own camera selection rules. If the active camera is not an `XRCamera3D`, Xogot opens the **Immersive Camera Check** sheet:

@Image(source: "vision-preflight-camera.png",
       alt: "The Immersive Camera Check sheet alerting that regular_only.tscn has only a regular Camera3D and offering to run in a Window instead or add an XROrigin3D and XRCamera3D")

Depending on what Xogot finds in the scene, the sheet offers safe, undoable actions:

* **Run in Window Instead** — highlighted whenever your scene is a conventional 2D or regular-`Camera3D` scene.
* **Switch to `<XRCamera3D>` & Run Immersive** — when the scene already has an `XRCamera3D` that is not marked `current`.
* **Add `XROrigin3D` + `XRCamera3D` & Run Immersive** — when the scene root supports 3D nodes; inserts an `XROrigin3D` and `XRCamera3D` as an undoable editor action and launches immediately.
* **Open `<OwningScene>`** — when the camera lives in an instanced sub-scene or autoload that must be edited there.
* **Run Immersive Anyway** — bypasses the check if your script creates an `XRCamera3D` dynamically at runtime.

## Where to Go Next

* <doc:vision_modes_and_reference>: Deep comparison of every run mode, honest drawbacks, `GodotRealityKit` 1.2 nodes and `project.godot` settings, and how Xogot embeds signed plugins.
* <doc:vision_porting_and_debugging>: Step-by-step walkthroughs for porting 2D, 3D, and VR games to visionOS, supporting multiple modes from one codebase, and debugging on simulator and hardware.
* <doc:vision_spatial_audio_phase>: Adding physically modeled 3D spatial audio, acoustic occlusion, and room reverb with Apple's PHASE (`GodotPhase`) plugin.
