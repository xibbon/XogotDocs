# Porting Games and Debugging on Apple Vision Pro

Walk through porting existing 2D, 3D, and VR Godot projects to visionOS, support multiple presentation modes from a single codebase, and debug smoothly on both the visionOS Simulator and Apple Vision Pro hardware.

## Choosing Your Target Mode

Before editing a single scene, pick the visionOS mode that fits your game's design:

* **Keep a 2D or traditional 3D game intact** → start with **Window**. You can ship a great floating-window game in minutes with almost no code changes.
* **Turn a 3D game into a tabletop diorama, board game, puzzle box, or spatial toy** → port to a **RealityKit Volume** (`GodotRealityKit`).
* **Put the player inside the world (first-person VR, room-scale AR, hand-tracked cockpit or arena)** → port to an **Immersive Space** (`XROrigin3D` + `XRCamera3D`).

You can also support more than one mode in the same project—for example, running in a flat Window on Mac/iPad and opening as a RealityKit Volume or Immersive Space on Apple Vision Pro.

## Walkthrough 1: Porting a 2D or 3D Game to a Window

This is the fastest path to get any existing Godot project running on Apple Vision Pro.

1. **Switch to the Metal renderer**: Open **Project Settings → Rendering → Renderer** and set **Rendering Method** to `mobile` (or `gl_compatibility` if appropriate) and ensure **Rendering Device → Driver (iOS)** is `metal`. If your project still uses Vulkan, Xogot's preflight check will offer to switch it automatically.
2. **Verify Launch Mode**: In **Xogot Settings → Running**, confirm **Launch Mode** is **Window** (the default on visionOS).
3. **Adapt input for gaze + pinch and gamepads**:
   * In a visionOS Window, looking at a button and pinching sends standard touch/mouse click events—most Godot `Control` UIs work out of the box.
   * Make buttons large enough to target comfortably with eye gaze (at least ~44–60 pt hit areas with generous spacing) and avoid hover-only tooltips that require a physical mouse cursor.
   * For action games, wire up **Input Map** actions for gamepads (`Joypad Button` / `Joypad Motion`) alongside keyboard bindings—many Apple Vision Pro players pair a PlayStation or Xbox controller.
4. **Handle window resizing gracefully**: Users can resize your floating window freely in space. Use `canvas_items` stretch mode with `expand` aspect in **Project Settings → Display → Window** so HUD margins adapt cleanly instead of stretching or cropping.

## Walkthrough 2: Porting a 3D Game to a RealityKit Volume

Follow these steps to turn an existing 3D Godot game into a bounded, interactive 3D tabletop volume floating in Shared Space.

### 1. Add `GodotRealityKit` and Configure `project.godot`

Add the `GodotRealityKit` addon under `res://addons/GodotRealityKit/` (with `GodotRealityKit.gdextension` and `plugin.cfg`) and enable the plugin in **Project Settings → Plugins**. Enabling it sets:

```ini
[application]
run/main_loop_type="RealitySceneTree"

[reality_kit]
presentation_style="Volumetric Window"
volume_default_size=Vector3(1.0, 0.7, 0.8)
volume_resizable=true
world_environment="Enable"
```

Choose `volume_default_size` in physical meters—`0.8` to `1.2` meters wide is comfortable for a tabletop game floating at arm's length.

### 2. Frame the Scene with `RealityVolumeCamera3D`

Add a `RealityVolumeCamera3D` (or keep a `Camera3D`) framed on your playable area. Scale your game board or diorama so that the active content fits inside the volume box—anything sticking past the volume bounds will be clipped by visionOS.

### 3. Tune Lighting, Shadows, and Passthrough

* Add a `RealityKitEnvironmentLightingConfiguration` node (with `world_environment = "Enable"`) so metallic and glossy materials reflect the player's actual room.
* For directional floor shadows, attach a `RealityKitDirectionalLightShadow3D` to your `DirectionalLight3D` with fixed orthographic bounds around your playfield so shadows stay crisp when the player moves or resizes the volume.
* Keep skyboxes out of your lighting assumptions—`GodotRealityKit` automatically skips skybox meshes in volumes so passthrough remains clear.

### 4. Convert Mouse Clicks to Spatial Pinch, Drag, and Hover

Attach `CollisionObject3D` nodes (`StaticBody3D` or `Area3D` with `input_ray_pickable = true`) to interactive pieces, add a `RealityHoverEffect3D` child for instant gaze highlight feedback, and listen for spatial events:

```gdscript
extends StaticBody3D

func _input_event(
	_camera: Node,
	event: InputEvent,
	_event_position: Vector3,
	_normal: Vector3,
	_shape_idx: int
) -> void:
	if event.get_class() == "InputEventSpatialTouch":
		if event.pressed:
			_on_pinch_begin()
		else:
			_on_pinch_end()
	elif event.get_class() == "InputEventSpatialDrag":
		_on_pinch_drag(event)
```

