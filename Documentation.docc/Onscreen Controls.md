# Onscreen Controls

Quickly touch-enable projects for testing and playing games directly on iPhone
and iPad.

## Onscreen Controls

Onscreen controls are crucial for testing and playing games directly on your
iPad. For projects that are not designed for touch, Xogot offers two main ways
to add onscreen controls to your project: using the **Project Setting**
(available only on iOS) or by adding touchscreen controls to your game,
such as those provided by the **VirtualJoystick control**. This guide
will help you understand the differences between these methods and how to set
each up.

## How to Enable Onscreen Controls

To enable onscreen controls, you can choose between the **Project Setting Option
(iOS-only)** or the **VirtualJoystick control**. Each method has its own pros and
cons:

### Project Setting Option (iOS-only) vs. VirtualJoystick Control: Pros and Cons

#### Project Setting Option (iOS-only)

@Image(source: "VirtualControllerFPS.png",
       alt: "A screenshot of Kenney's FPS Starter Kit with Onscreen Controls project setting enabled")

This setting is enabled in the 3D Platformer Starter, FPS Starter, Candy Wrapper,
Twin-Sticke Shooter, and other projects in the Learning Center.

**Pros**:
- Directly integrated into Xogot, offering a native experience.
- Requires minimal setup and configuration.
- Automatically adapts to game settings without any extra work in projects that
  have gamepad input mappings configured.

**Cons**:
- Limited to iOS devices.
- Customization options are more restricted compared to the Virtual Joystick
  control.

#### In-scene Touchscreen Controls

@Image(source: "TouchscreenControlsRPG.png",
       alt: "A screenshot of Top-down Action RPG with touchscreen controls")

Sample projects which use custom touchscreen controls include Pocket Godot
and Top-down Action RPG.

**Pros**:
- Works across all platforms where your project can run.
- Highly customizable; developers can change the appearance and behavior to suit
  game-specific needs.

**Cons**:
- Requires additional setup in your project.
- More effort to configure button mapping and visual elements.

## How to Enable Project Setting for Onscreen Controls

@Image(source: "ConfigureVirtualController.png",
       alt: "A screenshot showing enabling and configuring the Virtual Controller in Xogot")

To use the **Project Setting Option** for onscreen controls:

1. **Open Your Project** in Xogot.
2. Tap the **Settings** icon in the top toolbar (next to the Inspector button) and choose
   **“Settings”**.
3. On the lefthand navigation, Find the **Input Devices** section and tap
   **“Virtual Controller”**.
4. Tap the toggle next to **“Enable Controller”** to turn the feature on.
5. Additionally, tap the toggle next to the buttons and thumbsticks that you
   want to enable or disable.  
  - Any buttons or thumbsticks that are not enabled will not be rendered
  - **Button Mapping**: Note that button names use the **Xbox naming
    convention** (e.g., "A," "B," "X," "Y"). Ensure your game actions are mapped
    appropriately to these controls for a consistent player experience.

Once these settings are saved, the onscreen controls will automatically appear
when you run your project on an iPad.  The controls will automatically hide when
your project is run on devices that have a physical controller connected.

### Configure Game Controller Input Map

@Image(source: "ConfigureInputMap.png",
       alt: "A screenshot showing configuring an input map for a joypad positive x-axis to move_right")

The **Virtual Controller Project Setting** works by emulating hardware gamepad
actions.  If your project has **Input Map** actions configured for joypad
hardware, the virtual controls should just work.  If you have an Input Map but
have not yet configured joypad actions yet, you can follow these steps:

1. **Open Your Project** in Xogot.
2. Tap the **Settings** icon in the top toolbar (next to the Inspector button) and choose
   **“Settings”**.
3. Tap **General** in the drop down at the top of the dialog and select **Input
   Map**.
4. Make sure the segmented control at the top of the left-hand column is set to
   **Actions**.
5. Find and select an **Input Action** in the left-hand column that you want to
   connect to a hardware action event.
6. Tap the **+** button above the **Action Events** list to create a **New Input
   Event**.
