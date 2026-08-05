# Input Map

Give your game named actions, connect those actions to keys, mouse buttons and
gamepads, and reuse those maps across your projects.

## Overview

Godot games do not read keys directly.  They read *actions*.  An action is a
name, like `jump` or `move_left`, and a list of *events* that trigger it.  An
event is a key, a mouse button, a joypad button or a joypad axis direction.

Your game code asks for the action:

```
if Input.is_action_pressed("move_right"):
    position.x += speed * delta
```

Because the code uses the name, you can change the keys later, support a gamepad
and a keyboard at the same time, and let players remap their controls.  The
place where you create those actions is the **Input Map**.

Xogot keeps the same `project.godot` format as Godot, so an input map that you
make in Xogot works in Godot, and an input map that you make in Godot works in
Xogot.  The user interface is different.  Xogot adds:

* A **Templates** library with ready-to-use input maps for common game genres.
* A command to **save your current input map as a template**.
* A command to **import the input map of another project**.
* A reorganized event picker that shows keys, gamepad glyphs and axis
  directions in a readable form.

For the runtime side of actions, see <doc:input_examples> and <doc:inputevent>.

## Open the Input Map

On iPad and iPhone:

1. Tap the **...** button in the top right corner of the editor.
2. Choose **Settings**.
3. Tap **General** in the drop-down list at the top of the dialog.
4. Choose **Input Map**.

On Mac, choose **Project > Project Settings** in the menu bar, or press
Shift-Command-Comma, then select the **Input Map** tab.

