# Xogot Modeler Actions

What each Modeler action does, and when to use it.

## Overview

This document describes each command in the **Actions** menu of Xogot Modeler.
For each action it tells you what the action does, which modes show it, and the
jobs that it is good for.

The Actions menu shows the commands for the current mode. Its caption is
**Object Actions**, **Vertex Actions**, **Edge Actions**, or **Face Actions**.
The menu groups the commands by intent: **Select**, **Build**, **Separate**,
**Join**, **Normals**, **Move**, and **Object**. This document uses the same
groups.

A command that cannot run on the current selection shows in gray. Each entry
below tells you what the command needs. For the menu, the live bar, and the
Options sheet, see the Actions section of <doc:Xogot-Modeler>.

Shortcuts use Option on macOS and iPadOS. On a keyboard without an Option key,
use Alt. Command shortcuts use Ctrl on those keyboards.

### Quick reference

| Action | Modes | Shortcut | Use it to |
| --- | --- | --- | --- |
| [Select All Elements](#Select-All-Elements) | All | | Select the complete mesh. |
| [Clear Element Selection](#Clear-Element-Selection) | V E F | | Start again with nothing selected. |
| [Invert Selection](#Invert-Selection) | All | | Select everything except the current selection. |
| [Grow Selection](#Grow-Selection) | V E F | Option-G | Extend the selection by one ring of neighbors. |
| [Shrink Selection](#Shrink-Selection) | V E F | Option-Shift-G | Remove the outer ring of the selection. |
| [Select Loop](#Select-Loop) | E F | Option-L | Select a connected strip. |
| [Select Ring](#Select-Ring) | E F | Option-R | Select the parallel edges across a strip. |
| [Select Holes](#Select-Holes) | V E | | Find open boundaries in the mesh. |
| [Select by Material](#Select-by-Material) | F | | Select all faces with one material. |
| [Select by Color](#Select-by-Color) | V E F | | Select all elements with one vertex color. |
| [Select Smoothing Group](#Select-Smoothing-Group) | F | | Select all faces in one smoothing group. |
| [Extrude Faces](#Extrude-Faces) | F | Command-E | Pull a face out to make a solid part. |
| [Extrude Edges](#Extrude-Edges) | E | Command-E | Pull an open edge out to make a wall. |
| [Bevel Edges](#Bevel-Edges) | E F | | Round or chamfer a hard edge. |
| [Insert Edge Loop](#Insert-Edge-Loop) | E | Option-U | Add a line of edges across a strip of quads. |
| [Subdivide Edges](#Subdivide-Edges) | E | Option-S | Split edges into equal segments. |
| [Subdivide Faces](#Subdivide-Faces) | O F | Option-S | Add more faces to a flat area. |
| [Fill Hole](#Fill-Hole) | V E | | Close an opening. |
| [Triangulate Faces](#Triangulate-Faces) | O F | | Change quads and n-gons into triangles. |
| [Cut](#Cut) | F | | Draw a new face inside a flat face. |
| [Split Vertices](#Split-Vertices) | V | Option-X | Disconnect faces at a vertex. |
| [Delete Faces](#Delete-Faces) | F | Delete | Remove faces and leave an opening. |
| [Detach Faces](#Detach-Faces) | F | | Move faces to a new object or a separate part. |
| [Duplicate Faces](#Duplicate-Faces) | F | | Copy faces to a new object or a separate part. |
| [Connect Vertices](#Connect-Vertices) | V | Option-E | Add an edge between two vertices on one face. |
| [Connect Edges](#Connect-Edges) | E | Option-E | Add an edge between the midpoints of two edges. |
| [Collapse Vertices](#Collapse-Vertices) | V | Option-C | Merge vertices into one point. |
| [Weld Vertices](#Weld-Vertices) | V | Option-V | Merge vertices that are almost at the same position. |
| [Bridge Edges](#Bridge-Edges) | E | Option-B | Make a face between two open edges. |
| [Dissolve](#Dissolve) | V E F | | Remove edges or vertices without an opening. |
| [Merge Faces](#Merge-Faces) | F | | Join faces into one n-gon. |
| [Merge Objects](#Merge-Objects) | O | | Join two or more meshes into one node. |
| [Flip Faces](#Flip-Faces) | O F | Option-N | Turn faces to point the other way. |
| [Conform Normals](#Conform-Normals) | O F | | Make all faces point the same way. |
| [Turn Face Edges](#Turn-Face-Edges) | F | | Change the diagonal of a quad. |
| [Offset Elements](#Offset-Elements) | V E F | | Move the selection by an exact distance. |
| [Set Pivot to Selection](#Set-Pivot-to-Selection) | V E F | Command-J | Put the pivot at the selected elements. |
| [Center Pivot](#Center-Pivot) | O | | Put the pivot in the middle of the mesh. |
| [Freeze Transform](#Freeze-Transform) | O | | Bake the node transform into the vertices. |
| [Mirror Objects](#Mirror-Objects) | O | | Make a mirror copy of a mesh. |
| [Set Collider](#Set-Collider) | O | | Make an invisible wall. |
| [Set Trigger](#Set-Trigger) | O | Option-Shift-T | Make an invisible trigger volume. |
| [Generate Lightmap UVs](#Generate-Lightmap-UVs) | O | | Prepare a mesh for baked lighting. |
| [Boolean](#Boolean) | O | | Combine or subtract two meshes. |
| [UV Editor](#UV-Editor) | All | | Open the Mesh UV panel. |
| [Export Mesh](#Export-Mesh) | All | | Write the mesh to a file. |

In the **Modes** column, **O** is Object mode, **V** is Vertex mode, **E** is Edge
mode, and **F** is Face mode.

## Select

Selection actions change the selection only. They do not change the mesh. They
run immediately, and you can undo them. On a touch screen, these actions replace
many Shift-click and double-click gestures.

### Select All Elements

Selects every vertex, edge, or face of the mesh, in the current mode.

Use it to work on the complete mesh in an element mode.

- Move all vertices with the handle, and keep the node transform at identity.
- Paint one vertex color on the complete mesh in Vertex mode.
- Select all faces before you use **Select by Material** to see what the mesh
  contains.

### Clear Element Selection

Removes all elements from the selection.

Use it to start a new selection when a click on empty space is not practical.

- Clear the selection while **Select Hidden** is on and every click hits a face.
- Clear the selection on a touch screen when **Add to Selection** is on.

### Invert Selection

Selects all elements that are not selected, and clears the elements that are
selected.

Use it when the part that you do not want is easier to select than the part that
you want.

- Select the top face of a building, then invert to select all of its walls.
- Select the faces that have the correct material, then invert to find the
  faces that do not.
- Select one loop of faces around a pipe, then invert to select the rest.

### Grow Selection

Adds the elements that touch the current selection. Each use adds one more ring.

Use it to extend a selection outward without clicks on each element.

- Select one face in the middle of a floor, then grow two times to get a 5-by-5
  area.
- Select a seam of edges, then grow to get the faces on both sides of it.
- Select one vertex at the top of a sphere, then grow to select the cap.

**Restrict by Angle** in Options stops the growth at hard corners. With the
default angle of 15°, a selection grows across a flat floor but stops at the
walls. Turn it off to grow around corners. The action needs at least one
selected element.

### Shrink Selection

Removes the elements on the outer edge of the selection.

Use it to remove the border of a selection, or to undo one step of Grow
Selection.

- Select all faces of a floor, then shrink to leave a margin along the walls.
- After Grow Selection went one ring too far, shrink one time.
- Select a large area with a rectangle, then shrink to remove the faces that the
  rectangle touched by accident.

### Select Loop

Selects a continuous path through the mesh. It follows regular quad geometry
from end to end. It stops at triangles, n-gons, boundaries, and poles.

In Edge mode, it selects a chain of edges. In Face mode, it selects a strip of
faces.

Use it to select a connected strip.

- Select a row of faces around a cylinder.
- Select an edge path before you add an edge loop.
- Select a band before you extrude, scale, or bevel it.
- Select the edges along the top of a wall before you bevel them.

Select one or more edges or faces first. Double-click an edge, or Shift-double-click
an edge or a face, to do the same thing with the pointer.

### Select Ring

Selects the parallel edges across a strip of quads. From one edge, it crosses
each neighbor quad through its opposite edge. In Face mode, it selects the strip
of faces in the other direction from Select Loop.

Use it to select the rungs of a ladder instead of its rails.

- Select all the vertical edges around a cylinder, then scale them to change the
  height at one time.
- Select the edges that cross a corridor before you use **Connect Edges** to add
  a line down the middle.
- Select a ring before you use **Subdivide Edges** to add detail across a strip.

Select one or more edges or faces first. Command-double-click or
Ctrl-double-click an edge or a face to do the same thing with the pointer.

### Select Holes

Selects the edges or vertices around every open boundary that touches the
selection. With no selection, it selects all holes in the mesh and reports how
many it found.

Use it to find and prepare openings in a mesh.

- Clear the selection, then use Select Holes to find the gaps in an imported
  mesh.
- Select the hole around a deleted face before you use **Fill Hole** or
  **Extrude Edges**.
- Check that a mesh is closed before you use it as a Boolean input. A closed mesh
  reports zero holes.

Available in Vertex and Edge mode.

### Select by Material

Selects all faces of the mesh that have the same material as the selected faces.

Use it to work on all faces with one material at one time.

- Replace a material on every face that uses it.
- Select all faces with the placeholder grid material to find the parts that you
  did not paint yet.
- Select all "No Draw" faces to check that they are hidden in the correct places.

Select one or more faces first. The material tile menu in the Paint panel has
the same command.

### Select by Color

Selects all elements of the mesh that have the same vertex color as the selected
elements.

Use it to find all the parts that you painted with one color.

- Select one red face, then change all red faces to a different color.
- Select all faces in one color zone and put them in a smoothing group.
- Find the gradient vertices that you painted in Vertex mode.

Select one or more elements first. The color swatch menu in the Paint panel has
the same command.

### Select Smoothing Group

Selects all faces in the smoothing groups of the selected faces.

Use it to see or change a complete smooth surface.

- Select one face of a smooth cylinder to select all its curved sides.
- Check which faces share a group before you merge two groups.
- Select a group before you use **Faceted** to remove its smoothing.

Select one or more faces first. The Shading tab of the Paint panel has the same
command for each group in the list.

## Build

Build actions add geometry to the mesh.

### Extrude Faces

Pulls the selected faces out along their normals and builds side walls between
the old position and the new position.

Use it to make a solid part that grows out of a surface.

- Extrude the top face of a cube to make a tower.
- Extrude one face of a wall to make a pillar or a buttress.
- Extrude a strip of faces around a cylinder to make a rim.
- Extrude a face with a negative distance to make a recess or a doorway.

The live bar sets the distance and the method. **Face Normal** moves the faces
straight out. **Vertex Normal** moves the faces along the average normal at each
vertex, which keeps a curved surface curved. **Individual Faces** extrudes each
face on its own, with its own walls. Adjacent faces that you extrude together
share their walls unless you choose Individual Faces.

Hold Shift when you start a handle drag in Face mode to extrude and move in one
step. Hold Shift and drag a scale handle to make an inset. The action needs at
least one selected face.

### Extrude Edges

Pulls the selected edges out and builds a quad from each edge.

Use it to make a wall from an open edge.

- Extrude the edge of a plane to make a wall around a floor.
- Extrude the rim of an open cylinder to make it taller.
- Extrude the border of a hole to make a lip before you fill it.

The live bar sets the distance and **As Group**. As Group makes adjacent walls
share their vertices, so the walls stay connected at the corners. Turn it off
to make a separate wall per edge.

The edges must be open edges. An open edge belongs to one face only. On a closed
cube, every edge belongs to two faces, so the command is gray. Turn on **Allow
Non-Manifold Actions** in the Modeler preferences to extrude closed edges.

Hold Shift when you start a handle drag in Edge mode to extrude and move in one
step.

### Bevel Edges

Replaces each selected edge with a flat chamfer face. In Face mode, it bevels
each edge around the outside of the selected faces.

Use it to soften a hard edge or to catch light on a corner.

- Bevel the top edges of a wall or a step to soften the corner.
- Bevel the edges around a door frame to make a molding.
- Bevel all edges of a crate so that light hits the corners.
- Bevel the border of a raised panel in Face mode.

The live bar sets the distance. The distance cannot be longer than the shortest
edge that touches the selection.

The edges must be closed edges with faces on both sides, and the vertices at
their ends must be fully surrounded by faces. The command is gray for an edge on
an open border.

### Insert Edge Loop

Adds a new line of edges across a strip of quads. It goes through the middle of
each quad in the ring, and stops at triangles, n-gons, and open borders.

Use it to add a line of detail across a strip without a change to the outer
shape.

- Insert a loop around a cylinder, then scale it in to make a groove.
- Insert a loop across a wall, then move it to make a horizontal band.
- Insert a loop across a floor before you extrude one half of it.
- Insert a loop near a hard edge before you make the surface smooth.

Select one or more edges in the strip first. The strip must contain quads. On a
long strip, select one edge that crosses the strip. The loop follows the ring
of that edge.

### Subdivide Edges

Splits each selected edge into two or more equal segments.

Use it to add vertices along an edge, so that you can bend or move part of it.

- Split the top edge of a wall so that you can lower the middle.
- Split an edge into 3 segments before you connect the new vertices to make a
  window.
- Split the border of a plane before you extrude only part of it.

The live bar sets the number of subdivisions, from 1 to 32. Select one or more
edges first.

### Subdivide Faces

Adds a vertex at the middle of each edge of the selected faces, and connects the
new vertices through the center of the face. A quad becomes four quads.

Use it to add more faces to a flat area, so that you can add shape to it.

- Subdivide a floor so that you can raise part of it into a platform.
- Subdivide a wall so that you can push in one section for a window.
- Subdivide the faces of a cube to make a rounder shape before you use Smooth.
- Subdivide a plane before you paint a vertex color gradient across it.

In Object mode, it subdivides every face of the mesh. In Face mode, it subdivides
only the selected faces. Each use makes four times as many faces, so use it
carefully on a large mesh.

### Fill Hole

Makes faces that close each hole that the selection touches.

Use it to close an opening.

- Close the bottom of an open cylinder or a pipe.
- Close the opening that Delete Faces left.
- Close the gaps in an imported mesh before you use it as a Boolean input.

The live bar sets **Fill Entire Hole**. When it is on, the action fills each
hole completely. When it is off, the action fills only the part between the
selected elements.

Select one or more vertices or edges on the border of a hole first. Use
**Select Holes** to find and select the borders.

### Triangulate Faces

Replaces each selected quad or n-gon with triangle faces.

Use it when a tool or a game needs triangles.

- Triangulate a mesh before you export it in a format that needs triangles.
- Triangulate an n-gon that shows a crease, and then use **Turn Face Edges** to
  change the diagonal.
- Triangulate faces that you did not move as one plane, so that the render shows
  the same shape as the editor.

In Object mode, it triangulates every face of the mesh. In Face mode, it
triangulates only the selected faces. Xogot asks for confirmation when the mesh
has 10,000 or more faces. The new triangles are selected after the action.

### Cut

Draws a new face inside one flat face. Xogot adds edges to connect the new face
to the border of the old face. Cut is a modal tool. It waits for your points and
then completes.

Use it to draw an exact shape on a surface.

- Cut a door or a window outline in a wall, then extrude it inward or delete it.
- Cut a trim panel on a floor and paint it with a different material.
- Cut a hatch outline on top of a box.

Select one planar face first. Click or tap at least three points, then close the
outline. For the full procedure, see the Cut section of <doc:Xogot-Modeler>.
For a door procedure, see <doc:Xogot-Modeler-HOW-TOs>.

## Separate

Separate actions disconnect or remove geometry.

### Split Vertices

Gives each face that uses a selected vertex its own copy of the vertex. The
positions do not change.

Use it to disconnect faces at a corner, so that you can move one face without
the others.

- Split the vertices of one face, then move it away to open a flap.
- Split the corner vertices of a roof so that each roof face can move on its
  own.
- Split vertices to make a hard break in a smooth surface.

Select one or more vertices first. **Weld Vertices** reverses this action.

### Delete Faces

Removes the selected faces, and the vertices that only those faces used. The
result has an opening.

Use it to remove a surface that you do not need.

- Delete the bottom face of a building that sits on the ground.
- Delete a face that you cut, to make a doorway or a window.
- Delete the back faces of a set piece that the player never sees.
- Delete the top face of a box to make a container.

Select one or more faces first. Press Delete or Backspace to do the same thing.
To remove faces and keep the surface closed, see [Dissolve](#Dissolve).

### Detach Faces

Removes the selected faces from the mesh and puts them in a new object, or keeps
them in the same object as a separate part with its own vertices.

Use it to make one part of a mesh into its own thing.

- Detach the door faces from a wall to make a door that can open.
- Detach the top of a crate to make a lid.
- Detach a wall section to give it a different collision node.
- Detach faces to a separate part in the same object so that you can move them
  without an effect on their neighbors.

Select one or more faces first. The **Detach & Duplicate** category in Options
chooses a new object or the same object. The action shows a sheet and asks for
confirmation.

### Duplicate Faces

Copies the selected faces into a new object, or into the same object as a
separate part. The original faces stay.

Use it to make a copy of part of a surface.

- Duplicate a wall face to make a poster or a sign that sits in front of it.
- Duplicate a floor area to make a rug with a different material.
- Duplicate one face, then move it away and extrude it to start a new object.
- Duplicate the curved faces of a pillar to make a second pillar.

Select one or more faces first. The **Detach & Duplicate** category in Options
chooses a new object or the same object. The action shows a sheet and asks for
confirmation.

## Join

Join actions connect geometry or merge it into fewer elements.

### Connect Vertices

Adds an edge between selected vertices across the face that they share. With
two vertices, it cuts straight across the face. With more than two vertices, it
joins them through a new center vertex.

Use it to split a face along an exact line.

- Connect two opposite corners of a quad to make a diagonal edge.
- Connect two vertices that **Subdivide Edges** added, to make a window outline.
- Connect the corners of a floor to its center to make triangles that you can
  raise into a dome.

Select at least two vertices first. The vertices must be on one face, and they
must not already share an edge.

### Connect Edges

Adds an edge between the midpoints of the selected edges across the face that
they share.

Use it to split a face down the middle.

- Connect two opposite edges of a wall to add a vertical line for a corner.
- Connect the two ends of a corridor floor to add a line down its center.
- Select a ring of edges around a cylinder, then connect them to add a loop by
  hand.

Select at least two edges on the same face first. For a loop through a long strip
of quads, **Insert Edge Loop** is faster.

### Collapse Vertices

Merges all selected vertices into one vertex.

Use it to make a point from several vertices.

- Collapse the top vertices of a cube to make a pyramid.
- Collapse the vertices at the end of a pipe to close it in a point.
- Collapse two vertices that are very close, to clean up a mesh.

The live bar sets **Collapse to First Vertex**. When it is on, the vertices go
to the first selected vertex. When it is off, they go to the average position.
Select at least two vertices first.

### Weld Vertices

Merges the selected vertices that are closer to each other than a distance.
Vertices that are farther apart do not change.

Use it to close small gaps and reconnect faces.

- Weld the vertices where two walls meet after you moved them together.
- Weld the seam of an imported mesh that has duplicate vertices.
- Weld after **Merge Objects** to connect the vertices of the two meshes.
- Weld after **Split Vertices** to reconnect the faces.

The live bar sets the **Weld Distance**. The default is 0.01. Select at least two
vertices first. Select all vertices with a large distance to weld an imported
mesh in one step.

### Bridge Edges

Makes one quad face between two open edges.

Use it to connect two open borders.

- Bridge the ends of two walls to close the gap between them.
- Bridge one edge at a time to build a floor between two platforms.
- Bridge two edges of a hole to split it into two smaller holes.

Select exactly two edges first. The edges must be open edges with four different
end vertices. To bridge closed edges, turn on **Allow Non-Manifold Actions** in
the Modeler preferences.

### Dissolve

Removes the selected vertices, edges, or faces, and replaces the area with one
face that keeps the same outline. It does not make an opening, and it does not
move other vertices. In the menu, it shows as **Dissolve Vertices**, **Dissolve
Edges**, or **Dissolve Faces**.

Use it to simplify a flat area.

- Dissolve the diagonal edge of two triangles to make one quad.
- Dissolve the extra loops in a flat wall that you no longer need.
- Dissolve the vertices that **Subdivide Faces** added to a floor, to make it one
  face again.
- Dissolve the small faces on a flat surface before you export it.

The faces around the selection must be on one plane, must have the same
material and attributes, and must form one connected region without holes. When
the selection does not meet these rules, the menu does not show the command.

Dissolve is not Delete Faces. Delete Faces removes the surface and leaves an
opening. Dissolve keeps the surface.

### Merge Faces

Joins the selected faces into one n-gon. The edges between them go away. The
result keeps the material, UVs, and smoothing of the first face.

Use it to make one big face from several small ones.

- Merge the faces of a wall that you subdivided by mistake.
- Merge the faces that share one material, before you apply a texture that must
  not have seams.
- Merge two faces so that **Cut** can draw across both.

Select at least two connected faces first. Merge Faces can leave extra vertices
along the border of the new face. For faces on one plane, **Dissolve** gives a
cleaner result.

### Merge Objects

Joins two or more mesh nodes into the first selected node. The other nodes go
away. Material slots are combined.

Use it to make one mesh from several.

- Merge the walls, the floor, and the roof of a room into one mesh for export.
- Merge two objects before you weld their vertices, because element editing
  works on one mesh at a time.
- Merge a set of props into one mesh to reduce the number of draw calls.

Select at least two mesh objects first. The action shows a sheet and asks for
confirmation. If the result would have too many vertices, Xogot splits it into
more than one mesh.

## Normals

Normal actions change the direction that faces point. A face is visible only
from the side that its normal points to.

### Flip Faces

Reverses the direction of the selected faces.

Use it to fix a face that you can see through, or to turn a shape inside out.

- Flip the faces of a room so that the walls are visible from inside.
- Flip one face that shows black or invisible from the front.
- Flip a sphere to make a skybox that you view from inside.

In Object mode, it flips every face of the mesh. In Face mode, it flips only the
selected faces.

### Conform Normals

Makes all the selected faces point the same way as most of the selection.

Use it to fix a mesh where some faces point the wrong way.

- Conform the normals of an imported mesh that has holes when you look at it.
- Conform after a Boolean operation, to fix faces that the operation reversed.
- Conform after you mirrored part of a mesh by hand.

In Object mode, it conforms every connected shell of the mesh. In Face mode, it
conforms only the selected faces. If most faces point the wrong way, use **Flip
Faces** after Conform Normals.

### Turn Face Edges

Changes the diagonal of a quad that is made from two triangles. The quad keeps
its four corners.

Use it to fix a crease in a quad that is not flat.

- Turn the edge of a quad in a terrain, so that the crease follows the slope.
- Turn the edge of a bent quad on a roof, so that the ridge goes the correct
  way.
- Turn the diagonal after **Triangulate Faces** to change the shape of a corner.

Select one or more faces first. Each face must be a quad that has two triangles.

## Move

### Offset Elements

Moves the selected elements by an exact vector that you type.

Use it to move geometry by an exact distance, without the handle.

- Raise a floor by exactly 0.1 units to make a step.
- Move a window face 2 units along the wall.
- Move the top vertices of a wall by the same amount on all walls.

The live bar sets the X, Y, and Z distances, and the coordinate space. **World**
uses the scene axes. **Local** uses the node axes. Select one or more elements
first.

To set the exact position of a vertex instead of a distance, edit **Vertex
Positions** in the Editable Mesh inspector.

## Object

Object actions change the node, the pivot, or the collision. Most of them run in
Object mode.

### Set Pivot to Selection

Moves the pivot of the node to the center of the selected elements. The mesh
does not move in the scene.

Use it to put the pivot where the object turns or connects.

- Select the bottom face of a lamp post, then set the pivot there, so that the
  post stands on the ground when you place it.
- Select the hinge edge of a door, then set the pivot there, so that the door
  rotates around its hinge.
- Select the top vertices of a pendulum, then set the pivot there.

Select one or more elements in Vertex, Edge, or Face mode first.

### Center Pivot

Moves the pivot of the node to the center of the mesh bounds. The mesh does not
move in the scene.

Use it to put the pivot back in the middle after you edited the mesh.

- Center the pivot after you extruded a shape far to one side.
- Center the pivot after **Merge Objects**, so that the merged mesh rotates
  around its own center.
- Center the pivot after **Detach Faces**, because the new object starts with the
  pivot of its source.

### Freeze Transform

Bakes the position, rotation, and scale of the node into the vertices, and
resets the node transform to identity.

Use it to make the node transform clean, without a change to what you see.

- Freeze a wall that you scaled with the node handle, so that a collision shape
  and a texture use the real size.
- Freeze a rotated mesh before you use **World Space** auto UVs, so that the
  texture lines up with the scene grid.
- Freeze before you export, so that the file has the same coordinates as the
  scene.

### Mirror Objects

Makes a mirror image of the mesh across one or more axes. The face directions
stay correct.

Use it to make a symmetric copy.

- Mirror the left half of a symmetric room to make the right half.
- Mirror a stair to make the stair for the other side of a hall.
- Mirror a one-sided sign to make it readable from behind.

The **Mirror** category in Options sets the axes, and whether the result is a
new node. Turn on **Duplicate** to keep the original. The action shows a sheet
and asks for confirmation.

### Set Collider

Makes the mesh an invisible wall. The mesh keeps its collision, shows a colored
grid in the editor, and is hidden when the game runs.

Use it to block the player without a visible surface.

- Put an invisible wall at the edge of a cliff.
- Put a simple collider box inside a complex decorative mesh.
- Block a doorway that the player must not enter yet.

For more information, see the Collision and triggers section of
<doc:Xogot-Modeler>.

### Set Trigger

Makes the mesh a trigger volume. Xogot adds an `Area3D` child with a convex
collision shape. The mesh is hidden when the game runs.

Use it to detect when the player enters an area.

- Put a trigger in a doorway to start a cut scene.
- Put a trigger in a corridor to spawn enemies.
- Put a trigger at the end of a level to load the next one.

For a procedure, see <doc:06.modeler_collision>.

### Generate Lightmap UVs

Makes the second UV channel (UV2) that baked lighting needs. It does not change
your UVs or your geometry.

Use it to prepare a mesh for a light bake.

- Generate lightmap UVs for all the static walls and floors of a level.
- Generate them again after you changed the geometry of a mesh.

UV2 is read-only in the UV Editor. The Editable Mesh inspector shows if a mesh
has UV2.

### Boolean

Combines two meshes with **Union**, **Intersection**, or **Subtraction**.
Subtraction removes the second mesh from the first. The result is a new editable
mesh. Both source meshes stay.

Use it to carve one shape with another. Boolean operations are experimental.

- Subtract a cylinder from a wall to make a round window.
- Subtract a box from a floor to make a pit.
- Union two overlapping boxes into one mesh without an internal wall.
- Intersect a sphere and a cube to make a rounded cube.

Select two mesh objects first. Closed meshes give the best results.

### UV Editor

Opens the **Mesh UV** panel for the selected mesh.

Use it when a texture does not fit a face the way you want.

- Rotate the texture on one wall.
- Make a texture continue across two faces without a seam.
- Scale the texture on a floor to change the tile size.

For the complete panel, see the UV Editor section of <doc:Xogot-Modeler>. For a
procedure, see <doc:05.modeler_uvs>.

### Export Mesh

Writes the selected meshes to a file in OBJ, STL, PLY, glTF, or native Godot
mesh format.

Use it to take a mesh out of Xogot.

- Export an OBJ to finish a prop in an external modeling application.
- Export an STL to print a model.
- Export a native mesh to use in a scene without editable data.
- Export a GLB to share a set of meshes with their materials.

For the formats and their options, see the Export section of
<doc:Xogot-Modeler>. For a procedure, see <doc:07.modeler_convert_export>.

## See also

- <doc:Xogot-Modeler>
- <doc:Xogot-Modeler-HOW-TOs>
- <doc:03.modeler_edit_elements>
