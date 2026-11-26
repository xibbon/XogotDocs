# Operation Modes, Settings, and Plugin Reference

Compare every visionOS run mode and its tradeoffs, look up Xogot launch settings and `project.godot` options, and reference the `GodotRealityKit` 1.2 nodes and embedded plugin behavior.

## Mode Comparison Matrix

Every game you run in Xogot on Apple Vision Pro uses one of four presentation modes. The table below summarizes what changes underneath—engine main loop, renderer, spatial capabilities, and limitations.

| Capability | Game Tab | Window | RealityKit Volume | Immersive Space (Mixed / Full) |
| --- | --- | --- | --- | --- |
| **Godot Main Loop** | `SceneTree` | `SceneTree` | `RealitySceneTree` (`GodotRealityKit`) | `SceneTree` |
| **3D Renderer** | Godot Metal (flat) | Godot Metal (flat) | Apple RealityKit (MaterialX conversion) | Godot Metal via CompositorServices (stereo) |
| **visionOS Space** | Shared Space (inside editor) | Shared Space (separate window) | Shared Space (3D volumetric window) | Full Space (other apps hidden) |
| **True Stereo 3D Depth** | No | No | Yes (within volume bounds) | Yes (unbounded room scale) |
| **Real-Room Passthrough** | Editor floats in room | Window floats in room | Objects float in your room with real lighting | Mixed: passthrough / Full: hides room |
| **2D (`CanvasItem`) Games** | Full support | Full support | Not directly (render via `SubViewport` texture on 3D quad) | Not directly (render via `SubViewport` texture on 3D quad) |
| **Custom Godot Shaders & Post-Processing** | Full Metal support | Full Metal support | Subset converted to MaterialX `ShaderGraphMaterial` | Full Metal support |
| **Required 3D Camera** | `Camera3D` | `Camera3D` | `RealityVolumeCamera3D` or `Camera3D` | `XRCamera3D` under `XROrigin3D` (`near >= 0.1 m`) |
| **Primary Spatial Input** | Touch / pinch as mouse, gamepad | Touch / pinch as mouse, gamepad | `InputEventSpatialTouch`, `InputEventSpatialDrag`, gaze hover, gamepad | `VisionOS` `XRInterface` (hands, gaze/pinch, controllers, anchors) |
| **Coexists with Other Apps** | Yes | Yes | Yes | No (Full Space hides other apps; Xogot editor remains accessible in Mixed mode) |
| **Live 2D/3D Node Selection** | Yes (Game tab toolbar) | Remote Scene Tree | Remote Scene Tree | Remote Scene Tree |

## Drawbacks and Tradeoffs of Each Mode

Choosing the right mode early saves hours of refactoring. Be aware of the real constraints of each path:

### Game Tab Drawbacks

* **Flat 2D viewport**: No stereo depth, no spatial hand gestures, and no sense of real-world scale.
* **Keyboard input requires hiding sidebars**: Just as on iPad (see <doc:Embedded-Game-View>), games running inside the Game Tab only receive hardware keyboard input when the sidebar and inspector are closed.
* **Cannot host `RealitySceneTree`**: Running a `GodotRealityKit` project in the Game Tab falls back to `--main-loop SceneTree`, so RealityKit-only nodes (`RealityHoverEffect3D`, `RealityClipping3D`, room lighting) will not execute RealityKit behavior there.

### Window Drawbacks

* **No stereo 3D or spatial immersion**: Even a 3D game is rendered onto a flat glass plane floating in the room.
* **No room understanding**: A Window cannot access ARKit plane detection, hand skeletons, or scene meshes.
* **Fallback for `RealitySceneTree`**: Like Game Tab, launching a `RealitySceneTree` project in a Window runs with `--main-loop SceneTree` so Godot's Metal renderer can draw it into a 2D window.

### RealityKit Volume Drawbacks

