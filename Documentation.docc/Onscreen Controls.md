# Onscreen Controls in Xogot

Using Onscreen Controls to quickly touch-enable projects

## Onscreen Controls

Onscreen controls are crucial for testing and playing games directly on your
iPad. For projects that are not designed for touch, Xogot offers two main ways
to add onscreen controls to your project: using the **Project Setting**
(available only on iOS) or by adding touchscreen controls to your game,
such as those provided by the **Virtual Joystick Addon**. This guide
will help you understand the differences between these methods and how to set
each up.

## How to Enable Onscreen Controls

To enable onscreen controls, you can choose between the **Project Setting Option
(iOS-only)** or the **Virtual Joystick Addon**. Each method has its own pros and
cons:

### Project Setting Option (iOS-only) vs. Virtual Joystick Addon: Pros and Cons

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
  Addon.

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
2. Tap the **...** button in the upper-righthand corner and choose
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
2. Tap the **...** button in the upper-righthand corner and choose
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


## How to Add the Virtual Joystick Addon

To add the **Virtual Joystick Addon** to your project:

1. In Xogot, open your project and tap the **Menu** toolbar button in the 
upper-right corner of Xogot and choose **Asset Library**.
2. Search for **Virtual Joystick** and tap the **Virtual Joystick** add-on.
3. Tap **Get**, then tap **Import**.
   * The addon will be automatically added to your project’s `addons/` directory.
4. Tap the **Menu** toolbar button in the upper-right corner of Xogot and 
choose **Settings**.
5. Tap **General** at the top of the dialog, then select **Plugins**.
6. Find **Virtual Joystick** in the list and toggle it to **Enabled**.
7. **Customize the Controls**: You can customize the joystick’s appearance and behavior by editing the provided scenes and scripts.  

More details of customizing and configuring the Virtual Joystick Addon can be found in the
[Virtual Joystick readme on GitHub](https://github.com/MarcoFazioRandom/Virtual-Joystick-Godot).
