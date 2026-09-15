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

## Shortcut summary

| Input | Result |
| --- | --- |
| Command-E or Ctrl-E | Extrude the selection in Edge or Face mode. |
| Shift-drag a move handle | Extrude the selection and move the new elements. |
| Shift-drag the uniform scale handle | Extrude at zero distance and make an inset. |

You can change the keyboard shortcuts. Open the shortcut settings and search for
`modeler/`.

## See also

- <doc:03.modeler_edit_elements>
- <doc:Xogot-Modeler>
