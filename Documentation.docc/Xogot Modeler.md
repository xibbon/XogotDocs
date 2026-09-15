# Xogot Modeler

Create, edit, and style 3D meshes directly in the Xogot 3D editor.

## Overview

Xogot Modeler is a modeling tool in the 3D editor. Use it to block out levels,
make greybox environments, and build simple props without an external modeling
application.

You start with primitive shapes, such as cubes, planes, cylinders, stairs, and
arches. You can change the settings of each shape. You can then edit its
vertices, edges, and faces, paint materials and colors on its faces, and align
textures in the UV editor.

The result is an ordinary Godot `MeshInstance3D` node with an `ArrayMesh`. Your
game does not need a custom node, a plugin, or a runtime library. Generated
collision nodes are also ordinary Godot nodes.

To learn Modeler step by step, start with the tutorial
<doc:01.modeler_block_out>. The tutorials build a small courtyard level from start
to end.

For short procedures for common operations, see
<doc:Xogot-Modeler-HOW-TOs>.

@Image(source: "modeler-ref-overview.png",
       alt: "A courtyard level made with Xogot Modeler, with the Add Mesh palette and the viewport HUD visible")

## Concepts

Some terms appear in all of this guide:

- An **editable mesh** is a mesh that Modeler can edit. It keeps its faces,
  materials, colors, and UVs as editable data. Modeler compiles this data into the
  `ArrayMesh` that Godot renders.
- A **shape** is a mesh that Modeler generates from a **recipe**. A recipe keeps
  the size, the rotation, the pivot, and the shape settings, such as the number of
  steps in a stair. You can change a recipe after you create the shape.
- **Object mode** edits the complete mesh node. **Vertex**, **Edge**, and **Face**
  modes edit the elements of one mesh.
- A **tool** is modal. You start the tool, do several steps in the viewport, and
  then complete or cancel the tool. The Shape, Poly Shape, Bezier Shape, and Cut
  tools are modal.
- An **action** runs one command on the current selection. Examples are Extrude
  Faces, Bevel Edges, and Merge Objects.
- Faces that touch share **common vertices**. When you move a common vertex, all of
  the faces that use it move with it. This is also true across a UV seam.

## Add a mesh

The tutorial <doc:01.modeler_block_out> uses these tools to block out a
courtyard.

Open **Add Mesh** in the 3D toolbar. The palette shows the 12 shapes: Cube, Prism,
Sprite, Plane, Cylinder, Cone, Sphere, Pipe, Torus, Arch, Door, and Stairs.

@Image(source: "modeler-ref-add-mesh-palette.png",
       alt: "The Add Mesh palette in the 3D toolbar, showing the twelve shape tiles")

You can add a shape in two ways:

