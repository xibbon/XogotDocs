# Spatial Audio with Apple PHASE (`GodotPhase`)

Add physically modeled 3D spatial audio, real-time geometry occlusion, and acoustic reverb to your visionOS games using Apple's PHASE framework through Xogot's embedded `GodotPhase` plugin.

## What Is Apple PHASE?

**PHASE** (Physical Audio Spatialization Engine) is Apple's spatial audio engine built into visionOS, iOS, macOS, and tvOS.

Godot already includes `AudioStreamPlayer3D` for distance attenuation and stereo panning. **Apple PHASE** goes much further for spatial computing:

* **Personalized HRTF binaural spatialization**: Uses Apple Vision Pro's head tracking and the user's personalized ear/head geometry so a sound genuinely feels like it comes from behind you, above your shoulder, or directly inside a floating tabletop volume.
* **Physical geometry occlusion (`PHASEOccluder3D`)**: Place 3D meshes between a sound source and the listener, and PHASE automatically muffles and attenuates audio as objects move behind walls, pillars, or props.
* **Acoustic reverb and early reflections**: Choose from 12 built-in acoustic spaces—from a small room to a cathedral—and blend direct sound, early reflections, and late reverb per sound source.
* **Native RealityKit Volume synchronization**: When paired with `GodotRealityKit`, `GodotPhase` automatically tracks the position, rotation, and scale of your floating RealityKit Volume in the player's room so sounds stay physically anchored to the objects inside the volume even when the user picks up and moves the volume.

## Setting Up `GodotPhase` in Your Project

Xogot embeds a signed copy of `GodotPhase` (for both the editor and repeated in-process game runs), so you do not need to compile or sign Apple frameworks yourself to test on Apple Vision Pro.

### 1. Add the Extension Descriptor and Scripts

Include the `GodotPhase` addon files in `res://addons/GodotPhase/`:

* `godotphase.gdextension` — standard GDExtension descriptor (`entry_symbol = "godotphase_library_init"`). Xogot automatically remaps it on visionOS to its signed embedded framework.
* `PhaseManagerSingleton.gd` — autoload script that owns and initializes the `PHASEManager` node.
* `PHASETypes.gd` — enum helpers for reverb presets and mixer types.

### 2. Register the `PhaseManagerSingleton` Autoload (Required)

Add `PhaseManagerSingleton` under **Project Settings → Globals → Autoload** (or directly in `project.godot`):

```ini
[autoload]
PhaseManagerSingleton="*res://addons/GodotPhase/PhaseManagerSingleton.gd"
```

> Important: Do **not** skip this autoload or rename it. `PhaseManagerSingleton` creates `PHASEManager` in `_ready()`, initializes the PHASE engine, ticks audio updates every frame, and exposes the exact root-level node name (`PhaseManagerSingleton`) that `GodotRealityKit` looks up to synchronize your volume's world transform. Without it, `PHASEAudioStreamPlayer3D` logs `"PHASE engine not initialized"` and produces no sound.

### 3. Add a Listener and Sound Sources

In your 3D scene:

1. Add a **`PHASEAudioListener3D`** node—attach it to your `XRCamera3D` (in an Immersive Space) or your `RealityVolumeCamera3D` / `Camera3D` (in a RealityKit Volume or Window).
2. Add one or more **`PHASEAudioStreamPlayer3D`** nodes positioned at the 3D locations of your sound emitters and assign an `AudioStream` (such as a `.wav` or `.ogg` file).
3. Optionally add **`PHASEOccluder3D`** nodes pointing at 3D wall or prop meshes to block sound physically.

```gdscript
extends Node3D

@onready var chime_player: Node3D = $ChimeOrb/PHASEAudioStreamPlayer3D

func _ready() -> void:
	if has_node("/root/PhaseManagerSingleton"):
		var phase := get_node("/root/PhaseManagerSingleton")
		# REVERB_PRESET_MEDIUM_ROOM = 2
		phase.set_scene_reverb_preset(2)

func play_chime() -> void:
	if chime_player and chime_player.has_method("play"):
		chime_player.play()
```

## Node and API Reference

### `PHASEManager` (via `PhaseManagerSingleton`)

Owns the Apple PHASE engine lifecycle and global room acoustics.

| Method / Property | Purpose |
| --- | --- |
| `initialize_engine() -> bool` | Starts the PHASE audio engine (called automatically by `PHASEManager` on startup). |
| `shutdown_engine()` | Stops and releases the PHASE engine cleanly on exit. |
| `is_engine_initialized() -> bool` | Returns `true` once the PHASE engine is ready to play sound events. |
| `set_scene_reverb_preset(preset)` / `get_scene_reverb_preset()` | Sets or reads the global room acoustics preset (`GodotPHASEReverbPreset`). |
| `phase/client_rendering_mode` *(Project Setting)* | Selects client vs. server PHASE rendering mode when tuning audio pipeline latency. |

#### Reverb Presets (`PHASETypes.GodotPHASEReverbPreset`)