7. Select **Joypad Buttons** or **Joypad Axes** in the segmented control at the
   top of the dialog to locate the button or axis direction you want to connect.
  - **Button Mapping**: Note that the Virtual Controller buttons use the **Xbox
    naming convention** (e.g., "A," "B," "X," "Y").  Each row also shows the
    Nintendo and Sony glyphs for the same logical button.
  - **Joypad Axis**: Note that the Virtual Controller will map Joypad Axis 0 and
    1 to the Left Thumbstick, and Joypad Axis 2 and 3 map to the Right
    Thumbstick
8. When you've selected the button or axis direction you want to connect, tap
   **Create** to finish connecting the Input Action Event.
9. Repeat steps 5-8 above for each Input Action you want to map to a virtual
   controller input event.

If your project does not currently have any Input Map configured, you will first
need to add and configure Input Actions using the **+** button in the left-hand
column of the Input Map configuration screen.

You can skip most of this work by applying one of the built-in input templates:
every gameplay template already binds both the keyboard and a gamepad.  See
<doc:Input-Map>.


## How to Add the Built-in VirtualJoystick

Godot's
[`VirtualJoystick`](https://docs.godotengine.org/en/4.7/classes/class_virtualjoystick.html)
node lets you add a joystick directly to your game's scene and customize its
layout, appearance, and input actions.

1. Open the scene that contains your game's touch interface. If it does not
   already have one, add a **CanvasLayer** node and name it `UI` so the controls
   stay on screen when the game camera moves.
2. Select `UI`, tap **+** in the Scene tree, search for **VirtualJoystick**, and
   add the built-in node.
3. Set its anchors and offsets to define the area where a touch can activate
   the joystick. Use **Full Rect** for a game where dragging anywhere controls
   movement, or restrict it to the left side if you need space for buttons or a
   second joystick. Give two joysticks separate, non-overlapping touch areas.
4. In the Inspector, choose **Joystick Mode**. **Fixed** keeps the base in one
   place, **Dynamic** places it at the initial touch, and **Following** also lets
   it follow your finger beyond its range. **Following** is the mode used in
   Save the Axolotl.
5. Set **Visibility Mode** to **When Touched** if the joystick should appear only
   during a touch, or **Always** if players should see its resting position.
6. Assign the four directional actions to match your game's Input Map. For
   example:

   | Inspector property | Input Map action |
   | --- | --- |
   | `action_left` | `move_left` |
   | `action_right` | `move_right` |
   | `action_up` | `move_up` |
   | `action_down` | `move_down` |

These actions must exist in the Input Map, and their spelling and capitalization
must match. The node defaults to `ui_left`, `ui_right`, `ui_up`, and `ui_down`;
change them if your game uses custom action names. See <doc:Input-Map> for help
creating actions. Joypad bindings are only needed if you also want gamepad input.

Use **Joystick Size** and **Tip Size** to adjust the visuals. Customize the base
and tip through **Theme Overrides > Styles**, using `normal_joystick`,
`normal_tip`, `pressed_joystick`, and `pressed_tip`. A `StyleBoxTexture` lets you
reuse joystick artwork.

Hide your touch interface when it is not needed, such as on the main menu.
**When Touched** controls when the joystick is drawn; it does not limit the node
to touch devices or automatically hide it when a physical controller connects.
Manage those choices in your game's UI logic.

If you are replacing Xogot's iOS Virtual Controller with a complete in-scene
interface, turn off **Project Settings > Input Devices > Virtual Controller >
Enable Controller** to avoid displaying both interfaces. If you are adding only
a joystick, you can keep the Virtual Controller's buttons and disable its
thumbsticks instead.

For a complete example, see the **Making your game even more customizable**
section of <doc:07.finishing-up>.

## Migrating from the Virtual Joystick Add-on

Xogot now includes Godot 4.7's built-in `VirtualJoystick` control. The Learning
Center samples that previously used the
[Virtual Joystick add-on](https://github.com/MarcoFazioRandom/Virtual-Joystick-Godot)
and the Save the Axolotl 2D tutorial have been updated to use the built-in
control. The add-on is no longer available in Xogot's Asset Library.

The add-on's `VirtualJoystick` script class conflicts with the built-in class
and can cause script errors. If your project uses the add-on, migrate it to the
built-in control using the steps below. Updating Xogot or downloading a newer
sample does not convert an existing project's scenes, scripts, or settings.

Keep the add-on in projects that must still run in older Godot versions that do
not have `VirtualJoystick`.

### Replace the Scene Instances

1. Back up your project or commit it to source control. Record each old
   joystick's action names, touch area, mode, size, and appearance. Copy any
   artwork you want to keep out of the add-on's folder.
2. If the add-on appears under **Settings > Plugins**, disable it. Some versions
   use only scenes and scripts and have no plugin entry.

   > Important: Some versions of the add-on declare `class_name VirtualJoystick`,
   > which conflicts with the new native class. If you see an error about hiding
   > a native class, temporarily rename the add-on's script class and its script
   > references while you replace the old instances. Disabling a plugin alone
   > does not remove its script class. Remove the old scripts when the migration
   > is done.

3. In each scene that instances the add-on's `virtual_joystick_scene.tscn`,
   remove that instance and add a built-in `VirtualJoystick` under the same UI
   parent. Follow the setup steps above to restore its touch area and action
   mappings. Repeat for a right joystick if your game uses one, assigning its
   own aiming or camera actions.
4. Update scripts, exported node references, and signal connections that pointed
   to the old instance. Keeping the same node name can preserve node paths, but
   references to the add-on's child nodes, properties, or signals need updating.
   Remove any `preload()` or `load()` calls for add-on resources you have replaced.
5. Save the scenes. After replacing all instances and code dependencies, delete
   the old `addons/virtual_joystick/` folder, or the equivalent folder in your
   project. Keep any shared assets you still use.

### Transfer Settings and Input Code

Use this checklist when translating the add-on's settings. Names and available
options can vary between add-on versions.

| Add-on setting or usage | Built-in replacement |
| --- | --- |
| Directional action names | Copy them into `action_left`, `action_right`, `action_up`, and `action_down`. |
| **Use Input Actions** | The built-in node drives its assigned actions directly; no enable toggle is needed. |
| **Fixed**, **Dynamic**, or **Following** mode | Choose the corresponding **Joystick Mode** in the Inspector. |
| **Deadzone Size** and **Clampzone Size** in pixels | Tune `deadzone_ratio` and `clampzone_ratio` together with `joystick_size`; the old pixel values cannot be copied directly into ratio fields. |
| **Touchscreen Only** visibility | Manage visibility in your UI logic; the built-in modes are **Always** and **When Touched**. |
| Base and tip child textures, colors, or `pressed_color` | Recreate the appearance using the four theme styles described above. |
| Reading the add-on's `output` vector | Read the assigned actions with `Input.get_vector()` instead. |
| Reading the add-on's `is_pressed` property | Use action state for movement, or the built-in `pressed` and `released` signals to track touch contact. |

If your movement code already reads the same Input Map actions, it can continue
to do so after you assign those actions to the new node. If it reads the add-on
directly, replace expressions such as `joystick.output` with:

```gdscript
var direction = Input.get_vector("move_left", "move_right", "move_up", "move_down")
```

Use your project's action names in that call. For a second joystick, read its
four assigned actions in a separate call. If you previously checked
`joystick.is_pressed` to decide whether to aim, check whether the resulting
direction is nonzero. The built-in `pressed` signal indicates touch contact,
which can begin before the finger moves out of the deadzone.

[`Input.get_vector()`](https://docs.godotengine.org/en/4.7/classes/class_input.html#class-input-method-get-vector)
preserves analog strength and limits diagonal input to a length of one. Leave
the result unnormalized if you want smaller drags to produce slower movement.
Start with `deadzone_ratio` at its default of `0.0`, then tune the Input Map's
action deadzones. Adding a joystick deadzone applies an extra threshold before
the action deadzones.

### Check the Migrated Project

Run the game on an iPhone or iPad. Test all directions, small and full drags,
diagonals, and release to confirm that movement stops. Check simultaneous
movement and button presses or a second joystick, menu visibility, and the
layout at your supported screen sizes and orientations. Confirm that keyboard
and physical controller input still work through the same actions, and reopen
the project to check for missing add-on resources or script errors.

For mouse testing on a computer, enable **Project Settings > Input Devices >
Pointing > Emulate Touch From Mouse**. Test multitouch on a touch device.

## See Also

- <doc:Input-Map>
- <doc:07.finishing-up>