- **Draw it.** Tap a tile. Then draw the base and the height of the shape in the
  viewport. See [Draw a shape](#Draw-a-shape).
- **Place it immediately.** Option-tap or Alt-tap a tile. On a touch screen, touch
  and hold the tile. Xogot creates the shape at the focus point of the active 3D
  view. The focus point is the point that the camera orbits around. If no focus
  point is available, Xogot uses the grid point in front of the camera, then world
  origin. Snapping uses the current translation increment.

The palette marks the last shape that you used. Press **Option-Shift-K** to create
that shape immediately. Cube is the initial shape.

The palette also contains **Make Selected Mesh Editable**, **Options**, and
**Preferences**.

Each new shape uses the grid material and gets the collision that you set in the
Modeler preferences. Xogot selects the new mesh. One Undo removes the complete
shape.

### Shapes and settings

Each shape type remembers its last settings. A new shape starts with those
settings.

| Shape | Default size | Settings |
| --- | --- | --- |
| Cube | 1, 1, 1 | No extra settings. |
| Prism | 1, 1, 1 | No extra settings. A triangular prism. |
| Sprite | 1, 1, 1 | No extra settings. One flat quad. Uses width and depth only. |
| Plane | 1, 1, 1 | Width Cuts and Height Cuts, 0 to 16383. |
| Cylinder | 1, 1, 1 | Sides 3 to 64 (default 20), Height Cuts 0 to 255, Smooth. |
| Cone | 1, 1, 1 | Sides 3 to 64, Smooth. |
| Sphere | 1, 1, 1 | Subdivisions 1 to 5, Smooth. |
| Pipe | 1, 1, 1 | Thickness, Sides 3 to 64, Height Cuts 0 to 31, Smooth. |
| Torus | 1, 0.2, 1 | Rows and Columns 3 to 64, Tube Radius, Horizontal and Vertical Circumference 0° to 360°, Smooth. |
| Arch | 2, 1, 0.25 | Thickness, Sides 2 to 200, Arch Degrees 1° to 360°, End Caps, Smooth. |
| Door | 3, 3, 0.25 | Pediment Height, Side Width. |
| Stairs | 1, 2, 3 | Generate by Count or Height, Steps 1 to 256, Step Height, Equal Steps, Circumference −360° to 360°, Sides, Inner Radius. |

> Tip: Start a Sphere with one subdivision. Increase **Subdivisions** only when you
> need more detail. At 5 subdivisions a sphere has 10,242 vertices.

> Note: A nonzero **Circumference** makes curved stairs. A negative value turns the
> stairs to the left. Each new Stairs shape starts with **Inner Radius** set to 0.

## Draw a shape

When you tap a shape tile, the Shape tool starts. The viewport HUD shows the shape
name, the current step, the dimensions, the drawing plane, **Snap**, **Done**, and
**Cancel**.

@Image(source: "modeler-ref-draw-shape-hud.png",
       alt: "The viewport HUD while a Cube is drawn, showing the phase, dimensions, Snap, Done, and Cancel")

1. Move the pointer over the grid or over a mesh surface.
2. Press and drag to draw the base rectangle.
3. Release. A Plane or a Sprite is complete at this step.
4. Move the pointer up or down to set the height.
5. Click or tap, select **Done**, or press Return to complete the shape.

A click without a drag does not create a shape.

### Choose where the shape goes

A mesh surface under the pointer has priority. The base of the new shape stays on
that surface, and the height follows the surface normal.

If there is no surface under the pointer, Xogot uses a horizontal drawing plane.
The plane starts at world Y = 0. Before you start the base, press `]` to raise the
plane by 1 world unit, or `[` to lower it by 1 world unit. The HUD shows the Y value
of the plane. The value stays in effect until you close the editor.

On a touch screen, draw on an existing surface at the height that you need.

### Snap and repeat

- Hold Command (macOS) or Ctrl to snap the base and the height to the grid. You
  can also turn on **Snap** in the HUD.
- Hold Shift when you complete a shape to keep the tool active. The next shape
  uses the same settings.
- Press Delete, Backspace, or Command-Z/Ctrl-Z to remove the most recent point.
- Press Escape or select **Cancel** to cancel the shape. A change to the selection
  or to the scene also cancels it.

Camera gestures continue to work while the tool is active. Use a two-finger drag or
a pinch on a touch screen. With a mouse, use the middle or secondary button, or
hold Option or Alt and drag.

## Draw a Poly Shape

A Poly Shape is a mesh made from an outline that you draw. It can have holes.

@Image(source: "modeler-ref-poly-shape.png",
       alt: "A Poly Shape outline with a hole, before the height is set")

1. Start **Poly Shape**.
2. Click or tap to add the points of the outline.
3. Click or tap the first point, or press Return, to close the outline.
4. To add a hole, select **Add Hole**, add the points, and close the hole at its
   first point.
5. Move the pointer to set the height. Click or press Return to create the mesh.

The tool stays active, so you can draw another outline. Press Escape to stop.

To edit a Poly Shape, drag a point to move it. Click or tap an outline edge to add
a point. Drag the center handle to change the height. Press Delete or Backspace to
remove the selected point.

### Bezier Shape

Bezier Shape is experimental. It makes a tube along a curve. To use it, turn on
experimental features in the Modeler preferences.

Click or tap to add knots. Drag a knot or a tangent handle to change the curve.
Click or tap the curve to add a knot. Press Return to create the tube.

## Change a shape

The tutorial <doc:02.modeler_customize_shapes> changes recipes to add a gate,
an arch, stairs, and a fountain.

Select a shape to show the **Editable Mesh** inspector. The inspector shows the
shape recipe, the mesh counts, the vertex positions, the material slots, the UV2
status, the collision state, and the export and editable-data controls.

@Image(source: "modeler-ref-inspector.png",
       alt: "The Editable Mesh inspector for a Stairs shape, showing size, pivot, rotation, and stair settings")

When you change a recipe value, Xogot rebuilds the mesh in place. The node, its
name, its children, and its materials stay. Each change is one undo step.

- **Size** sets the dimensions of the generated mesh.
- **Pivot** can be **Center** or **First Vertex**. A pivot change does not move the
  visible mesh.
- **Rotation** rotates the generated points, not the node.
- **Type** changes the shape type. The size, pivot, and rotation stay. The shape
  loads the saved settings for the new type.

### Rebuild a shape after element edits

When you edit the vertices, edges, or faces of a shape, the recipe becomes stale.
Its controls become read-only. A selection change does not make the recipe stale.

To use the recipe again, select **Rebuild Shape**. Xogot asks for confirmation,
because a rebuild replaces your element edits. If you rebuild by mistake, use Undo
to restore the edits.

## Move the camera

These gestures use the default Xogot navigation scheme. You can change them in the
3D navigation settings.

| Input | Result |
| --- | --- |
| Drag the primary mouse button on empty space | Orbit the camera. |
| Drag the middle mouse button | Pan the camera. |
| Hold Option or Alt and drag the primary mouse button | Zoom the camera. |
| Drag the secondary mouse button | Use freelook in a perspective view. |
| Use the mouse wheel | Zoom the camera. |
| Scroll with two fingers on a trackpad | Pan the camera. |
| Hold Option or Alt and scroll with two fingers | Zoom the camera. |
| Pinch on a trackpad or a touch screen | Zoom the camera. |
| Drag with one finger on empty space | Orbit the camera. |
| Drag with two fingers on a touch screen | Pan the camera. |

## Select elements

The tutorial <doc:03.modeler_edit_elements> shows element selection on the
courtyard walls.

Select an editable mesh. Then use the mode control in the viewport HUD to select
**Vertex**, **Edge**, or **Face** mode. Press H to cycle through the modes. Press
Escape to go back to Object mode. The HUD shows the number of selected elements.

@Image(source: "modeler-ref-hud-modes.png",
       alt: "The viewport HUD with the Object, Vertex, Edge, and Face mode control and the selection count")

| Input | Result |
| --- | --- |
| Move the pointer over an element | Show the hover highlight. |
| Click or tap an element | Replace the selection. |
| Click or tap empty space | Clear the selection. |
| Shift-click an element | Add to the selection. You can change this to Subtract or Difference in the preferences. |
| Shift-drag across the viewport | Select with a rectangle. |
| Double-click in Vertex mode | Select all vertices. |
| Double-click an edge in Edge mode | Select its edge loop. |
| Double-click a face in Face mode | Select all faces. |
| Shift-double-click an edge or a face | Select its loop. |
| Command-double-click or Ctrl-double-click an edge or a face | Select its ring. |
| Command-Shift-click or Ctrl-Shift-click a face | Select the shortest path of faces from the first selected face. |
| Secondary-click or long-press selected geometry | Open the contextual action menu. |

Rectangle selection has two rules. **Intersect** includes each element that
touches the rectangle. **Complete** includes only the elements that are fully in
the rectangle.

Turn on **Select Hidden** to select elements through surfaces. Turn on **X-ray** to
show selected elements that are behind a surface.

### Select on a touch screen

A touch screen has no Shift key. Turn on **Add to Selection** in the HUD. The next
tap uses the Shift behavior, and a one-finger drag selects with a rectangle. The
control turns off after one use.

## Transform elements

The normal move, rotate, and scale handles change the selected vertices, edges, or
faces. A completed handle drag is one undo step.

@Image(source: "modeler-ref-transform-faces.gif",
       alt: "Selected faces moved with the move handle")

- Hold Command or Ctrl during a drag to snap to the grid increment.
- Hold Shift when you start a drag in Edge or Face mode to **extrude** the
  selection. The new elements then follow the handle.
- Hold Shift and drag a scale handle in Face mode to make an **inset**. The face is
  extruded at zero distance and then scaled.
- On a touch screen, turn on **Extrude on Next Drag** in the HUD. The next handle
  drag extrudes one time. The control then turns off.

The Modeler preferences set the handle orientation (Global, Local, or Normal), the
pivot (selection center, individual origins, or active element), and the snap
behavior.

To type exact values, use **Offset Elements**, or edit **Vertex Positions** in the
inspector. Vertex Positions accepts local or world coordinates.

## Actions

The tutorial <doc:03.modeler_edit_elements> uses Extrude Faces, Bevel Edges,
Delete Faces, Mirror Objects, and Merge Objects.

The HUD **Actions** menu lists the commands for the current mode. Its caption tells
you the mode: **Object Actions**, **Vertex Actions**, **Edge Actions**, or **Face
Actions**. A command that cannot run on the current selection or topology shows in
gray. To find the commands of a different mode, change the mode.

> Note: Some commands need a specific topology. For example, **Extrude Edges** is
> gray for the edges of a closed cube. To enable it, turn on **Allow Non-Manifold
> Actions** in the Modeler preferences.

@Image(source: "modeler-ref-actions-menu.png",
       alt: "The Face Actions menu, with commands grouped into Select, Build, Separate, Join, Normals, Move, and Object")

The menu groups commands by intent: **Select**, **Build**, **Separate**, **Join**,
**Normals**, **Move**, and **Object**.

To open the same commands at the geometry, secondary-click or long-press the
selected geometry. This contextual menu does not open after a camera drag with the
secondary button.

You can also find the mesh actions in the <doc:Command-Palette>.

### Adjust the result of an action

Some actions show their result and then open the **live bar** below the viewport:

- Collapse Vertices
- Weld Vertices
- Extrude Edges
- Bevel Edges
- Subdivide Edges
- Fill Hole
- Extrude Faces
- Offset Elements

@Image(source: "modeler-ref-live-bar.png",
       alt: "The live bar for Extrude Faces, with the distance value, Options, Undo, and Done")

Change the values in the live bar and look at the result. Select **Done** to keep
the result as one undo step. Select **Undo** or press Escape to restore the mesh and
the selection from before the action.

If you select another element, change mode, start a tool, or start another edit,
Xogot keeps the current result first.

Actions without values, such as Flip Face Normals, run immediately. Selection
actions also run immediately. You can undo them.

### Actions that ask first

**Merge Objects**, **Detach Faces**, **Duplicate Faces**, and **Mirror Objects**
can add or remove nodes in the scene. They show a sheet, and you must confirm them.
**Triangulate Faces** asks for confirmation when the mesh has 10,000 or more faces.

### Action reference

| Mode | Actions |
| --- | --- |
| Vertex | Connect Vertices, Collapse Vertices, Weld Vertices, Split Vertices, Fill Hole, Set Pivot to Selection, Offset Elements |
| Edge | Extrude Edges, Bevel Edges, Bridge Edges, Connect Edges, Insert Edge Loop, Subdivide Edges, Fill Hole, Select Loop, Select Ring, Select Hole |
| Face | Extrude Faces, Bevel, Subdivide Faces, Merge Faces, Detach Faces, Duplicate Faces, Delete Faces, Flip Face Normals, Flip Face Edge, Conform Face Normals, Triangulate Faces, Cut, Select by Material, Select by Vertex Color, Select Smoothing Group |
| All element modes | Select All, Deselect All, Invert Selection, Grow Selection, Shrink Selection |
| Object | Center Pivot, Freeze Transform, Flip Object Normals, Conform Object Normals, Subdivide Object, Triangulate Object, Merge Objects, Mirror Objects, Make Editable, Set Collider, Set Trigger, Boolean, UV Editor, Export Mesh |

An action that is not valid for the selection does not change the mesh.

## Options

**Options** sets the start values for actions, such as the extrude distance and the
bevel distance. Open it from the button beside **Paint**, or from the Options icon
beside **Add Mesh**. You do not have to select a node.

@Image(source: "modeler-ref-options-sheet.png",
       alt: "The Options sheet with the Bevel category selected")

Options has these categories: Selection & Handles, Snapping, Extrude, Bevel, Weld,
Subdivide, Fill Hole, Detach & Duplicate, Offset, Mirror, Grow Selection, Viewport
Feedback, Generated Data, and Appearance & Logging. You can search the categories.

Changes save immediately. The sheet has no Apply or Cancel button. **Reset to
Defaults** restores all the saved Modeler values.

## Cut a face

The tutorial <doc:03.modeler_edit_elements> cuts a doorway with this tool. For
a short procedure, see <doc:Xogot-Modeler-HOW-TOs>.

The Cut tool draws a new face inside one flat face.

1. Select one planar face.
2. Select **Cut** in the Face Actions menu.
3. Click or tap at least three points on the face.
4. Click or tap the first point, or press Return, to apply the cut.

Xogot adds edges to connect the new face to the original face. The new face is
selected. Invalid segments show in red. Press Delete or Backspace to remove the
last point. Press Escape to cancel.

@Image(source: "modeler-ref-cut-tool.png",
       alt: "The Cut tool with a door outline drawn on a wall face")

## Paint

The tutorial <doc:04.modeler_paint> paints the courtyard with these controls.

Select **Paint** in the HUD to open the Paint panel. It has three tabs: **Material**,
**Colour**, and **Shading**. The header shows what you will paint. If you did not
select faces, the paint controls are disabled.

One eyedropper samples the selection for the active tab. The overflow menu contains
**Load Palette**, **Save Palette**, **Reset Palette**, and **Add Material Slot**.

On iPhone, Paint opens as a sheet.

### Materials

@Image(source: "modeler-ref-paint-material.png",
       alt: "The Material tab of the Paint panel, with numbered material tiles")

- Click or tap a material tile to paint the selected faces. In Object mode, the
  material goes on all faces.
- Select an empty slot to choose a material for it.
- Press 1 through 9 to paint with the related slot.
- Press Shift+1 through Shift+9 to put the material of the selection into the
  related slot.
- Select **Browse** to apply a material without storing it in a slot.

To open the menu of a tile, long-press it on iPad or iPhone, or right-click it on
macOS. The menu can replace the material, set it from the selection, select its
faces, inspect it, rename it, or clear it.

Xogot includes the Grid, Checker, No Draw, Collider, and Trigger materials. New
shapes use the Grid material.

When you apply or remove a material or a texture, the UVs of the mesh do not
change. The same texture can look different on two meshes that have different UV
layouts. To change how a texture fits, use the [UV Editor](#UV-Editor).

**Save Palette** writes a `.tres` resource. The resource contains the materials,
the embedded textures, the labels, and the colors. You can load the palette in
other scenes and projects.

### Colors

@Image(source: "modeler-ref-paint-colour.png",
       alt: "The Colour tab of the Paint panel, with the current color and ten swatches")

The Colour tab shows the current color, its hexadecimal value, its alpha value,
and **Paint**. It has 10 swatches.

- Click or tap a swatch to paint with it.
- Select an empty swatch to store the current color in it.
- Long-press or right-click a swatch to replace, rename, or clear it, to make it
  the current color, or to select its faces.

In Object and Face modes, the color fills the face. In Vertex and Edge modes, the
color goes only on the selected vertices. This can make a gradient across a face.

> Important: Colors change the display only when the material uses vertex colors.

### Shading

@Image(source: "modeler-ref-paint-shading.png",
       alt: "The Shading tab of the Paint panel, with smoothing groups and Tint faces by group turned on")

Select **Smooth** to make the selected faces look smooth, or **Faceted** to show
hard edges.

Smooth faces are in **smoothing groups**. The tab lists the groups that the mesh
contains. You can create, rename, select, merge, or clear a group.

Turn on **Tint faces by group** to show each group in a different color. Turn on
**Show normals** to show the normals, and set their length.

## UV Editor

The tutorial <doc:05.modeler_uvs> aligns the courtyard textures with the UV
Editor.

UVs are 2D coordinates. They tell the renderer which part of a texture goes on each
part of a face. The UV Editor shows the UVs of the selected mesh on a flat canvas,
and lets you change them.

### Open the UV Editor

Select an editable mesh. Then do one of these steps:

- Select **UV Editor** in the Actions menu.
- Select **UV Editor** in the Editable Mesh inspector.
- Select the **Mesh UV** tab in the bottom panel.

The **Mesh UV** tab is available only while an editable mesh is selected. If you
select a node that is not an editable mesh, the panel tells you to select an
editable mesh.

@Image(source: "modeler-ref-uv-panel.png",
       alt: "The Mesh UV bottom panel with the toolbar, the UV canvas, the control groups, and the status bar")

The panel has four parts:

- The **toolbar** at the top.
- The **canvas**, which shows the UV layout.
- The **control groups**. In a wide panel, they are at the right of the canvas.
  In a narrow panel, such as on iPhone, they are below the canvas.
- The **status bar** at the bottom. It shows the number of selected elements, the
  color key for Auto and Manual faces, and messages.

The selection in the UV Editor and the selection in the viewport are the same. When
you select faces in one, the other shows the same faces.

### Toolbar

@Image(source: "modeler-ref-uv-toolbar.png",
       alt: "The UV Editor toolbar with the Select, Move, Rotate, and Scale tools, the Vertex, Edge, and Face modes, the Channel menu, Scope, Texture, and Center UV View")

| Control | Use |
| --- | --- |
| **Select**, **Move**, **Rotate**, **Scale** | Choose the tool for drags on the canvas. |
| **Vertex**, **Edge**, **Face** | Choose the UV selection mode. A mode change converts the selection. |
| **Channel** | Choose **UV**, **UV2**, **UV3**, or **UV4**. Only **UV** is editable. |
| **Scope** | Make the viewport handles edit UVs instead of geometry. Available only for the **UV** channel. |
| **Texture** | Show the texture of the selected material behind the UVs. If the material has no texture, the canvas shows a checker pattern. |
| **Center UV View** | Frame the selection on the canvas. With no selection, show the 0–1 texture area. Press 0. |

On a narrow panel, the toolbar scrolls horizontally.

### Move around the canvas

The square outline on the canvas is the 0–1 texture area. UVs outside this area
repeat the texture.

- Pinch to zoom.
- Drag with two fingers, or scroll on a trackpad, to pan.
- Click the canvas to give it focus. Then press + or = to zoom in, and - to zoom out.
- Press 0 or select **Center UV View** to frame the selection.

Auto faces show in blue. Manual faces show in orange. Selected edges and vertices
show in yellow.

### Texture orientation

The top of the canvas is the top of the texture. A texture that is upright on the
canvas is also upright on the mesh in the 3D viewport. Use **Flip V** or **Flip
Vertical** only when you want to turn the UVs upside down.

Different mesh types have different UV layouts:

- A Modeler **Cube** shows the complete texture on each of its six faces.
- A native Godot `BoxMesh` puts its six faces into one texture, in a grid of 3
  columns and 2 rows. When you use **Make Editable** on a `BoxMesh`, the result
  keeps this layout.

### Select UVs

With the **Select** tool:

- Click or tap an element to select it.
- Shift-click to add to the selection. On a touch screen, turn on **Add to
  Selection** in **Selection and Grid**.
- Drag on empty space to select with a rectangle. Turn on **Rectangle Must Contain
  Elements** to select only elements that are fully in the rectangle.
- Drag a selected element to move it.
- Click empty space to clear the selection.

The **Selection and Grid** group also has these buttons:

| Button | Result |
| --- | --- |
| **All** | Select all elements. |
| **None** | Clear the selection. |
| **Island** | Select all of the UVs that connect to the selection. |
| **Face** | Select the complete faces that the selection touches. |

> Note: Each face has its own UVs. Two faces that share a corner in the mesh do not
> share UVs unless their UVs are joined, for example with **Stitch** or **Weld**.

### Move, rotate, and scale UVs

Select the **Move**, **Rotate**, or **Scale** tool. Then drag anywhere on the canvas
to change the selected UVs. Each completed drag is one undo step. Press Escape to
cancel a drag.

@Image(source: "modeler-ref-uv-rotate-pivot.png",
       alt: "The Rotate tool on the UV canvas, with the pivot marker at the center of the selected faces")

The **Rotate** and **Scale** tools turn around a **pivot**. The pivot marker is a
cross in a circle. It starts at the center of the selection. Drag the marker to put
the pivot in a different position. **Center UV View** puts the pivot back at the
center of the selection.

To snap during a drag, hold Command (macOS) or Ctrl, or turn on **Snap to Grid** in
**Selection and Grid**:

- A move snaps to the **Grid Increment**. The default is 0.125. The range is 0.02 to 2.
- A rotation snaps to steps of 15°.
- A scale snaps to steps of 0.125.

Turn off **Show Grid** to hide the grid on the canvas.

To type exact values, use the **Transform** group. Set **Move U**, **Move V**,
**Rotation**, **Scale U**, and **Scale V**. Then select **Apply Transform**. The
rotation and scale use the pivot.

> Tip: In **Face** mode, a transform of Auto faces keeps the faces Auto. Xogot
> changes their offset, rotation, and tiling. In **Vertex** and **Edge** modes, a
> transform changes the faces to Manual.

### Auto and Manual UVs

Each face uses Auto UVs or Manual UVs.

- **Auto** UVs are calculated from the face and its settings. Xogot calculates them
  again after each geometry change, so the texture stays correct when you edit the
  mesh.
- **Manual** UVs keep the values that you set. They do not change when you edit the
  geometry.

Select faces, and then select **Convert to Manual** or **Convert to Auto**. If the
selection has both types, both buttons are available.

> Warning: **Convert to Auto** replaces the manual UVs of the selected faces. Use
> Undo to restore them.

Operations in the **Manual UVs** group, and drags in Vertex or Edge mode, change the
affected faces to Manual.

### Auto UVs

The **Auto UVs** group shows the settings of the first selected face. Change the
values, and then select **Apply Auto Settings**. The settings go on the selected
faces and on all faces in their texture groups. Those faces become Auto.

@Image(source: "modeler-ref-uv-auto-group.png",
       alt: "The Auto UVs group with Fill, Anchor, Offset, Rotation, Tiling, World Space, and the texture group controls")

| Setting | Result |
| --- | --- |
| **Fill** | **Tile** keeps the projected size: one world unit is one texture repeat. **Fit** scales the face uniformly into the texture area. **Stretch** scales each axis to fill the texture area. |
| **Anchor** | Aligns the face to one of nine points of the texture area, or **None**. |
| **Offset U**, **Offset V** | Moves the texture on the face. |
| **Rotation** | Turns the texture on the face, in degrees. |
| **Tiling U**, **Tiling V** | Sets the number of texture repeats. A larger value makes the texture smaller. |
| **World Space** | Projects from world positions. The texture stays in place when you move the object, and lines up across separate objects. |
| **Flip U**, **Flip V** | Mirrors the texture. |
| **Swap U and V** | Exchanges the two directions. |

**Tiling Presets** sets both tiling values to 0.5, 1, 2, 4, or 8.

**Reset UVs** gives the selected faces the default Auto settings, and removes them
from their texture groups.

#### Texture groups

Faces in a texture group are projected together. The texture continues across the
faces without seams. The faces in a group must be edge-adjacent.

| Control | Result |
| --- | --- |
| **New Group** | Put the selected faces in a new group. |
| **Texture Group** and **Join** | Type a group number, and then select **Join** to add the selected faces to that group. |
| **Break** | Remove the selected faces from their groups. |
| **Select Group** | Select all faces in the groups of the selection. |

When you make or join a group, all its faces use the Auto settings of its first face.

### Manual UVs

@Image(source: "modeler-ref-uv-manual-group.png",
       alt: "The Manual UVs group with the projection, edit, and weld buttons")

| Button | Result |
| --- | --- |
| **Planar** | Projects the selected faces onto one plane, from the average direction of the faces. |
| **Box** | Projects each selected face from the nearest of the X, Y, or Z axes. |
| **Spherical** | Projects the selected faces from their center, as on a globe. |
| **Collapse** | Moves the selected UVs to their center, and joins them. |
| **Split** | Separates the selected UVs, so that each face can move its UVs independently. |
| **Fit** | Scales the selection to fill the 0–1 texture area, and keeps its proportions. |
| **Flip Horizontal**, **Flip Vertical** | Mirrors the selection around its center. |
| **Stitch** | Select two edge-adjacent faces. The second face moves and turns to line up with the first face along their common edge, and the edge is joined. |
| **Copy** | Copies the UV layout of the first selected face. |
| **Paste** | Puts the copied layout on the selected faces. The faces must have the same number of vertices as the copied face. |
| **Weld Distance** and **Weld** | Joins selected UVs that are closer than the distance. The default is 0.01. |

On macOS, you can also use these clicks in **Face** mode, with the **Select** tool:

- Select a face. Then Command-click or Ctrl-click an adjacent face to stitch it to
  the selected face.
- Select a face. Then Command-Shift-click or Ctrl-Shift-click another face to copy
  the layout of the selected face to it.

### Edit UVs in the viewport

Turn on **Scope** in the UV Editor toolbar. The move, rotate, and scale handles in
the 3D viewport now change the selected UVs, not the geometry. The handles use the
UV pivot and the grid increment.

@Image(source: "modeler-ref-uv-scope.png",
       alt: "Scope turned on, with the viewport move handle shifting the texture on a wall")

Shift-drag does not extrude while **Scope** is on. Turn off **Scope** to edit the
geometry again.

### UV channels

| Channel | Use |
| --- | --- |
| **UV** | The main texture coordinates. You can edit this channel. |
| **UV2** | The lightmap coordinates. Xogot generates them. They are read-only. |
| **UV3**, **UV4** | Not used. |

When you select **UV2**, the **Lightmap UVs** group appears. It tells you if the
mesh has no lightmap UVs.

| Control | Use |
| --- | --- |
| **Auto Lightmap UVs** | Generate UV2 automatically. |
| **Warn When UV2 Is Missing** | Show a message when the mesh has no UV2. |
| **Hard Angle** | From 0° to 180°. The default is 88°. |
| **Pack Margin** | 0 or more. The default is 20. |
| **Angle Error**, **Area Error** | From 0 to 100. The defaults are 8 and 15. |
| **Apply**, **Reset** | Save the changed settings with the mesh, or restore the defaults. |
| **Rebuild Selected UV2** | Generate UV2 again. |

> Important: Xogot saves **Hard Angle**, **Pack Margin**, **Angle Error**, and
> **Area Error** with the mesh, but these settings do not change the generated UV2
> in this version. Xogot generates UV2 with the Godot lightmap unwrapper and its
> default settings.

### Save a UV image

The **UV Template** group writes a PNG image of the UV layout. Use the image as a
guide when you paint a texture in an image editor.

| Setting | Default |
| --- | --- |
| **Image Size** | 1024. You can choose 256, 512, 1024, 2048, 4096, or 8192. |
| **Hide Grid** | On |
| **Transparent Background** | On |
| **Line Color** | Black |
| **Background Color** | White. Used only when **Transparent Background** is off. |

Select **Save UV Image**, and choose a location. The default file name is
`UV-Template.png`.

### UV Editor messages

| Message | Cause |
| --- | --- |
| This UV channel is read-only. | You tried to edit **UV2**, **UV3**, or **UV4**. Select the **UV** channel. |
| Select two adjacent faces to stitch. | **Stitch** needs exactly two selected faces. |
| Faces in a texture group must be edge-adjacent. | A group can contain only faces that connect through edges. |
| UV layouts require faces with the same vertex count. | **Paste** works only on faces with the same number of corners as the copied face. |
| The selected normals have no common projection plane. | The selected faces point in opposite directions. Use **Box**, or select fewer faces. |
| A spherical projection cannot include its center. | A vertex is at the center of the selection. Use **Planar** or **Box**. |

## Collision and triggers

The tutorial <doc:06.modeler_collision> adds an invisible wall and a gate
trigger.

Xogot adds a collision node as a child of each new mesh. Set the collider type in
the Modeler preferences. Mesh and convex collision shapes follow geometry changes.
Box collision shapes change size only when automatic resize is on. Xogot does not
change collision nodes that you add yourself.

@Image(source: "modeler-ref-collision-tree.png",
       alt: "The Scene tree showing a Modeler mesh with its generated collision child")

- **Set Collider** makes a mesh an invisible wall. The mesh keeps its collision,
  shows a colored grid in the editor, and is hidden when the game runs.
- **Set Trigger** makes a trigger volume. Xogot adds an `Area3D` with a convex
  collision shape. The mesh is hidden when the game runs. The shortcut is
  Option-Shift-T.

### Lightmap UVs

Baked lighting needs a second UV channel (UV2). Select **Generate Lightmap UVs** in
the Editable Mesh inspector. This does not change your UVs or your geometry. UV2 is
read-only in the UV editor.

## Make a mesh editable

The tutorial <doc:07.modeler_convert_export> converts a SphereMesh and a CSG
shape.

**Make Editable** copies an existing mesh into a new editable mesh. The source asset
does not change. You can use it on imported meshes, on primitive meshes such as
`SphereMesh`, and on a CSG root.

@Image(source: "modeler-ref-make-editable.png",
       alt: "The Make Editable panel with vertex, edge, face, and triangle counts and the import options")

The panel shows the vertex, edge, face, and triangle counts of the result. It can
detect quads, keep materials, and keep imported smoothing. If you turn off imported
smoothing, set an angle from 0° to 180°.

The result keeps the UV layout of the source mesh, and the texture looks the same
after the conversion. The imported UVs become Manual UVs, because the source mesh
has no Auto UV settings. For example, a native `BoxMesh` keeps its texture grid of
3 columns and 2 rows. It does not change to the layout of a Modeler Cube.

> Tip: For a `SphereMesh`, decrease **Radial Segments** and **Rings** before you
> convert it. This gives a lighter mesh.

## Boolean operations

Boolean operations are experimental. Select two mesh objects, and then select
**Union**, **Intersection**, or **Subtraction**. Subtraction removes the second mesh
from the first mesh.

**Apply** creates a new editable mesh next to the first mesh. Both source objects
stay in the scene. Closed meshes give the best results.

## Export

The tutorial <doc:07.modeler_convert_export> exports the fountain meshes.

Select **Export Mesh** in the Object Actions menu. Choose a format and its options,
and then choose the destination file.

@Image(source: "modeler-ref-export-dialog.png",
       alt: "The export dialog with the OBJ format selected")

| Format | Result |
| --- | --- |
| OBJ | An OBJ file and an MTL file. Can copy albedo textures as PNG, keep quads and n-gons, and write vertex colors. |
| STL | Triangles in ASCII or binary form. No materials, UVs, or colors. |
| PLY | Faces, normals, UVs, and vertex colors. No separate material slots. |
| Native Mesh | A Godot `ArrayMesh` resource without editable data. **Replace Source Mesh** makes the node use the exported mesh. |
| glTF | A GLB file with the selected meshes and their materials. It does not export the complete scene. |

- **Include Children** exports the child meshes too.
- **Apply World Transforms** puts the node transform into the exported coordinates.
- **Combine Objects** writes one OBJ or PLY file for all of the selected meshes.

If a companion file already exists, Xogot asks before it replaces the file.

## Remove the editable data

The tutorial <doc:07.modeler_convert_export> strips a final mesh at the end of
the series.

**Strip Editable Mesh Data** in the Editable Mesh inspector removes the editable
data. The mesh, its materials, and its collision nodes stay. Use Undo to restore the
editable data.

A stripped mesh is a normal Godot mesh. The scene also opens in stock Godot.

## Preferences

The Modeler page in Editor Settings contains the selection, snapping, collider,
lightmap, export, appearance, overlay, and logging settings. To open it, select
**Preferences** in the Add Mesh palette. Action start values are in
[Options](#Options).

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| H | Cycle through Vertex, Edge, and Face modes. |
| Escape | Go back to Object mode, or cancel the active tool. |
| Command-E or Ctrl-E | Extrude. |
| Option-Shift-K | Create the last-used shape. |
| Option-Shift-T | Set Trigger. |
| `[` and `]` | Lower or raise the drawing plane while the Shape tool waits for the base. |
| Return | Complete the active tool. |
| Delete or Backspace | Remove the last point in a tool. |
| 1 through 9 | Paint with a material slot while Paint is open. |
| Shift+1 through Shift+9 | Put the selection's material into a slot while Paint is open. |
| Shift-drag a handle | Extrude while you transform. |
| Command-drag or Ctrl-drag | Snap to the grid. |
| 0 | Center the UV Editor canvas on the selection. |
| + or = / - | Zoom the UV Editor canvas in or out, while the canvas has focus. |
| Escape (UV Editor) | Cancel a drag on the UV canvas. |

You can change all of these shortcuts. Open the shortcut settings and search for
`modeler/`. You can also use all Modeler commands without a keyboard.

## Limits

- Element editing changes one mesh at a time. To weld vertices of two objects,
  merge the objects first.
- Automatic smoothing by angle is not available. Use smoothing groups.
- Boolean operations are experimental. They work best with closed meshes.
- Select Hidden does not detect shader vertex displacement or alpha cutouts.
- The UV2 unwrap settings are saved, but they do not change the generated UV2.
