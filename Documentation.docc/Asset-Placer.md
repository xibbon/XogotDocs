# Asset Browser and Asset Placer

Browse and organize project assets, then use Asset Placer to preview scenes and
meshes in the 3D viewport, place individual objects, paint many objects, generate
collision, override materials, or build along splines.

See Asset Placer in action in this short walkthrough, which demonstrates how to
browse a kit, place individual assets, and build up a 3D level with repeated
objects:
@Video(
    source: "https://customer-fku244tec8fwlbfi.cloudflarestream.com/7881b1f87eb265b29f6cc471301f1d1b/manifest/video.m3u8",
    caption: "Xogot Asset Placer: Faster 3D Level Building in Godot"
)

## What You Can Place

Asset Placer accepts placeable assets from the Asset Browser:

- Godot scenes (`.tscn`, `.scn`)
- 3D model files such as GLB, GLTF, OBJ, FBX, DAE, or Blend files
- Mesh resources (`.mesh`)
- Resource files that load as a mesh or a packed scene

Scripts, textures, materials, and other non-placeable resources stay visible in the browser when browsing, but selecting them will not start placement.

## Opening Asset Placer

1. Open a 3D scene.
2. Open the bottom panel and select the Asset Browser tab.
3. On iPad or Mac, use the `Browse` / `Place` segmented control in the browser header.
4. Select a placeable asset from the browser. The selected asset becomes armed for placement.
5. Switch to `Place` if you are still in `Browse`.

When placement is active, the bottom panel shows the armed asset name, placement mode buttons, and a `Configure` button. `Configure` opens the Asset Placer settings in the inspector on iPad and Mac. On iPhone, the settings open inline in the bottom panel.

Browse mode keeps the armed asset but hides the viewport preview and stops placement input. Use it when you want to keep searching without accidentally placing objects.

## Basic Placement

Once an asset is armed, move the pointer over the 3D viewport. A blue preview shows where the asset will be placed.

On Mac:

- Left-click places the asset at the preview position.
- Enable `Paint Mode (hold to place)`, then click and drag to place repeatedly.
- Right-click cancels placement.

On iPhone and iPad:

- Tap or press in the viewport to position the preview.
- Release to place when not painting.
- With `Paint Mode (hold to place)` enabled, placement starts on press and continues while dragging.

The placed node is added under the configured parent node, selected in the scene tree, and registered with undo/redo.

## Placement Modes

Use the mode buttons in the panel header or the inspector:

- `Free`: Places on a horizontal plane without snapping.
- `Grid`: Places on a horizontal grid and snaps X/Z to the grid size.
- `Surface`: Raycasts onto collision surfaces. When `Align to Surface Normal` is enabled, the asset rotates to match the hit surface.
- `Vertex`: Snaps the asset's bounding-box corners to nearby mesh bounding-box corners in screen space. Increase `Vertex Snap Px` if snapping feels too strict.
- `Spline`: Adds points to an active advanced spline instead of placing individual assets.

Grid mode can display a placement grid in the scene. The grid is only visible while Asset Placer is active, the bottom panel is open, and Place mode is selected.

## Configure Panel

The Configure panel is organized into action categories. On Mac and iPad these categories use the standard inspector rows. On iPhone they appear as compact controls inside the bottom panel.

### Place

Use Place settings for the placement target, grid, height, scroll behavior, and asset zoo.

- `Parent`: Choose the Node3D that will receive placed assets. Clear it to place under the scene root.
- `Unpack Scenes`: Places packed scenes as editable node trees instead of keeping them as scene instances.
- `Show Grid`: Shows or hides the grid in Grid mode.
- `Grid Size`: Sets the X/Z snap spacing for Grid mode.
- `Grid Height Y`: Moves the Grid mode placement plane up or down.
- `Align to Surface Normal`: Rotates placed assets to match surface normals in Surface mode.
- `Vertex Snap Px`: Controls how close a vertex must be on screen before Vertex mode snaps.
- `Height Offset`: Raises or lowers the placed asset from the hit point.
- `Height Snap`: Makes height nudges use the grid size instead of small increments.
- `Scroll Wheel`: Assigns mouse-wheel or trackpad-scroll input to scale, rotate, or adjust grid height. If your device does not have scroll input, use the visible controls or keyboard shortcuts instead.

The Asset Zoo controls create an `AssetZoo` node containing every visible placeable asset in the current browser filter. Use this to inspect a kit, compare scale, and decide which pieces belong in a level. Delete the `AssetZoo` node when you are done.