* **Material & shader conversion limits**: `GodotRealityKit` translates Godot `StandardMaterial3D` and shader graphs into RealityKit MaterialX `ShaderGraphMaterial`s. Arbitrary Godot screen-reading shaders (`hint_screen_texture`), custom compute post-processing, `WorldEnvironment` SSAO/SDFGI/glow pipelines, and unsupported shader built-ins do not translate 1:1.
* **First-use shader compilation hitches**: Converting and compiling a complex material on the fly when an object first spawns can cause a brief frame hitch. Call `GodotRealityKit.preload_material("res://...")` during startup to compile materials ahead of time.
* **Bounded volume box**: Objects outside the volume's dimensions are clipped by visionOS. Volumes are ideal for tabletop, diorama, and mid-air interactive experiences, not walk-around open worlds.
* **Xogot hosts volumes in Shared Volumetric mode**: When launched from Xogot's editor, RealityKit games always run inside Xogot's volumetric window host (`.sharedVolumetric`) so the editor stays open alongside your game. RealityKit's standalone `Immersive` presentation style requires exporting a standalone app bundle.
* **No direct 2D `Control` / `CanvasItem` overlay**: Traditional 2D HUD nodes do not draw on top of a 3D RealityKit volume. Use `Label3D`, 3D meshes, or a `SubViewport` rendered onto a 3D quad instead.
* **`WorldEnvironment` disabled by default in volumes**: `reality_kit/world_environment` defaults to `"Automatic"`, which disables `WorldEnvironment` inside volumetric windows (preventing opaque skyboxes from blocking passthrough). Set it to `"Enable"` if you place `RealityKitEnvironmentLightingConfiguration` or IBL nodes inside `WorldEnvironment`—`GodotRealityKit` still skips drawing the skybox geometry automatically in volumes.

### Immersive Space Drawbacks

* **Exclusive Full Space**: Entering an Immersive Space hides all other visionOS apps. Players cannot keep a browser or video player floating beside your game.
* **Mandatory `XROrigin3D` + `XRCamera3D`**: Regular `Camera3D` scenes and pure 2D scenes cannot render stereoscopically. You must configure an `XRCamera3D` and initialize the `VisionOS` `XRInterface`.
* **Minimum near clip plane (`0.1 m`)**: CompositorServices requires a near clip plane of at least `0.1` meters; smaller `Camera3D.near` values are clamped, so avoid placing weapons or UI closer than 10 cm to the player's eyes.
* **Higher GPU cost (dual-eye 90 Hz)**: Rendering stereo views at up to 90 FPS (with foveation disabled in the current Xogot compositor pipeline) demands disciplined draw-call budgets, baked lighting or mobile-friendly materials, and careful LOD usage.
* **No automatic real-room lighting**: Unlike RealityKit Volumes, Godot's Metal renderer does not automatically match your room's ambient lighting—you provide your own lighting and environment probes.
* **Simulator renders monoscopically on some runtimes**: On hardware Apple Vision Pro, CompositorServices uses a two-view `.layered` stereo layout; on simulator runtimes where `.layered` is unavailable, Xogot automatically falls back to a monoscopic `.dedicated` layout.

## Xogot Settings Resolution Matrix

The table below shows exactly which runtime and command-line main-loop flag Xogot uses for every combination of **Launch Mode**, **Presentation**, and project `application/run/main_loop_type`:

| Launch Mode | Presentation | Project `main_loop_type` | Preflight Prompt? | Effective Runtime & Main Loop |
| --- | --- | --- | --- | --- |
| **Game Tab** | Any | `SceneTree` | Renderer only | Game Tab (`SceneTree`) |
| **Game Tab** | Any | `RealitySceneTree` | **Launch Mode Check** | Volume (if accepted) or Game Tab (`--main-loop SceneTree`) |
| **Window** | Any | `SceneTree` | Renderer only | Window (`SceneTree`) |
| **Window** | Any | `RealitySceneTree` | **Launch Mode Check** | Volume (if accepted) or Window (`--main-loop SceneTree`) |
| **Immersive** | **Automatic** | `SceneTree` | **Immersive Camera Check** | Immersive Space (`SceneTree`) |
| **Immersive** | **Automatic** | `RealitySceneTree` | Renderer only | RealityKit Volume (`RealitySceneTree`) |
| **Immersive** | **RealityKit Volume** | `SceneTree` | Renderer only | RealityKit Volume (`--main-loop RealitySceneTree`, if plugin loaded) |
| **Immersive** | **RealityKit Volume** | `RealitySceneTree` | Renderer only | RealityKit Volume (`RealitySceneTree`) |
| **Immersive** | **Immersive** | `SceneTree` | **Immersive Camera Check** | Immersive Space (`SceneTree`) |
| **Immersive** | **Immersive** | `RealitySceneTree` | **Launch Mode Check** → **Camera Check** | Volume (if accepted) or Immersive Space (`--main-loop SceneTree`) |

