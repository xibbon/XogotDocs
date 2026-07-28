# Swift in Xogot for Mac

Write Godot nodes in Swift with SwiftGodot, with code completion from
sourcekit-lsp and debugging with LLDB.

Xogot for Mac can build and run Godot projects that use Swift. You can write a
Swift file next to your scene the same way you write a GDScript file, or you can
organize your code in a real Swift package. Either way, Xogot compiles it, loads
it into the game, and lets you set breakpoints in it.

This is a Mac-only capability. Xogot on iPad and iPhone continues to support
GDScript only.

## Before you start

You need Xcode 16 or newer installed. Xogot does not include a Swift toolchain.
It uses the Swift compiler, the Swift language server, and the debugger that
come with Xcode, through `xcrun`.

## Turn on Swift support

Swift support is off until you turn it on.

1. Open the **Window** menu.
2. Choose **Developer: Feature Flags**.
3. Turn on **Swift Support**.

<!-- @Image(source: "mac-swift-feature-flags.png",
       alt: "The Developer: Feature Flags window with Swift Support turned on") -->

## Install the Swift Development Support component

Xogot downloads the SwiftGodot SDK as an optional component, so that people who
only use GDScript do not pay for it in the application download. The component
holds the prebuilt SwiftGodot modules, the macro plugin that implements `@Godot`,
the GDExtension headers, and a link stub. It is approximately 70 MB.

To install it, choose **Xogot Settings** (Command-Comma), select **Components**
in the sidebar, and install **Swift Development Support**.

<!-- @Image(source: "mac-swift-components.png",
       alt: "The Components pane of Xogot Settings, showing Swift Development Support") -->

Xogot also offers the component when you open a project that uses Swift. The
message reads "Swift support is not installed. Install Swift Development Support
now, or open this project without Swift support." Choose **Install Now**, or
**Open Without Swift** to look at the project without building its Swift code.

<!-- @Image(source: "mac-swift-install-prompt.png",
       alt: "The alert that offers to install the Swift Development Support component") -->

The component installs into your Application Support folder:

```bash
~/Library/Application Support/Xogot/Components/Swift/<edition>/<release>/
```

You do not need to reopen the project. Xogot picks up the component on the next
build.

## Two ways to organize Swift code

Xogot supports two styles. Start with the first one, and move to the second when
your code grows.

### Standalone scripts

Put `Player.swift` next to your scene, exactly as you would put `player.gd`
there. This is the default, and it needs no setup.

Behind the scenes Xogot maintains a Swift package for you in a hidden `.xogot`
folder inside the project. You never edit it, and it stays out of the file
browser and out of Git.

### Your own Swift package

When you want real modules, dependencies, and a package manifest that you
control, choose **Create Swift Package** from the **Project** menu.

Xogot creates a `Swift` folder with a `Package.swift` and a `Sources/GameCode`
directory, moves the Swift files that you already wrote into it, and updates the
references to them in your scenes and in `project.godot`.

<!-- @Image(source: "mac-swift-create-package.png",
       alt: "The Swift package that Create Swift Package adds to a project") -->

A project has one Swift package, and the move is one way. There is no command to
go back to standalone files.

The first time a `.swift` file appears in a project, Xogot writes a
`swift.gdextension` file in the project root and records in `project.godot` that
this project uses Swift. This is what makes the compiled code load when the game
runs.

## Write a node

Select a node in the scene tree, attach a script, and set the **Language** picker
to Swift.

<!-- @Image(source: "mac-swift-create-script.png",
       alt: "The Create Script dialog with the Language picker set to Swift") -->

Xogot supplies templates for the common base classes: a default template for
`Node`, an empty template for `Object`, basic movement for `CharacterBody2D` and
`CharacterBody3D`, a plugin template for `EditorPlugin`, an editor-script
template for `EditorScript`, and templates for import scripts and custom visual
shader nodes.

The default template looks like this:

```swift
import SwiftGodot

@Godot
public class Player: Node2D {
    // Called when the node enters the scene tree for the first time.
    public override func _ready() {
    }

    // Called every frame. `delta` is the elapsed time since the previous frame.
    public override func _process(delta: Double) {
    }
}
```