### Transform

Use Transform settings to control orientation, flips, scale, and randomization.

- `Rotation Snap`: Sets the step used by rotation buttons and keyboard shortcuts. Options include free, 90, 45, 15, and custom.
- `Rotation X/Y/Z`: Sets the base rotation.
- `Rotation Preset`: Applies common orientations such as upside down, lay forward, tilt, and 90/180 turns.
- `Flip X` / `Flip Z`: Mirrors the asset by applying negative scale on that axis.
- `Random Rotation Y`: Chooses a random Y rotation for each placement.
- `Random Tilt X/Z`: Adds random tilt for organic props.
- `Uniform Scale`: Uses one scale value for all axes. Disable it for per-axis scale.
- `Scale Preset`: Applies common scales.
- `Random Scale`: Multiplies each placement by a random scale in the selected range.

Random transform settings are applied when the asset is committed, so the preview shows the base transform while each placed instance can vary.

### Paint

Paint settings are for placing many instances quickly.

- `Paint Mode (hold to place)`: While held or dragged, places repeatedly.
- `Spacing`: Controls distance between repeated placements. In regular paint mode, effective spacing is `Grid Size * Spacing`.
- `Scatter`: Adds random X/Z offset around each paint point.
- `Scatter Radius`: Sets the scatter amount.
- `Random from Multi-Selection`: Randomly chooses from the multi-selected placeable assets in the browser instead of always using the armed asset.
- `Volumetric Brush`: Shows a brush ring and distributes placements inside it.
- `Brush Radius`: Sets brush size.
- `Density`: Controls how many attempts the brush makes per stroke.
- `Falloff`: Reduces placement probability toward the brush edge.
- `Mask Texture`: Uses a texture path, such as `res://mask.png`, to weight placement by image brightness.
- `MultiMesh Mode`: Paints into MultiMeshInstance3D nodes for dense repeated meshes.

Use regular Paint Mode for editable props. Use MultiMesh Mode for dense foliage, rocks, debris, or other repeated static detail where scene-tree node count matters.

MultiMesh is useful when you want to paint many copies of the same mesh without creating a separate scene-tree node for every copy. It is a good fit for grass, flowers, small rocks, pebbles, debris, and background dressing that may appear hundreds or thousands of times. The tradeoff is editability: normal placed assets are easier to select and adjust one by one, while MultiMesh instances are better for bulk visual detail and performance.

The Paint category also includes:

- `Clear MultiMesh`: Clears the current MultiMesh paint data.
- `Generate Collision`: Generates collision bodies for painted MultiMesh instances using the Collision category settings.

### Material

Material settings apply an optional material override as assets are placed.

- `Override Material`: Enables material override.
- `Apply Mode`: `Replace` sets the material override directly. `Next Pass` layers the material on top of existing surface materials.
- `Material`: Resource path for the material, such as `res://materials/highlight.tres`.

Material override also applies when creating MultiMesh instances.

### Collision

Collision settings can add physics collision at placement time.

- `Add Collision on Place`: Enables collision generation.
- `Body Type`: Choose StaticBody3D, RigidBody3D, CharacterBody3D, or Area3D.
- `Shape Type`: Choose trimesh, convex, box, sphere, or capsule.

Trimesh collision is not valid for RigidBody3D or CharacterBody3D. If you choose that combination, Asset Placer uses convex collision instead.

For many painted MultiMesh instances, leave `Add Collision on Place` off while painting, then use `Generate Collision` from the Paint category when the distribution is ready.

### Spline

Spline mode builds procedural paths for roads, fences, curb pieces, grass lines, prop rows, and similar level features.

Workflow:

1. Choose `Spline` mode.
2. Click `Create` to add an `AdvancedSpline` node, or select an existing one and click `Use Selected`.
3. Click in the 3D viewport to add spline points.
4. Use Godot's Path3D handles in the viewport to shape the curve.
5. Add one or more layers.
6. Tune layer settings.
7. Click `Bake to Nodes (Finalize)` when you want editable final nodes.

Spline actions:

- `Create`: Creates a new active spline.
- `Use Selected`: Uses the selected AdvancedSpline node.
- `Smooth`: Smooths all points.
- `Sharpen`: Sharpens all points.
- `Exit Mode`: Leaves Spline mode and returns to the previous placement mode.
- `Delete`: Deletes the active spline.
- `Drop to Ground`: Snaps the spline to collision below it.
- `Wrap Points`: Conforms points to terrain.
- `Subdivide`: Adds points and conforms them for smoother terrain following.