| Value | Constant | Acoustic Character |
| --- | --- | --- |
| `0` | `REVERB_PRESET_NONE` | Dry (no synthetic room reverb) |
| `1` | `REVERB_PRESET_SMALL_ROOM` | Tight intimate room |
| `2` | `REVERB_PRESET_MEDIUM_ROOM` | Standard living room / office |
| `3` | `REVERB_PRESET_LARGE_ROOM` | Open studio or large parlor |
| `4` | `REVERB_PRESET_LARGE_ROOM_2` | Alternate large-room tail |
| `5` | `REVERB_PRESET_MEDIUM_CHAMBER` | Reflective stone/wood chamber |
| `6` | `REVERB_PRESET_LARGE_CHAMBER` | Larger reverberant chamber |
| `7` | `REVERB_PRESET_MEDIUM_HALL` | Concert / recital hall |
| `8` | `REVERB_PRESET_MEDIUM_HALL_2` | Alternate medium hall |
| `9` | `REVERB_PRESET_MEDIUM_HALL_3` | Brighter medium hall |
| `10` | `REVERB_PRESET_LARGE_HALL` | Symphonic hall |
| `11` | `REVERB_PRESET_CATHEDRAL` | Long cavernous decay |

### `PHASEAudioListener3D`

Represents the player's ears in 3D space. Keep exactly one active `PHASEAudioListener3D` in your scene, parented to your active camera (`XRCamera3D` or `RealityVolumeCamera3D`).

### `PHASEAudioStreamPlayer3D`

Plays a Godot `AudioStream` through PHASE's physical mixer pipeline.

| Property / Method | Description |
| --- | --- |
| `stream` | Godot `AudioStream` resource to play (mono streams spatialize most accurately for 3D point sources). |
| `mixer_type` | `SPATIAL` (`0`, full 3D binaural + occlusion + reverb), `CHANNEL` (`1`, non-spatial UI/music), or `AMBIENT` (`2`, orientation-aware ambient bed). |
| Direct / Early Reflections / Late Reverb Send Levels | Independently control how strongly a source feeds dry direct sound, early wall reflections, and diffuse late reverb. |
| `rolloff_factor` / `cull_distance` | Control how rapidly sound attenuates with distance and when distant sources stop consuming voice budget. |
| `max_polyphony` | Maximum number of simultaneous overlapping instances from this player. |
| `play()` / `stop()` / `is_playing()` | Standard playback control methods matching Godot's audio conventions. |

### `PHASEOccluder3D`

Turns any 3D mesh into an acoustic obstacle that blocks and filters sound between `PHASEAudioStreamPlayer3D` sources and `PHASEAudioListener3D`.

* Set `mesh_node_path` to the `MeshInstance3D` representing the wall, door, or prop.
* Keep occluder meshes simple—a low-poly proxy box or simplified collision mesh occludes sound far more cheaply than a 50,000-triangle decorative model.

## RealityKit Volumes vs. Immersive Spaces

* **In a RealityKit Volume (`RealitySceneTree`)**: Because the user can freely grab, reposition, rotate, and resize the volume anywhere in their room, `GodotRealityKit` automatically looks up `/root/PhaseManagerSingleton` and pushes the volume's live room transform into PHASE. Your audio sources stay locked to their visual 3D positions inside the hologram without extra code.
* **In an Immersive Space (`SceneTree` + `XRCamera3D`)**: Place `PHASEAudioListener3D` directly as a child of `XRCamera3D`. As the player walks around the room and turns their head, `XRCamera3D`'s transform drives PHASE's binaural listener in real time.

## Cross-Platform Fallback Pattern

Because `GodotPhase` is an Apple-platform extension, guard your scripts with `ClassDB.class_exists("PHASEAudioStreamPlayer3D")` (or create a small wrapper node) so the same project runs cleanly on Windows, Linux, Android, and Web using Godot's built-in `AudioStreamPlayer3D`:

```gdscript
extends Node3D

@export var sound_stream: AudioStream

var _player: Node3D

func _ready() -> void:
	if ClassDB.class_exists("PHASEAudioStreamPlayer3D") and has_node("/root/PhaseManagerSingleton"):
		_player = ClassDB.instantiate("PHASEAudioStreamPlayer3D")
		_player.set("stream", sound_stream)
	else:
		var fallback := AudioStreamPlayer3D.new()
		fallback.stream = sound_stream
		_player = fallback
	add_child(_player)

func trigger() -> void:
	if _player and _player.has_method("play"):
		_player.call("play")
```

## Troubleshooting `GodotPhase`

* **`PHASE engine not initialized` in Output**: Verify that `PhaseManagerSingleton` is registered under `[autoload]` in `project.godot` with the exact name `PhaseManagerSingleton`, and confirm that `godotphase.gdextension` is present in your project.
* **No 3D directionality in the Simulator**: The visionOS Simulator plays through your Mac's speakers or headphones without Vision Pro head tracking. Always validate binaural positioning, occlusion, and reverb balance on a physical Apple Vision Pro.
* **Sound does not spatialize sharply**: Prefer **mono** `.wav` / `.ogg` audio files for `SPATIAL` (`0`) point sources. Stereo files are better suited for `CHANNEL` (`1`) music or `AMBIENT` (`2`) soundscapes.
* **Stopping and replaying works cleanly**: Because Xogot manages a dedicated runtime copy of `GodotPhase` per game run and `PhaseManagerSingleton._exit_tree()` frees `PHASEManager`, pressing Stop (or closing a Volume) and pressing Play again reinitializes PHASE cleanly without stale audio state.
