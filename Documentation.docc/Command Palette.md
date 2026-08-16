# Command Palette

Open files, run commands, jump to lines and symbols, and search Xogot
documentation from a single keyboard-friendly interface.

It is inspired by both MacOS's Spotlight search and the Visual Studio command
command palette. 

## Home

When you trigger the Command Palette it will open up in the center of the screen
and it will provide a small reminder of the things you can do there:

@Image(source: "XogotCommandPalette.png",
       alt: "Initial view of the Xogot Command Palette")

The following prefixes are recognized by the Command Palette:

* `>` - used to search commands, it is also the default mode of operation if you
  trigger the command palette using the Command-Shift-P shortcut.

* `:` - when editing code or text, this is used to jump to a specific line of
  code, it is also the default mode when you trigger the palette using the
  Command-L shortcut.

* `@`: - used to perform function lookups in the current script file to quickly
  navigate to a function definition.

* `$`: - used to find and select a node in the current scene

* `?`: - used to lookup information in the built-in documentation.

### Fuzzy and Verbatim Search

The command palette by default searches matches using a fuzzy search, this means
that if you type `hwp` and you have a file called `HardWall.PNG` this match the
file because it contains an "w"" followed by a "w", followed by a "p".

To disable the fuzzy match, make the first character of your search the double
quote, so type something like `"hwp`, this will only match a file that contains
the string `hwp` in its name.

### File Search

This is the default mode and it is used to quickly locate files in your project.
You can start searching or browse the results and when you press return, this
will trigger the default action for that asset, which could include loading it,
or showing it in the inspector.

The file listing will show previews if Godot generated a preview for that file.

When you enter this mode, Xogot automatically offers a filter to help you select
a specific kind of file.   You can access this by either tapping into it, or
pressing the right-arrow key to move across the selections (Scene, Resource,
Script or Shader).

By default, this uses the fuzzy search.

Additionally, if you have selected a text filename, and you add the suffix
":NUMBER" Xogot will open the file and then navigate to the specified line number.

### Commands

Xogot comes with a number of built-in commands for common operations that you
can invoke from here.   It will also surface any `EditorScript` classes that you
have added to your project, they will be surfaced here - this is a convenient
way of automating processes in your workflow.

To create your own `EditorScript` that can be triggered from here, create a new
GDScript and declare it like this:

```gdscript
@tool
extends EditorScript

func _run():
	print("Hello from the Godot Editor!")
```

Save the file, and then you can run it from the command palette.

By default, the search uses the fuzzy search.

### Go-to Line

If you are editing a text file, or a program, and you start the search with `:`
or you trigger the command palette with the Command-L option, you can type in a
number and the text editor will jump to that line.

### Symbol Lookup

On a text file, you can also navigate to a function location by typing
`@SYMBOL`.

Like the file search and the command search, this defaults to fuzzy searches.

### Node Selection

If you type `$`, you enter the node search mode, which can be used to quickly
select a node from the current scene.   Like the other options, the search
defaults to fuzzy mode.

When you select a match, this will select the node in the scene, and activate
the inspector for that node.

### Documentation Search

If your search starts with the `?` character, this will activate the
documentation search mode.  You will need at least two characters to perform a
search. 

The default search will search both the type names as well as the content of
documentation, if you want to limit the kind of content to search for, you can
either tap on "types" or "contents" or use the right/left arrow keys while
entering the text to auto-filter the matches to those.

In documentation search mode, you can prefix any word with the minus sign, to
exclude documentation nodes that contain that word.   For example, if you type
`?vector return -prevent` this will display the documentation nodes that contain
both the word vector and the word return in their body, but will exlude any
docuemnts that contains the word `prevent` from being displayed.
