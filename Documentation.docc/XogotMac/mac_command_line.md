# Xogot for Mac command line options

Launch Xogot for Mac from Terminal when you want to open a project, run a
project, create a project, or drive startup flows from scripts.

For example, you can pass arguments through macOS `open`:

```bash
open -na Xogot --args --editor /path/to/project
```

You can also run the executable inside the app bundle directly:

```bash
/Applications/Xogot.app/Contents/MacOS/Xogot --path /path/to/project
```

## Startup modes

The startup mode determines what Xogot opens after launch. When multiple startup
mode options are provided, Xogot uses the first matching mode in this order:
new project, new-project UI, Git download, editor, then run.

### Create a new project

Use `--new-project` with a path to create a project at startup and open it in
the editor.

```bash
open -na Xogot --args --new-project /path/to/new/project
open -na Xogot --args --new-project=/path/to/new/project
```

If `--new-project` is provided without a path, Xogot opens the new-project UI:

```bash
open -na Xogot --args --new-project
```

### Open the new-project UI

Use `--new-project-ui` to open the new-project UI directly:

```bash
open -na Xogot --args --new-project-ui
```

### Download from Git

Use `--download-git` to open the Git download flow:

```bash
open -na Xogot --args --download-git
```

### Open a project in the editor

Use `--editor` with a project path to open that project in the editor:

```bash
open -na Xogot --args --editor /path/to/project
open -na Xogot --args --editor=/path/to/project
```

You can also combine `--path` with `--editor` or `-e` to open the path in the
editor instead of running it:

```bash
open -na Xogot --args --path /path/to/project --editor
open -na Xogot --args --path=/path/to/project --editor
open -na Xogot --args --path /path/to/project -e
```

### Run a project

Use `--path` with a project path to run the project:

```bash
open -na Xogot --args --path /path/to/project
open -na Xogot --args --path=/path/to/project
```

### Open a file in an editor launch

Use `--open-file` with an editor launch to open a file inside the project after
the editor starts:

```bash
open -na Xogot --args --editor /path/to/project --open-file /path/to/project/main.gd
open -na Xogot --args --editor /path/to/project --open-file=/path/to/project/main.gd
```

`--open-file` is used only with editor launches. Scene and resource files are
opened through the editor; script and other text files are opened in the file
editor.

## Project creation renderer

Use `--renderer` with `--new-project` to choose the rendering method for the
project created at startup. Both `--renderer <value>` and `--renderer=<value>`
are supported:

```bash
open -na Xogot --args --new-project /path/to/new/project --renderer mobile
```

Supported values are:

- `mobile`: use the mobile renderer.
- `compatibility`: use the GL compatibility renderer.
- Any other value, or no `--renderer`, uses Forward+.

The `--renderer` option is only used for project creation at startup.

## Run and debug options

These options are forwarded when Xogot launches a project run:

- `--remote-debug <uri>` or `--remote-debug=<uri>`: pass the remote debugger URI.
- `--editor-pid <pid>` or `--editor-pid=<pid>`: pass the editor process ID.
- `--scene <path>` or `--scene=<path>`: pass a scene path to run or debug.

For example:

```bash
open -na Xogot --args --path /path/to/project --scene res://main.tscn
```

## Internal and automation options

`--embedded` starts the hidden embedded game or editor runner mode. This is used
internally by Xogot when it hosts a Godot process.

`--xogot-instance <name>` sets the macOS remote-control and broker instance name
for this launch. This is intended for remote-control tooling and multi-instance
coordination.
