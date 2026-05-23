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
