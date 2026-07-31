# Swift in Xogot for Mac

Write Godot nodes in Swift with SwiftGodot, with code completion from
sourcekit-lsp and debugging with LLDB.

Xogot for Mac can build and run Godot projects that use Swift. You can write a
Swift file next to your scene the same way you write a GDScript file, or you can
organize your code in a real Swift package. Either way, Xogot compiles it, loads
it into the game, and lets you set breakpoints in it.

A Swift project is not limited to the Mac that you write it on. Xogot builds,
signs and installs it on a connected iPhone, iPad or Apple Vision Pro, on a
simulator, and on your Mac, the same way it does for a GDScript project — and
your Swift breakpoints work on all of them. See
[Run on a device or the simulator](#Run-on-a-device-or-the-simulator).

You write the Swift code on a Mac. Xogot on iPad and iPhone continues to support
GDScript only, so you author on the Mac and deploy from it.

## Before you start

You need Xcode 16 or newer installed. Xogot does not include a Swift toolchain.
It uses the Swift compiler, the Swift language server, and the debugger that
come with Xcode, through `xcrun`.

Updating Xcode is safe. The Swift the component ships is built so that a newer
compiler can read it, so you do not have to wait for a matching Xogot release
before you install a new Xcode.

## Turn on Swift support

Swift support is off until you turn it on.

1. Open the **Window** menu.
2. Choose **Developer: Feature Flags**.
3. Turn on **Swift Support**.

<!-- @Image(source: "mac-swift-feature-flags.png",
       alt: "The Developer: Feature Flags window with Swift Support turned on") -->

## Install the Swift Support component

Xogot downloads SwiftGodot as an optional component, so that people who only use
GDScript do not pay for it in the application download. The component holds the
SwiftGodot frameworks, the macro plugin that implements `@Godot`, and the
GDExtension C module. The download is about 19 MB, and about 93 MB once
installed.

To install it, choose **Xogot Settings** (Command-Comma), select **Components**
in the sidebar, and install **Swift Support**.

<!-- @Image(source: "mac-swift-components.png",
       alt: "The Components pane of Xogot Settings, showing Swift Support") -->

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

### Which SwiftGodot you are writing against

The component ships a public
[SwiftGodot](https://github.com/migueldeicaza/SwiftGodot) release — 0.77.2 at the
time of writing, and it moves forward with the component — the same build you
would get by adding
[SwiftGodotBinary](https://github.com/migueldeicaza/SwiftGodotBinary) to a
package of your own. So `import SwiftGodot` in an Xogot project means exactly
what it means everywhere else: the upstream documentation applies, and code you
find in SwiftGodot samples compiles here unchanged.

Xogot supplies SwiftGodot to your build itself. You do not add it to a package
manifest, and you should not — see below.

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

The package is yours to edit — add targets, add dependencies, split your code up.
Three things belong to Xogot, and changing them breaks the build:

- **Do not add SwiftGodot as a dependency.** The manifest deliberately has none.
  Xogot passes SwiftGodot to the compiler and the linker from the installed
  component, which is also what keeps your manifest portable: it contains no
  paths specific to your machine.
- **Keep a dynamic library product named `GameCode`.** That is the library Xogot
  loads into the game. If a build stops finding it you will get an error saying
  so by name.
- **`Sources/GameCode/EntryPoint.swift` is regenerated before every build.**
  It registers your `@Godot` classes with the engine. Anything you write in it is
  overwritten.

One consequence of the first point: `swift build` inside the `Swift` folder will
not work on its own, because SwiftGodot is not in the manifest for it to resolve.
Build from Xogot.

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

## Run on a device or the simulator

Swift projects use the same run destinations as GDScript projects. Select the
destination in the toolbar, then press Run:

- **Local Editor** — the game runs on your Mac, inside Xogot. This is the
  default, and it is the fastest way to iterate.
- **My Mac** — the game runs as a separate, signed macOS application.
- **A simulator** — Xogot lists the iOS and visionOS simulators that Xcode
  installed.
- **A connected device** — Xogot detects the iPhone, iPad and Apple Vision Pro
  hardware that you attached with a cable, and the devices that you paired over
  the network, and it deploys over either one.

<!-- @Image(source: "mac-swift-destinations.png",
            alt: "The run destination picker in the Xogot toolbar, showing Local Editor, My Mac, a simulator, and a connected iPad") -->

Xogot packages, signs and installs the build for you. It is the same Xcode-like
deployment path that <doc:Differences-Mac> describes, and your Swift code goes
along with the game. The signing identity and the deployment options live in the
Project Settings.

Your breakpoints come along. Swift debugging works on every one of these
destinations — see [Debugging](#Debugging).

For the details of signing, provisioning and testing on hardware, see
<doc:Mac-Testing>.

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

### Debugging a deployed game

Swift debugging is not limited to a **Local Editor** run. Xogot uses the same
LLDB session for every run destination: it prepares the debugger before the
launch, and attaches once the platform reports the process ID of your game. Set
your breakpoints and press Run, the same way you do locally.

How the attach happens depends on the destination:

- **My Mac** — Xogot attaches as soon as the launcher reports the process ID.
  Because a Mac build has no startup barrier, code that runs very early can
  execute before the attach completes. Put a breakpoint a little later if you
  need to be sure that it is hit.
- **A simulator** — Xogot starts the app with `--wait-for-debugger`, so the app
  waits for the debugger before it runs anything.
- **A device** — Xogot starts the app in a stopped state, reads its process ID,
  and tells LLDB to select the device and attach. Nothing in your game runs
  before the debugger is ready.

If the attach does not succeed, Xogot tells you and does not leave a stopped app
on the device. A Mac app keeps running without Swift debugging. A simulator or
device app is removed and started one more time without the debugger, so you
still get to play the build. If you press Stop while this is happening, Xogot
stops the suspended app and does not start it again.

### One caveat

Xogot drives LLDB for you, but the LLDB interface itself is not available yet.
You get the stack, the locals and the stepping commands through the Xogot user
interface; there is no LLDB command prompt where you can type expressions to
evaluate. GDScript keeps the expression prompt that <doc:Differences-Mac>
describes.

## Current limitations

Swift support is new. These are the limits today:

- You write Swift on the Mac only. Xogot on iPad and iPhone edits GDScript
  only, so you cannot open a Swift file and change it there. Deploying the
  finished game to an iPad or an iPhone does work.
- The LLDB interface is not available yet, so there is no prompt for evaluating
  expressions at a Swift breakpoint.
- On **My Mac**, Xogot attaches after the app starts, so code that runs very
  early can execute before the debugger is ready. Simulator and device runs hold
  the app until the attach completes.
- While the game is stopped at a Swift breakpoint the whole process is frozen,
  so the remote scene tree, live edit, and remote object inspection are not
  available. They continue to work at a GDScript breakpoint.
- Hot reload applies to `@Godot` classes in a tool extension. Outside of that,
  a run builds your code and starts a new process.
- Xogot finds your `@Godot` classes by reading your source files. A class that
  is declared conditionally, for example inside an `#if` block, may not be
  registered.
- A `@Godot` class cannot take the name of a class the engine already registers.
  `@Godot class Timer` collides with Godot's own `Timer`, so Xogot skips it and
  reports it: "`Timer.swift: @Godot class Timer is skipped — Timer is already a
  registered class in this process; rename it`". Rename yours and it builds.
- Deploying and exporting are not the same thing. Xogot builds, signs and
  installs a Swift project on your own Mac, simulator, iPhone or iPad. It
  cannot yet produce a distributable build of a Swift project for TestFlight or
  the App Store. Xogot is compatible with Godot, so use Godot on Mac to export
  the project.

## See also

- <doc:Differences-Mac> — how Xogot for Mac differs from Godot on Mac
- <doc:mac_dotnet> — the same integration, for .NET and C#
- <doc:Mac-Preview> — release notes for Xogot for Mac
