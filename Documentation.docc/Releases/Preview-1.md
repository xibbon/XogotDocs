# TestFlight Release Notes

Release notes for our preview release of Xogot to TestFlight.

## Release 3947

### Fixes

* Small touch ups to the New Scene Dialog.

* Fixes a crash in the wild related to reloading the inspector (#2394)

* Fixes a crash while searching properties in Turkish (#2400)

* We now use the same icon on iOS as we do on the Mac for showing/hiding the
  inspector.

* Fixes a crash in the wild when activating the context menu on the scenepad and
  file pad.

## Release 3938

### Improvemets

* New Scene has been revamped: it is no longer a popover, but a sheet, which
  fixes a long standing issue that it was easy to dismiss, brings a search UI
  for the case where you are inheriting from (if you had too many scenes, it was
  hard to pick your base class) and allows yuou to pick a location for where the
  scene will be created (#2051).

* We now show a marker next to a function that is a signal handler (#1034) and
  also used colors like Godot for the signal sources and those that are
  connected to make it more clear that they can be interacted with, and they are
  not documentation.

* Animation Player improvements: we now show the current pointer position, we
  also allow the time position to be entered with a numeric input (#2360); Added
  scale increments to more easily tell what the time represents (#2361); Added
  copy/paste support for animations between AnimationPlayer (#2363); you can now
  select keys across animation trakcs (#2362).

### Fixes

* Fixes popups that were not properly positioned in the UI #2304, this
  manifested itself as the AnimationTree showing a the add node popover in the
  wrong place.

* Save Scene will no longer fail silently (#2347, #2348)

* iPhone Stop button was not responding  #2357

* iPhone: array of nodes, assign not working - sheet issue #2358, 

* iPhone: error thrown keeps appearing until close and reopen project, even
  after it's fixed #2359.

* Animation Resource now offers a better default name (Public #107).

* Animation Resources do not load after being saved (Public #106).

* Fixes a crash when editing grouped integer values with overflowing values
  (#2361).

* Fixes a crash in the SceneEditor caught in the wild (#2392).

## Release 3899

### Improvements

* Native Theme Editor is now available - we would love your early testing!

* Switch the subscription page from StoreKit to RevenueCat, and would love your
  feedback!

* More work on reducing battery usage when idling (Godot PR 117113, onion
  animation only uses time if enabled, audio is paused when not in use).

* Supports running games on iPad in full screen, without launching a separate
  window (#2323)

* We now track Godot's editor unfolding rules more closely (#2322)

### Fixes

* Fix AnimationTree: Add node popover sometimes misplaced (#2304, Discord),


## Releases 3879

### Improvements

* AnimationPlayer: now supports Onion Skinning (#1015)

* Improves some confirmation dialog UI, they were too tight (#2292)

* Added support for @icon(#path) annotations (#2305, Discord).

* Additional optimizations to reduce the battery consumption while idling.

## Build 3855/Beta 448

### Improvements

* Added support for the AnimationPlayerEditor dummy playback, to integrate with
  AnimationTree and hooked up various signals so we get the same interactive
  features of Godot (#1026, #1567)

* Been hard at work to improve the performance of Xogot and make it feel
  snappier, lots of fixes from profiling and tuning.

* Identified various idle tasks in Godot that were burning battery and CPU when
  idling, those have been removed.   You can follow our contributions here:
  https://github.com/godotengine/godot/issues/116845
   
### Fixes

* Fixes a crash in the wild with the Skeleton3D editor when dragging other nodes
  into it, this is a Godot bug,
  reported upstream: godotengine/godot#116670


## Build #3835

This is a bug fix release, no user visible changes - but importantly, it
contains internal refactors in preparation for a Mac release.

* SpriteSheetImport: order wasn't applied when importing (#2174).

* iPhone: Fix TileMap paint terrains not working on iPhone (#2176).

* Memory leak fixes.

* Fixes a Godot crash in the wild: a user is doing a close in GDSscript and then
  calling eof_reached on a closed filehandle (#2178, TestFlight).

* Fixes a crash when closing a project.

* Add rescan of resources after extracting data to new file and folders during
  scene import (#2180).

* RangedSlider: Handle degenerate cases, (#2181, TestFlight

* VirtualController appears onscreen after going to CodeEditorUI even if
  controllers are turned off in settings (#2182).

* You can now launch the videos from the learning center while editing your
  project.

* Fixes a crash on the polygon editor (#2196).

* Fix Number entry fields clip after rotating iPad(#2218).

* Fixes a crash when playing an animation and switching scenes (#2239)

* Fixes a crash when nodes on a scene were deleted but you still had a reference
  to them (#2240, #2241, #2256).
  
* Resolves black screen appearing sometimes in 2d and 3d editors when because of
  structural identity loss / change editor view gets blank because leaving view
  removes renderingLayer for upcoming view by mistake.

* Fixes remote sync.

* Fixes a crash in the ProjectManager (#2257)

* Fixes a crash that could occur while going to the background while launching.

* Add rescan of resources after extracting data to new file and folders (#2180).


## Build 3777/Beta 327

* Video content on the learning center now has captions and has been localized -
  we would love your feedback on these.

* Small internal styling improvements, it should not change anything, but it
  made it easier to maintain.

### Fixes

* iPhone: Undo / Redo, 2D / 3D buttons no longer cover the bottom TabBar #2215 - Discord.

* Fixes a warning on the tile set editor (#2214, Testflight)

* Fixes a crash on the popup menu (#2202, Testflight).

## Build 3761/Beta 310

### Improvements

* Vastly improved the performance of the shell when selecting nodes and
  navigating different nodes, this should be a lot snappier - fix courtesy of
  Instrument's SwiftUI monitoring.

### Fixes

* Fixes a crash on Godot's polygon editor (Testflight, #2196)

* Fixes a crash when opening a sheet (Testflight, #2197)

* Fixes a crash on the VisualShaderEditor caught in the wild (Testflight).

* Fixes a crash when you have made changes to a proejct and go back to the main
  screen (Testflight, #2205)

* Fixes a crash in the scene 3D debugging (Testflight, #2206)

* Fixes a crash on various text input fields where we auto-selected text, but
  the text contained complex unicode strings - a mismatch between Swift's
  grapheme-based string indexes and UIKit UTF16-scalar based indexes
  (Testflight, #2208).

* Fixes a crash on code completion on the editor (Testflight, #2210)

* Fixes another unicode crash, because indexes in strings can not be assumed to
  be the same after a string has been lowercased (Testflight, #2211).
  
## Build 3752

### Improvements

* Learning center videos can now be played back from the editor, without going
  back to the learning center.


## Build 3749

### Fixes

* Update mode on the animation track was not showing up for a number of values
  correctly - for example the 'frame' property of a SpriteFrame (Discord). 

* Remote debugging sync with 4.5

## Build 3742

### Improvements

* Added video tutorials to the learning center.

* Improves handle editing on the Animation Bezier track.

* Improves panning on Mac, where the dragging felt choppy.

### Fixes

* Fixes a Godot crash when a user would close a file and then call eof_reached
  which would crash the editor (Testflight, #2178)

* Fixes a crash when audio notifications were arriving after a game stopped and
  could crash the editor (Testflight)

## Build 3725

* Improves panning speed and choppiness on the editor, should feel more natural now.

* Internals that should reduce a class of crashes when closing a project.

### Fixes

* Fix AnimationPlayer bezier editing #2172

* Makes our slide-editor more tolerant to invalid data surfaced in the property
  editor (#2181)

## Build 3725

We are moving Testflight to version 4.5.1, so that is the major change in this
release.   The Godot engine is now built in release mode as opposed to debug
mode, so many operations (in particular importing) should be vastly faster.

### Fixes

* Animation when switching the bottom bar pads should no longer feel "jumpy"
  (#2162). 

* Fixes a crash on the context menu on the file and scene pad caught in the wild (Testflight)

## Build 3711/Beta 229

### Improvements

* When reimporting a resource on the import panel, we now show how long it took
  to do so.

### Fixes

* Fixes an iOS to iOS pairing via pin bug.

* Fixes a crash while closing a project (#2137, Testflight)

* Improves Project Reload, fixed two problems related to the reloading that
  could sometimes trigger a crash during the reload operation (Testflight).

* Fixes ConnectSignalToMethod that was not respecting the tab vs spaces setting
  (#2138, Discord).

* Fixes a crash on QuickOpenDialog when the data was filtered, and the user
  pressed the return key (#2139)

* Reduces memory consumption after rendering a preview image.

* Fix TileMap: Missing delete pattern (#2144, Discord)

* Fix TileMap: Scattering adding first tile in place where should be empty tile
  (#2145, Discord)

* Fixes a crash while importing scenes that contained animations

## Build 3693/Beta 222

Beta incorporates all the improvements of 3657 that were not part of the last
cycle.

### Improvements

* Inspector: now supports Theme Overrides, a feature that was not properly
  baked.  Now we let you flip them on and off (#2063).

* The FilePad now supports Control-click and command-click modifiers to manage
  the selection if you have a keyboard (#942).

* Xogot is now localized to even more languages.

* We no longer reset the default page on the launch screen when Xogot goes to
  the background ()

### Fixes

* Scene Pad: Show a label when we run out of space on the sidebar toolbar 
 #2118.   This was showing as an entry with no text.

* Fix CommandPalette: Calling to open scene that is already opened in another
  tab doesn't switch tab 

* UI: Fix Scene Tab asymmetric padding(#2120, Discord)

* Fix black rectangle when Camera3DPreview rendered in a Window with native
  surface set.   This was an upstream bug in Godot, but it is more pronounced on
  iPad.

* Thoroguh fix for bug #2095 where we would sometimes not show a Godot
  component in the inspector, or sometimes it would show up as black.

* Fixes a crash on the CodeEditor while performing completions (Testflight,
  #1753).

* Fixes a crash on the Tile Editor caught in the wild (#2123, Testflight).

* Improves TerrainSet: We fix the way selected tile properites are computed into
  property bag and now terrain peering bits appear as they should, second part
  of fix is occlusion layer wasn't properly parsed and it wasn't getting
  Polygin editor in inspector that is fixed now too along with's get/set methods
  so ti works good now (#2127 and #2125, Discord)

* When creating a shader, we now implement the same heuristics as Godot to give
  you the best shader type based on what it is being attached to (#2124, Discor)

* We no longer display an extra Resource tab when picking a Scene, it was
  useless and users could get unnecessary errors (#2122)

* TileSet: Fix scattering option missing in TileMap when random was toggled on
  (#2129, Discord).

* Fixes another crash in the wild #2128.

* Fixes a crash when editing CollishionShapes caught in the wild.

* Fixes a crash when the GameController was being used and you were stopping a
  game (only in the non-Beta release, fix coming to the beta soon).

* Fixes Xogot Connect version reporting.

## Build 3657

### Fixes

* Inspector: Partial fix for hosted views in Godot being show on the inspector,
  it also speed things up by not reloading the inspector when the embedded vide
  becomes visible again (#2095 - partial)

* Hides that purple dot in the screen (#2114, Discord)

* Fix polygons delete button deleting all nodes #2115.  We have now dedicate
  menu with various options you can do on polygons so this mode is not needed
  any more, delete button and delete mode will always let you delete one by one
  now and clear inside menu will just remove all nodes

* Remove custom data that has any type, godot doesn't let you use it, so we also
  remove it now (#2116).

* Fixes a heavy crash in the wild that might have been introduced by the support
  for quit() (#2092, Testflight)

## Build 3645/Beta 204

### Fixes

* Fixes for a crash in the wild related to invalid coordinates being computed
  (#2108, Testflight)

* Fixes for a Runestone crash in the wild involving selection (#2109,
  Testflight)

* Fixes get_scene.quit() to return Xogot to the editing mode (#2092, Discord).

* iPhone: Removes the inspector convenience button that we had on the left
  sidebar because now we have a more convenient gesture, and because it was
  taking precious space that was taking over the "Add Script" button.

* Fixes playing animations in AnimationPlayer that are loaded from Library
  (#2111, Discord).

* Draw lines for polygon shape under construction that is used for collision and
  navigation layers (#2112, Discord).

* Fixes the keyboard not showing up on iPhone 15 pro max (#2113, Discord)

## Build 3633/Beta 201

### Improvements

* It is now possible to use the Arabic and Korean keyboards among others in the
  code editor.

* Creating a new scene will be done relative to the currently selected item on
  the file pad (#2050, Discord)

* Polygon Editor in the inspector: Improved the Polygon tool's touch targets (#2104, Discord).

* Polygon Editor in the inspector: This includes reset to default tile shape,
  clear, rotate and flip options (#2107, Discord).

* fixed TileSet custom data field edit, updated custom data layer names in
  select mode to reflect layer names (#2106, Discord)

* TileSet: make the delete option easier to reach, not behind an ellipsis menu
  (#2100, Discord).

### Fixes

* TileEditor: the scene collection will update after changes (#2101, Discord).

* TileEditor: after you merge a tile in the Atlas editor, the popup now goes
  away (#2102, Discord).

## Build 3619/Beta 197

### Improvements

* When you create a new Scene, it will default to be placed in the directory
  selected selected on the FilePad (#2052)

### Fixes

* New scenes will be visible after they are created (#2052, Discord).

* Skeleton3D Editor: fixes a crash (#2099, Testflight)

* Fixes a Vector editor crash that we saw in the wild (#2089, Testflight)

* Prevents a crash on invalid timeline definitions (#2097, Testflight)

* Fixes a crash that happens during the theme change, dangling pointer access in
 Godot (#2096, Testflight).

* Fixes a crash when creating a new script under certain conditions (#2085,
  Testflight). 

* Fixes a crash on the Sprite2DEditor (upstream Godot bug)

* Fixes a crash when you switch the current scene from a _ready handler, only on
  the Xogot Beta build 

## Build 3606/Beta 190

### Improvements

* iPhone: the keyboard accessory went on a diet, the copy/paste action were
  repetitive as these have standard idioms on iOS, and we gained a new "hide
  keyboard" and undo/redo now share a slot (long-press to redo). (#2078) 

* iPhone: on the search tab, the search button is triggered on your current
  selection.

* The Editor/Run configuration for "Run Action On" now supports open-output,
  open debugger or none.  Same for stopping. (Discord)

### Fixes

* Fixes various crashes that were logged via crash reports: a crash on scene
  import (#2082), crash on certain node renames, a crash on tile set editing
  (#2084), a crash on the code editor, two crashes during importing projects, a
  crash on the file picker,  crash while triggering some forms on iPhone (#2007).

* iPhone: The keyboard accessory would not re-adjust after a rotation (#2080).

* iPhone: fixes the search option for 'go-to-line' that would sometimes not
  work, even if you had an open file.

* Audio Bus/Add Effect can now be used on iPhone.


## Build 3590

* Experimenting with the Scene Tab navigator on the iPhone too.

* XogotBeta: bring a few fixes that were missing from the main branch, due to a
  partial merge.

* Fix another assumption in the code that would trigger incorrect placement of
  buttons on the iPhone Max.

## Build 3587/Beta 182

### Improvements

* We are bringing the pre-compiled Shaders back into Xogot, which should help
  startup performance as fewer shaders must be compiled when the editor starts.

  We used to have this a long time ago, but we disabled shortly before the Xogot
  official launch, I am enabling it, as I got a chance to identify the root
  cause of the bugs that this introduced back in March.

* Command Palette uses a bit more space, and the image previews are slightly
  larger along.

* The Command Palette when directed to load files will now load the file listing
  upfront.

* The XogotShell no longer triggers the command palette when tapping again
  2D/3D, I found it confusing - but the document icon will, like it did before,
  and is replaced by the Command Palette.

### Fixes

* Fixes the sidebar position on the iPhone in landscape mode.

* Should fix the UI on iPhone Max when rotating the UI (Discord).

## Build 3582/Beta 179

### Improvements

* iPhone: Fixes various papercuts in the search tab #2069, now tapping on
  different filters will update the results without typing additional text, it
  will now auto-close the search when you take an action, automatically selects
  the text input.

* iPhone: synced the fact that our iPhone tabs are not exacly the same as the
  iPad tabs, and we need to propagate some state.

* iPhone: Fixes the sizing after rotation, the bug was alwasy present, but the
  new TabView made it more pronounced (#2077)

## Build 3575

* iPhone: Small fix for the new tab view

## Build 3573/Beta 176

### Improvements

Embraced the new search UI idioms on iOS 26 on iPhone, this required a rewrite
of the toolbar on the iPhone, but we get the intended experience and a little
bit more control of the toolbar now.   Would love for folks to test if I got all
the details right.

Also replaced the Command Palette on iPhone from showing a list of guides to
search for similar to what Slack on iOS does.   This was inspired by the Liquid
Glass presentation from Slack.

### Fixes

* Fixes a crash on the tileset in the wild (#2067, TestFlight)

* Fixes the new scene tabs when adding new scene scene view turns black (#2068,
  Discord). 

## Build 3568

### Fixes

* Fix TileSet: Collision layer position mismatch (#2066, Discord)

## Build 3564/Beta 173

* iPhone: additional Liquid Glass work, this time, the UI has been moved to use
  a tab-view inspired by recent Apple talks covering migration to Liquid Glass.

  This vastly simplified the two menu entries that we had (the Scene/Project)
  and another for the editor.   They are now both more consistent as I managed
  to redistribute some of their tasks to the TabView and narrow their roles and
  this helped clear up a little the menus and make it much more finger-friendly.

  The "Search" tab on it triggers the built-in universal search as well (Command
  Palette).

* Scene tabs: you can now navigate your scenes using tabs.   This takes some
  vertical space, but I think it is vastly more convenient than the switcher we
  had on the menu that was getting tiresome.

* Implements 4.5 support for
  text_editor/behavior/files/drop_preload_resources_as_uid

### Fixes

* An elusive bug that we have been monitoring on Testflight that had an
  impossible stack trace has been fixed - I happened to run into it in person,
  it affects iOS 18 users, and it would crash Xogot if your pressed the [x]
  button on the Command Palette (#1939).

* Fixed the color background for multi-line inputs on the inspector, they were
  hard to distinguish from their label (#2064).

* Fixed a rare problem where the theme of elements in the 2D editor was using
  the Editor theme instead of the game theme (#2060, Discord).


## Build 3557/Beta 170

### Fixes

* SpriteSheet: Import grid misalignment (#2057, Discord)

* Search on the inspector was not matching properties correctly (#2058, Discord)

* Fixes a crash in the resource previewed when the bitmap importer was triggered
  (#2061, Testflight, upstream bug)

* Fixes a crash in the debugger at startup (#2062, Testflight, upstream bug).

* Fixes the errors when embedding Godot controls in the inspector that rendered
  some warnings when activated (#2038, Discord)

* Fixes Godot embedded controls sometimes not showing up in the inspector
  (#2040).

## Build 3539

### Improvements

* Numeric Input will now allow you to set the negative value before you start
  entering numbers, before you had to had a non-zero number before it would
  recognize it (Discord).

* "Memory Usage" option has been renamed "System Information" and includes build
  version and various other memory statistics.
  
### Fixes

* Fixes a crash when the the debugger disconnects before the debugger starts up
  (TestFlight).

* Delay accessing the network until the user requests it.

* Prevents a crash when a script is unloaded (#2055)

* Do not auto-capitalize your scene names when creating a new scene (Discord).

## Build 3529/Beta 161

### Improvements

* Added a convenient "Download from GitHub" option that downloads a project from
  GitHub to get started (#1994).

* Built in TexturePreviewer, which uses fewer resources and works around a bug
  that we are working to identify (#2038).   It is also snappier.

* Removed the "Swipe to Delete" gesture from directories, as it is not too
  common.

### Fixes

* Fixed array editing in the Project Settings (#2015)

* Prevents a crash during drag and drop (#2031, TestFlight)

* Properly reports rename errors, and also improves the Rename File dialog to
  auto-select the file, without selecting the extension (#2030, Discord).

* Another attempt at fixing the crash on the keyboard layout guide that
  sometimes gets triggered (#2032, Testflight).  We have tracked this down
  to a bug in SwiftUI on iPhone, and we have added a workaround.

* Fixes a race condition in Godot that crashes the editor when closing a project
  (#2034, Testflight).

* Fixes a crash on the text editor when attempting to highlight a line that has
  been removed (#2033, Testflight)

* Fixes a crash when starting a game, related to the Virtual Controller
  initialization.   We finally tracked down our major source of crashes (#1920,
  related to #1633 - Testflight)

* Fixes a problem with remote debugging (#2026, Testflight)

* Fixes instantiate menu option on the FilePad not working (#2036, Discord).

* Fixes "Open in Files" not working (#2039, Discord)

* Fix Inspector: resource editor misplaces icon when texture is loaded #2041

* Fix CodeEditorUI: completion popup size issue #2046

* Fixes some bugs in the remote debugging support, stemming from older
  non-thread safe code (Testflight)

## Build 3501 (beta 151)

### Improvements

* Improved our numeric input controls - it no longer roundrips data to strings,
  so it should keep the precision just as you see it.   This fixed a handful of
  small usability problems too with numeric input, and would love if you could
  test this.

### Fixes

* Fixes "New Shader Global" regression, it was not possible to add new shader
  globals (#2016).

* Fixes a crash related to the gizmo display update when the selection changed
  before the finger was lifted (Testflight, #2023)

* Fixed ranged input on the project settings, which was getting choppy (#2017)

## Build 3484

### Improvements

* Feature Tags are now supported (#614) so you can more easily have conditional
  code in your games.  Learn more here
  https://docs.godotengine.org/en/stable/tutorials/export/feature_tags.html

### Fixes

* Caught another crash in the wild that should now be fixed (Testflight)

* When you use the command to show the file in the FilePad inspector
  (Command-Shift-J), we will now open the sidebar if it is closed.

* Fixes running from a "Run Scene" that sometimes might not initialize correctly
  (#1996).

* It is now possible to create ShaderInclude resources without getting a warning
  (#1992, Discord)

* Workaround for a SwiftUI problem when you shrank the window and it would crash
  on you (Testflight)

* Fix for a crash when trying to setup a remote debugging connection (#2005,
  Testflight).

* We now react to changes on resource objects, before you had to navigate
  back/forward in the inspector.  #2004. This worked for Nodes, this was just a
  special case for Resource editing.

* Paywall will not show up on first use anymore.

* Prevents a crash if we attempt to switch the theme color before Xogot starts,
  or just after it is shutting down (#2010).

* Fixes an importer loader crash (#2011).

* Prevents a crash on the numeric input (values larger than Int crashing when
  editing Int values - #2012).

* Prevents a crash when the user switches a scene, but was playing an animation
  (#2013).

## Build 3457

### Fixes

* Fixes a crash in the wild in the Tilemap editor (Testflight, #1977) when the
  following condition took place: 
  - Create pattern in TileMap bottom menu
  - Select probability mode on (dice image)
  - Paint some pattern with this mode on over TileMap layer
  - Go to TileSet delete one of tiles that was part of pattern
  - Go back to tile map bottom panel selction and try to paint pattern again

* Fixes a crash when drag and dropping a node (Testflight, #1978)

* Fixes a Godot issue related to the Skeleton3D editor that would sometimes
  crash (submitted upstream) (Testflight)

* Fixes an issue with the Keyboard layout on certain locales that started
  happening in iOS 26.2 beta.

* Fixes a crash if you delete an animation key and then press the next button
  (#1983).

## Build 3440

This contains a large upgrade where we centralized the value editing for numeric
values in the inspector, but also in other places that used our pop-out editor.
This is one of the necessary steps to make Xogot better on Mac, and eventually
on VisionOS.

### Fixes

* Fixes a recent regression: When specifying a line in the Command Palette for a
  filename, it will now navigate to the specified line (#1961).

* Proper fix for the leak in #1943, which is also a better fix for the original
  issue that caused the leak #1681.

* Fixes for right-click not selecting a row in the ScenePad, this has been an
  ongoing challenge with SwiftUI - we finally had to drop to UIKit to solve this
  (#1502).

* 4.5.1: Fixes a crash on the initial import process (#1964).

* Fix for Path2D: last point gets removed #1974 (Discord)

* The toolbar controls will no longer move decoupled from the toolbar itself
  (#1156).

* Added localization to a handful of places that were missing it.

## Build 3423

### Fixes

* Fixes a big leak that would be triggerred every time you ran a game, this
  addresses the major source of leaks but there are a handful of smaller leaks
  still present (Discord, #1943).


## Build 3413

### Improvements

* Improved encoding of paths when dragging scene pad nodes into the text editor.

* GLTF Exporter now uses our own numeric input pads, so that we do not get a
  full keyboard popup.

* Property inspectors for Ints and Floats now use the same infrastructure as
  vectors, which should improve the input when running Xogot on MacOS.

* Search in Files: The "Replace" button will now automatically navigate to the
  next match after performing replace.

* Command Palette: filtered some internal Godot scripts that are not available
  on iPad, and added a new "Find in Files" command.

* Command Palette: you can now access it as "Command-Shift-P" which defaults to
  command search, similar to VSCode.   And the spaces after the ">" in the
  Command Palette are ignored when searching for a command.


### Fixes

* 4.5.1 only: fixes a number of bugs in the port to 4.51, in particular the
  identity of objects that would have mismatches in the user interface (#1932).
  This did manifest in the 4.5.1 branch as the animation tab picking the wrong
  object after opening and closing a scene.

* Fixed automatic pairing for Godot Extension when logged into the same account.

* Fixes crash when stopping remote debugging: Fixes #1927.

* Remote Debugging: Fixes connections over TCP when there are multiple
  interfaces available to choose from.

* We no longer attempt to trigger an action when tapping on a directory
  (avoiding a warning on the console output - #1941).
  
* Fixes dragging of a directory onto itself, #1942.

## Build 3395

### Improvements

* Added support for Godot's dynamic path sections, used in the Bone editor, so
  now the bone elements are visible (#876)

* Added support for Godot's "Recovery Mode", if Godot crashes at startup, we now
  offer the option of strating the game in recovery mode, where various plugins
  and features are disabled to help you restore your project to a well know
  state (#1915).

* It is now possible to drag and drop multiple nodes into the editors (#1896)

* Added support for gLTF 2.0 exporting (#1799).

* All the multi-value numeric editors in the inspector (Vectors,
  Transformations, Planes, Basis and so on) were refactored so that we can
  support on MacOS in-line text editing, rather than the popups that we have
  now.
  
  We are still pending the single-value editors for numbers.

### Fixes

* Fixes a crash in the wild where a confirmation request came while attempting
  to open a file (#1922).

* Prevents a crash that would happen if the Camera3D Preview was active, and the
  ProjectSettings changed (also submitted a fix upstream to Godot).

* Prevents a crash when an invalid terrain ID was passed to the terrain editor -
  this would happen when you delete the last terrain (#1923).

* The pairing code can be used if you are already logged in as well.

* Skeleton3D plugin no longer adds additional toolbars over and over (#1881).

* iPhone: fixes In 2d editor, settings has a visual bug where half the space
  appears blank (#1925).

* Inspector: it no longer capitalizes the first word on a text input field
  (#1926, TestFlight feedback)

## Build 3363

### Improvements

* Inspector gained support for typed dictionaries from Godot 4.4 (#1111).

* The multi-finger gesture for undo and redo is now part of the release
  build, not just testflight.

* It is now possible to pair a device for remote debugging using pairing
  codes, not just being logged in.

### Fixes

* Crash in the text editor in iPadOS 26.1+ (#1910).

## Build 3352

### Improvements

* iPhone: using a drag gesture from the edge of the screen should either open
  the inspector or the scenepad/filepad - similar to what other apps on the
  iPhone do, which should make it easier to access content.

* iPhone: it is now possible to scroll the tabs without triggering a reodering
  operation (#1907, Discord).

* Script editing node should be visible in the inspector now for Nodes and
  resources (#1912, Discord)

* Adds more features to the free edition.

## Build 3345

### Improvements

* iPhone: the sidebar and inspector will no longer cover the entire screen, but
  leave some space that can be tapped to dismiss, like other apps on iOS do.

### Fixes

* iPhone: in settings the search bar will no longer cover the editing input
  (#1906)

* Gesture-based undo fixes: zoom gesture should no longer trigger undo, and the
  undo gestures on the code editor should no longer be undoing changes on the
  scene editor.

* Numeric Input: second attempt at fixing the display values from the last
  release (#1903, Discord)

## Build 3337

### Improvements

* Quick Open and Command Palette: they will now show image previews for any
  assets loaded (#1812).

* Keyboard users: if you press the control or command key when you drop a scene
  node into the code editor, it will insert an '@onready' variable declaration,
  instead of just inserting the name.   Implements a long-standing feature
  request (#973, #1701, Discord)

* Keyboard users: FilePad dragging gets new benefits as well, if you press the
  control or command key when you drop a file into the editor, instead of just
  inserting the path, it will insert either `preload("PATH")`, or if you drop on
  an empty line `const VAR = preload("PATH")`.   Additionally, if you press
  shift, on Xogot 4.4, it will insert the UID reference, on Xogot 4.5, shift
  prevents the use of the UID.   (#1702 4.5)

* XogotBeta (4.5 release): Adds support for Variants to be exported, so now you
  can export a Variant and change the type on the inspector (#1704, 4.5)

* You can now sort the Animation Tracks (#1708 4.5)

### Fixes

* Numeric Input: It will now display values even if the value is still zero (for
  example when typing 0.0 we would just show a zero until a value was entered
  that was non-zero, like 0.01).  (#1903, Discord).

* iPhone: Game Tab now display items in a list, not as a grid, which gives was
  very crowded and looked bad (#1895)

* Attempt to get terrain plugin to work on Testflight.

* Undo/Redo gesture was incorrectly bound to 2-taps and 3-taps respectively, but
  it should have been single-tap with 2 fingers, and single-tap with three
  fingers (#1827, Discord).

* iPhone: removed additional colors on the viewport settings that were looking
  very bad on iOS 26.

## Build 3320

### Improvements

* Inspector: Remote debugger now supports fetching contents of a remote object
  when tapped on (#1571)

* BottomBar animation: it is back in its full glory, and the animation is smooth
  and consistent, thank you for your patience during this rough period (#1784).

* Autoloads are now part of the free edition.

* New Color palette toolbar item in the code editor, to insert colors in the
  code (Discord)

### Fixes

*  CodeEditor: tapping indent button in keyboard toolbar doesn't work
   consistently (#1890, Discord).

* Fixes an order condition that prevented certain file types on the FilePad to
  default to the previous directory, rather than the highlighted directory
  (Discord). 

* iPhone: fixes a bug where suggestions were not displayed on the Command
  Palette (#1892, Discord)

* FilePad: it no longer stays dimmed after dragging to close (#1894, Discord).

## Build 3294

### Improvements

* Support for External Displays: while you can move windows manually into the
  external display with Stage Manager, we now support explict support for
  running your game on an external display, without having to manually manage
  the windows yourself.   This pairs great with an external controller.

  Addresses #1173, #1285, #1286 (Discord/Testflight feature requests).

* Remote Scene View: you can now toggle on/off individual nodes and these will
  show hide the nodes in the running game (#1868)

* 2-taps on the surface will trigger an undo operation, and 3-taps on the
  surface will trigger a redo operation (#1827, public request #44).

* When running, Godot by default will open the "Output" panel, which works great
  on iPad, but on iPhone it covers too much of the screen.   We exposed the
  underlying setting now in the Xogot settings, so you can configure it to not
  open the output pad at startup.

* AnimationEditor now supports negative key values (#1074).

### Fixes

* Removed some animations from showing up the bottom panels as they were not
  perfectly in sync (the contents, the undo/redo buttons and the bar).   We will
  bring it back once we harmonize all three.

* Small fix for properties that were defined with spaces in Godot and could
  trigger a hang in Xogot.

* Prevents a crash when closing a project in some rare conditions (the fix for
  this long-standing issue had introduced a regression).  Fixed.

* The AnimationPlayerEditor had some very large icons as part of making them
  more tappable, we adjusted the sizes to be both tappable and good looking
  (#1859). 

## Build 3257

### Improvements

* Distributes the [Terrain3D](https://github.com/TokisanGames/Terrain3D) runtime
  for Godot from TokisanGames.   If your project already includes it, Xogot will
  dynamically replace it with the bundled version, allowing your game to work
  with it.    The UI for Terrain3D has not been updated to be mobile friendly,
  but the keyboard shortcuts should work. 

### Fixes

* Fixes a crash when undoing operations on Polygon2Ds and bones.  Fixes
  https://github.com/godotengine/godot/issues/112203

* We have fixed a family of bugs that could crash Xogot when closing a project,
  as well as some crashes that were being triggered by starting a game before it
  fully launched, leading to two games running at once (#1878, #1877).

* Fixed a family of bugs related to a misuse of the BottomBar in Xogot.

## Build 3239

### Improvements

* Remote Debugging: provides guidance if the user has not allowed network
  connections for Xogot when attempting to connect to a peer iOS device (#1873).

### Fixes

* Workaround for a crash on iOS 26.1 Beta (23B82), the AI writing tools is
  crashing when text(in:) returns nil (for example, when invalid data is
  requested).   For now, we return an empty string instead of a nil to prevent
  the crash.   (#1874, Discord)

* Ongoing stabilization fixes for cases where the user is closing a project
  down (TestFlight data)

## Build 3230

### Fixes

* InputMap was crashing when it was being activated for the first time
  (TestFlight).

* Fixes a crash that caused launching a game to crash, and also broke remote
  debugging (Discord).

## Build 3219

### Improvements

* Requests to keep the screen on during game play will be honored (#1840).

* Bottom bar panels will no longer cover the text editor (Discord, no bug
  report).

* During remote debugging, both the editor and the game will disable the screen
  idle timer, to prevent the session from disconnecting in the middle of
  debugging (More comprehensive solution for #1790)

* TileMap and SpriteFrame Editor will now scale the tiles directly, to get crisp
  images rather than relying on the system zoom which would interpolate the
  images (#1866, Discord).

### Fixes

* A family of crashes that would trigger when closing a game has been fixed.
  This is not exactly easy to reproduce. 
  
## Build 3193

### Improvements

* Remote Debugging: reduce the timeout that we have to wait for a connection

* The command palette is no longer limited on the iPhone, as we can use the
  entire sheet size (#1746).

* Speed up running loading and running projects that happen to be hosted on a
  remote server.   We did this by disabling a well-intentioned, but poorly
  placed file system case detection piece of code.   I have filed     https://github.com/godotengine/godot/issues/112020

* iPhone: new option to run a game in a dedicated window in the game tab
  (#1834).
  
* When loading, we now pulse the icon for the folder, rather than have a
  separate progress view indicator that I could not align.

* Animation editor: rendering optimization that makes it faster to redraw when
  there were too many tracks on an animation (#1845).

### Fixes

* Fix a layout issue that happens sometimes on the project launcher.

* Attempt to workaround a Swift bug on iOS 26 that would sometimes crash when
  trying to detect the system.   This was originally limited to the iOS 26 beta
  1 users, but we have found at least one crash that happened on 26.0.1.

* Fixes the ScenePad not showing up to date information for new items (#1865).

* We no longer poll deleted track objects (#1363), which reduces the warnings on
  the console.   It was harmless, but wrong.

## Build 3165

### Improvements

* When you run a game from the main screen, or under remote debugging, you can
  now toggle the safe area region (so you do not get blank bars on the sides),
  toggle the visibility of the toolbar and we give more space to your game by
  removing the toolbar and using a floating dock for it (#1853, and public bug
  #28).

### Fixes

* iPhone: makes it so that you can create a game in landscape mode, as the
  button was not visible (#1752).

* TileMap: fixed support for 'one way' physics toggle (#1854, Discord).

* iPhone: Moved the 'Settings' menu from under the Xogot menu to the equivalent
  menu of the iPad (#1848).

* Remote debug: Enable "Search Peer Devices" will now activate as soon as you
  login (#1849)

## Build 3148

### Improvements

* Bring BBCode rendering to the output view (implements feature #574)

* Add support for showing remote objects on the inspector (#1224).

* We no longer zoom into non-Bezier tracks on the animation player editor.

* SpriteFrameEditor: add cut/copy/paste support for sprite frames (#1843).

### Fixes

* The user had to create a new animation twice, before the animation would be
  created.

* Bezier animation zoom out button: it was hard to tap, it is now easier to tap.

* Bring back Command-O as the global open shortcut on all iOS versions (#1838).

* iPhone: Fixes an annoying popup on the phone (#1780).

* Remote Debugging: it will no longer require a refresh to start displaying the
  game.

* Remote Debugging: play button will now start on the remote device if active
  (#1822).

## Build 3125

### Changes

* Open command is now Command-Control-O, since we can not always override Command-O to be open, and it would fail to open sometimes.

### Improvements

* We now provide guidance to users if their tiles from a texture are incorrectly
  configured (#1841).

* After you create a directory in the Filepad, it is now selected after creation
  (#1805)

* iPhone: will stay on the "Remote" tab after a remote session completes (#1821)

* Game: will put the display in "do not sleep mode" (#1790)

* Game Shell: provides a button to expand over the safe areas (First part of #1846).

### Fixes

* iPhone: Fixes the sidebar on first rotation (#1835)

* Fixes debugger logging errors (#1844)

## Build 3108

### Fixes

* We now use our FloatingWindow for various popovers and negotiate the size for
  some of these, this fixes the Mesh dialog display and also adds the ability to
  close these popups from a native UI.   Fixes #1813 and #1583 (Discord,
  TestFlight).
  
* Fixes linked value editing in the numeric editor (#1817).

* Properties that are supposed to be linked (like a Node's transformation scale)
  are now linked by default, and the setting will be preserved across the type,
  just like Godot on desktop (#1816)

* iPhone: no longer shows the invalid option "Start on New Window" a recent
  regression #1832, TestFlight.

## Build 3098

### Improvements

* BottomBar resizing should be faster, as it now tracks the finger, rather than
  trying to animate the resizing as you drag (#1824)

* When switching code editor tabs, we automatically focus the new tab (Public
  bug #62)

### Fixes

* Controls in user extensions will show up on the inspector, this functionality
  regressed recently as part of some performance improvement work on the
  inspector.   This also fixes a long standing issue where every-other control
  embedded would show up, not all of them (public bug #73, #1815)

* Remote debugging fixes for cancelling sync when debugging, : Fixes #1797, Fixes #1801, Fixes #1800.

* BottomBar panels will automatically open when they are triggered by Godot,
  this might be slightly too much on iPhone, we are looking for your feedback
  (#1819).

* Xogot will remember the size of your bottom bar tabs (#1825).

* Remote Debugging: Cleans up the state after a failed connection (#1823).

* Inspector will now activate bottom bar items as the components change on the
  inspector - this used to work, and it regressed during our performance
  optimization work (Fixes #1820).

### Internals

* Removed some native Godot code we do not use (#1818).

## Build 3087

### Improvements

* iPhone: Shuffled the tabs in the phone to place more important items on the
  display

* When importing files with the system File Picker, if you pick files across
  directories, the hierarchy will be preserved, which will make it easy to
  import 3D models that come often with a "Textures" directory and colormaps
  along with models.

* Tuned the BottomBar/Output View controls, so that the trash can is easier to
  tap, but also aligns the text.

* Clipboard operations will now be supported in embedded Godot controls

* Will now ask for reviews

* Improved our AnimationPlayer's Bezier editor - since this needs more space, we
  zoom in when selected, so the users can more easily modify the values, and we
  will now auto-adjust the values on the view.

* The accessory bar now also includes the equal sign (#1711) - we had previously
  implemented this, but had not merged the change - apologies.

### Fixes

* Remote Debugging: fixes an issue when loading resources

* Fixed a cropping issue on the multi-mesh instance configuration popup.

## Build 3070

### Improvements

* Add 'Submit for Publishing' option to game upload.

* Add support for exporting a scene to a mesh library (#1794, Discord).

### Fixes

* Fixes a text editor crash in the wild (Xcode crash)

* Fixes a Sprite Sheet Importer crash when a user managed to trigger a scenario
  with zero columns or zero rows (Xcode Crash)

* Fix Output: Cannot scroll warnings or errors on output tab #1793

## Build 3055

### Improvements

* Animation Editor now has support for "Add Easing Keys" (#1076).

* Animation Editor now has support for selecting multiple keys.

### Fixes

* StringName properties in array properties were not being shown on the
  Inspector (telemetry).

* Grid Visibility toggle will now correctly toggle (telemetry)

* Add Track not working after scene pad node selection change (#1778, found
  internally during testing).

* Fixed a family of memory leaks that we discovered during testing on the
  AnimationPlayer editor (#1779, #1782).

* Some properites on the track editor were not updating (#1783, internal
  testing). 

* iPhone: play button missing in toolbar #1781

* Node picker allows the selection of nodes from a subscene (#1787,
  Discord)

* XogotUI: lack of precision in editors that had large step values.

## Build 3039

### Improvements

* When editing Path3D objects, a new option was added to the Path toolbar that
  allows you to control the handles of a node - when you have a keyboard, the
  regular node selection with shift would work, but this allows folks with only
  touch input to use the feature effectively (#1551).

* New command (Command-Shift-J shortcut) that will highlight the current item
  being edited (the text file or scene) in the FilePad to quickly locate its
  environment (#1332).

* We no longer display the project name on the toolbar if you are editing a
  scene, we only show the scene name, as this was taking too much space and
  squeezing important icons.

* Another fix for the double-start process that is being triggered in the wild
  due to what we believe a UI layout issue triggering the run action twice.

* The command palette is now also available from the menus for iPads running iOS
  18 without a keyboard (#1765)

* When opening files from the command palette, we no longer auto-open the
  inspector for text files or scenes, as that is never likely the intended
  action (#1769).

* The help elements in the Command Palette are now tappable, and they inject the
  text to trigger the action (#1765).

### Fixes

* iPhone: the Add Node button no longer vanishes if you have a node selected
  (#1758), along those lines, preemptively provide proper labels and icons
  across the toolbar, as we suspect SwiftUI was not showing some elements
  because we only had icons.

* Input is no longer routed to the ScenePad/FilePad if you were searching and
  you triggered a dialog (#1760).

* Fixed the remote sync login.

* Fixes a crash caught in testflight in the AnimationPlayerEditor involving
  color tracks (#1774)

* Command Palette will now correctly jump to the line of a file if you specified
  it, when the file had not been previously opened (#1770)

* Command Palette will no longer use smart quotes by default when typing text
  (#1766). 

## Build 3016

### Improvements

* iPhone: when editing a single numeric value, if you tap the "return" key, this
  dismisses the sheet.

* Numeric input now will use "," as a decimal separator if you have chosen this,
  and we updated the numeric input to also display arabic numerals if your
  language is set to Arabic.

* Delete node confirmation has been moved to a native dialog (#1550)

* AnimationPlayerEditor: the track sizes are larger now, to ensure they are
  easier to tap (#1355).   We had previously tried to cut some corners in terms
  of size, but human fingers did not shrink fast enough for us to ship this interface.

* More features to manage your uploaded games.

### Fixes

* Command Palette: tapping on an entry will actually trigger it, not trigger the
  selected item (Discord report).

* iPhone: The keyboard will hide when toggling the sidebar.

* Fixes a crash when starting up a game (#1728)

* UI glitch on the project launcher (#1756)


## Build 2993

### Improvements

* Improve UX for Dictionary/Array editing, will start pushing nested untyped
  arrays in NavigationStack rather than displaying sheet one over another
  (#769).
  
* The Shader File menu now has a "New Shader" convenience menu (#1675)

* The iPadOS menu for Xogot settings now opens the app settings, instead of the
  OS provided settings.

* Command Palette will now trigger the action on tap.

## Build 2985

### Improvements

* Additional icons for some menu items, so things align better on iOS 26.

* We now show a small counter on the File menu when there is more than one scene
  opened (#1726)

* Go-to line command now uses the Command Palette instead of the old UI on iPad.

### Fixes

* Command Palette: fixes the search command feature (#1741)

* Output pad now responds to the shortcuts (#1742, Discord)

* Various fixes and touch ups to the numeric data intut on the inspector (Fixes
  #1743 reported in Discord and three-four papercuts in the UI)


## Build 2976

### Improvements

* It is now possible to use keyed animation that target resource properties in a
  node (#1729, Discord).

* Small UI touchups in a couple of dialogs that were missing space or were
  formatting text incorrectly.

* The Output panel now has selectable text (#1736).

* Command Palette now also surfaced user-defined commands, and starts to support
  Xogot-level commands.

* Connect Signal dialog now select first node with script (#1063).

* Now available in Italian, Czech and Dutch.

## Build 2964

### Improvements

* To better support iPadOS 26, when games are launched on a dedicated window, we
  now have controls to allow you to Pause/Stop the game there (#1710).

* The new recently introduced Command Palette (Command-P, or View/Command
  Palette) now can search documentation when you use the "?" prefix and now
  includes help text snippets on searches.

* The accessory bar now also includes the equal sign (#1711).

### Fixes

* No longer shows a slider for integer values, like Godot does (#1730).

## Build 2953

### Fixes

* Fixes one of our most reported crashes, we figured out that the issue was a
  race condition when starting the game if you started a second instance too
  quickly, we would start two games at the same time and crash.

* Fixes a crash after trying to restart game after runtime error in game
  (#1696).

## Build 2948

This release introduces our new Command Palette, fixing our oldest bug that we
have been tracking: 207. This is activated either with the Command-P shortcut,
or from the "View" menu.

Our command palette incorporates ideas from MacOS' Spotlight and from VSCode's
Command Palette.   By default, it shows and searches your project files as you
type doing fuzzy matching.   If you are picking a text file, you can also append
':NUMBER' to directly go to a specific line on that file.   For other files,
they are opened in Godot's preferred location (either a scene is opened, or the
current object is displayed on the property editor).

This file search also allows you to filter by kind (Scene, Script, Shader,
Resource), and I hope to replace the existing "Quick Open" dialog with this one. 

When editing a text file or a script the ":NUMBER" will take you directly to
that line - and this will soon replace the existing "Go To Line" shortcut with
this UI.

On a text file, you can also navigate to a symbol location by typing '@SYMBOL',
and you can also quickly select a node, by using the "$" prefix.

Or you can run EditorScripts that your project has by typing ">" which will
display all the available editor scripts in your project and you will be able to
automate some of your work that way, without having to first select the script
and then using the "Run Script" command.   This is also a feature present in
Godot 4.5 that we are bringing early to Xogot (#1706).

### Improvements

* It is now possible to rename scene collections in TileSets (#1722, Discord).

* Projects that are too large to load on Xogot light no longer display
  "Unavailable", but show a lock icon.

* Fuzzy text searching that is used on both the command palette and quick open
  now allow the " character at the start to mean "Do whole string matches, do
  nto use the fuzzy mode".

### Fixes

* Fix 2D Toolbar doesn't allow selecting select mode after switching (#1727, Discord)

## Build 2929

### Improvements

* New: ShareSheet, it is now possible to share content to Xogot from various
  creator apps by selecting Xogot from their share sheets.   Once this is done,
  the file is tranferred to Xogot, and when you switch back to Xogot, or open
  Xogot for the first time, you can place the file in their proper location
  (#714).
  
* Improves the slider editor to ensure that the value 0 always gets a label.

### Internals

* Additional work for supporting plugins like Terrain3D, not yet fully baked,
  but getting there - this impacts all the interop between Xogot and Godot, so
  we are hoping that this does not introduce any regressions.

### Fixes

* Gizmo 3D Rotation improvements and fixes: the 3D Gizmo would not respond to
  taps or rotation events, rendering it not very useful, and it is also now
  slightly larger.   Fixes #1328.

* Floating point formatting was too aggressive and removed valuable information,
  this is fixed, and we started to move to Swift's native numeric formatting
  system that gives us better control than the format-string system that we used
  before.   These were bugs reported on Discord.

* Fixes a crash that would happen when inspecting remote objects (Testflight
  crash).

* SpriteFrame's delete frame operation would delete all the frames afterwards,
  this is now fixed (#1695).

* Prevents a crash when out-of-range zoom values were passed (Testflight crash).

## Build 2919 (1.4.1)

### Improvements

* Hitting a breakpoint will no longer resize the bottom part of the screen if
  you have the debugger pad open (#1686).

* Code Editor tabs can now be rearranged (user testing, #1667, but goes back to
  the GodotCon conference).

### Fixes

* Fix Inspector button missing on portrait mode on iPad (#1685, Discord)

* Fix GodotApp being stuck if stopped immediately after start.

* We notices a crash in the wild and the crash logs make us think that this is
  caused by users stopping a game right after it was started.  We believe this
  contains a fix for it (#1662).

* Fixes the onscreen controller for local export.

* Foundational work to enable Terrain3D - Fix instance encoding in
  validated_calls and ptrcalls (#1344).

* We found two heavy crashes happening in the wild, and we managed to reproduce
  them after a lot of trial and error and we have a fix for them (#1681,
  #1682). They would typcially happen when resuming a program.

* Fixes to remote program restarting and uploading of projects.

* ScenePad: Fixes the rename node on iOS 26 (#1689)

* Fixes a crash in the wild that we have not been able to reproduce, but added a
  defensive check to prevent the crash (Testflight)

* Command-. and Command-Control-y will now also work when the game is focused.

## Build 2894

### Improvements

* Running the game will now focus the window in embedded game view, and will get
the input immediately - a long requested feature, and will also automatically
switch back and forth if your program stops in the code from the game to the
code editor and back.   Fixes #1503, Discord, direct feedback.

### Fixes

* Fixes "Import from Image Playground"

* Various fixes for remote debugging (#1674, #1672)

## Build 2888

### Improvements

* CodeEditor: indentation after else: and elif: clauses (Discord, #1679)

* Project Style settings for strings no longer place the strings in a box, they
  looked very odd.

### Fixes

* iPhone: renaming of nodes in the scene pad has been fixed (#1678, Discord)

* Lond standing: some coloring in the editor might have been off for some
  keywords (Updated highlights.scm for tree-sitter).

## Build 2882

### Improvement

* For iOS 26, we now have an icon that works as expected by the new OS.

### Fixes

* The settings for the code editor were not being loaded, and the shader editor
  was not getting these settings - this has been fixed (Discord).

* InputMap: the game controller actions were not being localized (Discord).

* iPhone, shell: the new convenience inspector button would close it, rather
  than open it if it was already opened (Discord).

* Workaround the "Scroll" button not triggering sometimes on the iOS 26 - we had
  to move the functionality that used to be available in the long-press option
  here to the alert that is presented when this is tapped on a node that has a
  script attached.

## Build 2875

### Improvements

* Adjusted our slider-input to only be used when the values are intended to have
  a slider - we were showing it for scenarios where they were not very useful
  (like position).  Fixes #1665.

* Adjusted the UI for grouped numeric inputs to use the same style as the
  inspector for suffix values.

* iPhone: Group Numeric Editors will now compute their proper size when the
  sheets comes up.

* iPhone: ShaderEditor, Debugger, AnimationPlayer now all show close buttons on
  the bottom bar for consistency.

* iPhone: when the sidebar is open, a convenience button will close and open the
  inspector (#1658, discord).

### Fixes

* iPhone: iPhone: Crash when rotating to landscape with any bottom panel open
  (#1653, Discord)

* AnimationPlayer: when we stop, it also clears the paused state.

* iPhone: Double debugger view no longer happens, and as a bonus, we found a way
  of bringing the ShaderEditor to the sheet-based system, so it looks and feels
  nicer and better - that was the sole part that was not using the sheet system
  yet.

* Fixes a regression, the tapping on "Open Animation" on the animation bottom
  bar will now open the animation (#1655).

## Build 2865

## Improvements

* iPhone: the inspector now shows up as a slide-out view, rather than a system
  sheet, this solves a number of interaction problems when you were already
  using a sheet for another purpose.


## Build 2962

### Improvements

* iPhone: bottom bar pads now have a convenient "x" button to close the tab,
  following Apple's guidelines (and a request on Discord).

### Fixes

* iPhone: Fix TileSet and TileMap not working properly on phone, this was a
  recent regression as part of the new tabs

## Build 2858

### Improvements

* By popular demand: New "Reload Current Project" option is now on the menus,
  used when certain settings are changed.   I am not psyched about this extra
  menu that replaces Close + Open, but it seems to be a common enough idiom in
  Godot that seems important to bring

* iPhone: The file picker dialog has been optimized for size by moving some
  controls and making it match the OS picker when possible (#1600).

* We are unifying our remote syncing capabilities, and rather than supporting
  two systems (Godot and our Rsync-over-websockets one, we now just support the
  Godot one) so our binary is slightly smaller.

* Numeric editors should surface sliders in more places now (those that did nto
  have set boundaries).  Fixes long-standing #426, #984.

### Fixes

* iPhone: Layout for the learning tab has been adjusted (#1646)

* iPhone: InputMap was not showing up (#1649, Discord).

* iPhone: Fix SpriteFrame editor (#1650, Discord).

## Build 2825

### Improvements

* Performance improvement to node selection - internally we stopped doing a lot
  fo work when scanning for plugins for a node (#1108).

* Additional languages supported in addition to English: Arabic, Chinese
  Simplified, French, German, Japanese, Portuguese, Russian, Spanish and Turkish.

* iPhone: extend the Xogot editors beyond the safe area at the bottom of the
  screen. 

* iPhone: scene info node is now a sheet, rather than a full screen popup
 (#1639).

### Fixes

* iOS 26: context menu on the scene pad now activates, and fixes a bug that
  extended the selection beyond where it was supposed to be on iOS 18 (#1566,
  #1638, ).

* You can now delete exported games, and deletes ones will not show up (#1498,
  Discord). 

* TileSet, custom data was not working (#1632, Discord).

* Fix CodeEditorUI: initially debugger doesn't scroll properly to highlighted
  line (#1640).

* Bring back the Mac "Designed for iPad" fixes.

* Game controllers no longer stay visible in the screen after a game crashes
  (#1633)

* iPhone: State of the bottom bar items should be properly synchornized with the
  menu - some popups might appear more often than before, would love to know if
  you run into some of these.

* iPhone: Output pad gets a close button, for convenience.

* Right-to-Left swipe actions work.

## Build 2795

### Improvements

* AnimationEditor UX improvements: no longer resets the current editing object
  if you tap on the timeline or you select a track.   We will only change the
  currentlys selected item if you tap on an actual key element on a track.

* Spanish translation: uniformized the text to match Apple idioms.

* Added Japanese localization.

* iPhone mostly, but also iPad: after you hit "stop" in the embedded view, it
  will take you back to the editor you were in (if you started from the
  toolbar. - #1626, Discord).
  
* Project settings are internationalized.   Which completes all known pending
  localization tasks.

### Fixes 

* AnimationEditor: some icons that were previously not being shown for certain
  properties are now being shown (Discord, #1627, the icon was missing so it
  showed up empty).

* Long standing bug fixed: "Convert" Resource previously was performing the
  conversion, but not updating the result on the property editor.  This has now
  been fixed (email bug report).

* 
### Changes

* Mac update: changes on the way that we handle some internals - a work in
  progress.

## Build 2780

### Improvements

* Based on feedback from Discord, This release contains updates to the
  TileMap/TileSet to steer users that are getting started with these plugins.
  On Discord we got feedback that some tools were difficult to use for those
  that were not familiar with the design of tiles and terrains in Godot - we
  felt that we could improve the experience by adopting the idioms we adopted
  elsewhere - whenever there is an empty space in the plugin, we gently offer
  defaults that the user can pick.

* First release of Xogot localized.   Currently we only support Spanish.   We
  would love to know what you think of it!


## Build 2774

Starting to test publicly the iOS26 changes.  

This version has been built with Xcode 26 in preparation for iOS 26 and includes
a few updates to track the new iOS 2026 look.

### Improvements

* Editor surface: we prevent toolbars overlapping the undo/redo buttons

* iPhone: We relocate the undo/redo buttons to the top when a sheet covers it
  (#1616).

* iPhone: adds a "Stop Game" button on the Debugger pane for convenience when
  the game is running.

* Audio Bus effects: when browsing effects, we now include the documentation
  blurb describing the effect (#1608).

* Audio Bus buttons for effects and options are slightly larger to make them
  easier to tap.

* iPhone: the inspector button now acts like a toggle, rather than requiring a
  swiping out action (#1611).

* Command-S hot key will now route it to the shader editor if you are editing a
  shader. 

* Mac Catalyst: major changes internally to support various scenarios that were
  broken due to how this system works (crashes when triggering sheets should now
  be gone).

### Fixes

* iPhone: learning center no longer clips the label for "GET" (#1612), and
  adjusts the layout for iPhone.

* iPhone: the bottom bar management was getting out of sync with the menus, this
  has now been fixed (#1617)

## Build 2758

### Fixes

* iPhone: The sidebar was vanishing as soon as the keyboard was activated
  (#1607, Discord).

* FilePad: the delete swipe action was not collapsing after use (#1609, Discord)

* iPhone: some sheets triggered from the inspector were not working on the
  iPhone (#1610, Discord)

## Build 2750

### Fixes

* iPhone: make sure that we use all space in landscape mode on the iPhone Max.

## Build 2746

### Fixes

* iPhone: make sure we do not show 'Output' as selected on startup.

## Build 2737

* Brings new artwork to the paywall.

## Build 2734

### Fixes

* Brings a long-standing bug fix for "CVS" files not showing up on the Importer
  tab, they should now show up.  Bug #1253 (Discord).

* The Rename Dialog did not look right on the iPad (#1603, Discord), we suspect
  this might also fix a hang when dismissing the keyboard when renaming from the
  FilePad, but we would love to confirm.

## Build 2730

### iPhone

Another major push, thanks for all the feedback on the iPhone challenges.

* Add support for using iOS native non-modal sheets in most scenarios (only the
  shader editor uses the old system for now).

* Fixes the 2D/3D labels (#1591)

* All the bottom tabs were revamped once again, now that we are using iOS
  sheets, it was worth taking full advantage of them - and on iOS 26, there was
  more padding added, so it was necessasry to restructure a few views.

* More dialogs that were too large have been tuned (#1596),

* SpriteSheetImport was reworked to be usable on the phone (#1593, Discord).

* Touch ups for iOS 26 to prevent button bleeding at the bottom of the screen
  (#1597). 

* Run and Stop are now pervasive on the UI, as it was too common of an operation
  (#1592, Discord)

* The editor view should rotate without vanishing (#1585, #1586,)

### Improvements

* The Animation Player editor previously had a number of options under the menu
  for the animation, but there was also an "Options" menu for one single task,
  so I unified those.

* For built games, if the game uses audio permissions, it will ask before
  launching, to make sure you have permissions to use those features (Completes
  the last part of #1456).

## Build 2719

### Changes

* To buy us some space on the busy toolbar, the Undo/Redo buttons now float on
  the editor scenes.   Useful on iPad, very useful on iPhone.

### iPhone improvements

We are getting very close to feature completion now on the iPhone-side of
things, as we are running out of well known gaps for the phone.

* Axololt Rex is now visible on the iPhone as well, it is not limited to the
  iPad anymore.

* Bottom pads now take a little more screen space, to match the iPhone's Sheet
  presentation sizes.

* All pending menus from the iPad are now available on the iPhone (Settings,
  Export Game, Reference Guide, Asset Library).

* On the iPhone the project title will just show the scene, not the project
  name. 

* Work around for run menus on iOS 26.

* Fixed the "Add Animation" to the Animation player on iPhone.

* File/Scene pads can now be hidden/shown or resized, like the iPad.

* Text search feature is now available on the iPhone.

* SpriteFrameEditor is now available on the iPhone.

* Various popovers on the iPhone now are properly sized.

### Fixes

* Another fix for updating the remote node list, which did not work when a whole
  new node was added to the scene (Discord, #1582).

* Reverted our Floating window for popovers, will have to bring this back in the
  future - this was the feature part of #1531 below.

## Build 2705

### Improvements

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

### iPhone Progress

* Major progress on revamping the user interface for the iPhone - after not
  being exactly sure how we would bring the user interface to the iPhone, we
  finally got a few idioms in place for bottom-bar plugins and the Xogot Shell.

  We moved away from the TabView to a system that has a slide-out menu for the
  scene pad, and a menu that allows you to pop up the various plugin tabs on the
  phone.   Will discuss in more detail on a follow up blog post.

  While we are very happy with the new iPhone shell, we are looking for real
  user feedback on annoyances and hinderances in people's workflows so we can
  address those. 

* We started to adapt various components to work on this new design on the
  iPhone, taking advantage of the native "toolbar item" capabilities of the
  platform, many of the iPad tabs are being modified to embrace this new idiom
  on the iPhone.   

* Significant progress on the AnimationPlayer on the iPhone, still not amazing -
  but getting impressive.

### Fixes

* Fixed a regression in the Remote Tree node tree is now updated when you are
  running your game (Discord, #1575).

* Fixed a hang in the Claude Chat client

* iPhone: various dialogs would only trigger when you were on the 3D/2D editor,
  all these design flaws from the previous shell have been addressed.

## Build 2673

### Improvements

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

### Fixes

* Fixes the lingering and highlighted line in the editor (Discord).

* Caught a crash on Testlight crash logs and applied a fix.

* Fixes the crash when downloading the project template (#1569, Discord).

* Only stop an animation if we are playing an animation, fixes a crash
  (Discord).

* AnimationPlayer: reduce calls to Godot when they are not needed, they were
  generating unnecessary warnings.

* Fixes a regression introduced by the model importer fix that would produce
  unecessary warnings on the console (#1574, Discord).

* Gamesharing: Remove a stray numeric prefix from game ID in URL (Discord).

* Fixes a potential hang when there is no networking available and you have
  previously opened a project on the network.

## Build 2645

### Improvements

* Going to allow any fonts to be picked by the editor for now, will see if this
  is a major problem in practice.

* TextureRegionEditor will now auto-size to a convenient size, and the handles
  will be scaled accordingly.   Plus various small improvements to it (#1557)

* When switching an animation, stop a playing animation (#1561)

## Build 2638

### Improvements

* The TileMap and TileSet plugins can now be docked on the left or right sides,
  to assist in your editing needs (#1529, Discord)

* Added keyboard shortcuts for various operations (Cut, Copy, Delete, Duplicate
  Nodes and Select All).   Some of these shortcuts might only be visible on iOS
  26, as they are exposed via the built-in system commands (#1549, Discord).

* Animation editor tab: significant performance improvements when switching
  animations and when playing back animations (#1562, Discord).

### Fixes

* Fix crash in advanced scene import when turning on physics (#1554, Discord).

* Fix adding plugin doesn't update filesystem (#1555, Discord)

* Removes a stray debugging value from the UI (#1556, Discord).

* Fix File Import causes duplicate files (#1558, Discord)

## Build 2620

### Improvements

* Happier colors for the launch screen, it was making me sad, and additionally
  Axolotl Rex will greet you on your gaming journey.

* You can now change the font for the code editor and consume system fonts, my
  previous attempt merely allowed you to pick a different fixed font, now you
  can pick any user-installed fonts (#1539, Discord).

* For our free edition users, we will show a status bar after launching.

## Build 2604

### Improvements

* You can now configure in Xogot Settings your default execution target, either
  the embedded window, or a separate window.   

* You can now copy the error message when there is a runtime error (#1122)

### Fixes

* Virtual controllers will not be shown if the user chose to disable them
  (#1538).

* Fixes a crash we observed in the wild when users were closing a project
  (#1533).

## Build 2591

### Improvements

* The virtual controllers that are displayed when you start a game automatically
  hide if you switch out of the "Game" mode (#1282)

* Chat conversations are now relative to the game project, rather than being
  global. 

* It is now possible to start a new chat from the Chat window.

* Add ability to extract TileMapLayer from TileMap #1509

### Fixes

* On iOS 26, nested toolbars in dialogs would not show up sometimes (Settings,
  or Atlas importer), we have implemented a workaround that keeps the
  functionality but does not need a fix from Apple.

* For free edition users, the soft paywall will now show up after the editor is
  launched, not before.

* Fixes a family of crashes that happened when you had some animations and you
  were closing a project (TestFlight crash 1292)

* Chat Window: it should no longer hang when trying to launch it for the first
  time.

* Fix snap to grid problem for Polygons editor #1536.

## Build 2570

This release starts the testing process for making Xogot a free app that will
put some features behind a paywall, but will allow the core of the editor to be
used. 

### iOS 2026 adjustements

Generally, adopted various idioms from iOS 26, the current branch that we
are going to publish is still based on the public Xcode, so Liquid Glass will
not show up just yet, but the idioms should start tracking the new idioms.

We have completed the Liquid Glass work, with the exception of some bugs in the
betas that we have not been able to address yet.   While we have done this, the
release that is going into Testflight is built with the stable Xcode, so the UI
will not change just yet.

* Add support for menus on iOS 26: Follows some of the guidance for iPad apps
  on iOS 25, by not making menu entries appear/dissapear, instead they are
  enabled/disabled.   Added a few icons to the menus.
    
  This moves the "Navigation" items to "View" as suggested by the iPad talk for navi6ation.
    
  The most important and ugly change is that with the new menu system on iOS
  26, the system is defining an "Open" menu with the same shortcut we had
  that is permanently greyed-out and can not be implemented at all.  

* On iOS 26, our interaction dialogs will follow the system style.

* Focus on ScenePad/FilePad: it is now possible to focus these and use the
  keyboard to navigate them (#1479).

* Some sheets were being compressed on iOS 26, fixed this.

* Adjusted some UI as the default styling in iOS 26 changed.

* Fixed a glitchy UI on the login window on iOS 26.


### Improvements

* Rename Dialog: made a little wider, it was bothering me.

* UI consistency: in places where we guide our users to the next step, rather
  than rolling our own UI, we now use the system ContentUnavailableView idiom
  for more consistency.

* FilePad: removed some unnecessary padding, so now the filename display has
  more space.

* Preparation for doing remote debugging from Desktop Godot to Xogot.

* Work in progress: if you have a Claude key, we now bundle an integrated window
  that can use Claude and exposes an MCP endpoint to talk to your project.
  Please be careful with this, as there is no undo/backup for changes done via
  Claude at this point.

* Combine inputMap keys back into single group but reorder to match requirements
  bug #1118

* Improve IP handling and status display in RemoteSyncClient: Display the local
  IP address in the advertising status message. Update argument IP replacement
  logic to only substitute 127.0.0.1 or 0.0.0.0 with the fastest IP, preserving
  other IPs. Enhance the client view to allow multiline and right-aligned status
  text.

### Fixes

* Fix SpriteImport sheet and TileMap cropping when zooming out (Discord, #1519).

* TileSet: When creating big Atlas it doesn't resize properly on first load
  (#1520). 

* Fix in Settings - Visible Collision Shapes not persisting (Discord, #1527)

* Fixes remote debugging only working the first time.

* Fix Code Editor - Cut should clear current selection #1525

* Prevent popover from bouncing around this is problem for Godot embedded
  content (Discord, #1531)

## Build 2528

### Improvements

* Rectangle Editor: shortens the labels, so it is possible to edit the values.

* Rectangle Editor: in a few places, the rectangle editor will now display
  'Edit Rectangle' and when pressed, it will show up an
  interactive view to select a region from the image (Discord, #1465).

* SpriteSheetImport: will now remember the settings that you had when importing
  a new texture if the size of the texture matches the previous size (Discord
  request).
  
* Grouped numeric input: we will now auto-select in the popup the entry that you
  tapped on (Discord).

### Fixes

* Fixes dragging and dropping of Nodes into the text editor, it was showing up
  in the wrong location (Discord, #1511).

* Fix TileMap issue where random tiles popup during paint bug (Discord, #1510)

* Now remembers the configured set of output lines (Discord, #1514)


## Build 2514

### Improvements

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

### Fixes

* Fixes the order of navigation commands, so the commands on the menus match the
 order in the toolbar (Discord, #1485).

 * Renaming a project was not working (Discord, #1490)

 * Fix a regression when performing symbol lookups in the integrated
   documentation (#1490, the regression was introduced with the fix for #1353)

* Fixes drag-and-drop of a node not undoing the work in a single step (Discord,
  #1500). 

## Build-2486

### Fixes

* Editing array values would immediately dismiss the editor, this is now fixed
  (Discord, #1484)

## Build 2474

* Network scan prompt will not trigger until you press "Discover".

### Fixes

* Add support for navigation links on iOS 2026

* Fixes a long-standing crash in the text editor related to the undo stack that would go on an infinite loop and crash Xogot.  (#1475,  crashlytics).

* Fixes a crash that happened in the Sprite Sheet Importer if you chose the size zero (#1469, crashlytics)

* Unlock message was showing up too often (#1467, #1468 - fixed)

* Fixes "New Input Map" actions were not appearing until list is refreshed (#1470, Testflight feedback)

* Fixes a crash that would happen sometimes when the selection was updated (#1474, Crashlytics).

* Prevents a crash on the text editor - we do not understand the conditions, only that a forced unwrapped crashed - we now avoid the crash and we can track via feedback if something goes wrong (Crashlytics).

* Fixes "paint after undo adds tiles that was removed in undo" (#1478, Discord).

## Build 2458

### Improvements

* Remote debugging now takes place on a dedicated tab on the launch screen.

* Started refactoring the UI for settings for the iPhone, so now settings should continue to work the same way they did on iPad, but start to work on iPhone.

* Additional details on connection errors to help users diagnose problems

* Started support for bringing a curated list of native extensions to Xogot.

### iPhone

* Improve the launch page on iPhone (#1447)

* It is now possible to dismiss importers on the iPhone when triggered (#1441)

### Fixes

* Fixes a race condition that prevented the discovery of the remote device

## Build 2434

* When you enable audio input recording on the Godot settings, Xogot will ask for permission to use the Microphone (Fixes #1456)

* "Create Script" from the FilePad will default to "Object" as the base class, as opposed to "Node", which allows various "Editor" nodes to be browser for subclassing, and makes it easier to create editor scripts ( #1458)

* Create Script now lists the templates as you change the type inherited, which was previously only done on first use, negating the purpose of the feature (#1459).

### Fixes

* Editor no longer inserts an additional quote when completing file names (#1450, Discord)

* Workaround for a bug in iPadOS: when you run a game and you have the inspector open, and finish the game on small screen scenarios (iPad Mini, or if your editor was changed to use a very compact mode) it should now prevent a floating properties pad to show, and will make the inspector work afterwards (Fixes #736, Discord)

* Fixed a Godot upstream bug that prevented the microphone from recording (#1457, Godot bug #33885, Discord).

## Build 2418

### Improvements

* Remote Debugging: we are starting to test support for running games on a companion device, you can now develop on your iPad and run the game in a companion iPad or iPhone.   To do this, you must be logged in on both devices (this is how we do the zero-password configuration).   The target device needs to stay on the main screen, while the editor device is used to scan and find your other device.  Both devices must be on the same network.

* Added a drag handle to the top toolbars, as not every element in the toolbar is draggable - will probably iterate on this, and remove draggability from any other place other than the handlebar.

* Improved the UI in the "Input Map" project settings, using the same idiom of guiding the user to their next step, and moving the common operations from the toolbar closer to where they belong. 

### Experimenting

* Experimenting with less friction to start a drag gesture for numeric inputs as well as the ranged sliders.

* Going to start using "Release" builds of the Godot engine, instead of the "Debug" build, we are goig to see if the results still produce good crash logs.   This reduces the download size by 193 megabytes, and will likely improve the performance of Godot.

### Fixes

* Fixes a crash when closing a project and you were editing an animation, as we were destroying the animation after we had completed the Xogot shutdown.

## Build 2411

## Improvements

* InputMap: new filter option by letters and numbers to simplify finding your keybinding (#1118)

* On iPhone, if you did not have a main scene selected, you would not get a prompt asking for one, this made it so that running the game would not complete its work (#1416)

## Build 2405

## Fixes

* Addresses a crash when navigating AnimationPlayerEditor keys

### Improvements

* New InputMap filtering option to make it simpler to pick letters and numbers, as our filtering before would list all items that matched a letter, for example "a" would show every possible key name that included the letter "a".   Addresses #1118.

### Fixes

* When selecting a new sprite on the Canvas editor, sometimes the handles for the item would remain on the screen (#1118).

## Build 2397

### Improvements

* You can now drag and drop files to create a TileSet (#1229).

### Fixes

* Fixes support for deleting array elements for some properties (#1424, Discord).

* Fixes the iPhone support

* We now wrap around text to make the first error in the error list show up completely (#1423, TestFlight)

## Build 2374

### Improvements

* It is now possible to search in the help pages using the Command-F shortcut and other iPad gestures (#1380, Discord).

* When using an Apple pencil, if you hover over a property in the inspector, a popup with documentation will show up.

### Fixes

* Fixed a case where resize gizmos were staying visible when another node was selected (#1068).

* Drag and drop of nodes could end up in a situation where an invalid drop would delete the node, rather than reporting the mistake (#1419, Discord).

* The position in the documentation stays where you leave it, it no longer resets when you switch tabs (#1347)

* Numeric input values now update immediately upon changes (Better fix for #1296 and #1304)

* When you favorite folders, then tapping on them scrolls to the folder (#1330)

* Fixes slow down when selecting a remote debugging node that contained an image (#1420, Discord).

* Reverted the default scaling size from “auto” to “fractional”

## Build 2354

### Improvements

* Numeric fields in the popup can now also be adjusted by swiping left/right the numeric value (#1402, public issue #68, repeated feedback on Discord).

* Numeric input fields now have a subtle indicator when you have reached a limit (a flashing accent color shows up for a quick moment).

* Divider for the ScenePad/FilePad and the main shell and bottom panels is a little more subtle: it no longer uses a contrasting color which was adding visual noise to the screen, and instead uses the default background.

* You can now reorder array elements in the property inspector (#1390).

* It is now possible to select multiple nodes, and change the shared properties of those nodes in the UI (#947, Discord).

* AnimationPlayerEditor now standardizes the selection color on yellows, rather than using different colors to show the selection, and for regions, uses the FinalCut Pro style (#1382).

### Fixes

* In some places in the UI (Some Resource Editors, Shader Globals, Array editing popups), tapping on a row would not automatically navigate to its destination, you had to tap on the disclosure button and select "Inspect", this step is no longer necessary (#1389).

* Prevenets a crash when importing new projects at startup #1413 (Xcode crash logs).

## Build 2334

### Improvements

* iPhone: File menu is now available for the project.

* Added custom data to TileSet, option to attach arbitrary data (any type) to Tile using Paint.

* TileMap Editor: Add missing toggle for Highlight Selected TileMapLayer (#1406).

* When you have a hardware keyboard, the shift, control, alt and meta keyboard modifiers are now passed to Godot, which is useful to modify certain operations in the 2D and 3D editors like uniform resizing (#592, #908).

* Switching views is no longer bound to command-control-NUMBER, instead it is just command-NUMBER (#1405, Discord).

* Inspector: the SizeFlag editor will now inline the "Expand" button, so it requires one less tap, similar to Desktop Godot (#1404, Discord), and rounded the edges of the selection, to prevent folks from accidentally cutting themselves with the sharp edges.

* We now surface the gyroscope/accelerometer information to games (#1348)

* In the 2D Editor, users can now choose the scaling mode from the toolbar and select "Freeform" or "Uniform", when scaling 2D objects (#1403).

### Fixes

* Remove Inputmap autocapitalization (#1393, Discord).

* Fixes the removal of polygons in the TileSet editor (#1392, Discord).

* Brings back the EditorProgress display when importing a project (#1309).

* TileSet Editor: Fixed paint options not updating after TileSet change in top level inspector (Discord).

* TileMap Editor: Fixed random tiles showing up  after changing TileMapLayers selection and doing some action (#1407, Discord).

* TileMap Editor: Fix bug related to Paint options not being accurate if first there is empty space on coordinate (0, 0), (Discord).

* Prevents a crash if you close the first script tab being edited (#1399, Discord).

* You can use the arrow keys when renaming a node in the ScenePad, without accidentally leaving it (#1409, Discord).

## Build 2309

### Improvements

* The Node Information popup should no longer crop the text containing warning information (Discord, user testing).

* Editing an InputEvent from the Inspector using the 'configure' button will now use our custom XogotUI that we already had for InputMap definitions (#1386).

* We are trying a different approach at dragging to prevent the jump on first use (#1374), a follow up to #889 which is preventing the original jump, but falls short of triggering the drag with a single pixel motion detection, which we are still cautious about

* You can now delete your shared games from the Project Manager (#1385).

* Added custom data to TileSet, option to attach arbitrary data (any type) to Tile using Paint (#1387).

### Fixes

* Remove virtual controllers if you close the editor before you close the game (another instance of #1303).

* Fixed paint options not updating after TileSet change in top level inspector (#1388).

## Build 2298

### Improvements

* Added Command-L shortcut to jump to a line in the text editor.

* Easier to spot that we have more than one subscription plan, fixes the savings button, 

* Highlights the main scene in the FilePad to easily spot it, using the accent color, public bug #66.

### Fixes

* When creating a new animation in the animation editor, notify the Godot 2D editor, so that it activates the keying toolbar (#1317).

* Fixes tracking of the system theme color, before it was not able to transition back to light mode (#1368).

* Bezier data can now be edited for bezier tracks (#1381 among others).

* Tapping on documetnation items in the "Signal Info" will now open the documentation for it (#1335).

* Fixes icons being out of sync between the Add-Node operation and the ScenePad (#1383 and #1369).

## Build 2274

This release introduces new subscription tier, and we are starting to experiment where the line should be.   We would appreciate if you could test different scenarios where the weekly, yearly or full time unlock.  

### Improvements

* Animation editor tab: when a new animation has been created, but contains no tracks, provide guidance in the form of an "Add Track" button.

* Changing the text editor size will update all the open editors, rather than only affecting editors that are opened after the change (Discord).

* Added keyboard shortcuts for a few more operations:
    * Show/hide sidebar (option-control-s)
    * Show/hide inspector (option-control-i)
    * Show/hide console (option-control-c)
    * Clear console output (command-K)

* Option to sign up for a weekly, and yearly subscriptions.

* Improved batch Tile deletion (previous one was very slow and triggered un-needed updates).

* Added Tile Selection grow indicator red and empty circles, in case Tile "can grow" in certain direction there will be red indicator otherwise empty, this is only visible when single Tile is selected (like in Godot). Also there is now gesture that can easily make tile "grow" when pulled in direction where growth is possible with indicator for it.

* Added drag to draw terrain bits on TileSet in paint mode. Tapping on each bit was burdening in real world cases.

* TileMap Editor: Remove selection indicator in paint mode.

* Users can now choose to use Godot icons instead of our built-in icons (#1350), the feature is available in the Editor Settings.

* Consistency: the file picker now treats a double-tap as a selection action (#1331).

* Anchor Presets on the inspector now show a highlight to identify the current selection (#1365, Discord).

### Fixes

* Fixed an off-by-one error that displayed an "Internal Error" when picking the Display Type on a 3D Viewport (Discord).

* Fixed an error that would incorrectly report "Game View Already Exists" (#1342).

* Animation Editor: fixes bezier track creation.

* TileMap Editor: Fixed bugs related to tile resize happening in TileMap where it shouldn’t.

* TileSet Editor: Fixed TileSet Setup inspector not updating on value change.

* TileSet: Fixed Auto-center and auto-scale making difficult to edit TileSet.

* Fix memory leak that occurred with TileSet AtlasSourceModel, it was happening each time when navigating to different TileMapLayer nodes and changing atlas sources, it wasn’t getting released when navigating away.

* Signal Connection method allowed nodes to be dragged and dropped, but it served no purpose (#1336).

* Animation Player: keyed insertion of keyframes now reflects the values in your objects (#1372, discord).

* Animation Player: fixes a bug that would prevent continuous updates to values on the key values from updating the UI (#1358).

* Fixes the array editing problem in the inspector, was reported as Tab Stop values not saving across edits (#1359, Discord).

* Fixes linked properties in the Inspector not updating in concert (#1360, Discord).

* Fixes window embedding from Godot - generally this enabled the Visual Shader Editor, as the "Add Node" button is now operational (#1346).

* Code Editor: Fix Option+Delete and Option+Left Arrow only working to skip a single word  (#1353, Discord).

## Build 2224/2234

### Improvements

* You can now run Editor scripts (#1324) with Command-Shift-X (Discord).

* Made the input accessory work on the iPhone by merging some cells, fixing
  the spacing and the popup windows now have fixed-size buttons, rather than
  being relative to the display size (#1272).

* If you tap on the `script` icon on the Filepad and you are in compact mode,
  the sidebar will collapse to show the text editor (#1307).

* Easier to spot the app unlock (#1311).

* You can now also use swipe-to-delete on the File Pad (#1334).

* The animation editor will automatically track the timeline when playing back an animation (#1299).

* Create Node dialog now also includes "ColorRect" (Discord feedback).

* New keyboard shortcuts for running scenes, hold the command key to see all three options (Run current scene, run specific scene, run game).  (#1317 discord feedback).

* Shader Editor now surfaces a "File" menu to make it easier to explicitly save shaders (#1314, #1315).

* iPhone: the keyboard accessory view for the iphone is no longer cramped, and reorganized the buttons for iPhones (#1272).

* When the editormode switches and there is no room to show the sidebar and the editor, auto-hide the sidebar (#1307).

* When you select the filepad entry, the + and gear icons dissapear to give more space to the text input (#1333).

### Fixes

* Selecting the next/previous key frame will automatically scroll the animation editor view (#1295).

* Virtual controllers that were sticky after a game ended now get properly removed from the screen (#1291).

## Build 2217

### Fixes

* Fixed the Viewport view options labels to match the actual viewport settings.

* The inspector can now edit arrays of NodePaths and arrays of Nodes (Testflight
  feedback, #1284).

* The defaults for the debugger to sync scenes and sync scripts are now enabled
  by default, using the same default as desktop Godot (#1306).

* TileSet picker will now use a more visible selection region to make it easier
to observe the selection.

* Better handling for zooming out the TileSet.

* Fixes the scaling for the Godot editor on iPhone (it was too small, #1278).

* Fixed setting the duration for the animation editor, it was previously not
  being recorded and would auto-reset (#1305)

* Fixes the animation tab auto-closing when opening an animation or opening
  an animation (#1301).

## Build 2198

### Major Changes

* The SwiftUI-based TileMapLayer is now the default, and the Godot
  TileMapLayer editor is no longer in use.   We would love if those of you that
  are doing 2D games with tiles try it out and provide us feedback on it.   This
  completes the TileMap/TileSet editor work that we started in January.

### Improvements

* The TileMapLayer finally got support for terrains bit pattern overlays (part
  of #1238).

* Prevents scenarios where the user could spawn a new Project Window and then
  attempt to run the editor when a game was running, and variations of it.

* Small message consistency improvemen in the 4.4 project upgrade dialog
  (Testflight feedback).
  
* Initial plumbing to support external displays, but it is not yet fully
  working. 

* Rewrote the rendering code for the TileSets and TileMapLayer editor, making it
 very smooth. 

 * New Audio bus editor, this replaces the original Godot one, and it was the
   last part of the main editor screen that had not been ported to SwiftUI,
   closes #815 and #1290.

### Fixes

* Fixes a crash that would sometimes crash when closing a project, as we were
  completing some shutdown tasks after the Godot instance had been closed,
  another instance of #999.

* Crash a crash related to dereferencing a null pointer (Testflight, #1268).

* Fixes a crash that would sometimes trigger after Godot has finished scanning
  your project directory (Testflight).

* Prevents a crash triggered by a race condition when attempting to relase the
  game controller (Testflight).


## Build 2171

* The output window will now just keep track of the last 1,000 lines by default,
  but now you can change this value.

### Fixes

* The text editor will no longer flash on updates or debugging - it took us a
  while to find a reliable way of tracking this down, but it is now gone for
  good (#1174).

* Fixes " if the distance is less than around 150, it would lost track one of
  the input, and reassign it with new index." reported on Discord.

* Prevents users from launching the game repeatedly at startup, which fixes a
  crash, additionally, the Game View experience will show that the game is
  running on a separate window if that is what the user did, rather than
  offering to start the game again (#1274).   
  
* And we now also have a general system from preventing this from happening
  again.  For example, if the user cloned the launcher window and then tried to
  launch two editors at once.

* Internal runtime fix #1250, 

* We will no longer crash when the user launches a "Play Unoptimized" game from
  the launch screen.

## Build 2153

### Features

* Tiny micro-feature, opening a packed scene is now handled without relying on a
  Godot extension.   Mostly as a proof of concept and foundational piece to
  replace additional custom controls on the Property Inspector than anything
  else.

* TileSet inspection will now automatically show up on the properties inspector.
  While the release notes have alluded for a while to the work in progress on
  the TileSet and TileMapLayer editors, we have never quite detailed all the
  work that has gone into them.  We are very happy now with the core rewrite of
  the TileSet editor, which will let us improve it in the future directly in
  SwiftUI, and the TileMapLayer editor is quickly catching up, and it will also
  allow us to adapt and tune the user interface for iPad use.

### Internal Improvements

* This release upgraded the SwiftGodot library, and brings the new
  _GodotBridgeable code.   Not much user visible, purely an upgrade to a better
  foundation.

* Slight improvements to the paywall experience.

### Fixes

* Xogot will once again honor the display driver and rendering method feature
  that we regressed - this completes #1256.

* Fixes a crash that we saw reported via Testflight.

* Removed a blue debugging background that was left by accident in the Gameplay
  pad. 

* Fixes a crash that would happen when using the TileSet editor (multiple
  Testflight feedback reports).
  
## Build 2134

### Features

This version starts to polish the iPhone experience, and there are a number of
areas that were touched on which might affect the iPad experience as well:

* The Xogot shell now has a dedicated iPhone UI, it will continue to be improved
  there.

* Playing your game is now supported on the iPhone on the "game" tab, where you
  can pause/run the game - other advanced features like frame-by-frame stepping
  and camera control are not surfaced on the iPhone.

* 2D and 3D toolbars will wrap around on portrait mode to allow all the
  operations to be accessible on the phone.

* The popups from the toolbars have been styled to work properlty on iPhone too.

* Tapping on the documentation icon on the inspector on the iPhone will open the
  documentation automatically

### Improvements

* It is now possible to pick colors for gradients on the inspector.

* Notifications can now be dismissed faster by swiping them out of the way, or
  held by swiping down.

### Fixes

* One pesky crash on closing a project has finally been deal with (yes, the same
  one as #999, there were more issues to deal with).

* Thanks to the recent telemetry changes, we could narrow down and fix the
  crashers for #1265 - good news, it only ever happened on the launch screen,
  never with your game.

* If you delete your Xogot account, it is now possible to create a new one
  without reinstalling the app.

* Verification of your email will work even if you suspend Xogot.


## Build 2121 (1.0.9)

* Quick crash fix on startup, from telemtry.

## Build 2114 (1.0.6), (AppStore: 2115, 1.0.7)

* FilePad changes: now the current path line, rather than being an input line
  that can be used to navigat to a specific path, becomes the search bar when
  tapped - usability improvement based on our own testing (before the search
  bar had to be manually toggled due to space constraints).

* We have upgraded from a rooster to an axolotl.

* Internally: we upgraded SwiftGodot to the latest version from GitHub, should
  not have any visible changes.

### Fixes

* Node pickers on the property editor should now save Nodes, previously they
  were saving NodePaths, preventing the inspector from working correctly (#1266,
  Testflight).

* Should prevent a crash that happened when closing a project (#999,
  Crashlytics). 

* Workaround for a crash induced by iOS when your application goes to the
  background: iOS attempts to take screenshots in light and dark modes, and this
  triggers a crash in UIKit via the Runestone editor.  
  We have a band-aid that we suspect will help (#1264).
  
* Controllers that were already paired were not recognized by the game.   This
  was a fix we had already fixed, but we regressed during the 4.4 upgrade, it
  has been fixed again (#283).

* Allow nodes provided by an add-on to be instantiated (#1254)

* "Copy Path" in the FilePad was not working, it works now.

### Telemetry

* We added telemtry to try to catch a situation where the editor fails to start
  and crashes.  This is internal bug #1232, which we tracked down using
  Crashlytics.  

* New telemetry: another issue that we found in the wild is that Xogot is
  crashing due to the system doing screenshots of light/dark modes when sending
  the app to the background, and something is triggering the Project Launcher to
  end up in a state that crashes.   Tracking as issue #1265.

## Build 2099

* Memory Reduction: Emoji fonts are no longer duplicated in memory, saving over
  256 megs of ram from being consumed - we now only load what is necessary and
  can reload on demand (#1263)

* Other small memory reduction efforts, saving another half a megabyte.

### Fixes

* Fixes a number of regressions on the Path2D Editor in the 2D editor that
  prevented points from being deleted (#1258), and from curve closing, curve
  adding from working (#1257) - one was a long-standing bug, the other a
  regression from the 4.3->4.4 upgrade.

## Build 2091

* More work towards the native TileMap editor, now supports terrains and
  patterns.

* Change the way that we show tooltips for commands, and offer a mechanism to
  turn them off.

* Added shortcuts for "Add Node" and "Instantiate Child Scene" (A and
  Command-Shift-A)


### Fixes

* A major leak on theme switching that we thought had been fixed has actually
  been fixed now.  The previous fix was based on the wrong assumption that the
  leak only happened on the context switch, but it happens whenever the theme
  changes (#1259).

* Proper fix for the inspector when navigating from one object to another, this
  regressed and it was not possible to drill down into Group elements of a
  different object, for example materials in a mesh or theme settings (#1248,
  #1252).   Additionally, also handles groups that have conflicting names across
  categories (#1245).

* Fixes the Inspector Array for multi dimensional arrays.

* Fixes the editing of the rendering method/rendering driver, which regressed
  some time ago.   First half of the fix, we still have #1256 to fix.

## Build 2060

* Added support for deleting your account.

* Fixes "Can not instantiate Child Scene" (#1246, Testflight)

* Fixes a common crash when terminating an application (#1213, Crashlytics
  reports)

## Build 2047

### Features

* Docks added by extensions will now surface on the inspector on a dedicated
  tab (#1240).

* Animation Panel: implement "Optimize animation" (#1078).

* Focus Selection and Focus Origin are now options on the 3D Viewport menu,
  rather than commands that are harder to find (#979).

* TileSet: Add action for create and remove tiles in transparent and non
  transparent regions #1231

* TileSet: you can now delete Scene Collections

* WIP TileMap editor: you can now draw lines with tiles, move, pick and viewport
  preview support, as well as all supported drag types (#667 still work in
  progress).

* We will now adjust the size of the running application based on the display
  density. 

* Exporting games to Wasm will now will export a virtual controller if enabled.

* AudioStream properties will now display the name of the file stream, or the
  type of the stream added for non-file cases and tapping on those will inspect
  the property (#1090, #990).


### Fixes

* Fixed a major memory leak that was triggered by iOS re-rendering Godot in Dark
  and then light mode when going to the background.   This explains many crashes
  when folks were switching apps.

* Xogot will warn you if you log-out entirely on your iPad and then log-in as a
  different user that the existing imported projects need to be re-added.

* Brought in some memory leak fixes to SwiftGodot

* Small look and feel updates to the paywall

* Renamed the dialog in the FilePad to "Files" rather than "Create New", as this
  dialog also could import files #439.

* Prevents a crash if you attempted to zoom an empty scene

* Various TileSet bug fixes introduced (in Build 2019, we would hide the tileset
  when you changed views, this fixes it).

* Fixes a family of crashes when terminating an application (#1213, but also
  many crash reports submitted via Testflight).
  

## Build 2019

### Changes

* In-App Purchases are here.  We are starting to test the In-App Purchase
  workflow, the first time that you start the editor, it will prompt you for the
  IAP.   You will not be charged for this purchase on the Testflight.

* Large samples that consume too much memory are no longer shown for low-end
  iPads that might not be able to run them (#962)

* Improved the layout of the TileSet editor, we plan on doing more polish in
  this department now that it is feature complete.

* Filled the Support page with links, getting ready to release (#1143).

### Fixes

* Fixes a rare crash when Xogot is updating files and you close the project.

* Input events can now be handled by the new TileMap editor plugin.

* Fixes a regression we introduced that prevented the undo stack from working on
  3D objects.  Fixes #1234.

* Deleting files in projects hosted on a File Provider will no longer error out
  (this was a problem for File Providers that do not have a concept of a
  "trashcan", so we would report an error that the file had not been moved to
  the trashcan, despite the file being deleted).

* The TileSet tab will automatically show up when you add a new TileSet to a
  TileMapLayer (#1237)

* Fixes a crash when starting the editor after you had started a game (#999).

* Foundational: to allow us to continue our work to replace some components of
  Godot we added some missing marshalling capabilities (this enables the new
  TileMapLayer editor, but will be used for more in the future #1228).

* Uses the internal scene structure as the source of truth for the node names -
  fixes #1069.

* Should prevent the "Another Editor is Already Running" Error 

## Build 1992/1994

* Upgraded Godot to 4.4.1stable

### Fixes

* Addons can once again be selected from the toplevel set of menus.

* Addons now work, a new puzzle icon is shown in the toolbar if you have addons
  that contribute a menu item (#806, #1215).

* Fixes the scenario where only the first sprite from a sheet could be removed
  (#1212).

* ScenePad: fixes the logic to make nodes unique and revoke uniqueness (#1218)

* Debugger will now poll again for inspected objects, allowing changes to live
  properties.

* 2D icons on the ScenePad were not visible before, as they were blue, and the
  selection was blue - so make the icons white in those cases (#1226)

* Fixes a spurious warnings triggered when renaming a node that had a unique
  name (#1217)

* Drops the style for the toolbar introduced the previous release, as it
  triggers a SwiftUI bug that hides those buttons after the first time you
  launch a game.

* Fixes a regression that hid the remote tree view from the scenepad while
  running (#1216).

* Fixes the selection not rendering on the remote scene pad (it was working,
  just not showing, #1220).

## Build 1980

### Features

* New tab: "Game View", it can be used to start the game embedded in that pad,
  and surfaces a few options to freeze the scene, single-step the scene, as well
  as providing ways of selecting elements in the 2D and 3D scenes.   Similar to
  the same features available in Godot 4.4

* Asset Library: we think the new asset library is complete and ready to use,
  completes all the tasks in #1206

* It is now possible to login with an email address, not just iCloud (children
  could not login with Apple-ID, so we provide a fallback).

* The editor mode (2D, 3D, Script, Game) now has a subtle hint of which tab is
  selected.

* The sidebar now starts open for all projects, to make it clearer to newcomers
  (#1205).

### Fixes

* Increased the stack in background threads, as some samples died due to limited
  stack space (#1198).

* Internally, we did plenty of changes that will assist in a fully featured
  iPhone UI - in this release, none of those changes have an effect on the
  iPhone UI.

* Fixes the conversion of scene groups to global groups and back (#1200,
  Testflight).

* It is now possible to change the visibility status of all gizmos, not just one
  (#1196). 

* It is possible to drag the ScenePad/FilePad divider from any portion of the
  divider, not just the center (#1208)

* Regression fix: it is possible again to choose the starting scene and pick a
  new scene (#1194, #1183).


## Build 1960

### Features

- New native TileMapLayer editor, a companion to our new TileSet plugin - it is
  currently running side-by-side the original Godot editor, you must tap "WIP"
  in the bottom bar to enable (Task #667).

### Crash Fixes

- Import/Rescan crash has been fixed (#1190).

- Prevent crash when users sent Xogot to the background while it was loading and
  came back (#1204).

- Prevent crash that happened when users attempted to interact with Xogot, while
  it was still initializing (#1207).

- Prevents a crash when stopping a project, this was one of our top crashes
  (#1202, Testflight).

### Small Features

- The keyboard accessory bar now has '_' as a shortcut, and we moved the "("
  and ")" to a more prominent location (#955).

- Added cut and paste to the keyboard accessory bar (#928).

- Learning Center content is now downloaded from the network, rather than being
  bundled.

- Add "Insert spaces for tab" editor setting (#936).

- It is now possible to retry downloads for starter projects

- Added Smooth Scrolling to SpriteSheetImport and tile set: This allows for
  smooth scrolling, improves performance with large grids and also does auto
  scalling to fill view size if image is smaller than container view. 

- TileSet editor now uses the toaster notifications to report errors.

- Project Info on the launch page will now display the location for a project
  (#1187).

### Fixes

- Fixes dynamic content on the Inspector that was not updating (example,
  enabling "Region" in Sprite2D - #1169).

- Learning Center will now use all space - this was noticeable if you hooked up
  your iPad to a larger display (#1136).

- Learning Center detail view had icons that were too small (#965).

- Numbers in the Sprite Sheet importer now scale (#898).

- Fixes the property array editor not updating on add/delete operations (#1197).

- Fixes crashes on projects that were using the OpenGL compatibility driver
  (#1191, Discord).

- Fixes overlay grid on TileSet, move toolbar to separate view for TileMap.

- "Open Shader" now filters using shader types, instead of using the default
  resource filters.

- Changing the project settings on projects that were imported from a new
  location has been fixes (#1189, Discord).


## Build 1902

- Memory leak fix.   With Build 1876 that introduced our 4.4 support for Godot,
  the code that dealt with "Reload Project" prevented the resources used by the
  game from being released, causing a memory leak.   This impacted all uses of
  Xogot, not just project being upgraded.

- Updated Learning Center templates to 4.4 and Forward+ renderer where possible.


## Build 1898

- This release disables our Metal Shader cache, as this was causing crashes when
running games with the 'mobile' rendering method, or when you had edited a game
with the 'mobile' rendering method.   

- New "Rescan" directory option on the FilePad, for when you make changes
  externally to your document folder and you want to force a rescan (for example
  with iPadOS file system providers like iCloud Drive).

- Fixes the visual rendering of the import pad (#1164)

- Fixes duplicate labels for some inspector properties (#1080)

- Brings back "Rename" on the ScenePad context menu (it was accidentally
  disabled).


## Build 1886

This is a quick release to address a couple of regressions introduced in the new
features.   The EditorProgress dialog was showing up for background tasks (which
was triggered when you come back from the background) and it would show the
game controls on top of the game editor window (Discord)

### Features

* When creating  controls like labels, menus, menu buttons, or text meshes, they
  will now default to having some text when created, similar to what a UI
  designer would do - rather than being empty.

* Small improvements to the Asset Catalog.

* Smaller download due to fewer precompiled shaders bundled (we now only bundle
  those that Godot uses at startup).


## Build 1880

### Features

* Additional tune up for TileSet editor, and we have officially deprecated
  Godot's original TileSet editor tab, so it is no longer available.

* Upgraded from Godot 4.4 Release Candiate 1 to Godot 4.4 official release.

### TileSet editor

* Improving performance for big tile sets (for example 2000 x 1500) and making
  it initialize in normal time also added indicator for creating tiles progress

* Added terrain sets and implemented terrain paint that lets you apply terrain and peering bits

* Fixed some edge cases for Polygon editor and made whole process smoother

* Finished tile merge tool and added save of merged tile to atlas tiles

### Bug fixes

* Brought various Godot fixes from Godot for shaders and the Metal backend
  rendering.   They should prevent a deadlock on startup when loading projects
  with a lot of shaders and bring additional stability to Metal.

* Now will honor the rendering mode/driver you set on the project - I made a
  mistake on the previous release: so now you can  choose between Metal or
  Vulkan rendering engines, you can do this from the project launcher, by
  selecting "Get Info" and setting the desired renderer options (#1148) as well
  as allowing you to configure the rendering method: before you
  start a game: Mobile, Forward+ or OpenGL.


## Build 1876

### Godot 4.4

Upgraded Godot to the 4.4 Release Candidate 1 release and switched from Vulkan
to the Metal renderer engine.  There might be some hiccups as we work through
some of the differences from our pre-4.3 release to our 4.4-based Godot.
  
This fixes the long-standing "The editor does not fill the screen when using an
external display" (Testflight Feedback #22, Internal #689)

This introduces support for the new Shader Global Variable type "External" (#1119).

The sample projects have been updated to 4.4

### Features

- Implemented support for reloading the current project (#701, Discord), which
  became more important as Godot 4.4 will want to upgrade Godot 4.3 projects.

- You can now choose between Metal or Vulkan rendering engines, you can do this
  from the project launcher, by selecting "Get Info" and setting the desired
  renderer options (#1148).   
  
- The above UI additionally lets you configure the rendering method before you
  start a game: Mobile, Forward+ or OpenGL.

- Editor Progress Reporting (#619) has been implemented, so no longer will you
  have to wonder "What is taking so long for the editor to launch?".   You will
  now be the first one to know.

- New native iOS TileSet is ready for testing!   This is one of our last
  components that we are rewriting with a native UI given the high-traffic
  nature of this feature - so we would love your feedback on it.

  (We are starting work on the last chapter before the launch: the TileMap
  native editor pane).

- Preview of the Asset Catalog for iOS is now available - we are tweaking the UI
  and the backend, but we finally have a pipeline to assist users in getting
  their plugins.

### Fixes

- If you enable HDR in your game, the editor will still work correctly, this was
  reported on Discord (#901).

- Internal fixes to our inspector (#1138)

- Fixes game updating, when a new version of an existing game has been
  published.

- GameShare popup, and the user profile view now have "Dismiss" buttons and use
  the same style as other dialogs.

- Godot should now detect changes done to the files if you modified them
  externally (#1000, Testflight feedback).

- Allow reimport of assets to be done without having to change any properties in
  the import pad.

- Initialize iOS's AudioSession following the project settings.

## Build 1854

- Replaced the icon for the menu from being a set of switches to be the more
  common idiom, the ellipsis.   The previous choice of an icon was a source of
  confusion (Discord, months of agonizing over it).

- CreateNode: now it is easy to add images to a 3D scene, we take care of
  loading the ImageTexture and setting the image texture for you when creating
  Meshes (#1127).   This also adds the Constructive Solid Geometry nodes to the
  3D tab.

- CreateNode wrap up: added construcive solid geometry nodes to the 3D tab.

- CPU/GPU 3D/2D particle emitters interaction dialogs have been moved over to
  be iOS native as well.

- The inspector now has a documentation button to easily learn about the type
  you are editing, and the documentation now also renders information about what
  this class inherits from, to easily learn more about their base classes (#275).

## Build 1851

- Additional improvements to the Create New Node dialog, for the Mesh options,
  we try to create a CollisionShape that matches your request when you select
  RigidBody or StaticBody.   You can still replace it with your own, but the
  default will work out of the box.

- When creating Rigid and Solid bodies, we now name the child mesh with the mesh
  type, to make the result clearer.

- Switch to use SF-Symbols based icons for the app, rather than the Godot icons.
  Might make this optional in the future.


## Build 1850

- Hides an old-style toolbar that was accidentally left enabled in Godot 2D
  editor.

- Fixes the "Add" node to auto-dimiss the Create Node Dialog when you are in the
  "All" tab. 

## Build 1846

### Improvements

- Brand new "Create Node" that categorizes the node types in 3D, 2D, Controls
  and other.   The 3D mode in particular makes it easier to create 3D meshes,
  rigid bodies and static bodies in one step.

  It will automatically pick the most relevant section depending on your
  context, or if you choose to use the "All" option, you will continue to use
  the traditional class-based/search-based node picker.

- The Inspector gains some hints for Control/Layout, tracking the same behavior
  in Godot, up until now, we did not display that guidance.  #337.

- Small style touch up to the Inspector to make title sections more prominent
  (#444).

- FilePad: when duplicating a file, we will now propose a new file name, rather
  than making one up behind the scenes after you have chosen one, and will warn
  of a conflict instead of silently failing.

### Bug Fixes

- ScenePad: adjusted the UI for the Node Information slightly, to follow iOS
  conventions and idioms a little better, and display updated signal connections
  and groups (issue spotted on Discord).


- Recently, we started showing the keying on the inspector if there was an
  animation active - even if the animation pad was hidden.  Rectify this.

- Various 2D plugins were not working correctly due to a mistake introduced some
  months ago.  Their failures were subtle and not exactly obvious, like not
  being able to add points to a path, or immediately losing the focus.   Fixes
  #971 and various others.

- The CreateNode UI will now render the markup documentation correctly, rather
  than displaying markup (#1125).

- The "Export Game" option has moved into the menu, to avoid accidentally
  attemtping to export while developing a game.

- Project Launcher: It will no longer show "On my iPad" on iPhone, Vision or
  Macs, it will use the proper name and icon.

### Infrastrucutre Work

- Ongoing work on the new TileSet Editor.

- Various internal cleanups in preparation for localization, and long-term
  maintenance (like adopting internally Swift Lint).


## Build 1841

### Improvements

- Quick Open and Open Shader now have a "Recent" tab, fixing #87.

- You can now adjust the sizes for the ScenePad and FilePads, and updated the
  color of the divider bar, so it is easier to spot (both for these, as well as
  for the bottom plugin pads).

- Breakpoint line numbers are now white making them easy to read, completes the
  work for #288.

- Find Pad improvements: when using a keyboard shortcut, the "Find" field will
  be auto-selected;   New command "Find Next in Project" to navigate your find
  matches in the project;   It now highlights the line you tap on the Find
  Results.
  
- 2D Toolbar now hosts the Zoom control, and we added a new convenience method
  "Zoom to Fit" technicall not in Godot, but present in Apple's Freeform, it
  seemed like a good match.   Both the Godot custom center-selection and zoom
  controls are now removed from the UI.

- SpriteFrame pad is now sticky: if you open this pad, it will no longer vanish
  if you select another object.  Fixes #1109.

- Adds support for various kinds of samples (2d, 3d, 2d arrays) in the Shader
  Globals, this completes the support.   Fixes #147.

### Bug fixes

- The inspector now honors the read-only mode for the editor, fixes #939.

- Fixes support for closing a scene or project, when you had certain plugins
  activated (most noticeably, the Skeleton3D Editor triggered this), fixes
  #1107.

- Fixes project deletion not working for projects that were loaded externally,
  bug #1110.

- Fixes the "Create New Node" dialog not collapsing nodes when requested, 
  bug #1099.

- Fixes Input map list overlaps toggle, bug #981.

- Create New Node no longer reselects the first match if a windowing event
  happens (#1116).

- Dragging of files from the FilePad behavior matches Files.app behavior.

### Infrastructure

- Various internal refactorings from SwiftGodot class registration fixes, to
  cleaning up the interface between the file pad and Xogot.

- Ongoing work for the iOS native TileSet editor.

## Build 1835

- Game Sharing will now publish WebAssembly players, in addition to Xogot
  players.

- New shortcut handling: for users with a keyboard, rather than exposing all the
  keyboard shortcuts as a big "Xogot Shortcuts", they are now classified and
  organized in groups.   This was an important change, as I did not want to keep
  adding ad-hoc shortcuts because they ended up polluting the list, now we can
  add more shortcuts and keep them organized.

- Bring the SpriteFrame UI improvements to the Animation Player as well.

- Skeleton3D mode now works well with the Animation Editor.

- Makes Buttons in various Godot plugins easier to tap, following the changes in
  the general toolbars (#1093).

- Improved icons for the CollisionPolygon2D, and now they properly track their
  state (#1094), but this change also will improve any other Godot toolbar
  items.
  
- When renaming a node in the ScenePad, tapping anywhere else will complete the
  renaming operation.

- Various bugs that appeared when you opened a second project have been fixed
  (we noticed that signals could not be hooked up, but the core problem would
  manifest in other ways).   Fixes #1090, #770.

- Renamed the 'Recents' tab to 'Projects', and will no longer purely list recent
  files, but any projects you have opened.

- Debugger: when the program stops due to an error, you can get additional
  details by tapping on the error.

- Favorite nodes and recent nodes will always be saved, even if you dismiss the
  dialog.

- Panning on the 3D editor should not trigger auto-selection by accident (#907).

- Completed the array editing support, so it should be possible on the inspector
  to add certain kinds of objects (most noticeable, "Streams" into playlists,
  but would also happen in a few other places).  Completes the work on #787 and
  #634.
  
- SpriteFramesEditor: images were not updating right away, required switching
  tabs to update (#1092, #1086).

- The 2D editor no longer includes the "Center View" button as part of the 2D
  improvement efforts, the option is already available in the toolbar in the
  commands as "Center Selection"

- The old animation player UI is gone, giving us back some UI space.

## Build 1828

We are done with all the core features to sharing games (build a game and send a
link to another Xogot user to test) as well completing the new iPad native
interface for the Animation Editor - we would love to get your feedback on these
and to help us improve it.

### SpriteFrame Editor

Usability improvements:

* Control buttons have been adjusted to have a larger tappable region as well as
  adding additional space between the controls.
  
* Playback will now provide visual feedback.
  
* When selecting the sprite frame editor the first animation will be   
  auto-selected, rather than forcing you to select one first.

* When adding a new "SpriteFrames" to a resource, the SpriteFrame tabs will
  automatically show up, you no longer need to switch nodes to activate (#1085)

* Additionally, fixes a crash/hang if you had "inspected" the SpriteFrames and
  navigated out (#1087)

### General

* Various confirmation dialogs now use the standard system style as well.

* In Godot, while some data is stored outside of the range of values, their UI
  auto-clamps, so added support for auto-clamping these.  This was visible in
  particular in the "Theme Overrides" (#1083).

* Fonts for touch numeric input will match the font for other properties across
  the board (#1077)

* Tapping favorites or recents on the "Create New Node" will no longer match
  using a fuzzy match, but be precise up until the user types again (#1049).

* Placement of the popup for numeric input should now be automatic, rather than
  hardcoded (which was sometimes wrong, #1082)

* Adding a script with no template should instead use the "Empty" template
  (#1084), before this, it was ignoring the request.


## Build 1822

We are done with all the core features to sharing games (build a game and send a
link to another Xogot user to test) as well completing the new iPad native
interface for the Animation Editor - we would love to get your feedback on these
and to help us improve it.

### Usability Improvements:

* Performance improvements: switching from a node to another is now much faster,
  done by removing the peer work being done by Godot.

* Ability to set the Main Scene from the FilePad (it was possible from settings,
  but this is a convenience long-press option - #1065).

* When triggering a runtime error, the debugger will now display the information
  associated with the problem - previously, the debugger just stopped with no
  additional information (Discord).

* When creating new animations in the Animation Pad, we automatically switch to
  it.

* When adding a new "Other Node" on a fresh scene, we will go automatically into
  rename-mode.

* Bezier track and Subanimations are now supported in the Animation Editor -
  this completes all the editing tasks.

* When adding a new Animation track, we auto-select it.

* Most of our confirmation dialogs moved to use the style of iOS's alert.

### Fixes

* Steppers for the Snap Grid parameter are now 1, not 0.1 (#1073)

* Fixes accidental creation of points when using two-finger pan (#1059).

* Animation Key editing for setting animations (#1072)

* When selecting projects on the main screen, we no longer auto-launch one of
  them - oops (#1067), 

* Moving files over themselves on the file manager is a no-op, rather than
  corruption (#1081)

* Moving files over others that might get overwritten now has a SwiftUI native
  dialog (#989)

### Foundational Work

* Ongoing work on the new TileSet editor.

## Build 1800

### Changes to the New Animation Editor in Xogot

* When a new node is created, it will now start in "Rename Mode" in the
  ScenePad: we are experimenting with this new default as we replicate various
  tutorials to ensure a smooth operation (#1058)

* You can now create animations from the popup menu in the Animation tab (#1064).

* Moving keys in the Animation Track lanes now go into the undo/redo stack.

* The Animation Library now supports saving animations, libraries of animations
  and loading libraries of animations.   This completes that pending task.

* Volume tracks now render like Godot, with a color gradient for the volume -
  but I also bumped the size to be larger to read.

* Fixed a serious regression in SwiftGodot (#1024) which was manifesting itself
  as a crash while configuring the Input Event, but could happen in other
  places.

### SpriteFrame Editor

Changed the style to match the UI in the new Animation Editor, I cover this in
more detail here: https://blog.la-terminal.net/xogot-animations-tab/

### Overall Changes

* Games now show previously shared games with the option to re-download if your
  logged in! As well as all of your shared games

* Dropped the duplicate "Instantiate Child Scene" which gives us a little bit
  more space to work with.

* We harmonized the UI in the SpriteFrame pad to more closely match the user
  interface idioms of the new Animation Pad, so they are both more consistent,
  but it also helped clear up the user interface (#1055).

* Fixes to the 2D snap parameters, some properties were rendering degrees
  incorrectly, and two properties were loaded as zeroes due to a type mismatch. 

* Improves the look of the swipe icons on the ScenePad (#996, #1062)

### Testing Wanted: New Animation Editor

We just landed the new animation editor, it will appear now whenever you select
an animation and you activate the the "Animation" bottom panel.   When you do,
you still have an option to go back to the old UI.

This new editor has been adapted to be a good iPad citizen, and being a complete
SwiftUI rewrite, gives us opportunities to improve the editor over time with
more native features.

We are particularly interestd in feedback on how the experience feels to touch -
and make sure that everything that you need to do is present, but also that it
is an enjoyable experience - so feel free to send us feedback on Discord or via
TestFlight on any issues you might have - no matter how small.

Known limitations:

* Confirmation for adding multiple tracks to the RESET track is not required.

* Can not currently add sub-animation tracks.

* The timeline rendering currentl only displays the timeline in seconds, but not
  in frames.

* Various advanced commands are not implemented: Bake Animation, Optimize
  Animation, Cleanup Animation, Make Easing Keys. 

* Missing Onion Support.

## Build 1788

### Changes New Animation Editor for Xogot

* Setting the snap value for an animation has been implemented.

* Renaming an animation without using the library has been implemented.

* Help is shown for both property nodes (when selecting a target for the
  animation) and for methods (when selecting a method to invoke in the animation
track).

* Added a convenience "Sprite Animation Track" option to "Add Track", which will
  automatically filter nodes to sprites, and will filter properties to those you
  can set - to reduce the complexity of animating sprites (#1041).

* It is now possible to edit sprite animations that were using sprite
  coordinates rather than just sprite frames.

* Ergonomics: When switching animations, we no longer default to the "RESET"
  track.

### Testing Wanted: New Animation Editor

We just landed the new animation editor, it will appear now whenever you select
an animation and you activate the the "Animation" bottom panel.   When you do,
you still have an option to go back to the old UI.

This new editor has been adapted to be a good iPad citizen, and being a complete
SwiftUI rewrite, gives us opportunities to improve the editor over time with
more native features.

We are particularly interestd in feedback on how the experience feels to touch -
and make sure that everything that you need to do is present, but also that it
is an enjoyable experience - so feel free to send us feedback on Discord or via
TestFlight on any issues you might have - no matter how small.


Known limitations:

* Confirmation for adding multiple tracks to the RESET track is not required.

* Can not currently add sub-animation tracks.

* Volume tracks merely render as data points, does not show volume levels.

* The Animation Library Editor is missing Save-as functionality.

* The timeline rendering currentl only displays the timeline in seconds, but not
  in frames.

* Various advanced commands are not implemented: Bake Animation, Optimize
  Animation, Cleanup Animation, Make Easing Keys. 

* Missing Onion Support.

* Missing Bezier Editor.

### Changes and Fixes

* When loading a scene that contained assigned nodes, we were discarding them
  from Node selectors - this has been fixed (Discord, #1056)

* Easing properties are now rendered with a small graph showing the effect in
  addition to the numeric value - and pressing long-press displays presets that
  you can use.

* The File Pad no longer shows the "search" input line by default, this now
  requires toggling it on - it provides an additional row of text to see the
  contents of your project.

* Fixes to integer property editors that were not refreshing when selecting new
  objects (very noticeable in AnimationKey inspection, #1053).

* Controlling gizmos on the 3D editor should be easier, as the touch area has
  been expanded (#652, TestFlight feedback)

* The SpriteEditor will no longer hang if you try to inspect objects while it is
  open (#863).

* The inspector will no longer undo/redo operations for animation keys,
  following the same behavior as the Godot editor (#938).

* Removing tracks from the animation editor now works (#1054).

* Auto-mapped Godot toolbar items are easier to tap, with a wider tap
  region. 

* Menus in auto-mapped toolbars that do not contain any text are now displayed
  with an ellipsis, previously they were completely hidden (#1030).

## Build 1774

* We now display the menu with options for animations in the 2D Editor that were
  previously not shown (#1030).

* Improved onboarding to animation: opening the animation tab will now offer to
  open an existing animation or create one.  And when an AnimationPlayer lacks
  animations, the option to create one is more prominent.

* The new AnimationEditor is now sticky, just like the original godot one, so
  you can explore all sorts of properties - including the animation themselves
  and property keys, solving one of the previously documented limitations.

* Fixes various corner cases in the new animation editor (#1045)

Major update from the last release, copying and adjusting here, as we would love
testing on it:


### New native Animation Editor for Xogot.

We just landed the new animation editor, it will appear now whenever you select
an animation and you activate the the "Animation" bottom panel.   When you do,
you still have an option to go back to the old UI.

This new editor has been adapted to be a good iPad citizen, and being a complete
SwiftUI rewrite, gives us opportunities to improve the editor over time with
more native features.

We are particularly interestd in feedback on how the experience feels to touch -
and make sure that everything that you need to do is present, but also that it
is an enjoyable experience - so feel free to send us feedback on Discord or via
TestFlight on any issues you might have - no matter how small.

There are some features missing in the current editor, we are actively working
on them, and they will be coming in the next few releases:

* Snapping has not been surfaced in the UI

* No help is displayed when selecting a node property or a method from the Add
  Track selector.

* Confirmation for adding multiple tracks to the RESET track is not required.

* Can not currently add sub-animation tracks.

* Volume tracks merely render as data points, does not show volume levels.

* The Animation Library Editor is missing Save-as functionality.

* The timeline rendering currentl only displays the timeline in seconds, but not
  in frames.

* Various advanced commands are not implemented: Bake Animation, Optimize
  Animation, Cleanup Animation, Make Easing Keys. 

* Missing Onion Support.

* Missing Bezier Editor.

## Build 1761

### Features

### New native Animation Editor for Xogot.

We just landed the new animation editor, it will appear now whenever you select
an animation and you activate the the "Animation" bottom panel.   When you do,
you still have an option to go back to the old UI.

This new editor has been adapted to be a good iPad citizen, and being a complete
SwiftUI rewrite, gives us opportunities to improve the editor over time with
more native features.

We are particularly interestd in feedback on how the experience feels to touch -
and make sure that everything that you need to do is present, but also that it
is an enjoyable experience - so feel free to send us feedback on Discord or via
TestFlight on any issues you might have - no matter how small.

There are some features missing in the current editor, we are actively working
on them, and they will be coming in the next few releases:

* It is not possible to "inspect" a key when you select it on the inspector.

* Snapping has not been surfaced in the UI

* No help is displayed when selecting a node property or a method from the Add
  Track selector.

* Confirmation for adding multiple tracks to the RESET track is not required.

* Can not currently add sub-animation tracks.

* Volume tracks merely render as data points, does not show volume levels.

* The Animation Library Editor is missing Save-as functionality.

* The timeline rendering currentl only displays the timeline in seconds, but not
  in frames.

* Various advanced commands are not implemented: Bake Animation, Optimize
  Animation, Cleanup Animation, Make Easing Keys. 

* Missing Onion Support.

* Missing Bezier Editor.

### Sharing
  
You can now tap the share button in the upper-right corner of the app to 
share a build of your project that can playtested by anyone else running Xogot.

### Bug Fixes

* Makes the shell buttons for the left-side panes easier to tap (#1029,
  TestFlight feedback).

* We are starting to test the capability of sharing your games with other Xogot
  users.  

* Signal pad: change the colors for signals to be the secondary color, and the
  connections to use the primary color to be easier to spot.

* Arrow keys no longer "stick" when running a game (#1002, TestFlight feedback).

## Build 1732

* Fixes for multiple editor windows being opened, it was not possible to open
  projects, with the error "Another editor is already active"

* Updated profile page.

* Fixes the "jumpy" behavior while dragging public bug report #25 (Internal
  #889). 

## Build 1717

* Opening the property inspector should now be snappy, at the cost of a cute
  animation (#669, public bug #4, and multiple Testflight feedbacks).

* Crash fix reported via Testflight crash reporting in the 2D editor(#957), this
  happened a lot, but we never had good instructions on how to reproduce it.  

* Prevent a scenario where we would display the game controllers on the Game
  Editor window (#987, Discord feedback).

* Fixes node renaming on the scenepad not working on landscape mode (#1017).

* Fixes the multiple-editor check at startup.

* When popping up the numeric input, resign the input from other input boxes, so
  that there is no confusion as to where the input is going both in practice and
  visually (#982).

* Fixes the regression reported on Discord for the editor panning not working
  because it assumed that you were trying to zoom and it overrides the pan.
  The trigger was too sensitive.

* Shell updates, we are redoing a few things, we dropped the "Export" tab, which
  is not ready to be used.  Added a new on-demand "Games" tab that will contain
  games that have been shared with you.

* Not enabled: work in progress on the new Animation Editor and the TileMap
  Editor. 


## Build 1678

* Stops audio playback when you stop a game (#968)

* Multi-touch events now responds to multiple-finger inputs, and does not ignore
  the second touch (#909, follow up from #854 and the improvements in build
  1567).
  
* Fixes a crash when going back to the homescreen that was introduced in the
  last release.

* Short-term fix for Skeleton/Bones editor crash (Xcode Crash reports), with 
  telemetry to try to find the root cause.

* Shift+two finger move on the trackpad will now pan, rather than rotate (#913).

* Pinch gestures on the trackpad no longer zoom too much (#904).

* Renaming on the Scene Pad and the Sprite Editor now requires a long-press and
  selecting "Rename", rather than being a "Rename on tapping a selected element"
  #988.   We are hoping that this will be a slightly better experience.

* Fixes icons not showing up for projects that are created in an external
  location (#997 and public bug #57).

## Build 1660

* IO Errors are now reported on a native UI, rather than the Godot native UI
  (#544).

* Internal: avoid an invalid idiom in Swift, which mostly works, I had been
  warned against, but "works for me" had carried me for weeks.  Decided to
  finally fix every instance of the problem (#618).

* New Scene dialog will now work if you are editing in half-screen (for example,
  if you are running side by side, Discord Feedback, #774)

* Potential crash fix related to the Joypad (#850).   Some users had their Xogot
  crash due to us invoking Joypad methods, we believe that there was a scenario
  where we could invoke the Joypad methods on the wrong process/thread.   We
  hope that this fixes the problem.  

* Fixes the launch screen display for large displays - this only happens when
  you connect an external display to your iPad at a higher resolution (#923).

* Avoid inserting quotes when it is not necessary when dragging nodes from the
  scenepad into the text editor (fine tuning #973)

* SpriteAnimationEditor: the FPS value was not being set on the animation, now
  it is (Discord, #994).

* SpriteAnimationEditor: inputing a value on the FPS display on the sprite frame
  editor will auto-dismiss.

## Build 1648

* Tapping on the Script icon when you are already on script mode, will bring up
  the "Quick Open" dialog for scripts.

* Will now show warnings when the system is low on memory, the messages are
  displayed with a new toaster-like notification system, and we will be wiring
  up some Godot messages here too (#977)

* Editor Toast notifications are now shown (fixes #383)

* Fixes drag-and-dropping of scene pad nodes into the text editor, it will now
  insert the optimal path, rather than the raw node id (Fixes #973)

* Internals: add additional logging to help us track down crashes.

* Game runtime errors are now rendered with an error description, not just the
  high-level warning, as it was confusing as to what exactly this was.

* The UI will no longer fight you when single-stepping in the debugger if you do
  not have a keyboard attached (#491).

* The ScenePad's Node/Info contains triggers to open connections and groups, and
  an easier region to tap them.

* The ScenePad Info popup will now format the brief documentation for the node
  and will show the entire brief description.

* SignalPad: "Get Info" on a signal will now render its documentation, previousy
  it would only render it for the signals on the most-derived class.

* Undo/Redo buttons on the code editor are wired up when not using the physical
  keyboard. Fixes #941.

## Build 1636

* Some resource previews on the inspector were not being dispayed if the
  resource renderer did not support generating tiny versions of the image (which
  we did not even use).  Fixes #837.

* Fixes the missing Output data when debugging a program (Discord feedback).

* Allows Animation Key Frames to be edited in the inspector (Testflight
  feedback, internal #795).

## Build 1631

* Confirmation and accept dialogs mapped from Godot to SwiftUI will have the
  primary action at the end, following the iOS platform conventions (#963)

* Temporarily remove the "Minimize debugger" option, which produced an ugly UI,
  proper fix will come soon (#922).

* Breakpoints on early code (typically _ready) are now honored (Testflight
  feedback, #761)

* Fixes a lifecycle bug that we caught thanks to recent hardening of the
  runtime.   We noticed a few scenarios that were wrong and addressed them.

* Actions on multiple scene nodes now works with the Swipe-based actions (#950).

* Selecting a new file on the FilePad should now update the inspector
  accordingly (#953)

* The code editors are not reset after switching tabs anymore (public bug #55).

## Build 1620

* Crash fix on the Project Settings if you modified a text input field and
  switched tabs.  But it means that in Stage Manager, an extra empty row 
  is shown when a hardware keyboard is attached when editing text (Xcode crash
  reports, internal #964)

## Build 1616

### Features

* Add support for "Property Keying", this is the feature that shows a small
  "key" object next to a property when the Animation pad is selected and there
  is an active animation (Issue #995, feedback from recent survey).

* Added comment/uncomment shortcut for code (various feedback requests, among
  those #40, Testflight and survey feedback).

* The Inspector will now show the object name/type when inspecting it, but only
  if the name is different than the first category name (#948).

### Bug Fixes

* Take into consideration the size of the resizing handle to set the minimum
  bottom bar panel sizes for fixed panels (like the Audio one).   #931.

* Fixes the scenario where the completion window could become too small.
  Testtflight feedback.

* Reworked the ownership model in SwiftGodot, which fixes a fundamental design
  flaw which we had worked around by leaking.

* Fixes the code completion window not being large enough after running a
  program with an error (#921), Testflight feedback.

* Fixes a scenario that took up too much space in the debugger (#922),
  Testflight feedback.

* Fixes Drag gestures: Camera jumps on transition from moving to dragging
  (public bug #45).

* Look and Feel: Create New Dialog does not have uneven row sizes (#952).

* 
## Build 1594 - a Christmas Miracle!

* The Godot Embedded content will now track the system color scheme.  While
  Xogot already did this, the embedded Godot code did not, it was running in 
  dark mode (#924, #627, #715)

* By popular demand, the ScenePad now shows the Godot icons for the node types,
  as folks say that this is an important visual cue to determine what things
  are.  Initially, I thought the colors were pretty bad, but thanks to DETOX,
  and SigitSP on Discord, they pointed out that the colors were dynamic and
  based on the theme.

* New size font picker for the code editor (#906, based on survey feedback).

* Added a nested array editing capability, this was surfaced as lacking support
  for adding an InputEventAction (#920, based on Testflight feedback).

* Show type icons on the scenepad.

## Build 1582

* Surface "Create Shader" in the FilePad "+" menu (#894)

* 3D Editor: the viewport menu now offers commands to focus on the origin, or
  focus on the selection, these have also been bound to the keyboard shortcuts
  "o" and "f" respectively, similar to Godot on Desktop (#762 + survey
  feedback).

* Fixes 3D Viewport commands "Align Transform with View" and "Align Rotation
  with View".

* Will not request to upgrade projects that had
  rendering_method="gl_compatibility" (#905).

* Visual Shaders are now available on the new Shader Editor tab.

* When you create shaders, we will open the shader editor right away.

* Fixes a bug when trying to rename a scene node, and the keyboard would cover
  up the pad, and dismiss the rename operation (#919, Testflight feedback).

* Add additional space to the "trash" icon on the output window, so that it is
  easier to close (#927, Testflight feedback).

## Build 1572

* Create Shader and Create Script dialogs will now select the part of the
  filename so that it becomes easier to rename those fields at creation time.

* New shaders now get a unique name by default.

* You can now import photos from your library straight into the FilePad (#625).

* Magic trackpad support for panning (Part of #17).

* Fix an infinite loop in the bottombar update.

## Build 1567

* Fixes the touchesEnded event being delayed with multiple finger inputs
  (#823, submitted as Testflight feedback).

* Further refinements to the multi-touch handling (improvement over the fix for
  #854 from Build 1552).

* SpriteSheetImporter: allow users to change the background of the image, to
  simplify importing images that might be white on transparent colors (Discord feedback).

* Launch Screen: no longer overloads the [+] button to be new game or browse
  locations.  The browse location option is now on the toolbar (#891)

* If you do not have a physical keyboard attached, we will not auto-focus the
  search field in the "Create New Node" dialog, going to experiment if this is a
  better workflow for users (#749).   But if you have a keybaord, it will
  autofocus.
  
* Launch Screen: style changes for the "Delete Project" confirmation dialog
  (#821).

* Xogot will no longer show the convenience keyboard input accessory if you have
  a hardware keyboard attached.

* New SwiftUI-based Shader Editor, it is currently missing the
  VisualShaderEditor, but will allow us to tune the UI and experience for the
  shader editor (Discord feedback, #703).

* Improved the heuristics for positioning the code completion window, it should
  not jump anymore (Discord feedback).

  
## Build 1552

* When loading a Godot project, if the configured renderer is not support in
  Xogot, you will get a chance to change it to the "mobile" renderer.   Fixes
  public #50.

* Sprite Editor: commits a rename change, even if you tap away (report from
  Discord).

* Introduce multi-touch input options for the running game.   This version will
  by default dispatch raw multi-touch input to your program, but we introduced
  an option in project settings
  input_devices/pointing/ios/enable_pan_and_scale_gestures, similar to the
  option that exists for Android that will instead turn multi-touch input events
  into pan or scaling gestures (that was our non-configurable, old behavior).
  Fixes #854 and public #24.

* Various Autoload features were completed (#883): Autoload renaming, allow
  enable/disable of autoloads, expose as global.

* Multiple files can now be dragged from the FilePad into the editor surface
  (#867).

* Fixes the "Tile Set" tab bar not showing when a new TileSet resource was
  created.  This is a proper fix for #14, which we had not quite fixed, and we
  had just grown used to
  select-another-node-and-come-back-and-select-the-tilemap.   The issue was that
  we were tracking items being hidden from the bottom bar, but not items being
  shown.  So this would have impacted other plugins as well that were not
  activated on demand.

## Build 1546

* Fix a regression introduced in 1541 that prevented the bottom tab actions from
  activating.   This was a bug introduced due to a fix preventing a hang for
  Theme resources in 1541

## Build 1541

* Godot-native popups would sometimes show up and not get the focus, and users
  had to tap around to force the focus to enter, without this, it would give the
  feeling that the app was "stuck".   Fixes #843, a bug initially reported on
  Discord when it was not possible to rename an animation.

* Rename dialog on the FilePad sometimes would not show up.

* Option to show the available memory.

* Fixes signals not showing up for nodes that had scripts attached.

* Re-enables the MotionManager, so your app can now get those events (we
  disabled it very early on in the project).

* Editing Node names on the scene pad in landscape mode will no longer dismiss
  the keyboard (#872).

* Numeric Input for the sprite editor and sprite sheet importer: hardcoded
  proper locations for the numeric input, as we were creating views that would
  not allow data input (#708 and user reports on Discord).

* Project launcher will now show the last date used for the projects (#382).

* Fixes debugger breakpoints on built-in scripts (partial fix for #877).

* Fixes an issue with array elements crashing the editor (Crashlytics).

* Fixes a hang when activating certain resources on the inspector (reported on Discord).
  
## Build 1516

* Improvements to the signal connection dialog:

  * When connecting a signal, we now stub the signal in the target method
    (#873), this is what users of Godot expect, and we accidentally dropped this
    support when we switched to the native editors.

  * Save the Godot scripts using the resource API, ensuring that the list of
    available methods is reflected when the user needs them on the connection
    dialog (#870).

  * Change the filter options to use a button toggle-style, rather than a menu
    picker, as it is faster to switch between the options.

* Syncs the ScenePad collapsed state, avoiding a rare scenario that would
  forcefully collapse the ScenePad (#781).

* When importing assets, prevent read-only fields from being modified (#816)

* Fixes a crash with plugin extensions, this was mostly noticeable when opening
  Skeleton objects, but could potentially happen elsewhere.   Now every
  extension is shut-down immediately when navigating in the inspector (#849).

## Build 1508

* When downloading samples, if the remote server does not include a
  Content-length, display a generic progress view.

* Fixes double-tapping to select on various places.

* Add support for the soft-keyboard return key accepting a completion option
  (prevously, it only worked for the physical keyboard).

* Fixed a crash spotted on Crashlytics related to Godot embedded views

* Implemented recursive "Make Resource Unique" feature for resources, it was
  missing (Crashlytics)

* Make sure that the snap value editor can be displayed, regardless of the
  toolbar position.

* Snap value editor now uses scrolling input for degrees (Internal #260, #864)

* When using the "Show Node in Tree" option in the inspector, we now use a
  different color than the selection to highlight those nodes (#817)

* SpriteFramEditor: the new editor now goes through the Godot undo/redo system,
  fixing a plethora of bugs identified.

* We now show a quick tooltip for items in the toolbar to guide users on what
  the features are (#661)

## Build 1479

* Pan and zoom events can now be used across the application together.

* Styled the editor so that breakpoints lines are more clearly visible, it used
  to be dark enough that it was unpleasant to look at.

* Code Editor: "Replace" functionality is now working (Testflight feedback)

* Prevent iOS 18.0 users from going back to the main screen, as this triggers an
  iOS 18.0 bug.

* SceneImporter: fixes the inspector in the UI, so navigation now works properly
  on that window.

* Undo operations are now reflected on the Inspector.

* Multi-touch input is now sent to Godot scripts.   Partial fix for  https://github.com/xibbon/XogotIssues/issues/24.

## Build 1465

* Interacting with embedded inspector plugins will no longer scroll the
  inspector as you scroll inside those elements. 

* Gradient previews will now properly show.

* Embedded controls on the inspector will no longer vanish

* Follow up to picking custom locations: there were a few file pickers in Godot
  that defaulted to the wrong file system location if you had picked a custom
  location. 

* Panning: panning across the Godot controls should now track the finger, as
  expected by ipad users, rather than the accelerated mode that is more suitable
  for desktop users.  This should be visible in various places that implemented
  panning in the Godot controls.

* New Text Editor Setting for completion: add type hints on/off toggle, feedback
  from Testflight.


## Build 1464

* Now renders inspector plugins for nested elements of an object.   Fixes #796.

* Prevents a crash that happened after a game was stopped.

## Build 1459

* Makes the swipe action on the ScenePad and FilePad less sensitive.

* Code completion for GDScript code is back.

## Build 1457

* Project Manager: it is now possible to select many projects and delete them in
  one go.

* Clears memory used after a game terminates, this also fixes crashes that
  happen when restarting a game (AppStore crashes)..

* Fixes an imbalance of objects, that prevents another crash from happening   
  (#833)

## Build 1452

* Due to popular demand, we now support saving your projects on a location of
  your choice, so that you are not limited to saving files into your iPad, you
  can now choose an external USB drive, iCloud drive or any other external
  locations.

* Deleting a project will now require confirmation - this is not a sign of
  weakness, but an acknowledgement that certain actions in life are
  irreversible, so we leverage the best technologies in SwiftUI to ensure that
  you have a second chance.

## Build 1449

* Fixes a crash when an object is removed via undo, while the inspector was
  still editing it.

* Fixes the issue that crashed Xogot when a game was launched, a regression
  introduced for the fix in Build 1439 for animations.

## Build 1444

* Bring back the scrolling input editors.   Sadly, this interferes with the
  swipe gestures.   So I disabled the swipe gestures on the inspector, and will
  have to figure out a good UI for it.

* Fixes the Setting crasher 

## Build 1439

* Fixes another class of crashes, this time triggered by the animation editor,
  but this is a general fix that will apply to many more scenarios (internal
  #825)

* 2D Editor: Disable rotation line, when pinch or pan event occurred, also seen
  as "Pinch to zoom causes node to move if transform tool is selected" reported
  via Testflight.

* Sets the minimum hardware requirements required by Godot, as older iPads (7th
  generation and older) do not have the GPU support that the Godot editor
  requires.

* Fixes a crash on the code editor (Crashlytics)

## Build 1433

* Fixes the scrolling not working, regression introduced in 1430 the fix is to
  loosen up the sensitivity of the swipe handlers.

## Build 1430

* Backported another Tile Editor fix

* Swipe actions on inspector properties now exposes "copy path" operation, as
  well as copy value and paste value (internal #623)

* Swipe actions on ScenePad now allow selection/deleting.

* Swipe actions on FilePad now allow selection.

* Make it easier to tap on menus in resources (it was too easy to navigate into
  the subresource, internal #737)

## Build 1425

* Groups Editor now support Global groups in addition to scene groups.

* Bring back the stricter object tracking.

* You can now type in any place in a row in the "Create New" dialog (Testflight
  report).

* In the Project Manager, the delete option is properly colored (red, internal
  #800

* Dictionaries and array editors no longer use pagiation for consistency with
  the other editors.  Internal #810.

* When deleting files from the FilePad, we will now show the user the impact
  that deleting the files would have on the project, fixes #779.

* Signals declared in scripts are show on the inspector, fixes internal #608

## Build 1415

* Fixes crash in the tile editor when painting with a physics layer.

* Create Node dialog now hides deprecated and experimental by default, but
  allows you to show them if needed.  

* Create Node dialog can be expanded to have more space to see the node types. 

* Undoes the stricter object tracking, as it has a design flaw.

## Build 1411

* Qualify of life improvement: for resources that only have a single type,
  rather than offering a "New" submenu, just inline the value, like "New
  TileSet"

* Quality of life: when pausing a program, if the program is paused and there 
  is not script to highlight, rather than showing the debugger pad, show the
  output pad, internal #772.

* We introduced a vastly stricter binding from SwiftUI to Godot in 1399, which
  will cause a few crashes in the next few days in - this version contains fixes
  for the early crashes that have been spotted.

## Build 1402

* Fixes the issue that prevented data input in text fields in sheets triggered
  from the inspector view (Public report #41), this also should fix other similar scenarios.

* Additional fixes for the new more stringent object tracking, fixes a crash
  (reported by Joseph - internal #801)

* Create Node now flags experimental and deprecated nodes.in

## Build 1399

* Fix regression that prevented the debuggee from closing its window.

* Looks: removed extra padding that was added to some BottomBar pads to leave
  room for a drag-handle, before I changed course to the current approach.

* Adds support for dropping files into Resource picker and file pickers.

* Fixes setVirtualControllerCallbacks

* Fixes a series of crashes that we tracked via Testflight related to spawning a
  game and the editor.

* Related, fixes a crash on the virtual controller that might crash.

* Implemented support for editing arrays of certain elements in the inspector -
  most notably folks reported it missing in things like TileSet (User feedback)

## Build 1387

* Fix a crash on the audio interruption handler (Testflight feedback)

* Additional telemetry to track down the MoltenVK issue that crashes on certain
  projects at startup.

* Disable Developer mode, there are lots of crashes coming from users that have
  done something behind Xogot's back, and I want to rule the reasons out.

* Launch screen: if you were in select mode, but switch to another tab,
  the select mode will be reset.

* Launch screen: long-press on a project now has a "Delete" option.

* FilePad: dragging a file into itself, or in the same directory no longer
  triggers an error.

* Bumped version to 1.0.3 to make it easier to diagnose.

* Fixes objects not being inspectable in some scenarios, tracked via Crashlytics.

## Build 1379

* Fixes the scenario where directories removed from the filepad would not be
  removed from the file listing.

* Start to roll out a system to track objects that Godot releases but that the
  UI still holds, this will help me track down the places where this is
  happening (SwiftGodot Resilience).

## Build 1375

* Fixes the issue where the controller would not work if it was paired before
  your game started.   This was finally removed as an issue from these very
  release notes! (#283)

* Restoration will no longer start with a blank screen, that turned out to be an
  attempt to restore your game - but this should not even be allowed

## Build 1372

* Completes the audio setup for the game, so audio for your game will follow the
  settings you had configured when it plays.

* Should fix the "Crashes when you close a scene" (Testflight crash/feedback)


## Build 1370

* Fixes crash on dictionary editors for unknown data types, and adds support for
  using "Objects" as keys and values in the godot editor for dictionaries.

* "Pad" menu becomes more noticeable when launching an app.

* Dirty-file indicator is now properly tracked (Discord, Testflight feedback).

* Fixes the icon alignment on the toolbars.

* Bring a visual indicator that "select mode" is active in 2D and 3D toolbars.

* Bring back the Display Type Selector in te 3DViewport options.

* Work in progress: audio modes from the game are saved when the game pauses and
  the system defaults are put back in place, and restored when the game resumes (Discord feedback).

* Built-in scripts will now get their proper name when creating them.

* Fixed scrolling on launch screen for the learning projects (Testflight
  feedback)

## Build 1360

* Updates MoltenVK to v1.2.11, hoping that this fixes a number of crashes that 
happen on startup (Testflight feedback)

* Removes an assertion for a resource that was not released (Testflight crash report)

* Reduces the FPS to 60 frames per second while using the editor, and keeps it
  at 120 while running games.   This should reduce battery usage a little, but
  there is more work to do here (Testflight feedback)

* Fixes a crash on the dictionary editor for unknown dictionary types
  (Testflight crash)

* Fixed: Attempting to scroll Godot node selection dialogs drags instead of
  scrolling (Testflight feedback).

## Build 1354

* Inspector now also capitalizes properties that use camel case, so things like
  "playerSpeed" are rendered as "Player Speed".  #10

* Adds shortcuts for select, move, rotate, scale, group, pan, ruler, lock,
  center selection, frame selection, local coords, snap.

* Compliance: states the purpose of accessing the microphone, this prevents a
  crash when trying to use games that want to record audio.  #29

* Launching Xogot will no longer interrupt audio playback.   There is still
  additional work necessary to allow games to change those settings. #37

* Property editors for dictionaries are now exposed.

## Build 1347

* Additional analytics to try to track down a crash that is happening with a
  popup, but none of the crashes have any feedback associated with it.

* Improve the numeric data input, the small arrow keys will now at least
  increment values in 0.1, instead of the hardcoded values in Godot, as
  sometimes those would be as small as 0.001 which were barelly noticeable

* Numeric Input changes: for users with keyboards using a modifier with the up
  and down arrow keys now change the value like this:

  ** Option: 0.1 units
  ** Shift: 10 units
  ** Control: 100 units

## Build 1342

* Resource pickers will now have the proper filters for the data type being
  edited, instead of defaulting to a useles default that did not show the right
  files.

## Build 1338

* Additional breadcrumbs for catching crashes.

## Build 1334

* Documentation should be rendered again

* Fixed the tab colors in the text editor, the ghost text is gone

* Help page now has proper rounded corners

## Build 1333

* Fixes crashes caused by background messages being posted to the output log

* Additional debug information for some crashes we are tracking

* Fixes double-tapping on FilePad, ScenePad and CreateDialog, once you tapped
a row, the second tap was always considered a double-tap.

* Double tap on directories toggles the directory expansion state, rather that
  opening the inspector.

* Prevents a crash on when the collision gizmo is enabled (this looks like a
  potential Godot upstream bug: c8424cfce77ca9536c7fdb0c03345a2fbcc39bba)

* List selection mode in the 3D editor is now working.

## Build 1328

* Fixes the Skeleton3D plugin editor that would lead to a crash, but this
  surfaced a series of issues related to toolbars for plugins and inspector
  plugins - all those issues have now been fixed.

* Fixes crashes stemming from partial deinitializations of the editor.

* Surfaces incomplete project properties into the Project Settings (like
  General/Wind, but will work for other properties that are only 2-levels rather
  than the standard 3-levels)

* Map Layer editor now supports Pinch and Pan.

* Enabled the Mac-command like shortcuts in Godot, rather than the default
  Windows-based ones (visible in things like "Select All" in a Godot Text
  editor, now it is Command-A rather than Control-A).

## Build 1320

* Allows cinematic preview to be disabled.

* Fixes physical keyboard input for special keys.

## Build 1317

* When selecting a file from a property in the UI, it will now use the
  configured filters by default, rather than the system default.

* Tapping "Select" on a file selector property without having picked a file will
  now reset the value to empty.

* Made the debugging control line at least 44 points tall so it is easier to tap
  the buttons there.

* Made the completion entries larger so they are easier to tap.

* Use debug builds to help us isolate a couple of crashes.

* Fixes the debugger window positioning when there is no target running.

* Added debugging symbols for the Godot component, it turns out that the
crash reports were getting very hard to see due to the lack of this information.

* Fixes the crash that was triggered when tapping on the sky or sun in the 3D
  editor, finally tracked it down.  This only happened in release builds.  A
  lovely gift from the C++ optimizer to us.

* Importer and other properties: avoid replicating the last section in
  properties with implicit categories.

## Build 1307

* Makes sure that a deprecated toolbar is not shown while editing controls.

* Does not restore Built-in script loading, like Godot does.

* Internal improvements (Godot rehosting code).

* Saves all scenes and scripts before running, to match Godot on desktop, and
  also is much better UX.

* Fixes crash on the Groups pad.

* Brings Crashlytics, hoping to find the location of some ellusive bugs being reported.

## Build 1296

* Native SpriteSheetImporter implemented.

* Fixes loading and saving of built-in scripts (those that do not have a
  separate file).

* Fixes running not picking up saved changes.

* Project Manager now offers long-press options to rename projects and launch projects.

* Fixed some ranges in the 3D toolbar light properties that were out of range
  and one property that could not be changed.

## Build 1283

* Should fix crashes related to the inspector and custom resources that were
  triggered under various different conditions.

## Build 1280

* Fixes the scenario where tapping the filepad and scenepad icons to
hide the sidebar would cause the sidebar to not be shown again (#446).

* *Did not set min/max settings for windows when resizing, which
caused runtime warnings, now we are correct (#437)

* Clip the top window, so that we do not overdraw (no bug filed, but
preemptive).

* Tracks the state of the code editor and the bottom bars, and the
last used gets the priority for the display.  The priority is very
simple, if the text editor just became the first responder, then when
the keyboard appears on the screen, we hide the bottom bar.  Fixes
#375.

* Allows the dragging handle to be used when a bottom pad is
maximized.

* It is now possible to tap anwyhere in a row on the Create New Dialog,

* Disable node 3D editor plugin mouse motion event handling if pinch or pan
  event occurred.

* Adds Command-shift-C shortcut to copy the node path

* Adds Command-Shift-[ and Command-Shift-] to go move across editor tabs.

* Style: search boxes no longer auto-capitalize.


## Build 1274

* Now it valides project names

* Fixes slow response times on dialogs, this fixes a regression from when I
  added double-tap to activate. 

* Fixes the ratio-lock button not working.

* SwiftGodot upgrade (just internal, nothing really visible)

* Fixes the popup closing errors.

* When using StageManager, there is an iPadOS bug that shows an empty bar at the
  bottom when doing text entry, so we deployed a workaround.

## Build 1260

* Font color in the filepad search is now visible in dark themes.

* A serious bug that would prevent plenty of components of Xogot to work on the
  second project opened has been fixed.   It was most obviously manifest as
  buttons or objects not responding sometimes to taps, and a "SignalProxy" error
  logged in the output window.

* Duplicate labels in the Project Settings have been fixed.

* Searching in the FilePad will automatically expand folder nodes when there are
  matches inside a closed folder.

## Build 1256

* Numeric popups no longer move as the values change.

* Additional improvements at Project Shutdown to prevent it from crashing, an
orderly shutdown has been implemented now.

## Build 1253

* Toolbar Animation icons are now displayed.

* Double-tapping on an item on the the Quick Open Dialog will open the item.

* Recent files were being saved with an incorrect filename, polluting the space.

* Fixed a crash in the CodeEditor triggering while reporting IO errors.

* Prominent Import files button in the toolbar.

* Clear option in a Resource should now clear the value.


## Build 1245

* Adds 3D editor, "Align Transform with View" and "Align Rotation with View" are
  now available on the viewport menu.

* Reliability: many scenarios that crashed where going back to the "Project
  List" are fixed, this is the result of a long-term effort, and the proper
  solution just landed.

## Build 1237

* 3D Node Editor, surface the "Use Local Space" coordinate option to the toolbar

* Fixes the text input in the inspector

* If you have a node selected in the scenepad and tap the "Script" icon at the
  top automatically load that script (only happens if you do not have any
  scripts opened).

* Quick Open dialog, Pick scene dialog, sprite frame editor: tapping anywhere in
  the row selects the row, not just the part with the text.

* "Run Specific Scene" and "Run Current Scene" work now, they were always
  running the main scene.

* You can now select the new SpriteFrameEditor from the settings menu.


## Build 1230

* Fixes the bug where if you were running your game in full screen, the stop
  button would not stop it.

* Disabled localization of Godot (it was mixing English and your local
  language), for now only English is supported.

* Double tapping on a row in the "Create New Node" will create the item,
    without having to tap "Add"
