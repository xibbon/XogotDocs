# Integrating with AI tools

Xogot for Mac includes a small command-line tool, `xo`, and a bundled skill
that teaches AI coding agents Godot game design and how to use `xo`. Together, they let chat-based
developer tools inspect and drive a running Xogot editor instead of guessing
from project files alone.

Use this integration when you want an AI tool to inspect the active scene, read
editor state, capture screenshots, edit nodes, open files, run the project, or
debug a project that is already open in Xogot.

To work with AI inside Xogot on Mac, iPad, or iPhone, use the built-in
<doc:Coding-Assistant>. That page explains how to choose an AI integration and
connect a provider. This page explains how to connect an external AI tool on Mac.

To add MCP tools to the built-in assistant, see <doc:MCP-Servers>. To add
skills to the built-in assistant, see <doc:Skills>. The skills on this page are
only for external AI agents.

## Install the Xogot skill

Open **Editor Settings**, then choose **AI > External Agents**. This section
shows the bundled **Xogot Game Design** skill, its version, and the supported
AI agents.

For each agent you use, choose a scope and click **Install**:

- **Project** installs the skill into the current project. Use this when you
  want the project to carry its Xogot instructions with it.
- **Global** installs the skill into your home directory. Use this when you want
  the same Xogot instructions available to that agent across projects.

Each agent shows the status of its installed skill:

| Status | Action |
| --- | --- |
| Installed and current | The **Installed** menu has **Reinstall** and **Remove**. |
| Outdated | This version of Xogot has a newer skill. Click **Update**. |
| Modified | You changed the installed files. Click **Replace** to install the version that Xogot includes. Xogot shows the two versions and asks before it replaces your files. |
| Installed for another copy of Xogot | The skill runs `xo` from a different copy of Xogot. Click **Update**. |

Earlier versions of Xogot installed the skill as a single file in a folder
named `xogot`. Xogot shows that installation as outdated. When you update it,
Xogot asks first. Then it removes the `xogot` folder and installs the skill in
the `xogot-game-design` folder.

## Skill file locations

The skill is a folder named `xogot-game-design`. The folder has a `SKILL.md`
file and other files, such as references, that the agent reads when necessary.
The location depends on the AI agent and the selected scope:

| Agent | Project scope | Global scope |
| --- | --- | --- |
| Claude Code | `.claude/skills/xogot-game-design/` | `~/.claude/skills/xogot-game-design/` |
| OpenAI Codex CLI | `.agents/skills/xogot-game-design/` | `~/.agents/skills/xogot-game-design/` |
| Gemini CLI | `.gemini/skills/xogot-game-design/` | `~/.gemini/skills/xogot-game-design/` |
| GitHub Copilot | `.github/skills/xogot-game-design/` | `~/.copilot/skills/xogot-game-design/` |
| Pi | `.pi/skills/xogot-game-design/` | `~/.pi/agent/skills/xogot-game-design/` |
| Cursor | `.cursor/skills/xogot-game-design/` | Not supported |
| Qwen Code | `.qwen/skills/xogot-game-design/` | `~/.qwen/skills/xogot-game-design/` |
| Cline | `.cline/skills/xogot-game-design/` | `~/.cline/skills/xogot-game-design/` |
| OpenCode | `.opencode/skills/xogot-game-design/` | `~/.config/opencode/skills/xogot-game-design/` |
| Hermes Agent | `.hermes/skills/xogot-game-design/` | `~/.hermes/skills/xogot-game-design/` |

Project scope requires an open project. Cursor supports only project-scoped
skills because it does not have a user-global skills folder.

## The `xo` command

`xo` is the command-line control surface for Xogot for Mac. It talks to a
running Xogot instance through Xogot's macOS broker and instance APIs.

The installed skill gives the full path to the `xo` tool in your copy of Xogot,
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

The installed skill runs `xo` by its full path in the Xogot app bundle:

```bash
/Applications/Xogot.app/Contents/MacOS/xo --help
```

The examples on this page use `xo` without a path to make them shorter. Your
agent uses the full path from the skill.

The **External Agents** section shows the location of Xogot. If you move or
rename Xogot, the installed skills cannot find `xo`. Open **AI > External
Agents** again and click **Update** for each agent.

If macOS runs Xogot from a temporary location, you cannot install skills. This
occurs when you open Xogot from a downloaded disk image or from the Downloads
folder. Move Xogot to the Applications folder, then open it again.