From there, `@Export` puts a property in the Inspector, and `@Callable` makes a
method available to `call()` and to signal connections:

```swift
import SwiftGodot

@Godot
public class Player: Node2D {
    @Export public var speed: Double = 300

    public override func _ready() {
        GD.print("Player ready, speed=\(speed)")
    }

    @Callable
    public func shoot(power: Double) -> String {
        "shoot(\(power))"
    }
}
```

The `@Godot` attribute registers the class with the engine. When the game runs,
the node is your Swift class, not a `Node2D` with a script bolted on, so the
methods that you override are called directly by the engine.

## Build

The **Project** menu holds the build commands. They appear when the open project
uses a compiled language.

| Command | Shortcut |
| --- | --- |
| **Build** | Command-B |
| **Clean** | Shift-Command-K |
| **Rebuild** | — |

Builds are incremental, and they run in the background. Press **Stop** to cancel
a build that is in progress. Xogot also builds for you when you press Run and
your Swift files changed since the last build.

Compiler errors and warnings appear in the **Issue Navigator**, against your own
file and line, not against the generated package. The complete compiler output
is available as a build entry in the **Report Navigator**.

## What the editor gives you

Xogot replaces Godot's code editor with Monaco, the editor that powers Visual
Studio Code, and connects it to a language server. GDScript uses Godot's own
language server; Swift uses sourcekit-lsp, the same server that Xcode and VS
Code use. See <doc:Differences-Mac> for more about the editor itself.

Because the editor is language-agnostic, it asks the language server what it can
do and then offers all of it. Swift files get the support you expect from a
Swift IDE:

- Code completion for the Swift standard library, SwiftGodot, and your own code
- Live errors and warnings as you type, without a build
- Hover information for types and members
- Signature help while you type an argument list
- Go to Definition and Find References
- Document symbols for the outline
- Rename
- Quick fixes offered by the compiler

The Swift language server starts only for projects that actually use Swift, so a
GDScript project pays nothing for it.

<!-- @Image(source: "mac-swift-completion.png",
       alt: "Code completion in a Swift file in the Xogot editor") -->

## Debugging

Set a breakpoint by clicking the gutter next to a line in a `.swift` file, the
same way you do in GDScript, then press Run.

While the game is stopped you get:

- The call stack, including the SwiftGodot and engine frames below your code
- Local variables with real Swift values, formatted by the Swift-aware debugger
- Expression evaluation in the frame that you select

The **Debug** menu holds the stepping commands:

| Command | Shortcut |
| --- | --- |
| **Continue** / **Pause** | Control-Command-Y |
| **Step Over** | F6 |
| **Step Into** | F7 |
| **Step Out** | F8 |
| **Activate/Deactivate Breakpoints** | Command-Y |

**Step Out** is worth pointing out: Godot's GDScript debugger does not have it.
For Swift, Xogot drives LLDB, so it does.

<!-- @Image(source: "mac-swift-debugger.png",
       alt: "Xogot stopped at a Swift breakpoint, with Swift values in the locals") -->

In a project that mixes languages, breakpoints in `.gd` files and breakpoints in
`.swift` files are routed to the correct debugger automatically.

## Current limitations

Swift support is new. These are the limits today:

- Swift is available on Mac only. It is not available on iPad or iPhone.
- While the game is stopped at a Swift breakpoint the whole process is frozen,
  so the remote scene tree, live edit, and remote object inspection are not
  available. They continue to work at a GDScript breakpoint.
- There is no hot reload. Each run builds your code and starts a new process.
- Xogot finds your `@Godot` classes by reading your source files. A class that
  is declared conditionally, for example inside an `#if` block, may not be
  registered.
- The SDK is built for a specific Swift compiler version. If you update Xcode to
  a new Swift release before Xogot ships a matching component, builds fail until
  the component is updated.
- You cannot export a project that contains Swift from Xogot yet. Xogot is
  compatible with Godot, so use Godot on Mac to export the project.

## See also

- <doc:Differences-Mac> — how Xogot for Mac differs from Godot on Mac
- <doc:mac_dotnet> — the same integration, for .NET and C#
- <doc:Mac-Preview> — release notes for Xogot for Mac