> Note: When **Presentation** is set to **RealityKit Volume** on a project that does *not* include `GodotRealityKit` (`RealitySceneTree` class unavailable), Xogot falls back to **Immersive Space**.

## Project Settings Reference (`project.godot`)

### Core Engine & Renderer Settings

```ini
[application]
run/main_loop_type="RealitySceneTree" ; Use "SceneTree" for Window / Game Tab / Immersive Space

[rendering]
renderer/rendering_method="mobile"
rendering_device/driver.ios="metal"
```

### `GodotRealityKit` Settings (`[reality_kit]`)

Enabling the `GodotRealityKit` editor plugin registers these settings in **Project Settings → Reality Kit** (saved under `[reality_kit]` in `project.godot`):

| Setting Key | Type / Values | Default | Effect |
| --- | --- | --- | --- |
| `reality_kit/presentation_style` | `"Volumetric Window"`, `"Portal Window"`, `"Immersive"` | `"Volumetric Window"` | Presentation style for exported apps. (Inside Xogot, volumes always run in Shared Volumetric mode.) |
| `reality_kit/immersion_style` | `"Mixed"`, `"Full"`, `"Progressive"` | `"Mixed"` | Immersion style when an exported RealityKit app uses `"Immersive"` presentation. |
| `reality_kit/world_environment` | `"Automatic"`, `"Enable"`, `"Disable"` | `"Automatic"` | Controls whether `WorldEnvironment` is processed. `"Automatic"` disables it in volumetric windows; set `"Enable"` to use `RealityKitEnvironmentLightingConfiguration` or IBL in a volume. |
| `reality_kit/volume_default_size` | `Vector3` (meters) | `Vector3(0, 0, 0)` (uses Xogot default `1.0 × 0.5 × 0.6 m`) | Initial width, height, and depth of the volumetric window in real-world meters (for example `Vector3(1.15, 0.85, 0.72)`). |
| `reality_kit/volume_resizable` | `bool` | `true` | Allows the user to resize the volume using its corner handles. |
| `reality_kit/volume_default_placement` | `"Automatic"`, `"Utility Panel"` | `"Automatic"` | Hints to visionOS where to place the volume when it opens (`Utility Panel` places it near the user like a control deck). |
| `reality_kit/volume_world_alignment` | `"Automatic"`, `"Adaptive"`, `"Gravity Aligned"` | `"Automatic"` | Controls how the volume aligns with gravity when the user tilts or repositions it. |
| `reality_kit/portal_presentation_world_scale` | `float` | `0.0` | World scale multiplier when using `"Portal Window"` presentation. |
| `reality_kit/handles_game_controller_events` | `bool` | `true` | Routes game controller input through RealityKit's event bridge. |
| `reality_kit/debug_rendering_on_macos` | `bool` | `false` | Enables RealityKit debug rendering when previewing on macOS. |

### Immersive Space Export Setting (`export_presets.cfg`)

For Godot CompositorServices **Immersive Space** runs, Xogot reads `application/immersion_style` from the project's runnable **visionOS** preset in `export_presets.cfg`:

* `0` — **Full** (replaces surroundings)
* `1` — **Mixed** *(default if no visionOS preset exists)* (blends over passthrough)
* `2` — **Progressive** (Digital Crown controls how much of your surroundings are replaced)

At runtime, your script can also change immersion style dynamically via `XRInterface.environment_blend_mode` or `VisionOSXRInterface.immersion_style`, and Xogot keeps its **Full Immersion** / **Show Surroundings** toggle in sync.

## `GodotRealityKit` 1.2 Nodes and APIs

Xogot bundles Apple's `GodotRealityKit` 1.2 extension. Below are the key nodes, events, and APIs available in RealityKit Volumes:

### `RealityVolumeCamera3D`

Defines the camera framing and coordinate mapping between your Godot 3D scene and the visionOS volumetric window. Place a `RealityVolumeCamera3D` (or a regular `Camera3D`) in your volume scene—a camera node is also required for spatial pinch/drag hit-testing to route `InputEventSpatialTouch` events reliably to `CollisionObject3D` nodes.

### `RealityKitEnvironmentLightingConfiguration`

Controls how much Apple Vision Pro's real-world passthrough room lighting influences RealityKit materials in your volume:

