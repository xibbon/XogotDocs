# .NET and C# in Xogot for Mac

Write, build, and debug C# game code in Xogot for Mac, with code completion from
a C# language server and an integrated .NET debugger.

Xogot for Mac can open and edit Godot projects that use C#. You write your game
logic in C#, build it from the **Project** menu, and set breakpoints in your C#
code the same way you set them in GDScript.

This is a Mac-only capability. Xogot on iPad and iPhone continues to support
GDScript only.

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

## Current limitations

C# support is new. These are the limits today:

- C# is available on Mac only, and only in the direct-download build. It is not
  available on iPad or iPhone, and not in the sandboxed App Store build.
- The .NET SDK is not included. You install it yourself.
- Installing the component while a project is open has no effect until you
  reopen the project.
- There is no hot reload. Each run builds your code and starts a new process.
- You cannot export a project that contains C# from Xogot yet. Xogot is
  compatible with Godot, so use Godot on Mac to export the project.

For the general Godot C# reference material, such as how signals, exports, and
collections work in C#, see the Godot documentation for C#.

## See also

- <doc:Differences-Mac> — how Xogot for Mac differs from Godot on Mac
- <doc:mac_swift> — the same integration, for Swift
- <doc:Mac-Preview> — release notes for Xogot for Mac
