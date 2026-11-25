# Skills

Add instructions to the built-in Coding Assistant with skills.

## Overview

A skill is a folder with a `SKILL.md` file and, optionally, other files such as
references or scripts. The `SKILL.md` header has a name and a description. The
assistant reads the description of each enabled skill. When a task matches a
description, the assistant reads the full skill and follows its instructions.

Xogot includes the **xogot-game-design** skill. This skill teaches the
assistant Godot game design and how to control the Xogot editor. It is always
on, and you cannot remove it.

You can add more skills from [skills.sh](https://skills.sh), from GitHub, from
a link to a `SKILL.md` file, or from a file on your device. Skills are available
on Mac, iPad, and iPhone where the Coding Assistant is enabled.

Skills for the built-in assistant are different from the skill that you install
for external AI agents in **AI > External Agents**. For external agents, see
<doc:integrating_with_ai_tools>.

> Important: A skill gives instructions to the assistant. A skill can also
> include scripts that the assistant can run. Install skills only from sources
> that you trust. Read the skill before you install it. Keep **Tool Approval**
> set to **Ask** if you want to check each action before it runs.

## Open the skill settings

1. Open **AI** settings. On Mac, use **Editor Settings > AI > Built-in AI**.
2. Under **Skills**, select **Manage Skills**.

The **Skills** sheet shows the installed skills in these groups:

| Group | Content |
| --- | --- |
| **Bundled** | The skill that Xogot includes. |
| **This Project** | Skills that apply only to the open project. |
| **Global** | Skills that apply to all your projects. |

Each skill shows its description and its source. If Xogot cannot load a skill,
the skill shows the problem in red instead of the description.

When you open AI settings without an open project, the sheet shows only the
bundled and global skills.

Skill changes apply to new conversations. A conversation that is open keeps the
skills that it started with. Start a new conversation after you add, remove,
enable, or disable a skill.

## Add a skill

Select **Add Skill**, then select one of these sources:

| Source | Use it when |
| --- | --- |
| **Browse skills.sh** | You want to search the public skills.sh catalog. |
| **Import from File** | You have a skill folder or a `SKILL.md` file on your device. |
| **From URL** | You have a link to a skill on skills.sh or GitHub, or to a `SKILL.md` file. |

Before Xogot installs a skill, it shows a preview with the name, description,
number of files, size, and source. Read the preview, and open the source link
to examine the skill files.

### Browse skills.sh

1. Select **Add Skill > Browse skills.sh**.
2. Enter at least two characters in the search field. Before you type, the list
   shows popular skills for Godot, GDScript, game design, and shaders.
3. Select a skill. The list shows the number of installs for each skill. The
   preview shows the **Audit** results that skills.sh supplies for the skill.
4. Select the install location, then select **Install**.

### Add a skill from a URL

1. Select **Add Skill > From URL**.
2. Paste a link, then select **Continue**.
3. Read the preview, select the install location, then select **Install**.

Xogot accepts these `https` links:

| Link | Example |
| --- | --- |
| A skills.sh skill | `https://skills.sh/owner/repo/skill` |
| A GitHub repository | `https://github.com/owner/repo` |
| A GitHub folder | `https://github.com/owner/repo/tree/main/skills/my-skill` |
| A `SKILL.md` file on GitHub | `https://github.com/owner/repo/blob/main/skills/my-skill/SKILL.md` |
| Another `SKILL.md` file | `https://example.com/my-skill/SKILL.md` |

A repository link works only when the repository has one skill. If the
repository has more than one skill, paste the link to the skill folder.

Xogot downloads from GitHub without an account. GitHub permits 60 of these
requests each hour. If you get a message about this limit, try again later.

### Import a skill from a file

1. Select **Add Skill > Import from File**.
2. Select a skill folder, or select a `SKILL.md` file.
3. Read the preview, select the install location, then select **Install**.

When you select a folder, Xogot copies all the files in it, but not hidden
files. When you select only a file, Xogot copies only that file.

### Select the install location

When a project is open, use **Install In** to select the location:

- **This Project** installs the skill in the project folder. Use this when the
  skill is necessary only for this project, or when you want the project to
  keep its skills.
- **Global** installs the skill for all projects.

A skill name can be in only one location. To move a skill to the other location,
remove it first, then install it again.

If a skill with the same name is already in the selected location, Xogot asks
before it replaces the files.

## Enable or disable a skill

Use the switch next to the skill. A disabled skill stays installed, but new
conversations do not use it. You cannot disable the bundled skill.

## Update a skill

You can update a skill that you installed from skills.sh or GitHub.

1. Open the skill's **More** menu.
2. Select **Update**.
3. Select **Update** again to confirm.

Xogot compares the skill with its source on GitHub. If the source did not
change, Xogot shows **Up to date**. If it changed, Xogot replaces the skill
files.

> Warning: An update replaces all the skill files. Changes that you made to the
> installed files are lost.

Skills that you imported from a file or from another link do not have an
update source. To get a newer version, install it again.

## Remove a skill

1. Open the skill's **More** menu.
2. Select **Remove**.
3. Select **Remove** again to confirm.

Xogot deletes the skill files. You can remove only skills that Xogot
installed. For other skills, use the switch to disable them, or delete their
folders yourself.

## Use skills in a conversation

You do not have to name a skill. The assistant selects a skill when your task
matches its description.

To use a specific skill, enter `/skill:` followed by the skill name at the
start of the message, then add your request. When you type `/`, the message
field shows the available commands, including the skills. For example:

```text
/skill:my-shader-skill Make a water shader for the pond scene.
```

Xogot sends the full skill instructions with your request.

## Skill locations

Xogot keeps each skill in its own folder. The folder name is the skill name.

| Location | Folder |
| --- | --- |
| **This Project** | `.pi/skills/` in the project folder. |
| **Global** | `skills/` in the Xogot assistant settings folder. |

To see the folder of a skill, select **Show Details** in the skill's **More**
menu. On Mac, you can also select **Reveal in Finder**.

Xogot also shows skills that it did not install, if they are in a folder that
the assistant reads. These skills show **Found in** and their folder. You can
enable or disable these skills, but Xogot does not update or remove them.

Xogot records the enabled state in a `settings.json` file. Project skills use
`.pi/settings.json` in the project folder. A disabled skill has a `!name` entry
in the `skills` list of that file. If the file has a format that Xogot cannot
change, Xogot shows the file path. Edit the file yourself in that case.

If you use source control, you can add the `.pi/skills` folder of the project
to your repository. Then the project skills are available on your other
devices.

## Write a skill

A `SKILL.md` file starts with a header between `---` lines:

```markdown
---
name: my-shader-skill
description: Writes Godot shaders. Use it when the user asks for a shader or a visual effect.
---

# My Shader Skill

1. Read the scene before you add a material.
2. Use `shader_type canvas_item;` for 2D nodes.
```

A skill must obey these rules:

| Item | Rule |
| --- | --- |
| `name` | Lowercase letters, digits, and hyphens. 64 characters maximum. It cannot start or end with a hyphen, and it cannot have two hyphens together. If there is no `name`, Xogot uses the folder name. |
| `description` | Necessary. 1024 characters maximum. |
| Files | 200 files maximum. |
| Size | 5 MB maximum for each file. 20 MB maximum for the skill. |

Write a description that tells the assistant what the skill does and when to
use it. The assistant uses the description to decide when to read the skill.

## Troubleshooting

| Problem | Action |
| --- | --- |
| A new or changed skill has no effect. | Make sure that the skill is enabled. Start a new conversation. |
| A skill shows a problem in red. | Correct the `SKILL.md` header. Make sure that it has a valid `name` and a `description`. |
| **Install** is not available. | Read the problems that the preview shows. The skill does not obey a rule in <doc:Skills#Write-a-skill>, or a skill with the same name is in the other location. |
| A name is the name of the bundled skill. | Change the `name` in the skill header. You cannot replace the bundled skill. |
| A repository link does not work. | Paste the link to the skill folder. The repository can have more than one skill, or it can be too large to search. |
| GitHub stops downloads. | GitHub permits 60 requests each hour without an account. Try again at the time that Xogot shows. |
| **Update** and **Remove** are not available. | Xogot did not install this skill, or Xogot did not install it from skills.sh or GitHub. |
| The switch does not change. | Another entry in `settings.json` controls the skill. Edit the file at the path that Xogot shows. |
| Xogot does not change a skill in a linked folder. | The skill folder is a symbolic link. Change the skill in its original folder. |
