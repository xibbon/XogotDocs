# Xogot Mac Preview Release Notes

Release notes for our preview release of Xogot for Mac.

The Mac preview is still early, and some areas are incomplete or
expected to change. These notes are intended to help testers understand
what to try, what to expect, and where feedback will be most useful.

# Differences and Known Limitations

Please see the document <doc:Differences-Mac> for information about the
differences between Godot on Mac and Xogot.

The current Mac preview has the following known limitations:

- C# / .NET is not supported.

- The Profiler detail page is incomplete.

- The Inspector has not yet been fully styled for macOS.

- Export templates are not currently included. At this stage, only Mac, iOS, and
  iPadOS deployments are supported.   Since Xogot is compatible with Godot, you
  can just use Godot to export to those platforms.

# Releases

## Build YY

- Very early: Added a built-in Coding Assistant with persistent project
  conversations and “Fix with AI” actions.   It stores credentials on the
  Keychains

  The coding assistant is based on PiSwift/pi.det.   To use it, you need to
  either log into an existing known provider and we even include a version so
  run against your local LLM if you want.

  The UI is still not finished, we are aware that some places are overwhelming
  (like the amount of LLM providers and models that PiSwift surfaces), we will
  be tuning this.   

- Git gained LFS support. Expanded Git LFS with tracking rules, file and lock
  management, transfer progress and cancellation, large-file warnings,
  integrity checks, pruning, and File Browser status badges (#3013).
  
- Git tied the room together with some important actions that were missing:
  including cherry-pick, force push, branch and remote deletion, refreshed
  pulls, and commit and branch details in the Inspector (#3014, #3015).   The
  inspiration, once again, was Xcode.

- Added support for creating, assigning, and opening built-in scripts directly
  from Resource properties (#2953).

- Inspector properties can now be rendered in the same modes that Godot
  supports: localized, GD-script styled (they call it raw) and the current
  system ("Model Options")

- Improved Inspector performance by caching valid property types and added
  localized property names (#2990, #1631).

- Updated editor window titles to display the project name instead of its
  directory (#2995).

- Expanded localization across the editor, including the Bottom Bar (#3016).

- Dropped the ugly icon that we used in the text editor gutter, which was taking
  extra space.   Now, we use Monaco's CodeLens, so you get a hint above your
  function.    Not sure if it is obvious enough or not.

- Not visible in this build, but we started to make Xogot Sandbox-friendly for
  distributing eventually on the AppStore.  The downside is that it will have
  many of the same limitations that the iPad has (like no .NET, no third party
  dynamic library extensions).

## Bug Fixes

- Fixed a frequent crash during shutdown caused by deleted 3D gizmo objects
  being accessed (#3006).

- Fixed a crash that could occur after selecting an imported GLB model (#3019).

- Fixed embedded games being incorrectly sized or partially hidden behind the
  bottom panel (#3009).

- Fixed the macOS Attach Node Script dialog, including class selection,
  confirmation controls, inheritance paths, and state restoration when switching
  modes (#3028).

- Fixed Project Launcher focus problems and improved the display of projects
  with duplicate names.

### Improvements

### Fixes


## Build 1773

### Improvements

* New: Git support, available in the "Integrate" menu and as the "Source Code
  Navigator" on the UI.   Documentation at:
  https://docs.xogot.com/documentation/xogot/macsourcecontrol

* Project launcher "Open with Git" now clones, rather than just downloading a
  copy of the game, so it integrates with Git.


* AssetBrowser: you can now use checkboxes to toggle the file types you want to
  see (#2955)

* AssetStore: you can now import plugins from the local disk, without a network
  (#2979)

* Input Map forms have been revamped, rather than walls of text, we now provide
  visual cues for their features.

### Fixes

* Fixes the control positioning for toolbar items (the rider bug, #2994).

* Fix NewScene inherits list row overlaping

* Fixes a crash in the wild when closing Xogot:
  https://github.com/xibbon/Xogot/issues/3005

* 
## Build 1752 (July 5th, 2026)

### Improvements

* Input Map settings now allow you to import settings from another project, so
  you do not have to do this by hand (#2781)

* Input Map now comes with a list of templates, so you can quickly get up and
  running with some common input settings, or save your own custom settings (my
  suggestion on #2781).

* We now detect if a user unpacks a binary addon in the project, and rather than
  entering an obnoxious loop that would have the system ask you to move the file
  to the trash or ignore it, we now detect this scenario and offer to remove the
  Quarantine flag from the files for you (#2980).

* Performance optimization in the inspector, it should be slightly faster, in
  our synthetic tests, we reduced the time to render in ms from 300->273,
  1110->761 and 295->268.

* Code Editor now has a small diagnostics window so we can diagnose problems
  with LSP.

* Keybinding and View menu reorganization: the View Menu now has two submenu
  entries, one for navigators - which is similar to Xcode's navigators and the
  hotkeys are command-number for the various navigators.   And the Editors which
  are Godot's 3D/2D/script/GameView and use command-control-number (which
  happens to be the same binding Godot uses, this is a change as it used to be
  command-number).   Additionally, the numbers in the navigators match the
  numbers in Xcode for those familiar with them, so there are a couple of gaps
  in the numbering for features that Xcode has that we lack, but should help
  folks' muscle memory.

* Adjusted the SpriteFrameEditor to be more Mac-centric.

### Fixes

* Fixes a crash at project shutdown (#2985)

* Fixes a race condition on the text editor that prevented the code-editing
  features that relied on the Language Server Protocol to work reliably.
  Sometimes it would fail to start and you would not get any of those benefits.
  This provided things like contextual help on types, indentation and support
  for sticky scroll, context aware code completion, live errors and warnings in
  the text editor.  (#2974)

## Build 1745 (July 2nd, 2026)

### Improvements

* We now show the line and column number in the status bar when editing text
  files.

* New: errors and warnings are displayed on the toolbar, and a new Issue
  Navigator like the one in Xcode can be used to navigate through the issues of
  all open files.

* More battery saving changes: Godot relies on polling the 3D and 2D editor for
  changes to reflect those changes into the inspector.  We now suspend that
  polling when Xogot is not in the foreground.


### Fixes

* Attach script dialog was jumpy as you typed filenames and it validated -
  fixed (#2969)

* Fix inspected file/resource vanishing from Inspector on save (#2967)

* Improves the breakpoint parser.

* Opening Theme Overrides will no longer auto-set unset colors to black.

* Folding of code will no longer fold empty lines.

* Fixes a long standing visual-notification that would popup when saving a file
  with errors.   This will no longer show up as a popup.

* Fixes the "NodePath" property editor.

* Removed a benign debug message that could spam your output (cursor setting)

* The Monaco editor will no longer shift/unshift text that contains markers on
  the gutter depending on the parsing success.

## Build 1736 (July 1st, 2026)

### Improvements

* GameView will now show "Start" buttons depending on the context, so it will
  show "Start Here" and "Start in new Window" when those apply, but "Start" for
  cases where only an external window applies.

* You can now right-click on a file on finder, and it will open a new instance
  of Xogot if one is already running (#2900)

* Resource Editors now display an indicator if resources are shared to make
  it more clear that you should make them unique.   Also, wired up the "Make
  Unique Recursively" if there are nested resource to the same menu, which is
  more discoverable.

* Holding the command key while dropping a resource will also automatically make
  it unique.

* Add Node dialog now has selectable text for your cut and paste delight.

* Scene and Target Selector font is now .body, like Xcode 27.

* Resources now will be flagged if they are shared, and a right-click button
  lets you choose how you want to uniquify them, or a simple tap uniquifies
  recursively (#2966)

* Moved "Prefer Godot Icons" to Appearance.

* Scene Selector now offers a search bar

* Scene selector now shows the last four recent scenes used.

* Asset Browser: you can now tag assets as "Hidden" to not see them.

* Project Launcher will incorporate your system Godot projects in the list as
  well (#2957)

* Performance: selecting a new node shaved 120ms from selection.

### Fixes

* AssetBrowser: Command-A will select all items on the view (#2946, #2943)

* Asset Zoo generator: fixes ugly label names (#2944) and no longer produces
  warnings when reloading (#2945).

* Fixes a user-after-free crash (#2951)

* Add Node will now respect "Prefer Godot Icons" #2958

* Add node fixes the glitches in rendering certain icons that looked like just
  "3D" instead of the actual icon (#2959)

* Fix Saving resource ends up in wrong directory (#2960)

* Fixes last focused scene is reset after quit/relaunch (#2950)

* Fixes Command Palette not having the full row of text be clickable (#2952) and
  also on Input Map.

* Manually creating a GDScript as a resource now triggers our UI (#2968)

* Fixes a bug that prevented a node from being edited if the Node was flagged as
  Mode = .disabled

* Create Script dialog will now auto-select the filename without the extension
  (#2970)

* Fixes the placeholder and label rendering for string editors in the settings
  page and other places that use the settings mode.

* Restores compatibility with Godot with four obscure APIs that we broke two
  years ago - found via an automated audit.

## Build 1709 - Beta 2 (Jun 29, 2026)

### Improvements

* We now will auto-throttle when Xogot is placed in the background and will
  reload plugins when we are re-focused.

* Added support for reloading scenes and other resources if modified externally
  - and offer options for each modification.   This completes the auto-reloading
    feature across the board.

* Graphs in various places will now ensure that at least a portion of the graph
  is visible, even if you had manually saved it without any visible data.   Also
  graphs now have a button to auto-fit the graph into the canvas (AnimationTree,
  AnimationState)

* We now show the icon for the game you are running when you launch your game as
  a separate window.

* Launch: ProjectSelector: focus the first item on the list, not a useless
  pre-list item

* Will now auto-open a script after being created.

* xo can now be used to get the console output of a running game.

### Fixes

* Command Palette is now truly contextual when it comes to text editors, before
  it would only be contextual if manually activated from the text editors.

* Fix FilePad collapsing destination folders parent during drag and drop

* Fixes an animation editor crash in the wild.

* Fix Github download problem when the project did not have a "main" branch
  #2938

* Fixes a compatibility problem with extensions that used the ProjectSettings
  API (LimboAI).

* Fixes the icons on the inspector diverging from the icons on the
  scene tree display.

* When using Godot icons, we now pick the right style for dark/light modes.

* Toolbar items should no longer take over the whole editor space.

* Code Editor: Fix to highlight AND, OR keywords

* Running games stop if you quit Xogot.

* Fixes CMD+delete to deletes file instead of selected node if the file pad has
  the focus (#2909)

## Build 1690 (Jun 27, 2026)

### Improvements

* Added support for Sequoia (macOS 15.x) machines.

* Debugger input line now accepts LLDB-like commands, rather than pure
  expressions.

* Debugger error report now uses a popover instead of a sheet, which looks and
  feels nicer.

* Improves the layout of the Font Importer.

* ShaderEditor now uses the Command Palette instead of the old QuickOpen dialog.

* Surfaces MacOS panning settings for the 2D editor, to add support for
  customizing the scroll wheel.

* Tooltips for inspected properties now show the GDScript signature on the
  inspector.   And they also show enum cases in dedicated lines.

* Project setting properties will now display the path of the property they
  modify.

### Fixes

* Fixes Live Debugging, now properties set in the inspector and changes done in
  the editor are pushed to the running program.

* Fix Script Editor: deleting script or renaming keeps script tabs out of sync
  (#2907)

* Hardening of "xo" as it was attempting to issue commands before Xogot was
  ready.

* Fixes a scenario where sometimes launching a game would leave an orphan empty
  window on the screen.

* Fixes Quick Load not attaching script to node (#2911)

* Menu for Debug/Step/Step Into should be enabled now.

* Fixes StickyScroll background (#2915)

## Build 1667 (Jun 25, 2026)

### Improvements

* CodeEditor: Adds support for configuring the Monaco editor Sticky Scroll
  functionality.

* Command Palette performance updates and rendering touchups for shortcuts.

* UI improvements: adjusted the fonts for the file and inspector to match the
  scene that are not the .primary color, but the .sidebarTextColor, which
  makes it a touch softer on the file names, and the headers on the inspector.

* AssetBrowser performance tuning

* GameView will recenter fixed size rendering if it fits, rather than letting
  bottom objects cover it.

* AssetPlacer: Zoos can be created from the selection on the asset browser, not
  just the assets in the scene.

* AssetBrowser: supports shift/command-click selection.

### Fixes

* Improves the rendering of our own composite icons (like "AudioListener3D")

* Fixes a family of crashes related to our "xo" command triggering operations
  before the editor was ready.

* Fixes Mac: Inspector sometimes mixes up two objects in EditorInspectorView
  (#2881)

* Fix theme bottom panel going under sidebar and inspector

* Fix typed arrays defined in script default to Int (#2892)

* Fixed typed array edit.

## Build 1642 (Jun 23, 2026)

### Fixes

* Mac: fixed the editor jumping to the func line

## Build 1638 (Jun 23, 2026)

### Improvements

* Run Instances: hardening, we now only allow 20 instances of Godot to be
  launched at once.

* AssetBrowser: vastly revamped the creation of thumbnails for 3D scenes, your
  objects should be better framed, and frozen in time, rather than having
  artifacts from scenes that might have had animations or particles.

* AssetBrowser: it will now automatically create thumbnails for assets on
  demand, rather than having users manually tap the "Reload" icon.   This
  feature can be disabled from settings.     It comes with various throttling
  systems to prevent the system from burning CPU unless you are actually
  browsing the assets in question.

* Added support for restarting an editor session for properties that require a
  restart with a prompt.

* Auto-saving: now we auto-save both source code and scenes by default on
  various operations: attaching scripts, closing scenes, running the program and
  focusing out of Xogot. The old behavior is still available from the settings
  menu (addresses feature requests #2863, #2862)

* Auto-loading from external changes: text files are now reloaded automatically
  if they are modified outside the editor but users can choose to ignore the
  changes on disk.

* AssetBrowser now supports keyboard navigation.

* Some focus glows were removed that looked very unappealing.

* AssetLibrary: add support for importing from a local file in addition to
  downloading from the Godot Asset Library.

* Command Palette: now features a history feature, pressing the up-arrow key
  will get you the previous actions or searches that were used.  We also now
  route the Monaco command palette to the unified one.

* FileBrowser now uses blue icons like Xcode for folders.

### Performance Work

* AssetPlacer: reduce battery usage when we are not in active placement mode,
  improved responsiveness of keyboard navigation, and scrolling speed

### Fixes

* Changes to the selection sync, users were a bit confused by the behavior when
  they double-clicked on a source file, which changed the selection, but going
  from the script editor to the scene showed a highlighted item, but the selection
  was still the file - this is closer to Godot Fixes #2855, #1808, #2851.

* Fixes a Project Settings and Import dialog crash: this was started to happen
  on the wild (#2850, #2884)

* Delete all breakpoints will now delete all breakpoints, not just those in the
  currently open text editor (#1989)

* Small style improvement to "Snap" in 3D editor (#2874)

* Fix project layer warning spam on load

* Fix Mac: Monaco colors some variable declarations incorrectly #2869

* Fixes command palette to not auto-select text like ":" and ">" when explicitly
  triggered as shortcuts.

* Fix Mac: Monaco editor not respecting indent strategy #2880

* Fix Mac: Inspector sometimes mixes up two objects in EditorInspectorView
  (#2881)

* Fixes the FilePad/ScenePad keyboard navigation and selection.

## Build 1611 (Jun 19, 2026)

No feature changes, merely a build that has a matching dSYM tracked, so we can
figure out what the crash reports are telling us - we accidentally disabled it
in recent builds.

## Build 1609 (Jun 19, 2026)

### Improvements

* Code Editor now supports code folding of #region/#endregion sections in
  GDScript

* The asset browser produces much better results for 3D assets than before:
  better framing, and better results based on stable renderings.

* You can now configure whether you want automatic asset thumbnail generation
  done (it default to true)

* Fine tuning for the Asset Placer, and localization is now in place.

* Animation Tracks for operations like "3D Position" that did not have a label,
  now carry the name of the action ("3D Position").

* Improvements on Advanced Scene Import for Mac, and rotation fix on mac.

### Fixes

* Collision chip picker does not show layer label #2849

* Triple quote string unterminated when actually valid #2853

* Fixes a crash on Project Settings Import Default.

## Build 1595 (Jun 17, 2026)

### Improvements

* New Asset Placer integrated into our Assets Tab for placing 3D elements on the
  UI with various options - we are working on documentation for this.

* Standardizes the breakpoint icon across the board, and it is now always
  present like it is on Xcode.

* Adds support for Editor insets, as plugins can add additional toolbars to the
  editors - we now avoid those surfaces with our floating toolbars.

* We use a bold font to signal the selected editor mode (2d, 3d, script, game).

* Slight menu reorganization.

* VanillaMac target is no more: rather than having a separate target, Xogot will
  now use a setting that you can change on the GameView to determine whether to
  run inside the editor or a dedicated window.

* Font Importer: UI touchups.

* Add support for opening projects with quarantined files, and give the user the
  option to remove the quarantine attribute.

* We no longer show the focus ring around various Xogot containers.

### Fixes

* Color slides now work correctly (#2829)

* Do not add "Make Scene Root" to the menu for the root node.

* Fixes the rendering of Godot's documentation that included URLs in various
  places that showed contextual help.

* Stops the New Scene Window to jump when inheriting a class (#2832)

* Improves the reliability of rendering shader previews, which might update a
  frame later.

* The code editor will now refresh errors properly #2837

* Fixes deleted scene reappears on disk when running the game if its editor tab
  is still open #2845

#### Asset Placer

The built-in asset placer is available for 3D objects from the "Asset" tab, and
it allows you to easily control the object placement for assets in the

Placement modes:

  - Free / Grid / Surface (raycast + align-to-normal) / Vertex (screen-space
    corner snap) / Spline.

Transform & paint:
  - Continuous rotation with snap modes + orientation/scale presets; random
    rotation, tilt, and scale; axis flips.
  - Paint mode (hold-drag with spacing), scatter radius, and a volumetric
    brush (texture-mask falloff/density). Random-from-multi-selection.

MultiMesh & collision:
  - MultiMesh mode batches placements into MultiMeshInstance3D (GPU
    instancing) for dense scatter; 'Generate Collision' builds per-instance
    bodies for a batch.
  - Auto-collision on place: Static/Rigid/Character/Area bodies x
    Trimesh/Convex/Box/Sphere/Capsule shapes.

Other:
  - Material override (replace / next-pass), Asset Zoo, and per-session
    config persistence (UserDefaults).
  - Spline system (XogotUAPPath, a Path3D): per-layer scatter/deform along
    the curve (MultiMesh or individual nodes), bake-to-nodes, terrain
    drop/conform/subdivide, smooth/sharpen.
  - Undo/redo wired for placement, MultiMesh strokes, spline
    create/delete/bake, Asset Zoo, and generated collision.
  - Numeric inputs reuse the inspector/settings editors (ValueEdit /
    GroupNumericInput) so they match the rest of the app on Mac and iOS.

## Build 1575 (Jun 15, 2026)

### Improvements

* Managed to get the EditorProgress view to give us updates while loading.

* Preserve the native AnimationTree tab when Godot reports AnimationPlayer
  visible as a side effect while AnimationTree is already selected.

* Text Editor: added Line Height configuration option.

### Fixes

* Fixes Editing custom data layers (#2818)

* Right-click context menu on the scene tree now is bound to the right-click
  location, not the selection.

* You can now resize Windows created from Godot with the flag to resize

* Fixes external dialogs and windows that were being rendered at the wrong zoom
  factor, and were not positioned correctly on the screen.

## Build 1569 (Jun 14, 2026)

### Improvements

* Make it so that rather than hiding the "Attach Script" option when there is a
  script and hoping the user discovers the scroll button offers those options,
  we add a new "Script" menu and add the sub-options there (#2815)

* Make it so we can always show a breakpoint toggle in the UI, regardless of
  whether the program is running, like Xcode and tunes the bottom panel
  rendering

* Import performance: we re-enabled the multi-threaded importer, and you should
  get more feedback during long imports (#2810).

* Project launch: additional code paths like Open Recent and Open Project will
  check for versions and prompt to backup or continue editing.

* Handle a scenario where plugins would display new windows instead of dialogs,
  which were not supported before - this was necessary for the Terrain3D plugin.

### Fixes

* Fix Issues with render script documentation (Public #133)

## Build 1564  (Jun 13, 2026)

### Improvements

* Unified Debug/Output pad, like Xcode has.

* CodeEditor: rounder breakpoint markers, the gutter for line numbers does not
  waste so much space.

### Fixes

* New Folder inside EditorFileDialogView did not work. (#2802)

* Open Documentation was ignoring the attached script documentation (#2804)

* Reload project now reloads a project as expected (#2805).

* Fixes loading of node types defined in external extensions.

## Build 1557 (Jun 11, 2026)

### Improvements

* Adopt the Xcode 27-like style for the top-level shell

* Performance tuning for the startup sequence that on my hardware dropped 2
  seconds from the startup sequence and reduced memory usage.   This was
  achieved by avoiding a duplicate theme setting at the end of the sequence,
  avoiding the use of compressed fonts, and replacing UI code with our own
  SwiftUI code.

### Fixes

* Exclude Xogot types from the user-visible types that can be instantiated,
  fixes #2786

* Fix iOS: make debug line scrollable #2789

* Dismiss the login UI, so we don't get stuck in a login loop

* Allow drops of resources into the godot editor views, fixes
  https://github.com/xibbon/XogotIssues/issues/128

* Fix GridMap showing in bottom tab when no GridMap is active

* Fixes crash in the wild #2792

* Fixes various TileSet paining bugs that were introduced in the 4.6-based
  release.

* Fixes Mac scene running settings not working properly (public #129)

## Build 1528

### Improvements

* Material and Texture2D previews tune ups for the inspector.

* Godot Asset store now supports the verified badge.

* Shader previews now draw colored regions to help you keep track of the preview
  and the line of code.

* Performance improvements for settings dialogs.

* Added support for plugins registering toolbar docks.

* Brings a handful of Onion animation support from 4.6 to our UI

* New: our new Font Importer has landed.

* New: new undo history browser had landed.

### Fixes

* Fixes a crash for scenarios where we only partially loaded third-party addon
  extensions.

* Works with users that were using SwiftGodot-based plugins

## Build 1505

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
  texture being assigned at that point in time (borrowed from the upcoming Godot
  4.7)

### Fixes

* Fixes Action Input renaming, it was difficult to rename a field as we kept
  resetting the value (#2571).

## Build 1483

In this release, the "Xogot" 3D Navigation setting has been updated to mirror
the behavior of Reality Composer, this is very close to what you would get on
the iPad and feels like the right approach and what we feel integrates best with
the trackpad, common on Apple platforms.

The bindings are as follows:

### Trackpad Bindings

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


## Build 1476 (June 1st, 2026)

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

## Build 1462 (May 29th, 2026)

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

## Build 1444 (May 27, 2026)

### Improvements

* AudioImport Advanced Settings: new design for the UI.

* Scene Import Advanced Settings: updates Skeleton bone preview: fix transform,
  depth rendering, and skin binding so bones display correctly over the mesh and
  animate with the model.

* Scene import parity: add zoom input, live loop-mode editing, timer lifecycle
  fixes, MultiMesh handling, and material extract auto-disable to match native
  Godot behavior.

* Inspector: now we display a live audio preview component (#1288)

* AssetBrowser: audio files will now include the runtime in the display.

### Fixes

* Fixes a crash when editing a material

* Fix Skeleton3D: editing bone dots doesn't work in edit mode #2706

* Prevent panels from auto-closing the first time you instantiate an object of a
  given type there (recent TestFlight regression).

* The new Material Preview will update instantly, instead of having a delay.

### iOS Fixes

* Fixes a crash during undo in Runestone in the wild #2698

* Improves the layout of the asset browser for small screens (#2704)

* Implemented "Show in Files" #2705 from the FilePad.

## Build 1431 (May 25, 2026)

### Improvements

* The Embedded Game preview now supports configuring different stretching modes.

* AssetBrowser: you can now preview audio from the asset browser.

* AssetBrowser: can now batch generate previews for 3D models.

* Refined Inspector view, it is more bubbly than ever on Mac, and tasteful
  titles and subtitles are added and the old and amateur header is gone.

* AudioImporter: performance optimization when playing back audio, it was
  choppy - and now it is not.

* The inspector will now show a subtle dot do show you which properties have
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

## Build 1422 (May 23, 2026)

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

## Build 1417 (May 23, 2026)

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

* Fix Xogot Mac: TileMap painting is not working as expected Public #120

* Fix Xogot Mac: Tile Set physics UI is flipped #2671

* Uses a different configuration name fixes public #122

* Fixes the size for TileMapEditor

## Build 1408 (May 21, 2026)

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

## Build 1401 (May 20, 2026)

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


## Build 1379 (May 19, 2026)

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

## Build 1368 (May 17, 2026)

### Improvements

* Xogot will now warn you if you are opening a project with different versions
  and offer to make a backup copy or a zip file of your project

* xo command now surfaces additional commands for scene delete, scene rename,
  node array append/remove, resource create/update/delete, project autoload,
  project shader-global, debugger control.

* Improves the semantics of in-place node renaming.

* Settings windows for projects and Xogot are also reachable from the Window
  menu, and they now work.

* New native DependencyError window (#1723)

## Build 1359 (May 16, 2026)

* Fix Mac: cmd + R stays on editor tab #2630

* Learning Center now displays its content


## Preview 1

Initial Release
