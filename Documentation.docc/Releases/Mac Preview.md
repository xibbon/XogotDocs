# Xogot Mac Preview Release Notes

Release notes for our preview release of Xogot for Mac.

The Mac preview is still early, and some areas are incomplete or
expected to change. These notes are intended to help testers understand
what to try, what to expect, and where feedback will be most useful.

## Known Limitations

The current Mac preview has the following known limitations:

- C# / .NET is not supported.

- The Profiler detail page is incomplete.

- The Inspector has not yet been fully styled for macOS.

- Export templates are not currently included. At this stage, only Mac, iOS, and
  iPadOS deployments are supported.   Since Xogot is compatible with Godot, you
  can just use Godot to export to those platforms.

# Releases

## Build

### Improvements

* Our welcome page now has links to the Learning Center, videos and tutorials.

* You can now resize the time of an animation in the AnimationPlayer
  visually, you do not have to type in a value (#2729)

* You can now copy entire values from categories and sections and paste them on
  other categories/sections (borrowed from the upcoming Godot 4.7)

* Large enumeration values now show a search box in addition to a popup.

* Monaco commands are now available when you trigger the command palette  with
  Command-Shift-P  and we will now display the shortcut values to trigger that
  command. 

* You can now right click on the scene tabs to get a number of common operations
  on a scene (borrowed from the upcoming Godot 4.7)

* We now have a MacOS/iOS native GridMap placer UI, this replaces the Godot
  GridMap placer.

* Setting breakpoints on canvas_item shaders will now show a preview of the
  texture being assigned at that point in time (brorowed from the upcoming Godot
  4.7)

### Fixes

* Fixes Action Input renaming, it was difficult to rename a field as we kept
  resetting the value (#2571).

## Build 1483

In this release, the "Xogot" 3D Navigation setting has been updated to mirror
the behavior of Reality Composer, this is very close to what you would get on
the iPad and feels like the right approach and what we feel integrates best with
the Trackpad, common on Apple platforms.

The bindings are as follows:

### TrackPad Bindings

* Two finger pan: pan
* Press-drag: rotate
* Press-shift-drag: selection
* Press-drag + Option: zoom
* Two finger drag: rotate around camera

### Magic Mouse Bindings

* Click-drag: rotate
* Two finger pan: pan
* Right-click drag: rotate around camera
* Finger pan: pan
* Click-drag + Option: zoom


## Build 1476

### Features

* Learning Center: added more samples and we have been updated the existing ones
 to  Godot 4.6.

 * Code Editor: changed our zoom keyboard shortcut to Command-[+/-]
   instead of Command-Shift-[+/-]

* Code Editor: you can now pick any font size, you are no longer limited to the
  limited selection we inherited from our iPad choices.

* The inspector now evaluates GDScript extensions in numeric fields.   Prefix
  the value with "=" to force an evaluation as an expression.   Otherwise, if
  your input cannot be parsed as a number, we will try to parse as an
  expression.  Fixes #369

* AnimationPlayerEditor gets support for AnimationMakers.

* AnimationPlayerEditor gets shift/command-click selection for keys (#2733)

* UI work to improve the Particles2D Emission Mask Dialog, Rename dialogs,
  various popups that had a debug blue labels left behind and EaseAnimation.

### Fixes

* Fixes a crash when closing the editor with Command-Q

* Fixes a crash in the wild with a race condition when updating documentation.

## Build 1462

### Features

* Clicking on the close button will now close the project, not just the active
  scene.

* We will now warn users if they close a scene or project and there are unsaved
  changes. 

* An obscure feature in Godot that shows optional panels has been implemented
  (PROPERTY_HINT_GROUP_ENABLE for those following at home)

* We now have proper help popovers on Mac (also fixes
  https://github.com/xibbon/XogotIssues/issues/113)

* Enter-to-rename is now available on the ScenePad as well (it was only
  available on the FilePad, but this oversight has been remedied).

### Performance

* Major performance optimization on the Scene and File pads by reducing busy
  work.

* Major performance upgrades to the inspector, they were not very noticeable day
  to day, but they would turn up during our profiling and were noise that we
  decided that was better to fix now, so we could focus and tune better in the
  future.   So this is done.

* Then on Discord, an observant user found that our Array editing on the
  inspector left much to be desired.  And by much, I mean, it would take two
  seconds to update a cell.    This abomination has been fixed and updating
  array values is now instant.

* Performance improvements to the AudioImport view.

  * Improved the performance of editor progress updates.

### Fixes

* Fixed: "Unable to stop the game on the remote device when using Xogot Connect
  to Xogot on iPhone"  https://github.com/xibbon/XogotIssues/issues/125

* Closing a scene tab should be faster

* Fixes "File/Open Project" sometimes failing to open.

* Fixes a crash that was happening in the wild to users of the AnimationEditor.

* Mesh and Material previews now update immediately in the inspector.

* Fixes that used to crash our remote interface.

* GLTFExportView now works on Mac.

* QuickOpen now works as intended, before it would filter incorrectly the files.

* Fix iPhone: Shader editor keyboard issues #2720

## Build 1444

### Improvements

* AudioImport Advanced Settings: new design for the UI.

* Scene Import Advanced Settings: updates Skeleton bone preview: fix transform,
  depth rendering, and skin binding so bones display correctly over the mesh and
  animate with the model. 

* Scene import parity: add zoom input, live loop-mode ed iting, timer lifecycle
  fixes, MultiMesh handling, and material extract auto-disable to match native
  Godot behavior.

* Inspector: now we display a live audio preview component (#1288)

* AssetBrowser: audio files will now include the runtime in the display.

### Fixes

* Fixes a crash when editing a material

* Fix Skeleton3D: editing bone dots doesn't work in edit mode #2706

* Prevent panels from auto-closing the first time you instantiate an object of a
  given type there (recent Testflight regression).

* The new Material Preview will update instantly, instead of having a delay.

### iOS Fixes

* Fixes a crash during undo in Runestone in the wild #2698

* Improves the layout of the asset browser for small screens (#2704)

* Implemented "Show in Files" #2705 from the FilePad.

## Build 1431

### Improvements

* The Embedded Game preview now supports configuring different stretching modes.

* AssetBrowser: you can now preview audio from the asset browser.

* AssetBrowswr: can now batch generate previews for 3D models.

* Refined Inspector view, it is more bubbly than ever on Mac, and tasteful
  titles and subtitles are added and the old and amateur header is gone.

* AudioImporter: performance optimization when playing back audio, it was
  choppy - and now it is not.

* The inspector will now show a suble dot do show you which properties have
  values that are not the same as the default property in Godot.

* When you hit a breakpoint, we will actually show you the code where you hit it
  - rather than letting you figure this out on your own #2690

* We now have a nice, interactive and native SwiftUI Texture viewer instead of
  the old static image that was not much fun.   We also made a native Mesh
  previewer which allows us to use two icons and gives us control to spice this
  control up.

* Users of the WASD/QE regiment will now be happy to find that two-finger press
  will honor those keystrokes.  We salute your service.

### Fixes

* Fix Mac: we are switching to the 3D editor view when resuming the game on My
  Mac mode. #2678

* SignalPad: Fix Mac: we are switching to the 3D editor view when resuming the
  game on My Mac mode. #2678

* Can now load projects that use SwiftGodot (before those projects were clashing
  with the built-in version) - for real this time.

* Small fixes in the UI of our Scene importer to bring it to Godot parity.

## Build 1422

### Improvements

* SceneImporter: improve parity with Godot, just a fix to an old gap.

* Add support for "Run last build", by using Control-click on play, or
  Control-Command-R, this prevents a build and install steps, similar to what
  Xcode provides.

* Code Editor upgrades: it should no longer lose your position when switching
  tabs and vast memory reduction.

* Report navigator should be localized now

* Can now load projects that use SwiftGodot (before those projects were clashing
  with the built-in version).
  
* Some work towards styling the inspector for the Mac

* The Inspector can now be resized.

* Should better track projects

## Build 1417

### Improvements

* Find and Replace has been implemented, along with Find All  (#1909, #1628)

### Fixes

* Fixes debugging on iOS, it was previously not attaching, depending on your
  IPV6 network tunnel.

* 3D Navigation settings should now work, but most importantly, this fixed a
  keyboard input issue on MacOS, so it should solve various small problems.

* Fixes Mac debugging for the "My Mac" configuration.

* Fix TileSet: Selecting TileSet objects in inspector makes bottom panel TileSet
  option disappear

* Fix Xogot Mac: Tilemap painting is not working as expected Public #120

* Fix Xogot Mac: Tile Set physics UI is flipped #2671

* Uses a different configuration name fixes public #122

* Fixes the size for TileMapEditor

## Build 1408

### Improvements

* Camera Preview button is now part of the Xogot toolbars (it was previously
  hidden by our toolbar)

* Running a game in the embedded player will now grab the input for that window (#2662)

* 3D Navigation can now be properly configured - we are still working on what
  the "Xogot" profile default will be.

* Open project will now launch a new window, rather than replacing the current
  one.

###  Fixes

* Small touch: two small pixel lines had sneaked upon us in the AnimationPlayer,
  and would let some background show behind them.  This transgression has been
  rectified (#2526)

* A duplicate menu entry has been removed.

## Build 1401

### Improvements

* Output View now has some additional filtering options (merge duplicate lines,
  filter by kind).

* Will now validate projects before attempting to start it and give the user
  guidance.

* Particles2D's EmissionMaskDialog is now a SwiftUI dialog.

* Learning center downloads can now be canceled.

* Unified show tabs/show spaces into one on MacOS, as we only support one.

### Fixes

* Drag and drop would temporarily leave 3D elements on the screen

* When Xogot fails to start, it will show the error log, and offer to restart.

* Running w/o a main scene configured now lets you define one, it was broken.

* Tapping on the Xogot icon will always bring the launcher window to the foreground.

* Fixes a crash with some extensions.

    Fix Script generation: Picking a folder and causes name to disappear and resets the template settings.

* Right-size the bottom panel windows that were coming up at twice their height.

* We now forward mouse motion events to the editors, we were not previously and
  it manifested as the 3D gizmo not working.

* No longer surfaces pads on the extensions that were supposed to be shown on
  demand.

* Various improvements to the navigation presets in the 3D editor.


## Build 1379

### Improvements

* New Export Scene menu with gLTF and MeshLibrary options

* New SwiftUI-based implementation of the Dependency Editor.

### Fixes

* Now it return to active tab when Local Editor run is stopped #2636

* Project Settings switching between segmented picker and picker #2639

* Fixes a long-standing leak

* "Vanilla Mac" now supports game controllers.

* Prevents console spam when you pause a running game in the embedded window
  (#2629)

* iOS/Mac: fixes a crash that could be triggered by a script reload during
  import (#2644)

* Fixes a crash triggered by switch inspector values (#2646)

* iOS/Mac: Fixes a crash when selecting elements in the debugger in the 3D
  viewer (#2645)

## Build 1368

### Improvements

* Xogot will now warn you if you are opening a project with different versions
  and offer to make a backup copy or a zip file of your project

* xo command now surfaces additional commands for scene delete, scene rename,
  node array append/remove, resource create/update/delete, project autoload,
  project shader-global, debugger control.

* Improves the semantics of in-place node renaming.

* Settings windows for projects and Xogot are also rechable from the Window
  menu, and they now work.

* New native DepedencyError window (#1723)

## Build 1359

* Fix Mac: cmd + R stays on editor tab #2630

* Learning Center now displays its content


## Preview 1

Initial Release
