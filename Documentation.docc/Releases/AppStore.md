# AppStore Release Notes

Release notes for public releases of Xogot to the App Store.

## Release 1.6.4

* New: Asset Placer for faster 3D scene building, including grid, surface,
  vertex, spline, paint, scatter, MultiMesh, collision, material override.

* AssetBrowser will now automatically generate the thumbnails for your assets,
  rather than requring the user to manually reload each asset.   

* AssetBrowser has been extended with support for Asset Zoo construction.

* Usability: Improved project importing with threaded loading, cancelable
  progress, and smoother progress updates.

* Automatic saving: Added automatic scene saving around run, close, export,
  focus changes, and script attachment.   You can configure this option if you
  rather have full control of saving.

* Command Palette now has a command history.

* Context menu now always has a script node present, rather than being
  contextual, and it will let you add/remove/extend without resorting to a
  separate menu.

*  Improved Font Import and Animation editing on iOS with better selectors,
   platform navigation, glyph tapping, Pencil hover behavior, and clearer resize
   affordances.

* Fixed 45 tracked user-facing bugs.

## Release 1.6.2 (4560)

* Performance improvements: starting the editor is about 30% faster now and the
  setting dialogs are faster and consume less memory.

* GameViewPad: now we surface the Game toolbar even when the game is not
  running, allowing you to customize settings before you launch.

* You can now resize the time of an animation in the AnimationPlayer
  visually, you do not have to type in a value.

* You can now copy entire values from categories and sections and paste them on
  other categories/sections.

* We now have a MacOS/iOS native GridMap placer UI, this replaces the Godot
  GridMap placer.

* Shader Visual Debugging: Setting breakpoints on canvas_item shaders will now
  show a preview of the texture being assigned at that point in time.

* Added support for plugins that registered controls on the toolbar.

* New: new advanced Font Importer settings UI is included.

* New MultiMeshInstance plugin written in SwiftUI, provides a convenient
  prototyping UI for the multi-meshes.

* Over 20 bugs fixed.

## Release 1.6.0 (4464)

## Improvements

This release brings the Godot 4.6 features to Xogot, along with many
iOS-specific improvements and a refreshed Learning Center.

### iOS

* More iOS native UIs: we have upgraded more Godot components to be iOS native
  both large, like the Animation Tree Editor, small, including the Dependency
  Editor, Material and Mesh inspectors, Texture Viewer, Emissions Mask, Camera
  control, and audio inspector - plus small updates across the board for
  consistency with the platform.

* The Embedded Game preview now supports configuring different stretching modes
  when playing your game, in addition to the setting you chose for your game,
  during this debug mode, we can stretch or fill the view.

* We now offer a visual representation of your masks and layers, as an
  alternative to the numeric grid that we have used in the past.

* We brought Find and Replace across all files.

* The asset browser will now preview audio files and you can batch generate
  previews for all assets directly from it.   It is now also available on the
  iPhone. 

### Performance

This release further reduces battery consumption when idling, but we also
improved the performance of several key components of Xogot: the inspector,
scene pad and file pad were all subject of extensive updates to reduce busy work
with noticeable response times.

### Godot 4.6 

In this release we are upgrading the Godot engine from 4.5 to 4.6, and this
brings many capabilities.  Some of the most noticeable features include:

* A new inverse kinematics framework adds new IK modifiers, solvers, and
  constraints for procedural 3D animation.

* Screen Space Reflections have been overhauled, with better visual stability,
  roughness handling, and performance.

* 3D texture imports are faster, with some compressed textures importing twice
  as fast.

* Mesh LOD generation has improved, helping distant 3D objects preserve their
  shape better.

* Jolt Physics is now the default for new 3D projects, bringing a faster and
  more robust physics backend while leaving existing project settings unchanged

* Rendering improvements include better glow blending, configurable AgX
  tonemapping, lighter reflection and radiance probes, material debanding, and
  improved HDR precision.

### Fixes

Over 57 bugs fixed since our last release.

# Releases 1.5.8 (4197)

### AssetBrowser

We now ship with an asset browser that should make it easier to quickly select
images, meshes, audio, fonts and work with them in the editor.   This asset
browser will also auto-tag your resources to help you find what you are looking
for.  

The inspector will now also show the tags for your resources.

### Improvements