* Add as a child of your scene (or under `WorldEnvironment` with `reality_kit/world_environment = "Enable"`).
* Adjust `environment_lighting_weight` between `0.0` (only your Godot lights / IBL) and `1.0` (full real-room lighting match). Especially noticeable on metallic and low-roughness surfaces.

### `RealityImageBasedLight3D`

Provides custom Image-Based Lighting (IBL) reflections from an environment map inside a RealityKit Volume without drawing an opaque skybox.

### `RealityKitDirectionalLightShadow3D`

Attaches fixed orthographic shadow bounds to a `DirectionalLight3D` so floor and tabletop shadows remain stable and sharp even when the user grabs, moves, pushes far away, or resizes the volume.

### `RealityHoverEffect3D`

Adds native visionOS gaze-hover visual feedback (such as spotlight highlight or subtle lift) to a `CollisionObject3D` when the user looks at it—providing immediate eye-tracking responsiveness with zero latency and without exposing eye-gaze coordinates to your script.

### `RealityClipping3D`

Clips geometry cleanly to a 3D box—ideal for tabletop maps, cutaway views, or scrolling dioramas inside a volume.

> Important: `RealityClipping3D` applies its clipping box to its **parent node's subtree**, including `CollisionObject3D` meshes whose `input_ray_pickable` is `false`. Group nodes you want clipped under a dedicated parent `Node3D` with a `RealityClipping3D` child, and place unclipped objects outside that parent.

### `RealityPortalMeshInstance3D` and `RealityPortalCrossing3D`

Render a window ("portal") into a separate 3D world inside a mesh, and optionally allow objects with `RealityPortalCrossing3D` to cross through the portal plane into your room.

### Spatial Input Events

When a user looks at a `CollisionObject3D` (with `input_ray_pickable = true`) and pinches or drags, `GodotRealityKit` dispatches spatial input events to `_input_event(camera, event, event_position, normal, shape_idx)` and `_input(event)`:

* `InputEventSpatialTouch`: Fired on pinch press (`pressed = true`) and release (`pressed = false`)—even if the user drags off the object and looks away before releasing.
* `InputEventSpatialDrag`: Fired continuously while pinching and moving your hand in 3D space.

### Material Preloading (`GodotRealityKit.preload_material`)

Convert and compile materials during loading screens instead of mid-gameplay:

```gdscript
if ClassDB.class_exists("GodotRealityKit"):
	GodotRealityKit.preload_material("res://materials/hero_metal.tres")
```

### Material & Skybox Notes in `GodotRealityKit` 1.2

* **Skyboxes in Volumes**: `WorldEnvironment` skyboxes are automatically skipped in volumetric windows so your real room stays visible behind your diorama.
* **Emission Operator**: `StandardMaterial3D.EMISSION_OP_ADD` glows even without an emission texture; `EMISSION_OP_MULTIPLY` without an emission texture multiplies by zero and stays dark (matching Godot's renderer).
* **Font / Texture Mipmaps**: Enable **Font Generate Mipmaps** in project settings (and generate mipmaps on 3D textures) to prevent shimmering on `Label3D` text when viewed in stereo on Apple Vision Pro.

## How Embedded Signed Plugins Work in Xogot

On Apple platforms, apps cannot dynamically load unsigned `.framework` or `.dylib` binaries downloaded into a project folder—visionOS enforces strict code signing at launch.

To make `GodotRealityKit` and `GodotPhase` work seamlessly on both the visionOS Simulator and physical Apple Vision Pro hardware, Xogot embeds signed copies of both frameworks inside the Xogot app bundle (including dedicated runtime copies for in-process game replay so you can Stop and Play repeatedly without unloading crashes).

Your project only needs the standard `.gdextension` descriptor files in `res://addons/`:

* `res://addons/GodotRealityKit/GodotRealityKit.gdextension` (and its GDScript editor plugin scripts)
* `res://addons/GodotPhase/godotphase.gdextension` (and `PhaseManagerSingleton.gd` / `PHASETypes.gd`)

When Xogot runs on visionOS, the engine automatically recognizes `GodotRealityKit` and `GodotPhase` extension descriptors and remaps them to Xogot's signed embedded frameworks. You do **not** need to ship precompiled visionOS binaries inside your project folder to iterate on Apple Vision Pro—and the same project remains compatible with desktop Godot and Xcode exports.
