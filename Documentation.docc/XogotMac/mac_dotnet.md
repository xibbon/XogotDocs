# .NET and C# in Xogot for Mac

Write, build, and debug C# game code in Xogot for Mac, with code completion from
a C# language server and an integrated .NET debugger.

Xogot for Mac can open and edit Godot projects that use C#. You write your game
logic in C#, build it from the **Project** menu, and set breakpoints in your C#
code the same way you set them in GDScript.

A C# project is not limited to the editor. Xogot builds, signs and installs it
on your Mac, on the iOS Simulator, and on a connected iPhone or iPad, and your
C# breakpoints work on all of them. See
[Run on a device or the simulator](#Run-on-a-device-or-the-simulator).

You write the C# code on a Mac. Xogot on iPad and iPhone edits GDScript only,
so you author on the Mac and deploy from it.

## Before you start

You need the following:

- Xogot for Mac, installed from the direct download. The sandboxed App Store
  build cannot use C#, because macOS does not let a sandboxed application attach
  a debugger to another process.
- The **.NET 8 SDK** or newer. Xogot does not include a .NET SDK. Install it
  from Microsoft, then confirm it is available:

```bash
dotnet --list-sdks
```

Xogot looks for the `dotnet` executable in this order: the `XOGOT_DOTNET_PATH`
environment variable, `DOTNET_ROOT`, your `PATH`, and then the usual install
locations `/usr/local/share/dotnet`, `/usr/local/bin`, `/opt/homebrew/bin`, and
`~/.dotnet`. If Xogot cannot find it, set `XOGOT_DOTNET_PATH` to the `dotnet`
executable and restart Xogot.

## Turn on .NET support

.NET support is off until you turn it on.

1. Open the **Window** menu.
2. Choose **Developer: Feature Flags**.
3. Turn on **.NET Support**.

<!-- @Image(source: "mac-dotnet-feature-flags.png",
       alt: "The Developer: Feature Flags window with .NET Support turned on") -->

## Install the .NET Development Support component

The managed toolchain is large, so Xogot does not put it in the application
download. Instead, it is an optional component that you install once. The
component contains the GodotSharp assemblies, the C# language server, and the
.NET debugger.

To install it, choose **Xogot Settings** (Command-Comma), select **Components**
in the sidebar, and install **.NET Development Support**.

<!-- @Image(source: "mac-dotnet-components.png",
       alt: "The Components pane of Xogot Settings, showing .NET Development Support") -->

Xogot also offers the component to you when you open a project that already uses
C#. The message reads "C# support is not installed. Install the .NET Development
Support component before opening this project." Choose **Install Now** to
install it immediately, or **Open Components** to go to the settings pane.

<!-- @Image(source: "mac-dotnet-install-prompt.png",
       alt: "The alert that offers to install the .NET Development Support component") -->

The component installs into your Application Support folder:

```bash
~/Library/Application Support/Xogot/Components/DotNet/<edition>/<release>/
```

Close and reopen the project after you install the component. Xogot configures
the .NET environment before it starts the embedded Godot engine, so a project
that was already open does not pick up a new installation.

## Add C# to a project

Xogot recognizes a .NET project from the `C#` entry in the `config/features`
list in `project.godot`, or from a `.csproj`, `.sln`, or `.slnx` file in the
project root. Projects that you created in Godot on Mac open directly.

To add C# to a project that does not use it yet, select a node in the scene
tree, attach a script, and set the **Language** picker to C#. The picker shows
C# after the .NET runtime is live.

<!-- @Image(source: "mac-dotnet-create-script.png",
       alt: "The Create Script dialog with the Language picker set to C#") -->

The first C# script that you add generates the solution and project files for
you. You do not need to restart Xogot or reopen the project.

A script looks like it does in Godot:

```csharp
using Godot;

public partial class Player : Node2D
{
    [Export]
    public float Speed { get; set; } = 300.0f;

    public override void _Ready()
    {
        GD.Print("Player ready");
    }

    public override void _Process(double delta)
    {
    }
}
```

Xogot runs `dotnet restore` for you before it starts the language server, and
runs it again when a file that affects your dependencies changes, such as
`.csproj`, `.sln`, `nuget.config`, or `global.json`.

## Build

The **Project** menu holds the build commands. They appear when the open project
uses a compiled language.

| Command | Shortcut |
| --- | --- |
| **Build** | Command-B |
| **Clean** | Shift-Command-K |
| **Rebuild** | — |

Builds run in the background and do not block the editor. Press **Stop** to
cancel a build that is in progress.

Xogot also builds for you when you press Run and your code has changed since the
last build.

Compiler errors and warnings go to the **Issue Navigator**, which opens on the
first file that failed. The complete build log is available as a **.NET Build**
entry in the **Report Navigator**, which is where to look when a build fails
without producing a diagnostic.

<!-- @Image(source: "mac-dotnet-issue-navigator.png",
       alt: "A C# compiler error shown in the Issue Navigator") -->

## Run on a device or the simulator

C# projects use the same run destinations as GDScript projects. Select the
destination in the toolbar, then press Run:

- **Local Editor** — the game runs on your Mac, inside Xogot. This is the
  default, and it is the fastest way to iterate.
- **My Mac** — the game runs as a separate, signed macOS application.
- **An iOS Simulator** — Xogot lists the simulators that Xcode installed.
- **A connected iPhone or iPad** — Xogot detects the hardware that you attached
  with a cable, and the devices that you paired over the network.

<!-- @Image(source: "mac-dotnet-destinations.png",
            alt: "The run destination picker in the Xogot toolbar with a C# project") -->

Xogot builds your project, publishes it for the destination, then packages,
signs and installs it. This is the same Xcode-like deployment path that
<doc:Differences-Mac> describes. For the details of signing, provisioning and
testing on hardware, see <doc:Mac-Testing>.

A deployed C# game needs an export template that includes .NET. Xogot offers to
download the correct one when you first select a destination that does not have
it yet. You can also install it before you start the editor, with the `xo`
command-line tool that <doc:integrating_with_ai_tools> describes:

```bash
xo component list
xo component install <id>
```

A running editor picks up a component that you installed this way. You do not
have to restart it.

### Two runtimes, one project

The runtime that carries your C# code is not the same on every destination, and
this is not a choice Xogot makes:

| Destination | Runtime |
| --- | --- |
| **Local Editor** | CoreCLR |
| **My Mac** | CoreCLR, self-contained |
| **iOS Simulator and devices** | NativeAOT |

Apple does not let an application generate machine code while it runs, so a
runtime that compiles your code just in time cannot ship on an iPhone or an
iPad. Godot uses **NativeAOT** there: your C# is compiled ahead of time, into
native arm64 code, when Xogot publishes the project. There is no other option
on those platforms.

Most of the time you do not have to think about this. The build, the deploy and
the breakpoints all look the same. But NativeAOT is a different runtime, so read
[What to watch for with NativeAOT](#What-to-watch-for-with-NativeAOT) before you
put much work into a device build.

### What to watch for with NativeAOT

NativeAOT compiles the code that it can see. Anything that your game finds at
run time, instead of at build time, is where the trouble starts:

- **Reflection.** A type or member that your code only ever reaches through
  `System.Reflection` can be removed by the compiler, because nothing appears to
  use it. The same code runs correctly in the **Local Editor**, where CoreCLR
  can look anything up. Test on the device early.
- **Code that is generated at run time.** `System.Reflection.Emit`, dynamic
  methods, and anything that builds and compiles code while the game runs cannot
  work. There is no compiler in the process.
- **Serializers and other libraries that use reflection.** Prefer a library with
  a source generator, which does its work at build time.
- **Build warnings are worth reading.** Publishing for iOS reports trimming and
  AOT warnings, in the `IL2026`, `IL2075` and `IL3050` families. Some come from
  GodotSharp itself and are expected. Warnings against your own code are the
  ones to act on.

Because of these constraints, C# on iOS is marked experimental upstream in
Godot, and it is experimental in Xogot too. GDScript and Swift do not have this
restriction.

> Note:
> Apple Vision Pro is not available for C#. Microsoft does not publish a
> NativeAOT runtime for visionOS, so there is nothing to compile your C# code
> with, and Xogot does not offer visionOS as a destination for a C# project. A
> Vision Pro can run your iPhone or iPad build in compatibility mode. Swift and
> GDScript projects do deploy to visionOS — see <doc:mac_swift>.

## What the editor gives you

Xogot replaces Godot's code editor with Monaco, the editor that powers Visual
Studio Code, and connects it to a language server. GDScript uses Godot's own
language server; C# uses OmniSharp. See <doc:Differences-Mac> for more about the
editor itself.

This matters more than it sounds. The editor is language-agnostic: it asks the
language server what it can do, and then offers all of it. Adding C# does not
give you a hand-built subset of editor features. It gives you the same class of
support you expect from a full C# IDE:

- Code completion, with documentation on the completion items
- Live errors and warnings as you type, without a build
- Hover information for types, members, and parameters
- Signature help while you type an argument list
- Go to Definition, Declaration, Type Definition, and Implementation
- Find References and highlight of the symbol under the cursor
- Document symbols for the outline, and project-wide symbol search
- Rename across the project
- Quick fixes and refactorings
- Formatting, for the document, a selection, or as you type
- Code folding and structural selection

Xogot starts one language server per project, so several open projects do not
interfere with each other.

## Debugging

Press Run. Xogot starts the game, holds it at the point where the .NET runtime
is ready but your code has not run yet, attaches the debugger, installs your
breakpoints, and then lets the game continue. There is no separate "attach to
process" step, and no breakpoint is missed because the game started too fast.

Set a breakpoint by clicking the gutter next to a line in a `.cs` file, the same
way you do in GDScript.

While the game is stopped you get:

- The call stack for the stopped thread
- Local variables and object members, expanded as you open them
- A REPL that evaluates C# expressions in the frame that you select

The **Debug** menu holds the stepping commands:

| Command | Shortcut |
| --- | --- |
| **Continue** / **Pause** | Control-Command-Y |
| **Step Over** | F6 |
| **Step Into** | F7 |
| **Step Out** | F8 |
| **Activate/Deactivate Breakpoints** | Command-Y |

Stepping stays in your own code. It does not descend into the generated
GodotSharp bindings or into the .NET class libraries, so **Step Into** on a call
to engine code goes to the next line of your own method instead of to a file
that is not on your machine.

Xogot brings the editor to the front when a breakpoint is hit, and returns focus
to the game when you resume.

<!-- @Image(source: "mac-dotnet-debugger.png",
       alt: "Xogot stopped at a C# breakpoint, with the call stack and locals") -->

In a project that mixes languages, breakpoints in `.gd` files and breakpoints in
`.cs` files are routed to the correct debugger automatically.

### Debugging a deployed game

Breakpoints work on every run destination, not only in the **Local Editor**.
Set them and press Run, the same way you do locally. Which debugger Xogot uses
follows the runtime of the destination:

- **My Mac** runs CoreCLR, so it gets the same managed debugger as the editor.
  Xogot arms the startup barrier before the launch, attaches once the runtime is
  ready, and then releases the game. You get everything in the list above,
  including the REPL.
- **A simulator or a device** runs NativeAOT, which no managed debugger can
  attach to. Xogot uses LLDB there instead. Your `.cs` breakpoints still bind by
  file and line, the game still stops, and the stack still shows your own
  methods. What you can read at the stop is narrower — see below.

<!-- @Image(source: "mac-dotnet-device-debug.png",
            alt: "Xogot stopped at a C# breakpoint in a game running on a connected iPad") -->

### What a NativeAOT stop can show you

At a breakpoint on a simulator or a device:

- Simple values, such as `int`, `float` and `bool`, read correctly.
- Strings, arrays, `List<T>` and null references read correctly.
- Any other object shows its address, and you cannot open it to see its fields.
  The compiled program does not carry the layout of those types, so there is
  nothing for the debugger to read.
- `this` is often reported as not available.

Plan around this. A value that you want to inspect on a device is easier to
reach if you copy it into a local variable first. If you need the full picture,
reproduce the problem in the **Local Editor** or on **My Mac**, where the
managed debugger gives you everything.

Because the debugger here is LLDB, the command prompt in the Output pane is an
LLDB prompt, and it accepts the full LLDB command surface — `frame variable`,
`memory read`, `image list` and the rest. That is often the way to get at
something the variables view cannot show you. <doc:mac_swift> documents the
prompt and the few commands that Xogot answers itself.

On **My Mac** and in the **Local Editor** the prompt is the C# REPL instead,
because the debugger there is the managed one.

There is no heap analysis and no memory profiling on a device.

> Note:
> A project that uses both Swift and C# gets one native debugger on a device,
> not two. LLDB cannot attach twice to the same process, and Swift takes it, so
> your C# breakpoints do not stop that build. Deploy is not affected: both
> languages run.

While the game is stopped on a device, the editor may still report it as
running. The game really is stopped, and Continue really does resume it; the
status is what has not caught up yet.

## Current limitations

C# support is new. These are the limits today:

- You write C# on the Mac only, and only in the direct-download build. Xogot on
  iPad and iPhone edits GDScript only, and the sandboxed App Store build cannot
  use C# at all. Deploying the finished game to an iPad or an iPhone does work.
- The .NET SDK is not included. You install it yourself.
- Installing the component while a project is open has no effect until you
  reopen the project.
- There is no hot reload. Each run builds your code and starts a new process.
- C# on iOS is experimental, because it runs on NativeAOT. See
  [What to watch for with NativeAOT](#What-to-watch-for-with-NativeAOT).
- C# cannot deploy to Apple Vision Pro, because there is no NativeAOT runtime
  for visionOS.
- On a simulator or a device you cannot open a reference type in the debugger,
  apart from strings, arrays and lists.
- A project that uses both Swift and C# gets Swift breakpoints on a device, not
  C# ones.
- Deploying and exporting are not the same thing. Xogot builds, signs and
  installs a C# project on your own Mac, simulator, iPhone or iPad. It cannot
  yet produce a distributable build of a C# project for TestFlight or the App
  Store. Xogot is compatible with Godot, so use Godot on Mac to export the
  project.

For the general Godot C# reference material, such as how signals, exports, and
collections work in C#, see the Godot documentation for C#.

## See also

- <doc:Differences-Mac> — how Xogot for Mac differs from Godot on Mac
- <doc:mac_swift> — the same integration, for Swift
- <doc:Mac-Preview> — release notes for Xogot for Mac
