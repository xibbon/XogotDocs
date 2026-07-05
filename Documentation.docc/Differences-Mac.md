This document is focused on the differences in Godot on Mac and Xogot on Mac.

While they both use the same Godot engine, and under the surface, large parts of
the Godot editor are still present, we have made various chages in Xogot to work
with Apple's native UI APIs and native idioms while retaining full compatibility
with Godot - so you can easily switch back and forth between Godot on Mac and
Xogot on Mac and collaborate with developers on Windows and Linux on the same
project.

# Code Editor

We replaced the Code Editor in Godot with Microsoft's Monaco editor.  The same
editor that powers Visual Studio Code.   This gives us a powerful text editor
that has great ergonomics on the Mac.  We have routed many of the operations
that would be HTML-based to Mac native APIs like popup boxes, context menus and
other affordances in the UI.

We then wired up Monaco to Godot's LSP server so we get capabitilies like "Go to
Definition/Declaration", contextual help on hover, Go to References and it
provides a set of commands that are compatible with the Monaco editor on Mac.

# AI accessible

You can connect your favorite AI Agent code tool to control Xogot remotely, make
changes and debug issues in your project without any additional plugins.   Just
activate the support in "Settings>AI" and install the SKILLs file for your
favorite AI agent, and you can start doing work via an agent.

Access to Xogot is not done via MCP, as we believe that MCP is both too rigid,
and consumes too much of your precious token space, instead we rely on the `xo`
tool and self-discovery capabilities to let your agent communicate with Xogot.

Learn more in <doc:integrating_with_ai_tools>.

# Remotely Accessible: the `xo` tool.

Xogot can be accessed as a service from the command line and most operations
that you can perform from the UI can be done via the `xo` command line tool.

This tool is intended to creating scripts or control remote Xogot instances and
your own projects.   You can use this to automate playthroughs, testing, AI
agents and perform various maintenance duties from the command line from your
favorite programming language.

# Apple Platform Focused

Godot generally takes an approach of developing games as Godot games, and you
typically use an "Export" template to deploy your games to a target platform,
and in Apple's case create create a package that can be deployed to your
favorite device.

Xogot, like Godot defaults to running your game locally as a Godot game, we call
this "Local Editor".   But we make it very easy to deploy to simulators and
devices.  We pick existing iOS simulators from your system, and we detect
hardware that you have connected or configured to use with this devices - and we
can deploy via USB or over the network to your Apple devices.  

We provide an Xcode-like experience to properly package, sign and deploy your
games to Apple platforms, removing several steps from the process.

# Pads

## Output and Debug

In Godot, there are two available pads, "Output" for your game output, and
"Debug" for controlling your game.   We blended those two into one pad, as they
are typically used together - and it will feel more familiar to Xcode users.

And we made it so when your game is stopped, we provide you with a command line
interface in the output window where you can evaluate expressions directly, like
you would on Xcode. 

Additionally, we consider that the historical content of Build, Deploy and
Program outputs are also useful debugging tools, so we log these in a buffer
that you can use to revisit what happened in previous iterations in a dedicated
navigator.

The live-data reporting of your running game is moved from being a tab on the
Debugger tab to be a dedicated navigator on the left sidebar, where we display
the performance counters and you can drill on those.

## Fixed Pads

Unlike Godot that offers configurable positioning of tabs, Xogot for the most
part has fixed the positions of the various utility pads in Godot.
 
# Asset Management

## Asset Browser

In Xogot, there is a permanent "Asset" tab in the bottom of the screen that
shows your project resources - as an alternative to using the file system
browser pad to locate files and bring them into your design surfaces.

## Asset Tags

We automatically auto-generate tags for your assets (audio, scenes, textures, 3D
models) based on their file types, directory names and file names.   You can use
these tags to quickly find items on the Asset Browser, and they are also
displayed on the inspector when the resource is being edited.

## Asset Placer

In 3D editing, we integrated the capabilities of the "Ultimate Asset Placer"
plugin into Xogot so you can more easily populate levels with your artwork and
components.

# Inspector

## Mask Editing

In Godot masks are used in a few places to activated layers like collision
layers, mask layers and so on.   Typically these are numeric values that you
toggle on and off.   We surface an option to render these not as numeric grids,
but as chips linked to their layer names, so you can more easily inspect the
properties of an object without having to memorize what each number represents
in the layer.

# Command Palette

From Visual Studio, we embraced the Command Palette which is an input text box
that is triggered via Command-P and Command-Shift-P, from here you can search,
go to a line, run a command, jump to a symbol, select a specific node in a
scene, or lookup the documentation for a type based on the prefix you type.

# Auto Saving

Xogot will automatically save scenes and text files at more points than just
Run the scene.  So using Xogot with a tool like git is very useful if you use a
different workflow.

# Quarantined Files

Xogot will detect if you attempt to open a project that contains quarantined
files (usually dynamic libraries download from the network) and offer to remove
the quarantine attribute.   It also does that when you unpack an addon directly
into a running project - you might choose to not allow the quarantined files to
be loaded - and Xogot will remember this setting for the duration of the
session.   It will prompt you again on next startup.