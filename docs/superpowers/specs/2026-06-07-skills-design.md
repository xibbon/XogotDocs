# Agent Skills for DocC and the XogotDocs Tutorial Workflow

**Date:** 2026-06-07
**Status:** Approved (brainstorming session)
**Owner:** DocC + XogotDocs maintainers

> **Note:** Skills are **personal** (in `~/.agents/skills/`), not committed to the XogotDocs repo. Earlier draft said to commit them; revised per review feedback.

## Purpose

Future agents working on the XogotDocs repo (or authoring new DocC tutorials anywhere) should be able to find a small, well-organized set of personal skills that:

1. Explain DocC's syntax and conventions accurately, sourced from `swift.org/documentation/docc`.
2. Document the XogotDocs repo layout, naming, and conventions so a new agent can navigate without re-discovering everything.
3. Provide a workflow for translating an upstream Godot tutorial (e.g. `docs.godotengine.org`) into this repo's DocC format, including the asset-downloading and `.gd` code-file conventions we established.

The three skills are personal (live in the user's `~/.agents/skills/`) and are not committed to the XogotDocs repo. They're available across any project the user works in.

## Scope

### In scope
- All DocC directives used in this repo's tutorials: `@Tutorials`, `@Tutorial`, `@Intro`, `@Section`, `@ContentAndMedia`, `@Steps`, `@Step`, `@Image`, `@Code`, plus the 5 canonical asides (Note, Important, Warning, Tip, Experiment).
- DocC markdown dialect: bold/italic/code-voice, lists, term lists, code listings, escaping, tables, images, links.
- DocC `<doc:>` and symbol links.
- XogotDocs repo layout: where the catalog lives, where images and code files go, how the tutorials table of contents is structured, how to add a new chapter.
- Translation workflow: downloading assets from `docs.godotengine.org`, mapping the Godot desktop tutorial to Xogot's touch paradigm, building `.gd` sample files as a sequential additive chain, commit-and-push hygiene.

### Out of scope
- DocC API reference syntax (`@Metadata`, `@DeprecationSummary`, etc.) — not used in tutorials, separate DocC concept.
- DocC rendering and build pipeline — not used at authoring time.
- General Godot engine documentation.

## Skills to create

### 1. `docc-syntax/` (general purpose)
**Purpose:** Comprehensive, accurate reference for DocC syntax and conventions, sourced from `swift.org/documentation/docc`.

**Type:** Reference skill (per `superpowers:writing-skills`).

**Files:**
- `SKILL.md` — lean entry point (< 200 words). Overview, file types, when-to-use, links to per-topic files, quick cheatsheet, common mistakes.
- `tutorials.md` — `@Tutorials`, `@Tutorial`, `@Section`, `@Step`, `@Code`, assessments.
- `articles-and-landing.md` — `.md` structure, page titles, abstracts, section headers.
- `formatting.md` — markdown dialect, lists, code listings, escaping.
- `asides.md` — 5 aside types, single-line and multi-line syntax.
- `links.md` — symbol links, `<doc:>` links, heading links, web links, disambiguation.
- `images.md` — filename conventions.
- `tables.md` — GFM tables, alignment, spanning.
- `code-snippets.md` — `@Snippet`, slice markers, plugin setup.

**YAML frontmatter** (per `superpowers:writing-skills`):
- `name: docc-syntax`
- `description:` triggers on DocC, tutorial, directive, `@Tutorial`, `@Section`, `@Step`, `@ContentAndMedia`, `@Image`, `@Code`, `@Tutorials`, `@Chapter`, `@Intro`, aside, DocC aside, DocC link, DocC table, swift.org/documentation/docc. Under 1024 chars. Does NOT summarize the workflow.

**Validation (TDD-style):** Open the existing 3D tutorial (`Documentation.docc/Tutorials/your-first-3d-game/`) and confirm the following specific test cases are all covered by the skill:
- Every `@Step` block in the 3D tutorial is described (when to use, what it can contain).
- All 5 canonical asides (Note, Tip, Important, Warning, Experiment) appear with both single-line and multi-line syntax shown.
- The `@Code` directive's `reset: true` and `previousFile:` parameters are explained with an example of each.
- The image filename convention (`@2x`, `~dark`, `~light`) is documented.
- The `> TYPE: content` and `- TYPE: content` aside syntax alternatives are shown.
- Link syntax for at least: symbol (backticks), article (`<doc:slug>`), and tutorial (`<doc:slug>`) is shown.
A test "passes" when the skill's `tutorials.md` (or relevant topic file) has a section that the agent would naturally navigate to when asked.

### 2. `xogot-docs-repo-layout/` (repo-specific)
**Purpose:** New agent can navigate the XogotDocs repo without rediscovering structure.

**Type:** Reference/technique hybrid.

**Files:**
- `SKILL.md` — single file. The repo is small enough that one file is appropriate.

**Content:**
- High-level repo layout: `Documentation.docc/`, `Resources/`, `Resources/code-files/`, `Resources/tutorials-art/`, `Tutorials/`.
- Where new tutorials go: `Documentation.docc/Tutorials/<tutorial-slug>/` with `img/` for tutorial-specific images, and `Documentation.docc/Resources/code-files/<tutorial-slug>/` for `.gd` samples.
- How the table of contents is structured: `Documentation.docc/Xogot Tutorials.tutorial` with `@Chapter` blocks.
- Image naming convention: kebab-case with a numeric prefix to preserve upstream source order, e.g. `01.import_button.webp`, no spaces or uppercase. Each tutorial gets its own `img/` subfolder for tutorial-specific assets; the shared `Resources/tutorials-art/<tutorial-slug>/` folder is also available for cross-tutorial assets and reusable UI screenshots.
- How to register a new tutorial in the catalog.

**YAML frontmatter:**
- `name: xogot-docs-repo-layout`
- `description:` triggers on the XogotDocs repo, `Documentation.docc`, the catalog structure, or questions like "where do images go" / "how do I add a new tutorial".

**Validation:** Given the 3D tutorial as a test fixture, a new agent reading the skill should be able to answer these specific questions without opening any other file:
- "Where do I put a new `.tutorial` file?"
- "Where do its images go? Its code samples?"
- "How do I register it in the catalog table of contents?"
- "What naming convention should images follow?"
- "How do I add a new chapter for it?"
A test "passes" when the skill contains the answer with a path or example for each.

### 3. `translating-godot-tutorials/` (repo-specific workflow)
**Purpose:** Step-by-step procedure for taking an upstream Godot tutorial and producing a XogotDocs `.tutorial` file.

**Type:** Technique (concrete steps).

**Files:**
- `SKILL.md` — single file with the workflow.

**Workflow steps to document:**
1. **Pre-flight**: read the Godot page, list image URLs, list code blocks, decide the table of contents entry.
2. **Branch**: create a feature branch off `main`.
3. **Download assets**: write a small PowerShell or curl loop to download all referenced images into `<tutorial>/img/`. Use `fix-me.png` from `Resources/tutorials-art/` for any image that needs to be added later.
4. **Build code sample chain**: create N `.gd` files where each is a strict additive superset of the previous. Validate by script.
5. **Write tutorial files**: `index.tutorial` + `01.section.tutorial` ... matching the Godot page structure but with Xogot touch adaptations (tap, long-tap, etc.) and asides (Note/Tip/Important/Experiment).
6. **Verify references**: every `@Image(source:)` and `@Code(file:)` must resolve.
7. **Add to catalog**: uncomment/add `@TutorialReference` in `Xogot Tutorials.tutorial`.
8. **Commit and push**: one commit per logical change, push to a feature branch.

**Xogot touch adaptations** to document (per our 3D tutorial experience):
- Use `tap` / `long-tap` / `tap and drag` instead of `click` / `right-click`.
- For player input on iPad, integrate the **Virtual Joystick** add-on from the Asset Library (the pattern both the 2D tutorial and the 3D tutorial follow). Add a CanvasLayer named `UI`, instantiate `virtual_joystick_scene.tscn`, wire its `action_left`/`action_right`/`action_up`/`action_down` to the movement input actions, set Joystick Mode = Following and Visibility Mode = When Touched, anchor Full Rect, and hide the joystick on player death. Avoid the iOS virtual controller project setting — the add-on is more flexible and matches what the existing tutorials do.
- Reference Xogot's UI elements: Inspector, Scope, Asset Library, Files app, split view, etc.

**YAML frontmatter:**
- `name: translating-godot-tutorials`
- `description:` triggers on translating a Godot tutorial, adding a new tutorial to XogotDocs, working in `Documentation.docc/Tutorials/`, or when the user references the upstream `docs.godotengine.org` tutorial structure.

**Validation:** Walk through the existing 3D tutorial and confirm these specific checklist items:
- The workflow's 8 steps can be matched one-to-one to the commits in the `add-your-first-3d-game-tutorial` branch history (`git log --oneline`).
- Every image referenced in the 3D tutorial exists in `<tutorial>/img/` and every `@Code(file:)` resolves to a file in `Resources/code-files/your-first-3d-game/`.
- The .gd code files form a strict additive chain (file N is a subset of file N+1).
- The catalog table of contents (`Documentation.docc/Xogot Tutorials.tutorial`) has the 3D tutorial registered.
- The Xogot touch adaptations (tap/long-tap, Virtual Joystick add-on, etc.) appear in the relevant sections of the 3D tutorial.
A test "passes" when each item is true.

## Frontmatter standards (all three skills)

- `name` field: kebab-case, no special chars.
- `description` field:
  - Third person.
  - Starts with "Use when...".
  - Lists specific triggering conditions (file names, directives, error patterns, task context).
  - Does NOT summarize the workflow or the skill's process.
  - Under 1024 chars total frontmatter.

## Authoring approach

Follow `superpowers:writing-skills` TDD-lite cycle:

1. **RED**: define a "can a future agent find this?" test by walking through the existing 3D tutorial (`Documentation.docc/Tutorials/your-first-3d-game/`) and identifying every directive, path, and pattern used.
2. **GREEN**: author the skill content to satisfy those specific test cases.
3. **REFACTOR**: extract duplication, cross-reference, condense.

Apply this cycle once per skill. Start with `docc-syntax` (most general), then `xogot-docs-repo-layout`, then `translating-godot-tutorials` (depends on the prior two).

## Validation strategy (RED step)

For each skill, before writing:
1. Open the existing 3D tutorial.
2. Note every DocC directive, every file path, every convention touched.
3. Write the skill to cover exactly those (and the surrounding breadth from the official DocC site).

After writing, re-walk the tutorial and confirm coverage.

## File organization

The three skills are written under the user's personal skills directory (`~/.agents/skills/`) on this machine, NOT in the XogotDocs repo. Approximate paths on Windows: `C:\Users\nicol\.agents\skills\<skill-name>\`.

```
~/.agents/skills/
  docc-syntax/
    SKILL.md
    tutorials.md
    articles-and-landing.md
    formatting.md
    asides.md
    links.md
    images.md
    tables.md
    code-snippets.md
  xogot-docs-repo-layout/
    SKILL.md
  translating-godot-tutorials/
    SKILL.md
```

## Deployment

- Write the skill files to `~/.agents/skills/` directly.
- The skills become immediately available to any future agent session in the user's personal agent catalog.
- They are NOT committed to the XogotDocs repo. If the user wants the team to share them, they can copy the `~/.agents/skills/` directories into a shared location, but that's out of scope for this design.

## Out-of-scope followups

- A second iteration could add a `docc-api-reference` skill if the repo ever adds API documentation.
- A skill for adding new chapters to the Xogot catalog could be useful later, but is subsumed by the `translating-godot-tutorials` workflow.
