# Xogot User Interface

Navigating the Xogot UI

## User Interface

Xogot's UI has been adapted to better suit the iPad, including making parts of
the UI more tappable, and removing some parts of the user interface to economize
available real estate.  Many toolbar icons have been replaced with Apple's 
SF Symbols to better match the look and feel of iPadOS.  This document provides 
a guide to the layout and structure of Xogot's toolbars.

## Toolbar

Below is an overview of each element in the toolbar, along with a numbered
screenshot to help you locate each feature.

@Image(source: "XogotToolbar.png",
       alt: "A screenshot of Xogot with numbered toolbar elements.")

1. Show/Hide Xogot Sidebar
2. Document Menu - New/Open/Save/Close Scene, Close Project
3. Open 3D Editor
4. Open 2D Editor
5. Open Script Editor
6. Open Game Tab
7. Run Project
8. Show/Hide Inspector
9. Settings menu

Refer to the screenshot above to better understand the numbered elements of
the toolbar.

## Scene Tree and File Pad
The Scene Tree and File Pad help you organize your game’s structure and manage
resources. The Scene Tree allows you to add, manage and select nodes in the
editor while the File Pad helps you manage the files in your project. 

The Scene Tree and File Pad can be opened individually by tapping the tree or 
file toolbar buttons in the lower-left corner of Xogot, and can be shown/hidden
by tapping the Sidebar toolbar button in the upper-right corner of Xogot.

@Image(source: "XogotSceneFile.png", 
       alt: "A screenshot of Xogot with numbered scene tree and file pad elements.")

1. Create New Node
2. Instantiate Child Scene
3. Select multiple nodes
4. Show/Hide Xogot Sidebar
5. Open Attached Node Script
6. Open in Editor
7. Toggle Visibility
8. Create New File (Scene/Script/Resource/Import/etc)
9. File Sort order / Show Search / Refresh
10. Find/Replace Tool
11. Show/Hide Scene Tree
12. Show/Hide File Pad
13. Undo
14. Redo

Refer to the screenshot above to better understand the numbered elements of
the Scene Tree and File Pad UI components.

## Inspector

The Inspector panel allows you to view and edit the properties, signals, and groups
of the currently selected node. It plays a central role in configuring the behavior 
and appearance of nodes in your scene.

### Accessing the Inspector

To show or hide the Inspector, tap the **sidebar icon** (second-from-the-right) in the 
upper-right corner of the Xogot interface.

### Inspector Tabs

The Inspector is divided into four tabs, each providing a different view or 
editing capability for the selected node.

1. Properties
2. Signals
3. Groups
4. History

@Image(source: "InterfaceInspector.png", 
       alt: "A screenshot of Xogot with numbered Inspector elements.")

#### Properties

The **Properties** tab displays all configurable attributes for the selected node. 
Properties are organized hierarchically, beginning with those specific to the node’s 
class, followed by those inherited from its base classes.

You can modify most properties directly from this panel. Some highlights:

5. **Angle Input**:  Angle values are rendered in a horizontal gauge. 
  * Tap and drag left or right on the gauge to adjust the angle.
  * Tap-and-hold before dragging to enable fine-tuned adjustments.
6. **Grouped Properties**: Nested property groups are indicated by a `>` symbol. 
Tap to navigate into the group. 
7. **Pinning**: When inside a property group, tap the **thumbtack icon** to pin it, 
keeping its contents visible even after navigating away. 

  Tap the thumbtack on any pinned group to unpin it. 

@Image(source: "InterfaceInspectorNumberPad.png", 
       alt: "A screenshot of Xogot with number pad input.")

**Numeric Input**: Tapping a number field opens a numeric input panel.
* **Touch Adjustment**: Tap and drag left or right on any number field to quickly 
increase or decrease its value using touch input.
* **Keyboard Adjustment**: Use the arrow keys to quickly increase or decrease values 
in number fields. Combine with modifier keys for finer or coarser adjustments:
    * `Control + ↑/↓`: Adjust by the default increment
    * `Option + ↑/↓`: Adjust by 0.1 units
    * `Shift + ↑/↓`: Adjust by 10 units
    * `Command + ↑/↓`: Adjust by 100 units

#### Signals

The **Signals** tab lists all signals the selected node can emit, along with any methods
currently connected to respond to those signals. Use this tab to manage signal connections
directly from the interface.

#### Groups

The **Groups** tab allows you to assign the node to one or more **Scene Groups** or **Global
Groups**, which can be used to organize nodes and apply logic to multiple nodes at once.

#### History

The **History** tab provides a list of recent changes made to properties in the Inspector. 
This allows you to review or revert recent modifications quickly during scene editing.


## 3D Editor Toolbar

The 3D Editor Toolbar floats in the 3D editor workspace, and can easily be
pushed to any corner of the workspace to make it easier for you access these
controls while editing your scene.  

@Image(source: "3DToolbar.png", 
       alt: "A screenshot of Xogot with numbered scene tree and file pad elements.")

1. Select Mode
2. Move Mode
3. Rotate Mode
4. Scale Mode
5. List mode
Show list of selectable nodes at position clicked.
6. Lock/Unlock Select Node(s)
7. Group/Ungroup Selected Node(s)
8. Use Local Space
9. Use Snap
10. Toggle preview sunlight.
    If a DirectionalLight3D node is added to the scene, preview sunlight is disabled.
11. Toggle preview environment.
    If a WorldEnvironment node is added to the scene, preview environment is disabled.

Refer to the screenshot above to better understand the numbered elements of
these 3D Editor Toolbar.

## 2D Editor Toolbar

Like the 3D Editor Toolbar, the 2D Editor Toolbar floats in the 2D editor workspace
when you are working in a 2D scene.  This toolbar can be easily moved to any corner 
of the 2D workspace.  

@Image(source: "2DToolbar.png", 
       alt: "A screenshot of Xogot with numbered scene tree and file pad elements.")

1. Select Mode
2. Move Mode
3. Rotate Mode / Change Rotation Pivot
4. Scale Mode
5. Set Scale Behavior (Freeform or Uniform)
6. Use Snap
7. Snap Menu
8. Lock/Unlock Select Node(s)
9. Group/Ungroup Selected Node(s)
10. Bones Menu / Selection Options
11. Zoom
12. View Menu

Refer to the screenshot above to better understand the numbered elements of
these 2D Editor Toolbar.

## Command Palette

The <doc:Command-Palette> provides a convenient way of navigating your project
as well as running commands for users that are more comfortable using a keyboard.

## Additional Resources

This video may be helpful in familiarizing yourself with the interface, especially for those migrating from Godot:
@Video(
    source: "https://customer-fku244tec8fwlbfi.cloudflarestream.com/d9393fd9872838d31e98be4cee4cdedf/manifest/video.m3u8",
    caption: "Xogot for Godot Users: Getting Oriented on iPad & iPhone"
)