* The ScenePad now accepts g:GROUP to filter out nodes that belong to the GROUP
  and the t:TYPENAME to show only nodes that belong to the type.   This follows
  the same feature in Godot (#2020)

* Xogot now brings support for "Live Edit" allowing changes to your selected
  scene to be reflected live on your game.  You can change the target on the new
  options menu on the debugger tab (#2551)

* Surfaced additional Audio Importer options, matching the latest features in
  Godot and improved the importer features to match the Godot behavior.

* Performance improvements to the AnimationPlayer

* Inspector: We now surface a SwiftUI-based Skeleton3D browser, instead of the
  Godot one, that should work better with touch input.

* Keyboard modifiers like shift, control, alt, meta are now propagated to the
  game and you can bind to those events.

* Pencil support: now if you hover over the timeline on the animation editor,
  the tracker will temporarily snap to that position, to help you tune your
  animations, inspired by Final Cut Pro.
  
* Adds support for editing sub-resources (#67)

* Lots of performance improvements to the UI.

  ### Small Usability Chnages

* Add Node now will show the type hierarchy in the inline documentation.

* iPhone: add scroll while in script editor during selection #2503

* iPhone: use a new bottom bar handler, which was previously preventing various
  sheets from being displayed (sheet-on-sheet issue).   This should now be
  fixed, but it is a large change.

* Made the learning center buttons more consistent with other platform idioms.

* UI Improvements to the Theme Editor.

* Learning Center: will re-download images for tutorials if there are transient
  network errors.   It also brings a small UI touch, when scrolling, it will
  automatically resize for easier browsing.

Over thirty five bugs addressed.

## 1.5.6 (4026)

* This release contains over 36 bug fixes for issues reported by our users or
  caught by crash reports which improves the reliability of Xogot.

## 1.5.4 (3949)

* Performance optimizations: using the new Instruments profiler, we have been
  fine tuning our user interface to make it snappier - we improved the response
  times on almost all interactions of the UI.

* Battery efficiency work:   We have been hard at work profiling
  Xogot and measuring the battery impact - we have addressed most of the idle
  busy work that Godot was doing, and we have contributed those changes to
  upstream Godot.

* AnimationPlayer: we brought support for the "Dummy Player" when using the
  AnimationTree, brought Onion Skinning support, we display the current position
  and allow it to be changed numerally, added cut and paste of keys across
  players and you can now select keys across tracks.

* We have now support for @icon(#path) annotations.

* We now have a native Theme Editor replacing the Godot one

### Small Improvements:

* New Scene UI has been revamped to assist users with larger projects, you can
  now search existing scenes, pick a project and we now use a sheet rather than
  a small popup.

* We now track Godot's editor unfolding rules more closely.

* You can now launch your games without opening a new window.

* Functions that are targets of signals will now show an indicator in the text
  editor like Godot on desktop does.

* 32 bugs that were either caught in the wild via crash reports or user feedback
  were fixed.

## 1.5.2 (3804)

* Learning Center content has been fully localized, including localized captions for all videos.

* Major performance improvement to the scene pad, making switching between nodes significantly faster.

* Fixed more than ten crashes that were occurring in real-world usage.

* Fixes the remote pairing

## 1.5.0 (3755)

This update delivers a major refresh to Xogot, combining a new Learning Center with the full power of Godot 4.5.1.

### Learning Center

* New 2D and 3D videos, guided tutorials, and updated sample projects help you learn game development and get productive in Xogot faster

### Editor & UX

* Stencil Buffer Support – Enable advanced rendering techniques with full stencil buffer capabilities
* Variants in Editor – Variants are now surfaced for direct inspection and editing
* Improved File Drag-and-Drop – Hold modifier keys while dragging files into the editor to quickly generate preload templates

### GDScript Enhancements

* Variadic Arguments – Support for `*args` and `kwargs` in function signatures
* Abstract Classes & Methods – Define abstract base classes and enforce method implementation via the `@abstract` keyword
* Deep Copies – Full support for deep copying complex data structures

### Animation System

* Bone Constraints – Add constraints to bones for more realistic and controllable character animations

### Rendering Improvements

* Specular Occlusion from Ambient Light – More realistic lighting by occluding ambient specular reflections
* Bent Normal Maps – Improved indirect lighting with bent normal map support

### 2D & Tilemap

* Chunk Tilemap Physics – Optimized physics handling for large tilemaps via
  chunk-based collision detection

## 1.4.18 (3634)

### Improvements

Scene tabs: You can now navigate your scenes using tabs. This takes some vertical space, but it’s vastly more convenient than the previous menu-based switcher, which required too many interactions for such a common operation.

iPhone navigation: We changed the iOS navigation to use TabViews and the new Liquid Glass search idiom, and wired the search functionality into our existing Command Bar.

This simplifies several navigation pain points on iPhone. The three major tasks—Scene Editing, Code Editing, and Playing—are now accessible from the bottom of the screen, and switching between the 2D and 3D editors is done via buttons within easy reach of your fingers.

We also extensively updated the Command Palette in the Search tab to improve the overall phone experience.

We brought precompiled shaders back into Xogot, improving startup performance by reducing the number of shaders that need to be compiled when the editor launches.

The XogotShell no longer triggers the Command Palette when tapping the 2D/3D toggle. Instead, the document icon now triggers it, restoring the previous behavior.

The code editor now supports Arabic, Korean, and other international keyboards.
Creating a new scene is now done relative to the currently selected item in the File Pad.

Improvements to the Polygon Editor in the Inspector.

When creating a new scene, it now defaults to being placed in the directory currently selected in the File Pad.

iPhone: The keyboard accessory went on a diet. Copy and paste actions were removed as they follow standard iOS idioms. We added a new “Hide Keyboard” button, and undo/redo now share a single slot (long-press to redo).

The Editor/Run configuration for “Run Action On” now supports open output, open debugger, or none. The same options are available for stopping.

Over 26 bug fixes across crashes and general editor issues.

## 1.4.16 (3558)

* Godot feature tags are now supported.

* Upgraded the numeric input controls.

* Added a convenient "Download from GitHub" option that downloads a project from
  GitHub to get started.

* Faster and snappier texture preview panel.

* Removed the "Swipe to Delete" gesture from directories, as it is not too common.
 
* Over 38 reported bugs fixed.

## 1.4.14 (3458)

* Improved encoding of paths when dragging scene pad nodes into the text editor.

* GLTF Exporter now uses our own numeric input pads, so that we do not get a
  full keyboard popup.

* Search in Files: The "Replace" button will now automatically navigate to the
  next match after performing replace.

* Command Palette: filtered some internal Godot scripts that are not available
  on iPad, and added a new "Find in Files" command.

* Command Palette: you can now access it as "Command-Shift-P" which defaults to
  command search, similar to VSCode.   And the spaces after the ">" in the
  Command Palette are ignored when searching for a command.

* Added support for Godot's dynamic path sections, used in the Bone editor, so
  now the bone elements are visible (#876)

* Added support for Godot's "Recovery Mode", if Godot crashes at startup, we now
  offer the option of strating the game in recovery mode, where various plugins
  and features are disabled to help you restore your project to a well know
  state (#1915).

* It is now possible to drag and drop multiple nodes into the editors (#1896)

* Added support for gLTF 2.0 exporting.

* A major memory leak that happened when you started and stopped a game has been
  fixed. 
  
* Over twenty six bugs fixed.

## 1.4.12 (3364)

* Support for External Displays: while you can move windows manually into the
  external display with Stage Manager, we now support explict support for
  running your game on an external display, without having to manually manage
  the windows yourself.   This pairs great with an external controller.

* Remote Scene View: you can now toggle on/off individual nodes and these will
  show hide the nodes in the running game.

* 2-taps on the surface will trigger an undo operation, and 3-taps on the
  surface will trigger a redo operation.

* When running, Godot by default will open the "Output" panel, which works great
  on iPad, but on iPhone it covers too much of the screen.   We exposed the
  underlying setting now in the Xogot settings, so you can configure it to not
  open the output pad at startup.

* AnimationEditor now supports negative key values.

* Inspector: the remote debugger now supports fetching contents of a remote 
  object when tapped on.

* BottomBar animation: it is back in its full glory, and the animation is smooth
  and consistent, thank you for your patience during this rough period.

* New Color palette toolbar item in the code editor, to insert colors in the
  code (Discord)

* Various improvements to the UI on the iPhone, sidebars will now appear when
  pulling from the sides and dismiss as well, avoiding long trips to the
  action buttons at the top.

* Autoloads are now part of the free edition.

* Quick Open and Command Palette: they will now show image previews for any
  assets loaded.

* Keyboard users: if you press the control or command key when you drop a scene
  node into the code editor, it will insert an '@onready' variable declaration,
  instead of just inserting the name.   Implements a long-standing feature
  request.

* Keyboard users: FilePad dragging gets new benefits as well, if you press the
  control or command key when you drop a file into the editor, instead of just
  inserting the path, it will insert either `preload("PATH")`, or if you drop on
  an empty line `const VAR = preload("PATH")`.   Additionally, if you press
  shift, on Xogot 4.4, it will insert the UID reference, on Xogot 4.5, shift
  prevents the use of the UID.

* XogotBeta (4.5 release): Adds support for Variants to be exported, so now you
  can export a Variant and change the type on the inspector.

* You can now sort the Animation Tracks.

* iPhone: it is now possible to scroll the tabs without triggering a reodering
  operation.

* Script editing node should be visible in the inspector now for Nodes and
  resources.

* Inspector gained support for typed dictionaries from Godot 4.4.

* It is now possible to pair a device for remote debugging using pairing
  codes if you do not want to login.

## 1.4.10 (3293)

* Just a crash fix

## 1.4.8 (3269)

* Faster loading of projects that do not come directly from the iPad or iPhone
  storage (those that you pick from the Files app).

* Animation Editor no longer slows down when you have too many tracks in your
  animation.

* TileMap editor an SpriteFrames editor will now zoom to crisp pixels instead of
  interpolating values. 

* And over a dozen reported bugs have been fixed.

## 1.4.6 (3165)

* New: bringing remote debugging to Xogot, you can now continue developing in
  your iPad or iPhone and deploy the game on another iPhone or iPad.   This
  allows you to keep the debugger and inspector open and single step in one
  devices, while getting the full screen experience in the target device without
 the interference of the editor.
 
  This is in particular useful to test iPhone games from an iPad.

  For this feature to work, you must be logged in, and your devices must be
  near each other, they do not need to be on the same WiFi network.  This feature is powered by Apple's Multipeer Connectivity Framework.

* We now provide guidance to users if their tiles from a texture are incorrectly
  configured (#1841).

* After you create a directory in the Filepad, it is now selected after creation
  (#1805)

* iPhone: will stay on the "Remote" tab after a remote session completes (#1821)

* Game: will put the display in "do not sleep mode" (#1790)

* Game Shell: provides a button to expand over the safe areas (First part of #1846).

* Bring BBCode rendering to the output view (implements feature #574)

* Add support for showing remote objects on the inspector (#1224).

* We no longer zoom into non-Bezier tracks on the animation player editor.

* SpriteFrameEditor: add cut/copy/paste support for sprite frames (#1843).

* Plus a dozen of bugs reports fixed.

## 1.4.4 (3109)

### Improvements

* Numeric input now will use "," as a decimal separator if you have chosen this,
  and we updated the numeric input to also display arabic numerals if your
  language is set to Arabic.

* When editing Path3D objects, a new option was added to the Path toolbar that
  allows you to control the handles of a node - when you have a keyboard, the
  regular node selection with shift would work, but this allows folks with only
  touch input to use the feature effectively

* New command (Command-Shift-J shortcut) that will highlight the current item
  being edited (the text file or scene) in the FilePad to quickly locate its
  environment.

* We no longer display the project name on the toolbar if you are editing a
  scene, we only show the scene name, as this was taking too much space and
  squeezing important icons.

* The command palette is now also available from the menus for iPads running iOS
  18 without a keyboard.

* The help elements in the Command Palette are now tappable, and they inject the
  text to trigger the action.

* Animation Editor now has support for "Add Easing Keys".

* Animation Editor now has support for selecting multiple keys.

* Add support for exporting a scene to a mesh library.

* iPhone: Shuffled the tabs in the phone to place more important items on the
  display

* iPhone: when editing a single numeric value, if you tap the "return" key, this
  dismisses the sheet.

* When importing files with the system File Picker, if you pick files across
  directories, the hierarchy will be preserved, which will make it easy to
  import 3D models that come often with a "Textures" directory and colormaps
  along with models.

* Tuned the BottomBar/Output View controls, so that the trash can is easier to
  tap, but also aligns the text.

* Clipboard operations will now be supported in embedded Godot controls

* Improved our AnimationPlayer's Bezier editor - since this needs more space, we
  zoom in when selected, so the users can more easily modify the values, and we
  will now auto-adjust the values on the view.

* The accessory bar now also includes the equal sign (#1711) - we had previously
  implemented this, but had not merged the change - apologies.

* BottomBar resizing should be faster, as it now tracks the finger, rather than
  trying to animate the resizing as you drag (#1824)

* Over 35 reported bugs and usability problems have been addressed.

## 1.4.2 (2994)

* New: Command Palette

  This release introduces our new Command Palette.  This is activated either
  with the Command-P shortcut, or from the "View" menu.

  Our command palette incorporates ideas from MacOS' Spotlight and from VSCode's
  Command Palette.   By default, it shows and searches your project files as you
  type doing fuzzy matching.   If you are picking a text file, you can also
  append ':NUMBER' to directly go to a specific line on that file.   For other
  files, they are opened in Godot's preferred location (either a scene is
  opened, or the current object is displayed on the property editor).

  This file search also allows you to filter by kind (Scene, Script, Shader,
  Resource), and I hope to replace the existing "Quick Open" dialog with this
  one. 

  When editing a text file or a script the ":NUMBER" will take you directly to
  that line - and this will soon replace the existing "Go To Line" shortcut with
  this UI.

  On a text file, you can also navigate to a symbol location by typing
  '@SYMBOL', and you can also quickly select a node, by using the "$" prefix.

  Or you can run EditorScripts that your project has by typing ">" which will
  display all the available editor scripts in your project and you will be able
  to automate some of your work that way, without having to first select the
  script and then using the "Run Script" command.

  And you can search documentation by using the "?" prefix.

* New: ShareSheet, it is now possible to share content to Xogot from various
  creator apps by selecting Xogot from their share sheets.   Once this is done,
  the file is tranferred to Xogot, and when you switch back to Xogot, or open
  Xogot for the first time, you can place the file in their proper location.

* It is now possible to rename scene collections in TileSets.

* To better support iPadOS 26, when games are launched on a dedicated window, we
  now have controls to allow you to Pause/Stop the game there.

* Fuzzy text searching that is used on both the command palette and quick open
  now allow the " character at the start to mean "Do whole string matches, do
  nto use the fuzzy mode".

* Hitting a breakpoint will no longer resize the bottom part of the screen if
  you have the debugger pad open.

* Code Editor tabs can now be rearranged.

* It is now possible to use keyed animation that target resource properties in a
  node.

* The Output panel now has selectable text.

* Connect Signal dialog now select first node with script.

* Now also available in Italian, Czech and Dutch.

* The accessory bar now also includes the equal sign.

* We now show a small counter on the File menu when there is more than one scene
  opened.

* Improve UX for Dictionary/Array editing, will start pushing nested untyped
  arrays in NavigationStack rather than displaying sheet one over another.
  
* The Shader File menu now has a "New Shader" convenience menu.

* The iPadOS menu for Xogot settings now opens the app settings, instead of the
  OS provided settings.

* Many bug fixes and improvements.

## 1.4.0 (2899)

This version has been upgraded to use Liquid Glass on iOS 26 and iPadOS 26.

This released also vastly improves our iPhone support, lots of UI elements were
fine tuned for use on the iPhone, our inspector is now a slide-out element
freeing the bottom of the screen for the various custom Godot plugins.

Lastly, Xogot has been localized into nine languages, with more to come.

### Improvements

* Performance improvement to node selection - internally we stopped doing a lot
  fo work when scanning for plugins for a node (#1108).

* By popular demand: New "Reload Current Project" option is now on the menus,
  used when certain settings are changed.   I am not psyched about this extra
  menu that replaces Close + Open, but it seems to be a common enough idiom in
  Godot that seems important to bring.

* Numeric editors should surface sliders in more places now.

## 1.2.0 (Build 2757), 1.2.2 (Build 2819)

Two major themes.   Xogot comes to iPhone, and we now have a free tier edition,
check our blog post for additional details.

## Improvements

* New 'use_hidpi' setting under the display/window/stretch settings, which is
  independent of the previous attempt we had to support HIDPI by extending the
  meaning of the 'display/window/stretch/scale_mode' to have an 'auto' mode,
  which was not compatible with Desktop Godot.

* It is now possible to edit the labels of collission masks - the feature had
  not been wired up before (Discord, #1488)

* Double-tapping a node in the create node dialog will create the node, this
  makes it consistent with the existing behavior in the "All" tree-view that
  allowed this behavior (#1481).

* Dropping files from the file pad into the scene pad should work if you drop in
  an empty region, and not just when you drop on top of an existing node
  (Discord, #1492).

* We completed a memory leak journey, we have been chasing some pesky memory
  leaks when closing a project and going back to the main screen.   This will
  also improve the reliability after closing a project, because these dangling
  objects kept running for a little while after the editor closed, and this
  should no longer happen.

* True and false keywords should now be highlighted (Discord, #1491)

* Import button on the toolbar now shows a menu, which will help users determine
  that this is an import operation with a label, and adding a simple option to
  import Photos from the user's photo library (#1482).

* Rectangle Editor: in a few places, the rectangle editor will now display
  'Edit Rectangle' and when pressed, it will show up an
  interactive view to select a region from the image (Discord, #1465).

* SpriteSheetImport: will now remember the settings that you had when importing
  a new texture if the size of the texture matches the previous size (Discord
  request).
  
* Grouped numeric input: we will now auto-select in the popup the entry that you
  tapped on (Discord).

* UI consistency: in places where we guide our users to the next step, rather
  than rolling our own UI, we now use the system ContentUnavailableView idiom
  for more consistency.

* Better support for iOS 2026 user interface, even if it is not using those APIs
  just yet. 

* The virtual controllers that are displayed when you start a game automatically
  hide if you switch out of the "Game" mode (#1282)

* It is now possible to start a new chat from the Chat window.

* Add ability to extract TileMapLayer from TileMap #1509

* You can now configure in Xogot Settings your default execution target, either
  the embedded window, or a separate window.   

* You can now copy the error message when there is a runtime error (#1122)

* Happier colors for the launch screen, it was making me sad, and additionally
  Axolotl Rex will greet you on your gaming journey.

* You can now change the font for the code editor and consume system fonts, my
  previous attempt merely allowed you to pick a different fixed font, now you
  can pick any user-installed fonts (#1539, Discord).

The TileMap and TileSet plugins can now be docked on the left or right sides,
  to assist in your editing needs (#1529, Discord)

* Added keyboard shortcuts for various operations (Cut, Copy, Delete, Duplicate
  Nodes and Select All).   Some of these shortcuts might only be visible on iOS
  26, as they are exposed via the built-in system commands (#1549, Discord).

* Animation editor tab: significant performance improvements when switching
  animations and when playing back animations (#1562, Discord).


* TextureRegionEditor will now auto-size to a convenient size, and the handles
  will be scaled accordingly.   Plus various small improvements to it (#1557)

* When switching an animation, stop a playing animation (#1561)


* Expression Evaluator: The Godot REPL is now available in Xogot (#1412), there
  is a new option that you can toggle on the bottom of the screen when the
  debugger is selected to switch to the REPL window.

* Inspector: reviewed the padding of some elements and discovered a handful of
  pixels here and there that were needlessly consuming space that was needed.   

* Reparenting of nodes will now report an error if you are editing a foreign
  scene, and the operation is not allowed (Discord).  My preference would have
  been to remove the menu, but new Apple guidance on menus is to not make menus
  conditional, so we are going to start moving into that direction.

* On an empty scene, the "Other Node" or tapping the "+" sign will bring up the
  new node selection dialog, rather than defaulting to the limited tree-view
  one (#1501)

* The reference guide now has an index to search by words in the documetnation
  (#1379, Discord).


* Reference Guide: when searching for keywords, it now allows multiple words to
  be specified, requiring all matches to be present, as well as the notation
  "-word" to exclude any matches containing that word.

* Added keyboard shortcuts to increase and decreate the text editor font size
  using Command-Shift-minus and Command-shift-plus.  (Discord, #1323)

* Provides visual guidance that the editor is closing down a project when you go
  back to the main screen (#1454).

* The Free Edition will now have the debugger available, but will limit the
  project size.

* Added support for sub-property picking in the AnimationPlayer - be warned that
  while both Xogot and Godot support this, the feature is not fully baked in
  Godot, and has various limitations:
  https://github.com/godotengine/godot/issues/99115
  
* Godot native popovers now use our Floating Window (the feature part of a bug
  request #1531).


* The Animation Player editor previously had a number of options under the menu
  for the animation, but there was also an "Options" menu for one single task,
  so I unified those.

* For built games, if the game uses audio permissions, it will ask before
  launching, to make sure you have permissions to use those features (Completes
  the last part of #1456).


## 1.1.2 (Build 2413)

* If you have an Apple Pencil, when you hover over properties in the inspector, you will get a documentation tooltip.

* It is now possible to search for text in the documentation pages and trigger search with Command-F in the code editor.

* It is now possible to select multiple nodes and alter their common properties together by changing the values in the inspector.

* Your games can now take advantage of the accelerometer

* You can now use the drag gesture on numeric values on the grouped editors to alter values without having to type the numbers.

* Navigation to linked resources is now consistent, tapping on it will always disclose it, in the past, some resource required tapping on "..." and then "Inspect".

* Project Settings, Input Map now includes a letters and numbers filter option, to more easily connect keys and numbers to events.

* Simplifies the view switching, rather than using Command-Shift-Number, you can now just use Command-Number

* Added more keyboard shortcuts, they are contextual and visible by holding the command key.

* Performance improvements to the TileSet and TileMap editors.

* It is now possible to alter the scaling behavior in the UI (freeform vs uniform) when resizing objects.

* When you have a hardware keyboard, the shift, control, alt and meta keyboard modifiers can now be used to modify certain operations in the 2D and 3D editors like uniform resizing.

* Made it simpler to set the "Expand" flags when editing a SizeFlags property, it no longer requires opening up a popup menu, and polished the UI.

* You can now drag images into the TileSet editor.

* Error messages are no longer obscured by the disclosure buttons.

* Dividers no longer use a different color, which was making the user interface feel bumpy.

* We no longer reset the help browser position when you switch tabs.

* On the FilePad, Tapping on a favorited folder will scroll down to that folder.

* Modifying numeric values for nodes are now reflected immediately in the object when dragging values.

* Fixed a slowdown during debugging when selecting a remote node that had a preview image.

* Fixed a problem with some array values that could not be reordered.

* Fixed a case where dragging the root node into a child node would remove the nodes.

* Fixed several crashing conditions.

## Build 2353

* Fixed a crash that would trigger when importing new projects

## Build 2299

* Shader Editor now surfaces a "File" menu for common file operations on shaders.

* Added keyboard shortcuts for toggling various user interface elements on and off, running and stopping programs.

* The "Add Node" dialog now has a convenience "ColorRect" added.

* The animation editor will automatically scroll the view as you navigate using the arrow buttons at the bottom of the screen.

* FilePad: added a swipe gesture to delete a node.

* FilePad: input text will now give additional space when editing by hiding unused items.

* Added support for running Editor Scripts.

* Animation Editor has further guiding posts to help you get started, and will now trigger the toolbar keying support for new animations, without requring opening and closing the tab.

* Performance improvements to the TileSet and TileMap editors.

* Now supports other subscription tiers.

* Fixes a bug that prevented games from running twice in some conditions.

* Fixes the list of viewport display modes, we were missing one display mode.

* Changing the size of the text editor now updates immediately.

* 3D Editor: it is now possible to change the color of the sun.

* VisualShaderEditor: it is now possible to add new shader editor nodes.

* Inspector: Fixes an array editor bug, shows the current anchor selection, colors for animation keys can now be updated continuously, 

* Text Editor: Option+Delete and Option+Left now work correctly, and you can jump to a line using the Command-L shortcut.

* Consistency changes to double-tapping on file selectors.

* Xogot would enter dark mode, but could not go back to light mode, this has been fixed.

* Fixed inconsistency of icons in the Add Node vs Scene Pad views.

## Build 2225

* We clear error messages when we restart a game

* Bottom tabs no longer collapse when an action takes place on them (Animations, Sprite Editor).

* By default scripts and scenes are automatically synchronized during development, like Godot on desktop does.

* It is now possible to edit array of NodePaths exported by scripts in the inspector.

* The animation lenght no longer auto-resets to one second.

* It is now possible to zoom out from TileSets and not force the full size.

* Selected Tiles in the Tile pads now get a more prominent selection indicator.

* Rendering options for the 3D viewport now match their descriptions.

* Virtual controllers that were sticky after a game ended now get properly removed from the screen.

* When Xogot is running in half-screen, tapping on the "Script" icon, will now automatically hide the sidebar, so you can see your script.

## Build 2220

This is the initial Godot release to the public on May 6th, 2025
