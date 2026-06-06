# Integrating with AI tools

Xogot for Mac includes a small command-line tool, `xo`, and a bundled skill file
that teaches AI coding agents how to use it. Together, they let chat-based
developer tools inspect and drive a running Xogot editor instead of guessing
from project files alone.

Use this integration when you want an AI tool to inspect the active scene, read
editor state, capture screenshots, edit nodes, open files, run the project, or
debug a project that is already open in Xogot.

## Install the Xogot skill

Open **Editor Settings**, then choose **AI**. The AI settings page lists the
bundled **Xogot Editor Control** skill and the supported AI agents.

For each agent you use, choose a scope and click **Install**:

- **Project** installs the skill into the current project. Use this when you
  want the project to carry its Xogot instructions with it.
- **Global** installs the skill into your home directory. Use this when you want
  the same Xogot instructions available to that agent across projects.

The installer also checks whether the installed skill is current, modified, or
outdated. If Xogot ships a newer copy later, the AI settings page can update it.
If you edited an installed skill yourself, Xogot asks before replacing it.

## Skill file locations

The skill is installed as a `SKILL.md` file named `xogot`. The exact location
depends on the AI agent and the selected scope:

| Agent | Project scope | Global scope |
| --- | --- | --- |
| Claude Code | `.claude/skills/xogot/SKILL.md` | `~/.claude/skills/xogot/SKILL.md` |
| OpenAI Codex CLI | `.agents/skills/xogot/SKILL.md` | `~/.agents/skills/xogot/SKILL.md` |
| Gemini CLI | `.gemini/skills/xogot/SKILL.md` | `~/.gemini/skills/xogot/SKILL.md` |
| GitHub Copilot | `.github/skills/xogot/SKILL.md` | `~/.copilot/skills/xogot/SKILL.md` |
| Pi | `.pi/skills/xogot/SKILL.md` | `~/.pi/agent/skills/xogot/SKILL.md` |
| Cursor | `.cursor/skills/xogot/SKILL.md` | Not supported |
| Qwen Code | `.qwen/skills/xogot/SKILL.md` | `~/.qwen/skills/xogot/SKILL.md` |
| Cline | `.cline/skills/xogot/SKILL.md` | `~/.cline/skills/xogot/SKILL.md` |

Project scope requires an open project. Cursor supports only project-scoped
skills because it does not have a user-global skills folder.

## The `xo` command

`xo` is the command-line control surface for Xogot for Mac. It talks to a
running Xogot instance through Xogot's macOS broker and instance APIs.

The installed skill uses the correct `xo` command for your Xogot installation,
so AI tools can run commands such as:

```bash
xo --help
```

## What AI tools can do with `xo`

The installed skill tells an agent to prefer `xo` when it needs live editor
state. Useful commands include:

```bash
xo list
xo editor state
xo editor selection get
xo scene current
xo scene tree
xo editor screenshot ./xogot-shot.png
```

Agents can also use `xo` to modify the editor:

```bash
xo node create /Main/Camera3D --type Camera3D
xo node property set /Main/Camera3D position '"Vector3(0, 1, 5)"'
xo scene save
xo project run
xo project stop
```

`xo` supports JSON, table, and Markdown output. JSON is the default and is the
best format for tools that need to parse results:

```bash
xo --pretty editor state
xo --output markdown scene tree
```

If more than one Xogot instance is running, list them and pass the target name
with `--app`:

```bash
xo list
xo --app "My Project" editor state
```

## Launching Xogot from `xo`

`xo` can also launch or activate Xogot instances. This is useful for AI tools
that need to open a project before inspecting it:

```bash
xo launch --editor /path/to/project
xo launch --path /path/to/project
xo launch --new-project=/path/to/new/project --renderer mobile
xo launch --download-git
xo activate "My Project"
```

For the app-level command-line options that Xogot itself accepts, see
<doc:mac_command_line>.

## Troubleshooting

Run `xo doctor` when a chat tool cannot reach Xogot:

```bash
xo doctor
```

`xo` needs access to Xogot's broker and instance XPC endpoints. If a tool runs
inside a sandbox, the sandbox may block that communication. In that case, run
the command from an unsandboxed terminal, or allow Mach lookup for the Xogot
broker and instance services in the tool's sandbox configuration.

Use `xo --help` and `xo <command> --help` to discover the current command
surface. The bundled skill is intentionally written to tell agents to ask `xo`
for help before using unfamiliar commands.

## Notes on `xo`

When Xogot is installed in `/Applications`, the AI settings installer tries to
make `/usr/local/bin/xo` point at the bundled tool. If that symlink is available,
installed skill files use the bare command:

```bash
xo --help
```

If the symlink cannot be created, or Xogot is running from another location, the
installed skill uses the full path to the bundled tool instead:

```bash
/path/to/Xogot.app/Contents/MacOS/xo --help
```

Move Xogot to `/Applications` if you want the simple `xo` command to be
available from shells and AI tools.
