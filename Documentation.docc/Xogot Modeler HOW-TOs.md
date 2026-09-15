# Xogot Modeler HOW-TOs

Use these procedures to do common modeling operations in the 3D editor. For a
complete description of Modeler, see <doc:Xogot-Modeler>.

## Extrude faces

An extrusion makes a new face from the selected face and connects the two faces
with new side faces.

### Use the Extrude command

1. Select an editable mesh.
2. Enter **Face** mode.
3. Select one or more faces.
4. Press Command-E on macOS or Ctrl-E on other platforms.
5. Set the extrusion distance in the live bar.
6. Select **Done**.

To extrude edges, enter **Edge** mode and use the same shortcut.

> Important: For the edges of a closed cube, **Extrude Edges** stays in the
> Actions menu but appears gray. Turn on **Allow Non-Manifold Actions** to enable
> the action.

**Allow Non-Manifold Actions** applies to these operations:

- **Extrude Edges**
- Shift-drag edge extrusion
- **Bridge Edges**

Modeler also disables other topology-dependent actions when the operation is not
valid. These actions include **Bevel**, **Bridge**, **Connect**, **Insert Edge
Loop**, **Fill Hole**, **Merge Faces**, **Turn Edges**, and **Conform Normals**.

### Extrude with the Move tool

1. Select an editable mesh.
2. Enter **Face** mode.
3. Select one or more faces.
4. Select the **Move** tool.
5. Hold Shift before you start the drag.
6. Drag a move handle in the extrusion direction.

On a touch screen, turn on **Extrude on Next Drag** before you drag the move
handle. The control turns off after one drag.

## Inset faces

An inset makes a smaller face inside the selected face. You can then move the new
face to make a recess or a raised area.

1. Enter **Face** mode.
2. Select one or more faces.
3. Select the **Scale** tool.
4. Set the pivot to **Center**.
5. For a face that does not align with a global axis, set the orientation to
   **Normal**.
6. Hold Shift before you start the scale drag.
7. Drag the uniform scale handle inward.
8. Select the **Move** tool.
9. Move the new face to the required position.

During the scale drag, Shift does two operations:

- It extrudes the selected face at zero distance.
- It keeps the scale uniform on the two axes of the face.

To make a recess, move the new face inward along its normal. To make a raised
area, move it outward along its normal.

## Cut a shape into a face

The Cut tool draws a new face inside one flat face. Use it to add a door, a
window, or a panel to a wall. The tool is modal. You draw the outline, and then
you apply or cancel the cut.

### Draw the cut

1. Select an editable mesh.
2. Enter **Face** mode.
3. Select one flat face.
4. Open the **Face Actions** menu and select **Cut**.
5. Click or tap the corners of the shape on the face. Use at least three points.
6. To close the outline, click or tap the first point, or press Return.

@Image(source: "modeler-ref-cut-tool.png",
       alt: "The Cut tool with a door outline drawn on a wall face")

Xogot adds edges from the new face to the corners of the original face. The new
face is selected.

While you draw, the tool shows the outline on the face:

- A segment that is not valid shows in red. A segment is not valid when it
  crosses the outline, repeats a point, or leaves the face. Move the next point,
  or remove the last point.
- Press Delete or Backspace to remove the last point.
- Press Escape to cancel the tool. The face does not change.

The outline can touch the edges of the face. For a door, put two points on the
bottom edge of the wall.

> Note: The Cut tool works on one face. If you select more than one face, or a
> face that is not flat, **Cut** is not available in the Face Actions menu.

@Image(source: "modeler-howto-cut-result.png",
       alt: "A door-shaped face cut into a wall, selected, with edges from its corners to the corners of the wall face")

### Make an opening

The new face stays selected after the cut. To make a hole, remove it:

1. Open the **Face Actions** menu.
2. Select **Delete Faces**.

@Image(source: "modeler-howto-cut-opening.png",
       alt: "The wall with a door-shaped opening where the cut face was deleted")

### Make a recess or a panel

To push the new face into the wall, or to pull it out, extrude it:

1. Select the **Move** tool.
2. Hold Shift before you start the drag.
3. Drag the move handle along the normal of the face. Drag into the wall for a
   recess. Drag out of the wall for a raised panel.

You can also press Command-E on macOS or Ctrl-E on other platforms, and then set
the distance in the live bar.

@Image(source: "modeler-howto-cut-recess.png",
       alt: "The cut face pushed into the wall to make a recessed door panel")

## Shortcut summary

| Input | Result |
| --- | --- |
| Command-E or Ctrl-E | Extrude the selection in Edge or Face mode. |
| Shift-drag a move handle | Extrude the selection and move the new elements. |
| Shift-drag the uniform scale handle | Extrude at zero distance and make an inset. |
| Return, in the Cut tool | Close the outline and apply the cut. |
| Delete or Backspace, in the Cut tool | Remove the last point of the outline. |
| Escape, in the Cut tool | Cancel the cut. |

You can change the keyboard shortcuts. Open the shortcut settings and search for
`modeler/`.

## See also

- <doc:03.modeler_edit_elements>
- <doc:Xogot-Modeler>