@Image(source: "InputMapOverview.png",
            alt: "The Input Map pane with the Actions and Templates segmented
            control at the top of the sidebar, the action list below it, and the
            selected action on the right")

## The two modes: Actions and Templates

A segmented control at the top of the sidebar selects what the pane shows:

* **Actions** shows the actions of the project that you have open.  This is
  where you do the daily work.
* **Templates** shows a library of reusable input maps.  The library is global.
  It is not part of your project, and every project sees the same library.

A filter field is below the segmented control.  It uses a fuzzy search, so
`mvl` finds `move_left`.  Each mode has its own filter.

## Work with actions

### The action list

The sidebar shows the actions of the project.  New projects show no actions,
because the actions that Godot supplies are hidden.

Turn on **Show Built-in** at the bottom of the sidebar to also see the built-in
`ui_*` actions, such as `ui_accept` and `ui_left`.  Built-in actions are
read-only.  You can look at their events, but you cannot rename or delete them.

@Image(source: "InputMapActionList.png",
            alt: "The Actions list with the filter field at the top and the Show Built-in toggle at the bottom")

### Create an action

1. Select the **Actions** mode.
2. Tap the **+** button in the top right corner of the sidebar.
3. Type the name of the action.  Use a short lowercase name with underscores,
   for example `move_left`.  This is the name that your code uses.
4. Tap **Add**.

Xogot refuses names that the project already uses.

### Delete an action

On iPad and iPhone, swipe the action to the left, or tap **Edit** and then the
delete button.  On Mac, select the action and press the Delete key.

You can only delete the actions that you made.  Built-in actions stay.

### Edit an action

Select an action to open its detail view.

<!-- @Image(source: "InputMapActionDetail.png",
            alt: "The action detail view showing the Action Name field with its copy button, the Deadzone stepper, and the list of Action Events") -->

The detail view has three parts:

* **Action Name** — rename the action here.  The button at the right of the
  field copies the name to the clipboard, so that you can paste it into your
  script.  The field is disabled for built-in actions.
* **Deadzone** — the amount of movement that Xogot ignores before the action
  starts.  This applies to analog inputs, such as thumbsticks and triggers.  The
  range is 0.00 to 1.00, and the default is 0.50.  Use a smaller value for more
  sensitive controls, and a larger value if a worn thumbstick triggers the
  action when the player does not touch it.
* **Action Events** — the list of events that trigger the action.

### Add an event to an action

1. Tap the **+** button above the **Action Events** list.
2. Select the type of event with the segmented control at the top of the sheet:
   **Keyboard Keys**, **Mouse Buttons**, **Joypad Buttons** or **Joypad Axes**.
3. Find the event.  The list is grouped, and the filter field at the top does a
   fuzzy search.
4. Set the extra options at the bottom of the sheet.  See below.
5. Tap **Create**.

To change an event, tap the pencil button next to it on iPad and iPhone, or
double-click the row on Mac.  To remove an event, swipe it away on iPad and
iPhone, or select it and press the Delete key on Mac.

@Image(source: "InputMapNewEvent.png",
            alt: "The New Input Event sheet with the event type segmented control, the filtered list of events, and the modifier and keyboard type options at the bottom")

### The event picker

Xogot shows each kind of event in a form that you can read quickly:

* **Keyboard Keys** show a key cap with the glyph of the key, and the name of
  the key next to it.  Arrow keys, modifiers and media keys use symbols.
* **Joypad Buttons** show the glyph of each console next to the name of the
  button.  The logical button `A`, for example, shows the Nintendo B, the Sony
  Cross and the Xbox A.  This tells you what the player sees on the controller.
* **Joypad Axes** show the direction first, for example **Left** or **Left
  Trigger**, with the raw Godot alias below it.  An arrow shows the direction,
  and a chip at the right shows the engine code, such as `Axis 4 +`.  A red sign
  is the negative direction and a blue sign is the positive direction.
* **Mouse Buttons** show the buttons and the wheel directions.

@Image(source: "InputMapJoypadPicker.png",
            alt: "The Joypad Buttons picker showing the Nintendo, Sony and Xbox glyphs for each logical button")

### Extra options for an event

The area at the bottom of the sheet changes with the type of the event:

* **Modifiers** (keyboard and mouse) — turn on **Shift**, **Ctrl**, **Option**
  or **Command**.  The action then needs the modifier and the key together.
* **Keyboard** (keyboard only) — selects how Godot identifies the key:
  * *Physical Keycode* uses the position of the key on a US QWERTY keyboard.
    Use this for movement keys such as WASD, so that the keys stay in the same
    place on other keyboard layouts.
  * *Keycode* uses the Latin equivalent of the key.
  * *Key Label* uses the printed label, and ignores the case.
* **Device** (mouse and joypad) — limits the event to one device, or accepts
  **All Devices**.  Keep **All Devices** unless you write a local multiplayer
  game that must tell player 1 and player 2 apart.

## Work with templates

A template is a named snapshot of a set of actions and their events.  Xogot
keeps the templates outside of your project, in the application support folder
of the app.  Every project sees the same library, so a template that you make in
one project is available in all of the others.

Select the **Templates** mode to see the library.

@Image(source: "InputMapTemplates.png",
            alt: "The Templates mode showing the My Templates section and the built-in Gameplay, Godot Built-In UI and Unbound Default UI Actions categories")

The list has these sections:

* **My Templates** — the templates that you saved, duplicated or imported.
* **Gameplay** — built-in templates for common game genres.
* **Godot Built-In UI** — built-in templates for menu navigation and text
  editing.
* **Unbound Default UI Actions** — the default `ui_*` actions that Godot
  declares but does not bind.

Templates that Xogot supplies have a **Built-in** badge.  They are read-only.
Templates that you made with **Import from Project** have an **Imported** badge.

### The built-in templates

| Category | Template | What it gives you |
| --- | --- | --- |
| Gameplay | 2D Platformer | Side-scrolling movement with jump, attack, interact, dash, crouch and pause. |
| Gameplay | Top-Down Action RPG | Four-way movement with attack, roll, interact, inventory and pause. |
| Gameplay | Mouse Point and Click | Mouse-first interactions for board games, puzzle games, RPG screens and editor-like tools. |
| Gameplay | Twin-Stick / Space Shooter | Keyboard and left-stick movement with right-stick aiming, firing, map and dock actions. |
| Gameplay | First-Person / 3D Character | Movement, sprint, crouch, interact, fire, aim and pause. |
| Gameplay | Ground Vehicle | Steering, acceleration, braking, handbrake, jump and pause. |
| Gameplay | Flight / Spacecraft | Analog-friendly yaw, pitch, roll, afterburn, fire, weapon switching, camera and pause. |
| Gameplay | Strategy / RTS | Camera movement, map rotation, a selection modifier, unit groups and menu toggles. |
| Gameplay | Puzzle / Block Drop | Piece movement, rotation, hard drop, soft drop, hold, retry and pause. |
| Gameplay | Developer / Debug Overlay | Development actions for a console, debug slots, screenshots, quick save and quick load. |
| Godot Built-In UI | Basic UI Navigation | Godot-style menu navigation with the keyboard, the D-pad, the face buttons and the left stick. |
| Godot Built-In UI | UI Text Editing | Common text-editing actions for `LineEdit` and `TextEdit` controls. |
| Unbound Default UI Actions | Godot Default Unbound UI Actions | The declared default UI actions, for completeness. |

Every gameplay template binds the keyboard and a gamepad at the same time, so
your game supports both from the start.

### Apply a template to your project

1. Select the template.
2. Tap **Apply to Project...**.
3. Choose how Xogot merges the actions:
   * **Replace all actions** first removes the actions that you made, and then
     adds the actions of the template.  Built-in `ui_*` actions stay.
   * **Merge into current actions** adds the actions that do not yet exist, and
     overwrites the actions that have the same name.  Actions that the template
     does not mention stay as they are.

@Image(source: "InputMapApplyTemplate.png",
            alt: "The template detail view with the Apply to Project and Duplicate buttons, and the Mapped Actions list below them")

The detail view of a template lists its actions and their bindings under
**Mapped Actions**, so you can see what you get before you apply it.

> Note:
> **Apply** goes through the usual editor operations, so undo and redo work.
> If a merge is not what you wanted, undo it.

### Save your input map as a template

Use this when you have an input map that you want in your next project.

1. Select the **Templates** mode.
2. Tap the **+** button in the top right corner of the sidebar.
3. Choose **Save Current as Template...**.
4. Type a name, such as `Platformer Controls`.  Add a description if you want
   one.
5. Tap **Save Template**.

The snapshot contains all of the actions that you made, with their events and
their deadzones.  It does not contain the built-in `ui_*` actions.

@Image(source: "InputMapSaveTemplate.png",
            alt: "The Save as Template sheet with the Name and Description fields and the count of the actions that it captures")

### Import the input map of another project

Use this when a second project already has the actions that you want.  Xogot
reads the `project.godot` file of the other project directly.  It does not open
that project, and it does not change it.

1. Select the **Templates** mode.
2. Tap the **+** button in the top right corner of the sidebar.
3. Choose **Import from Project...**.
4. Tap **Browse...** and select the folder of the other project, or its
   `project.godot` file.
5. Xogot lists the actions that it found.  All of them are selected.  Tap an
   action to include or exclude it, or use **Select All** and **Deselect All**.
   An **exists** badge marks the actions that your current project already has.
6. Tap **Import**.

@Image(source: "InputMapImportProject.png",
            alt: "The Import Input Map sheet showing the selected source project, the list of actions with their bindings, and the exists badge on names that the current project already uses")

The import makes a new template that is named after the source project, for
example `Racer Input Map`, and it selects that template.  Your project does not
change yet.  Apply the template when you are ready.  This two-step flow lets you
review the actions before they touch your project.

### Duplicate a template

Tap **Duplicate** to make an editable copy of a template.  The copy has the same
name with ` Copy` at the end.  Use this to build your own template from a
built-in one: duplicate it, apply it, adjust the actions in the **Actions**
mode, and then save the result as a new template.

### Delete a template

Select the template and tap **Delete**.  Built-in templates have no Delete
button, because Xogot supplies them.

Deleting a template does not change any project.  A template is only a snapshot.

## Workflows

### Start a new game

1. Open **Project Settings > Input Map**.
2. Select the **Templates** mode.
3. Select the template that matches your genre, for example **2D Platformer**.
4. Tap **Apply to Project...** and choose **Replace all actions**.
5. Go back to the **Actions** mode and rename or adjust the actions that do not
   fit.

### Add gamepad support to a keyboard-only game

1. Select the **Templates** mode and select the template of your genre.
2. Look at **Mapped Actions** and note the names that it uses.
3. If your action names match, tap **Apply to Project...** and choose **Merge
   into current actions**.  The gamepad events arrive with the keyboard events.
4. If your names do not match, go back to the **Actions** mode and add the
   joypad events by hand, as described in **Add an event to an action** above.

You can also add the on-screen gamepad for iPad.  See <doc:Onscreen-Controls>.

### Reuse your controls in your next game

1. In the first project, save the input map as a template.
2. Open the second project.
3. Select the **Templates** mode.  Your template is there, because the library
   is global.
4. Apply it.

### Copy the controls of a project that you cannot open

1. Select the **Templates** mode.
2. Choose **Import from Project...** and browse to the other project.
3. Select the actions that you want and tap **Import**.
4. Apply the new template with **Merge into current actions**.

## See Also

- <doc:input_examples>
- <doc:inputevent>
- <doc:controllers_gamepads_joysticks>
- <doc:Onscreen-Controls>