Layers:

- `Add Scatter`: Places repeated meshes along the curve.
- `Add Deform`: Deforms a mesh along the curve, useful for roads or strips.
- `Mesh(es)`: Comma-separated resource paths. For example: `res://fence.glb, res://post.glb`.
- `Offset`: Moves the layer relative to the curve.
- `Scale`: Scales the layer.
- `Spacing`: Distance between scatter placements.
- `Random Yaw`: Random yaw range for scatter layers.
- `Align to Curve`: Rotates scatter placements along the curve direction.
- `Use MultiMesh`: Uses MultiMesh output for scatter layers.
- `UV Tile`: Controls UV tiling for deform layers.
- `Flip Faces`: Flips deform layer faces.
- `Collision on Bake`: Adds collision when the spline is baked.

Procedural splines update as you edit them. Baking finalizes the result into ordinary nodes and removes the active spline from the scene.

## Shortcuts

These shortcuts work while Asset Placer is active, not paused, and the bottom Asset Browser panel is open in Place mode.

| Shortcut | Action |
| --- | --- |
| `Esc` | Cancel placement and clear the armed asset |
| Right-click | Cancel placement and clear the armed asset |
| Left-click | Place on Mac; start placement interaction on iPhone/iPad |
| Left-drag | Paint repeatedly when `Paint Mode (hold to place)` is enabled |
| `R` | Rotate around Y by the current rotation snap |
| `Shift-R` | Rotate around Y backward |
| `T` | Rotate around X by the current rotation snap |
| `Shift-T` | Rotate around X backward |
| `Y` | Rotate around Z by the current rotation snap |
| `Shift-Y` | Rotate around Z backward |
| `]` | Increase scale by 0.1 |
| `[` | Decrease scale by 0.1 |
| `Shift-]` | Increase scale by 0.025 |
| `Shift-[` | Decrease scale by 0.025 |
| `G` | Toggle Flip X |
| `B` | Toggle Flip Z |
| `K` | Reset rotation and flips |
| `Page Up` | Increase height offset |
| `Page Down` | Decrease height offset |
| `Home` | Raise the grid plane by one grid size |
| `End` | Lower the grid plane by one grid size |
| `Alt` + mouse wheel | Raise or lower the grid plane when Scroll Wheel is Off |
| Mouse wheel | Performs the selected Scroll Wheel action |

Height offset uses `Grid Size` as its step when `Height Snap` is enabled. Otherwise it uses small 0.1-unit steps.

Mouse-wheel shortcuts require a mouse wheel or a trackpad gesture that the system reports as wheel input. They are optional; every wheel action also has a matching setting, field, or keyboard shortcut.

## Practical Workflows

### Block Out a Level

1. Use Grid mode.
2. Set `Grid Size` to match your kit, such as 1, 2, or 4 units.
3. Keep `Show Grid` enabled.
4. Use `R`, `T`, `Y`, `[`, and `]` to orient and size pieces without leaving the viewport.
5. Set `Parent` to a level section node so placed pieces stay organized.

### Dress Terrain

1. Use Surface mode.
2. Enable `Align to Surface Normal` for rocks, decals, ground clutter, and foliage.
3. Enable Paint Mode.
4. Add random Y rotation, random tilt, random scale, and scatter.
5. Use Volumetric Brush for natural clusters.
6. Switch to MultiMesh Mode for dense repeated detail.

Surface mode depends on collision. If the preview does not stick to the visible surface, add or enable collision for the terrain or object you are painting onto.

### Build a Prop Kit Preview

1. Filter the Asset Browser to the folder or tags you want to inspect.
2. Open Configure, then Place.
3. Set Asset Zoo spacing and labels.
4. Click `Create Asset Zoo`.
5. Review the generated grid in the viewport.
6. Delete the `AssetZoo` node when finished.

### Make a Road or Fence

1. Choose Spline mode.
2. Create a spline and click points along the intended route.
3. Use `Drop to Ground`, `Wrap Points`, or `Subdivide` if the path should follow terrain.
4. Add a Deform layer for road meshes, or a Scatter layer for fence posts, lights, rocks, and similar repeated pieces.
5. Tune offsets, scale, spacing, and alignment.
6. Bake when the result is ready for hand editing.