> Tip: Using `event.get_class() == "InputEventSpatialTouch"` lets the same script parse and run cleanly on Mac, iPad, Windows, and Linux where the `GodotRealityKit` extension classes are not present.

### 5. Replace 2D HUD Overlays and Preload Materials

* **2D HUDs**: Move scoreboards and menus off `CanvasLayer` onto `Label3D` nodes, diegetic 3D buttons, or a `SubViewport` texture mapped onto a 3D quad.
* **Cutaways**: Wrap geometry that should stay clipped inside a parent `Node3D` containing a `RealityClipping3D` child.
* **Material Hitches**: Call `GodotRealityKit.preload_material(...)` during scene startup for materials you spawn later at runtime.

### 6. Launch in a Volume

Tap **Play**. If **Launch Mode** is still **Window**, Xogot's **Launch Mode Check** sheet appears—choose **Change Launch Mode & Run in Volume** once, and every subsequent Play tap opens your RealityKit Volume directly.

## Walkthrough 3: Porting a 3D or VR Game to an Immersive Space

Use this path when you want full-room stereo 3D, full Godot Metal shader fidelity, or ARKit hand/plane/anchor tracking.

### 1. Replace `Camera3D` with `XROrigin3D` and `XRCamera3D`

1. Add an `XROrigin3D` node to your main scene at floor or play-space origin.
2. Add an `XRCamera3D` as a child of `XROrigin3D` and set **Current** to `true`.
3. Set the camera's **Near** plane to at least `0.1` meters (`0.1` is enforced by CompositorServices).
4. Disable `current` on any leftover flat `Camera3D` nodes (or let Xogot's **Immersive Camera Check** switch or insert the XR rig for you automatically).

### 2. Initialize the `VisionOS` XR Interface in `_ready()`

```gdscript
extends Node3D

var xr_interface: XRInterface

func _ready() -> void:
	xr_interface = XRServer.find_interface("VisionOS")
	if xr_interface and xr_interface.initialize():
		get_viewport().use_xr = true
		# For Mixed passthrough, make the viewport background transparent
		# and request alpha-blend mode:
		get_viewport().transparent_bg = true
		xr_interface.environment_blend_mode = XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND
```

* Use `XRInterface.XR_ENV_BLEND_MODE_ALPHA_BLEND` with `transparent_bg = true` for **Mixed** immersion (your objects float in the real room).
* Use `XRInterface.XR_ENV_BLEND_MODE_OPAQUE` with a `WorldEnvironment` sky for **Full** immersion (VR).
* While testing in Xogot, you can also toggle **Full Immersion** / **Show Surroundings** live from the toolbar, which updates `XRInterface.environment_blend_mode` immediately.

### 3. Comfort and Performance Guidelines for Stereo XR

* **Target real-world scale**: Keep doorways ~2.1 m tall, tables ~0.75 m high, and UI panels 1.5–2.5 m away from the viewer.
* **Avoid forced camera movement**: Never shake, roll, or rapidly accelerate `XROrigin3D`—use teleportation, snap turns, or stationary room-scale layouts to prevent motion sickness.
* **Budget for 90 Hz stereo**: Keep draw calls low, favor baked lighting and `StandardMaterial3D` over heavy multi-pass screen shaders, and test frame times on real hardware early.

## Supporting Multiple Modes in One Cross-Platform Project

Many teams want one Godot project that runs on desktop/iPad, in a visionOS Window, in a RealityKit Volume, or in an Immersive Space depending on how it is launched. Detect the active runtime at startup rather than hard-coding assumptions:

```gdscript
extends Node3D

enum RunMode { FLAT, REALITYKIT_VOLUME, VISIONOS_IMMERSIVE }

var active_mode: RunMode = RunMode.FLAT

func _ready() -> void:
	active_mode = _detect_run_mode()
	match active_mode:
		RunMode.REALITYKIT_VOLUME:
			_configure_for_volume()
		RunMode.VISIONOS_IMMERSIVE:
			_configure_for_immersive()
		RunMode.FLAT:
			_configure_for_flat_screen()

func _detect_run_mode() -> RunMode:
	if Engine.get_main_loop().get_class() == "RealitySceneTree":
		return RunMode.REALITYKIT_VOLUME

	if OS.get_name() == "visionOS":
		var xr := XRServer.find_interface("VisionOS")
		if xr and xr.initialize():
			get_viewport().use_xr = true
			return RunMode.VISIONOS_IMMERSIVE

	return RunMode.FLAT

func _configure_for_volume() -> void:
	# Hide flat 2D HUD, enable 3D spatial buttons & RealityKit lighting
	$FlatHUD.visible = false
	$SpatialUI3D.visible = true

func _configure_for_immersive() -> void:
	$FlatHUD.visible = false
	$XROrigin3D/XRCamera3D.current = true
	$FlatCamera3D.current = false

func _configure_for_flat_screen() -> void:
	$FlatHUD.visible = true
	$FlatCamera3D.current = true
```

This pattern also handles Xogot's **Run in Window (`SceneTree`)** fallback cleanly: when a `RealitySceneTree` project is launched with `--main-loop SceneTree`, `Engine.get_main_loop().get_class()` returns `"SceneTree"`, so your game automatically enables its flat camera and HUD.

## Debugging on Apple Vision Pro and the Simulator

### Breakpoints, Output, and Live Inspection

Because Xogot runs the game instance alongside the editor in a single app on visionOS:

* **GDScript breakpoints** work across **Game Tab**, **Window**, **RealityKit Volume**, and **Immersive Space**—including breakpoints triggered inside `_ready()` during startup. The game pauses on its executor thread while the Xogot editor stays responsive so you can inspect variables, step, continue, or stop.
* **Output & Debugger pads**: Set **Action on Play** in **Xogot Settings → Running** to **Open Output Panel** or **Open Debugger Panel** to watch `print()`, warnings, and stack traces automatically as your game runs.
* **Remote Scene Tree**: While the game is running, switch the Scene panel to **Remote** to inspect live node properties, transforms, and dynamically spawned nodes.

### Stopping and Replaying Cleanly

You can end a running session in any of three ways, and Xogot cleans up the engine instance so you can press **Play** again immediately:

* Tap **Stop** in the Xogot toolbar.
* Close the floating **Window** or **RealityKit Volume** using visionOS's bottom **×** close button.
* Press the **Digital Crown** to exit an **Immersive Space**.

### Simulator vs. Physical Apple Vision Pro

The visionOS Simulator on Mac is great for fast layout, UI, preflight, and script iteration, but several capabilities differ on physical hardware:

| Area | visionOS Simulator | Physical Apple Vision Pro |
| --- | --- | --- |
| **Stereo Rendering** | May use monoscopic `.dedicated` compositor layout | True dual-eye stereo `.layered` layout at up to 90 Hz |
| **Eye Tracking & Hand Tracking** | Simulated mouse/keyboard navigation (`WASD`, click/drag) | Real gaze-and-pinch, direct hand touch, and ARKit hand skeletons |
| **Passthrough & Room Lighting** | Synthetic living-room backdrop | Real camera passthrough with live environment lighting & mesh/plane detection |
| **PHASE Spatial Audio** | Basic Mac speaker/headphone output | Full personalized HRTF head-tracked binaural audio |
| **Performance Profile** | Runs on Mac CPU/GPU (can mask frame drops) | Real Apple Silicon thermal and dual-eye GPU limits—always profile on device |

## Troubleshooting Common Issues

| Symptom or Error | Cause | Fix |
| --- | --- | --- |
| `the host could not open the RealityKit volume` | A `RealitySceneTree` project was launched without a RealityKit volume host | Use **Change Launch Mode & Run in Volume** in the **Launch Mode Check** sheet, or run with `--main-loop SceneTree` for a flat Window |
| Blank or single-eye view in Immersive Space | Active camera is a regular `Camera3D` instead of `XRCamera3D`, or `get_viewport().use_xr` was not set to `true` | Let **Immersive Camera Check** add/switch to `XRCamera3D` under `XROrigin3D`, and call `xr_interface.initialize()` + `get_viewport().use_xr = true` |
| `WorldEnvironment` IBL or `RealityKitEnvironmentLightingConfiguration` has no effect in a Volume | `reality_kit/world_environment` defaults to `"Automatic"` (disabled in volumes) | Set `reality_kit/world_environment = "Enable"` in **Project Settings → Reality Kit** |
| `RealityClipping3D` does not clip meshes | `RealityClipping3D` was placed as a sibling of unrelated nodes instead of inside the target parent | Move the nodes you want clipped under a common parent `Node3D` and add `RealityClipping3D` as a direct child of that parent |
| Spatial pinch clicks don't fire in a Volume | Target lacks a `CollisionObject3D` with `input_ray_pickable = true`, or scene has no `RealityVolumeCamera3D` / `Camera3D` | Add a `CollisionShape3D` under `StaticBody3D`/`Area3D` with `input_ray_pickable = true`, and ensure the scene has a camera node |
| `Label3D` text shimmers in stereo | Font atlas has no mipmaps | Enable **Font Generate Mipmaps** in Project Settings |
| Vulkan renderer error on launch | Project uses Vulkan instead of Metal | Accept Xogot's **Vulkan → Metal** preflight fix or set `rendering_device/driver.ios="metal"` |
| `PHASE engine not initialized` in Output | `PhaseManagerSingleton` autoload is missing | Add `PhaseManagerSingleton="*res://addons/GodotPhase/PhaseManagerSingleton.gd"` to **Project Settings → Autoload** (see <doc:vision_spatial_audio_phase>) |
