# Source Control in Xogot for Mac

Xogot for Mac includes built-in Git support for common source control
workflows. You can initialize a repository, clone an existing project, review
changes, stage files or hunks, commit, push, pull, manage branches and stashes,
and connect a project to a hosting service without leaving Xogot.

Most commands live in three places: the **Source Control navigator** in the left
sidebar (where you review changes and browse branches, tags, stashes, and
remotes), the **Integrate menu** in the macOS menu bar (for repository-wide
commands such as staging, committing, pushing, and pulling), and **status
badges** shown next to files in the file pad. Commit and history views open as
editor tabs. If you have used Xcode, this layout will feel familiar.

## How Source Control Works

If you are new to Git, these are the ideas the rest of this guide relies on:

- A **commit** is a saved snapshot of your project at a point in time. Your
  project history is a series of commits.
- **Staging** is how you choose what goes into the next commit. Changes start
  *unstaged*; you *stage* the ones you want, then commit them. This lets you
  commit some changes while leaving others for later.
- A **remote** is a copy of your repository hosted elsewhere, such as on GitHub
  or GitLab. You **push** commits to a remote to back them up or share them, and
  **pull** to bring down other people's commits.

Until you push to a remote, your commits live only on this Mac.

## The Everyday Workflow

Setup — installing Git, creating or cloning the repository, adding an account —
is something you do once. Day to day, source control settles into a short,
repeating loop.

@Image(source: "typical-workflow.png",
       alt: "A flowchart of the everyday Xogot source control loop: start, pull latest changes, edit the project, review what changed, stage the changes, write a commit message, commit, and if there is more work loop back to editing, otherwise push to the remote.")

1. **Pull first.** If you collaborate or work across machines, start with
   Integrate > Pull so your project includes everyone else's latest commits
   before you add your own. On a solo project with no remote, you can skip this.
2. **Work in Xogot.** Edit scenes, scripts, and assets as usual. As you go,
   status badges in the file pad show you what you have changed.
3. **Review what changed.** Open the Changes tab and read the diffs before you
   commit. This is your chance to catch a stray edit or a new file you did not
   mean to include.
4. **Stage what belongs together.** Pick the changes that make up one logical
   unit of work. You do not have to commit everything at once — staging lets you
   group related changes and leave the rest for a later commit.
5. **Commit with a message.** Write a short description of *why* the change was
   made. Each commit is a point you can return to, so small, focused commits are
   easier to understand later than one large one.
6. **Repeat as you work.** Steps 2–5 are the inner loop of a work session: edit,
   review, stage, commit, as many times as you like.
7. **Push when you are ready.** Run Integrate > Push to send your commits to the
   remote. Until you do, your work exists only on this Mac. Pushing backs it up
   and shares it with collaborators.

A good rule of thumb: **commit often, push when you reach a stopping point.**
Commits are cheap and local; pushing is how you publish.

The rest of this guide covers each of these steps, and the less frequent tasks
around them, in detail.

## Before You Start

Xogot's built-in Git support is available in Xogot for Mac. On iPad and iPhone,
use the external workflows described in <doc:Working-with-Source-Control>.

### Make Sure Git Is Installed

Xogot needs a working `git` command installed on your system.  It is commonly
installed with Xcode or the Xcode Command Line Tools. If Git is not available,
source control commands show a Git inactive message.

If you do not have Git yet, install the Xcode Command Line Tools by running this
in Terminal:

```sh
xcode-select --install
```

Once a usable Git command is available, the source control commands become
active.

### Set Your Git Identity

Every commit records who made it, so set your Git identity before you make your
first commit:

1. Open Xogot Settings.
2. Select Source Control.
3. In Committer Identity, enter your name and email address.
4. Click Save Identity.

These identity settings are stored in your global Git configuration and apply to
all repositories used by the current macOS user, so you normally only do this
once.

## Opening the Source Control Navigator

@Image(source: "SourceControl-RepositoriesExpanded.png", alt: "The repositories tab show tags, branches, stashes and remotes")

Open the Source Control navigator in any of these ways:

- Click the Git icon in the left sidebar switcher.
- Choose View > Show Source Control Navigator.
- Press Command-2.

The navigator has two tabs:

- Changes: shows uncommitted changes across the open repository, including any
  nested Git repositories Xogot finds inside it.
- Repositories: shows branches, tags, stashes, and remotes.

Use the filter field at the bottom of the navigator to narrow the visible
changes or repository items.

## Adding Git to an Existing Xogot Project

@Image(source: "SourceControl-GitMissing.png", alt: "The source navigator appears on the left side")

If you created a project without Git, you can initialize source control from
inside Xogot.

1. Open the project in Xogot for Mac.
2. Open the Source Control navigator.
3. If the navigator says the project is not a Git repository, click Create Git
   Repository.

You can also choose Integrate > New Git Repository.

Xogot initializes Git in the project folder. This is equivalent to running
`git init` at the root of the project. Xogot also adds a starter `.gitignore`
file suited to Godot projects, so generated files such as the `.godot/` cache
folder stay out of source control automatically. After initialization, the
project appears in the Source Control navigator and new or changed files appear
in the Changes tab.

### Make the First Commit

@Image(source: "SourceControl-FirstInit.png", alt: "After you first create")

After creating the repository:

1. Open the Changes tab.
2. Review the files that Xogot lists under Uncommitted Changes.
3. Stage the files you want in the first commit.
   - To stage everything, choose Integrate > Stage All Changes.
   - To stage individual files, Control-click files in the Changes tab and
     choose Stage Changes in File(s).
   - To stage new files from the file pad, Control-click them and use Source
     Control > Add. (Adding an untracked file and staging a modified file are the
     same underlying Git step; Xogot labels them separately to match how Git
     names them.)
4. Open the Commit Composer by clicking a changed file in the Changes
   tab. In Xogot, clicking a changed file is how you open the commit
   view — it does not just open the file for editing.
5. Enter a commit message, such as `Initial commit`.
6. Click Commit.

If the Commit button is disabled, make sure you have entered a commit message
and that at least one file is staged.

Your first commit is now saved locally. It exists only on this Mac until you
publish the project to a remote, which is described next.

## Publishing a New Repository

@Image(source: "SourceControl-Settings.png", alt: "Settings page")

After initializing and committing a local repository, you can push it to a
hosting service such as GitHub or GitLab.

### Add a Source Control Account

There are two ways of adding accounts for Git hosting service providers,
for providers that support it, you can do Browser based sign-in.  This option
is the most convenient, but certain organizations do not allow users to log
with third party clients to GitHub, in those cases you need to create a
Personal Access Token (PAT) a password-like string that authorizes Git access to your account.

GitHub supports both Browser-based sign-in, as well as PAT-based access, for GitLab, 
we only support PAT-based logins.

These are only necessary to push code, and not to fetch.

**Create a token on GitHub:**

1. Sign in to GitHub and go to Settings > Developer settings > Personal access
   tokens.
2. For a classic token, choose Generate new token (classic) and enable the
   `repo` scope, plus `read:user` so Xogot can read your account details. For a
   fine-grained token, grant read and write access to Contents for the
   repositories you want Xogot to reach.
3. Generate the token and copy it. GitHub shows the value only once.

**Create a token on GitLab:**

1. Sign in to GitLab and go to Preferences > Access Tokens.
2. Enable the `api` and `write_repository` scopes.
3. Create the token and copy it.

**Add the token to Xogot:**

1. Open Xogot Settings.
2. Select Source Control.
3. Click Add Account.
4. Choose GitHub, GitLab, or GitLab Self-Hosted.
5. Enter the host if you are using a self-hosted GitLab server.
6. Optionally enter a display name and username.
7. Paste the personal access token you created.
8. Click Add.

Xogot stores source control tokens in the macOS Keychain. If you add multiple
accounts for the same host, choose the default account for that host from the
account detail view. The default account is used when Git needs credentials for
that host.

### Create a Remote Repository from Xogot

@Image(source: "SourceControl-NewRemote.png", alt: "New Remote Form")

Use this flow when the project is local and the hosted repository does not exist
yet.

1. Open the Source Control navigator.
2. Select the Repositories tab.
3. Expand your repository.
4. Control-click Remotes.
5. Choose New Remote.
6. Choose the account to use.
7. Enter the repository owner, organization, or group if needed.
8. Enter the repository name.
9. Optionally enter a description.
10. Choose Private or Public.
11. Enter the local remote name. `origin` is the usual choice.
12. Click Create.

Xogot creates the repository on the hosting service and adds it as a local Git
remote. After the remote is added, push your current branch:

1. Choose Integrate > Push.
2. The first push links your local branch to the remote (its *upstream*), so
   later pushes and pulls know where to go. Xogot sets this up automatically.

### Add an Existing Remote

@Image(source: "SourceControl-AddExistingRemote.png", alt: "Adding an existing remote")

Use this flow if you already created the repository on GitHub, GitLab, or
another Git hosting service.

1. Copy the repository clone URL from the hosting service.
2. Open the Source Control navigator.
3. Select the Repositories tab.
4. Expand your repository.
5. Control-click Remotes.
6. Choose Add Existing Remote.
7. Enter a remote name, usually `origin`.
8. Paste the remote URL.
9. Click Add.
10. Choose Integrate > Push.

After the first push, use Integrate > Fetch, Integrate > Pull, and Integrate >
Push to sync with the remote.

## Cloning an Existing Repository

@Image(source: "SourceControl-CloneRepository.png", alt: "Clone Repository Form")

Use cloning when the project already exists in a Git repository.

1. Choose Integrate > Clone Repository.
2. Enter the repository URL.
3. Choose the destination folder.
4. Confirm or edit the folder name.
5. Optionally enter a branch name.
6. Click Clone.

When cloning finishes, Xogot reveals the cloned folder in Finder. Open the
project through Xogot's normal project-open flow.

## Understanding File Status

Xogot shows Git status in the file pad and the Source Control navigator. 

In the file pad, you will see single-letter indicators next to the file indicating their status.

@Image(source: "SourceControl-FileList.png", alt: "The File Pad shows letters indicating relevant source code control operations")

On the Source Code Navigator only the files that have a flag are displayed:

@Image(source: "SourceControl-ChangesPad.png", alt: "View from the changes pad")

These
indicators are how you see, at a glance, what Git is doing with each file:
which files are already under version control, which ones you have changed since
your last commit, and which new files are not being tracked yet. Reading them
before you commit is the easiest way to make sure a commit contains exactly what
you intend — and nothing you forgot.

The file pad shows compact status badges on changed files:

| Badge | Meaning | What it tells you |
| --- | --- | --- |
| A | Added | A new file you have staged; it will be included in the next commit. |
| M | Modified | A tracked file you have edited since the last commit. |
| D | Deleted | A tracked file you have removed. |
| R | Renamed | A tracked file you have moved or renamed. |
| ? | Untracked | A new file Git is not tracking yet. It will *not* be committed until you add it. |
| ! | Conflicted | A file with merge conflicts you need to resolve before continuing. |

A file with no badge is tracked and unchanged — it already matches your last
commit, so there is nothing to do with it.

The two `?` and `M` badges are the ones to watch most often. An untracked (`?`)
file is easy to overlook: a new scene, script, or asset stays out of every
commit until you add it, so if a teammate later reports a missing file, an
untracked badge you skipped is a common cause. A modified (`M`) badge is your
reminder that a file has unsaved history — edits that exist on disk but are not
yet captured in a commit.

The Changes tab collects everything with a badge in one place, grouped by
repository and folder, so it doubles as your pre-commit checklist: if a file is
listed there, it has changes waiting to be committed. When there are no
uncommitted changes, the Changes tab reports that there is nothing to commit —
your working copy matches the last commit exactly.

Control-click a changed file in the Changes tab to:

- Show it in Finder.
- Reveal it in the file pad.
- Open it in Xogot.
- Stage or unstage changes.
- Discard tracked changes.
- Add untracked files.
- Move untracked files to Trash.
- Mark conflicted files as resolved.

## Staging and Reviewing Changes

@Image(source: "SourceControl-Staged.png", alt: "Staged changes")

Git separates changes into staged and unstaged work. Staged changes are included
in the next commit. Unstaged changes remain in your working tree.

You can stage and unstage from several places:

- Integrate menu: stage or unstage all changes, or operate on selected files.
- Changes tab: Control-click changed files.
- File pad: Control-click project files and use the Source Control submenu.
- Commit Composer: use Stage All, Unstage All, and per-hunk controls.

The Commit Composer displays unified diffs for changed text files. Additions and
deletions are color-coded, with line numbers in the gutter. For supported text
diffs, use Stage Hunk or Unstage Hunk to include only part of a file in the next
commit.

Binary files cannot be shown as text diffs. Xogot still shows their status so
they can be staged, committed, or discarded as whole files.

## Committing Changes

@Image(source: "SourceControl-Commit.png", alt: "The commit window")

As noted earlier, you open the Commit Composer by clicking a changed file
in the Changes tab.

The Commit Composer shows:

- The committer name and email from Git configuration.
- A commit message editor.
- A Signed-off-by option.
- An Amend option when a previous commit is available.
- A filter for All, Unstaged, and Staged changes.
- Per-file and per-hunk review controls.

To create a commit:

1. Stage the changes you want to include.
2. Enter a commit message.
3. Click Commit.

To commit and immediately push, open the Commit button menu and choose Commit
and Push. When Amend is enabled, the same control amends the previous commit or
amends and pushes.

### Signed-off-by

Turning on Signed-off-by adds a `Signed-off-by: Your Name <you@example.com>`
line to the end of the commit message, using your committer identity. This is a
lightweight statement that you are entitled to submit the change, most commonly
under the Developer Certificate of Origin (DCO).

You usually only need it when a project asks for it — many open source projects,
including the Godot engine, require every commit to be signed off. If you are
working on your own project, you can leave this off. When a project does require
it and a commit is missing the line, its automated checks will reject the commit
until you add it, so it is easier to enable Signed-off-by before you commit than
to fix it afterward.

### Commit vs. Amend

A normal **Commit** adds a new snapshot to the project history, on top of
whatever came before. This is what you do the vast majority of the time: each
commit is a distinct point you can return to.

**Amend** replaces your most recent commit instead of adding a new one. Enable
the Amend option and the Commit Composer loads the previous commit's message and
changes so you can adjust them. Use it to:

- Fix a typo or reword the last commit message.
- Add a file or change you forgot to include in the last commit.

Amend rewrites history rather than appending to it, so the amended commit gets a
new identity that replaces the old one. That has one important consequence: only
amend commits you have **not** pushed yet. Once a commit is on a remote and
others may have pulled it, amending it forces the local and remote histories to
disagree, and the next ordinary push is rejected. Reconciling that requires a
force push, which Xogot does not surface — so treat Amend as a tool for tidying
up local, not-yet-published work.


## Syncing with Remotes

@Image(source: "SourceControl-Integrate.png", alt: "Integate menu")

Use the Integrate menu for repository-wide sync commands:

| Command | What it does |
| --- | --- |
| Fetch | Downloads remote updates without merging them. |
| Pull | Fetches and integrates remote changes into the current branch. |
| Push | Uploads local commits. If needed, Xogot sets the upstream branch. |
| Refresh Status | Reloads Git status from disk. |
| Undo Last Commit | Removes the last commit while keeping its changes staged. |

If your current branch has a hosted remote, Create Pull Request opens the
hosting provider's pull request or merge request page in your browser when Xogot
can build the URL. This is a handoff to the provider website; Xogot does not
create the pull request inside the app.

## Accounts and Credentials

The Source Control settings page manages accounts and global Git preferences.

Use it to:

- Add GitHub, GitLab, or self-hosted GitLab accounts.
- Inspect and remove accounts.
- Choose the default account for a host.
- Set the global committer name and email.
- Set the default branch name used for new repositories.
- Set the size threshold for the large binary file warning, or turn the warning
  off. See [The Large Binary File Warning](#The-Large-Binary-File-Warning).

## Working with Remotes

@Image(source: "SourceControl-RepositoriesExpanded.png", alt: "The repositories tab show tags, branches, stashes and remotes")

The Repositories tab contains a Remotes group for each repository.

Control-click Remotes to:

- Create a new remote repository on a supported hosting service.
- Add an existing remote by name and URL.

Control-click a remote to:

- Show the repository in a browser when Xogot recognizes the remote URL.
- Delete the local remote.

Xogot can recognize common HTTPS, SSH, and `git@host:owner/repo.git` remote URL
forms for GitHub, GitLab, Bitbucket, SourceHut, and Azure DevOps. Local path
remotes and unrecognized URL forms may not support browser actions.

## Branches, Tags, and History

@Image(source: "SourceControl-CommitList.png", alt: "Selecting a branch shows the history of commits and the changes")

The Repositories tab organizes repository data into Branches, Tags, Stashes, and
Remotes.

Control-click a branch, remote branch, or tag to:

- Switch to a branch.
- Create a new branch from the selected reference.
- Rename a local branch.
- Create a tag at the selected reference.
- Merge a branch into the current branch.

Selecting a branch opens a branch history tab in the editor. The history view
shows commits on the branch and the selected commit's details and diffs.

Use the history scope picker to show:

- All commits.
- Commits from the last 24 hours.
- Commits from the last 7 days.
- Commits from the last 30 days.

Use the filter field to search by author, email, subject, body, or commit hash.

## Stashes

<!-- Screenshot needed: Stash editor tab with hierarchy/flat control and side-by-side diff. -->

Use stashes to temporarily save uncommitted work.

Choose Integrate > Stash Changes to create a stash. Xogot includes untracked
files when it creates a stash.

In the Repositories tab, select a stash to open it in an editor tab. The stash
view shows the files in the stash and a side-by-side diff for the selected file.
You can switch the file list between hierarchy and flat layouts.

Control-click a stash to:

- Apply the stashed changes.
- Export the stash as a patch file.
- Delete the stash.

## Merge and Rebase States

<!-- Screenshot needed: Changes tab operation banner for an in-progress merge or rebase with conflicts. -->

When a merge, rebase, cherry-pick, revert, or bisect operation is in progress,
Xogot shows an operation banner at the top of the Changes tab.

The banner shows the current operation and offers:

- Continue: completes the current merge or continues the current rebase when no
  conflicts remain.
- Abort: cancels the current merge or rebase and restores the prior state.

Conflicted files show the conflict status.

@Image(source: "SourceControl-ConflictDetected.png", alt: "Conflict detection")

Resolve the conflicts by either activating the conflict resolution tool
with "Resolve Conflict", or edit the hands manually with your favorite tool
and  then mark them resolved from the Changes tab or the file pad Source
Control submenu.  

The Continue operation is disabled while conflicts remain.

## Conflict Resolution Tool

When Xogot detects that there has been a conflict because both your local copy and
the copy that is being merged edited the same region of the file, you will get a
warning icon indicating the conflicts and a banner guiding you to the next step.

Choose "Resolve Conflicts" when you are ready to address those, and it will open
the conflict resolution tool.   There, you will be presented with a navigation UI 
that you can use to navigate to the different conflict zones.   On the left panel
you have your current code, and on the right panel you have the incoming code.

@Image(source: "SourceControl-ConflictResolution.png", alt: "Conflict resolution")

There are toggles that can help you choose which side of the changes you want, the
current code, the incoming or accept both.   

If neither is appropriate, you can choose the "Edit" button:

@Image(source: "SourceControl-ConflictEditText.png", alt: "Conflict resolution")

Then manually adjust and then use "Accept Edits".

You can also bulk-resolve all issues by using the context menu that lets you accept all changes.

Once you have resolved all the changes, you can "Mark as Resolved" and move on to the next
conflict.

## Git LFS

Game projects are full of large binary files — textures, audio, 3D models,
`.blend` source files, video. Git was designed for text, and storing big
binaries directly in a repository makes it slow to clone and causes it to grow
without bound, because every version of every asset is kept forever.

**Git Large File Storage (LFS)** solves this. Instead of putting a large file's
contents in the repository, Git stores a small text *pointer*, and the real
bytes live in a separate LFS store on your hosting service. Your history stays
small and fast, and the large assets are downloaded only when you actually need
them.

Xogot has full, built-in Git LFS support on Mac. It is woven throughout the Git
feature — you do not have to open a separate tool to benefit from it — and a
dedicated management sheet is available under Integrate > Git LFS… when you want
fine control.

### Installing Git LFS

Git LFS is a separate program (`git-lfs`) that Xogot drives on your behalf. It is
**not** included with the Xcode Command Line Tools, so you usually install it
with [Homebrew](https://brew.sh):

```sh
brew install git-lfs
```

If Xogot needs Git LFS and cannot find it, it shows a short guidance sheet with a
copyable `brew install git-lfs` command, a link to git-lfs.com, and a Check Again
button that rechecks once you have installed it. Everything else in this section
becomes available once `git-lfs` is present.

<!-- Screenshot needed: Git LFS install-guidance sheet with the copyable brew command, the git-lfs.com link, and Check Again. -->

### How Xogot Uses LFS Automatically

You do not have to think about LFS most of the time — Xogot surfaces it where it
matters:

- **When you open a repository that uses LFS,** Xogot silently installs the
  repository's LFS hooks. If `git-lfs` is missing, or if some large files are
  present only as pointers (not yet downloaded), it shows a notice banner at the
  top of the Changes tab. The banner offers a Download action (with progress and
  a cancel control) or install guidance. Dismissed banners stay dismissed for
  that repository and reappear on their own if the situation changes.
- **In the file pad,** files routed through LFS carry an `LFS` badge. The badge
  is dimmed when the file is still just a pointer whose contents have not been
  downloaded. Locked files show a lock glyph — subdued for locks you hold, and
  orange for locks held by someone else, with the owner's name in the tooltip.
- **When you commit,** a safety net catches large binaries that are not yet in
  LFS. See [The Large Binary File Warning](#The-Large-Binary-File-Warning)
  below.

<!-- Screenshot needed: Changes tab with the LFS notice banner showing the Download action and progress. -->
@Image(source: "SourceControl-LFS-badges.png", alt: "File pad rows showing the LFS badge (one dimmed pointer file) and a lock glyph.")

### Tracking Files with LFS

Telling Git LFS to manage a file is called *tracking* it. Control-click one or
more files in the file pad and use the Source Control submenu:

- **Track in Git LFS > This File** tracks exactly the selected file.
- **Track in Git LFS > All Files Matching `*.ext`** tracks every file with that
  extension — usually what you want, so that all your `.png` textures or `.wav`
  sounds are handled the same way.

Tracking records a rule in the repository's `.gitattributes` file, converts the
matching files to LFS, and stages `.gitattributes` so the rule is committed and
shared with everyone on the project.

To stop managing a file with LFS, use **Untrack from Git LFS**. (Untrack is
offered for files named individually; broad wildcard rules are managed from the
Git LFS sheet, described next.)

> Tip: Track your asset types **before** you commit them for the first time. If
> large files were already committed normally, tracking them now changes future
> commits but does not rewrite the history that already contains them.

@Image(source: "SourceControl-LFS-TrackThis.png", alt: "File pad Source Control submenu open, showing Track in Git LFS with the This File / All Files Matching submenu.")

### The Git LFS Sheet

For a full view of LFS in a repository, choose Integrate > Git LFS…. The sheet
requires an open Git repository and has three tabs.

@Image(source: "SourceControl-LFS-Settings.png", alt: "Git LFS sheet, Overview tab, showing install state and version, tracked patterns with match counts, the Add Godot Asset Patterns preset, and the Maintenance actions.")

**Overview** shows whether Git LFS is installed and its version, the
repository's hook state, and the LFS endpoint (the server the objects live on).
Below that:

- **Tracked Patterns** lists the rules from `.gitattributes`, each with a count
  of how many files it currently matches. You can add a pattern — with a live
  preview of what it would match — or remove one, with an explanation of what
  untracking means.
- **Add Godot Asset Patterns…** offers a ready-made checklist of the file types
  common in Godot projects (images, audio, models, and so on), each showing how
  many files it matches in your project, so you can enable sensible LFS coverage
  in one step.
- **Maintenance** collects housekeeping actions: **Download All Objects**
  (with progress and cancel), **Verify Local Files** (checks that your local LFS
  files are intact), and **Prune Old Objects…** (reclaims disk space; it shows a
  dry-run preview of how many objects and how much space would be freed before
  anything is deleted). The current local LFS cache size is shown here too.

**Files** is a sortable, filterable table of every file LFS manages, with its
size and whether it is Downloaded or Not Downloaded. Pointer-only files have a
per-row Download button, and a footer totals the set.   It also renders the status
as to who holds the lock (if that is the case), and buttons to lock/unlock a
file quickly.

**Locks** lists the files currently locked (path, owner — with your own locks
marked — and how long ago the lock was taken). You can Refresh the list, lock a
file by path, unlock your own locks, or Force Unlock… someone else's after a
confirmation. If the hosting service does not support LFS file locking, the tab
explains that in one line.

@Image(source: "SounceControl-LFS-Files.png", alt: "Git LFS sheet, Files tab, showing the table with Downloaded / Not Downloaded status and a per-row Download button.")

@Image(source: "SounceControl-LFS-Locks.png", alt: "Git LFS sheet, Locks tab, showing locked files with owners and the Refresh, Lock, and Force Unlock controls.")

### Locking Files

Binary assets cannot be merged the way text can: if two people edit the same
`.png` or `.blend` at once, one person's work has to be thrown away. **File
locking** prevents this. Locking a file tells everyone else on the project that
you are editing it, so they hold off until you unlock it.

Lock and unlock files from the file pad's Source Control submenu (**Lock File**,
**Unlock File**) or from the Locks tab of the Git LFS sheet. Locks you hold
appear subdued; locks held by others appear in orange with the owner's name.
File locking requires a hosting service that supports the Git LFS locking API.

### Downloading LFS Objects

After cloning or pulling, large files may be present only as *pointers* — Xogot
shows them with a dimmed LFS badge and lists them as Not Downloaded. Bring the
real contents down in whichever way suits you:

- Click Download in the Changes-tab banner to fetch everything at once.
- Use Download All Objects in the Git LFS sheet's Overview tab.
- Download individual files from the per-row button in the sheet's Files tab.

### The Large Binary File Warning

To keep large files from being committed the ordinary way by accident, Xogot
watches your commits. If you commit a staged binary file at or above the size
threshold (10 MB by default) that is **not** routed through LFS, Xogot pauses
the commit and offers:

- **Track in LFS and Commit** — tracks the file, converts it to LFS, stages the
  updated `.gitattributes`, and completes the commit. This is usually the right
  choice.
- **Commit Anyway** — commits the file normally this one time.
- **Cancel** — stops so you can decide.

If `git-lfs` is not installed, the track option becomes **How to Install…** and
opens the guidance sheet instead.

You can change the size threshold, or turn the warning off entirely, in Xogot
Settings > Source Control.

@Image(source: "SourceControl-LFS-LargeFileWarning.png", alt: "Commit large-binary warning dialog showing Track in LFS and Commit, Commit Anyway, and Cancel.")

## Reference

### Entry Points

| Action | Location |
| --- | --- |
| Open Source Control navigator | Sidebar Git icon, View > Show Source Control Navigator, or Command-2 |
| Create Git repository | Source Control navigator or Integrate > New Git Repository |
| Clone repository | Integrate > Clone Repository |
| Open Git LFS sheet | Integrate > Git LFS... |
| Add accounts and global settings | Xogot Settings > Source Control |

### Integrate Menu

| Command | Notes |
| --- | --- |
| New Git Repository | Initializes Git in the open project folder. |
| Stage All Changes | Stages all current changes. |
| Stage Changes in Selected Files | Uses the current file pad selection. |
| Unstage All Changes | Removes all staged changes from the index. |
| Unstage Changes in Selected Files | Uses the current file pad selection. |
| Mark Selected Files as Resolved | Available for conflicted selected files. |
| Add Selected Files | Available for selected untracked files. |
| Create Pull Request | Opens the provider web flow when available. |
| Discard All Changes | Reverts discardable tracked changes. |
| Fetch | Fetches remote updates. |
| Pull | Fetches and integrates remote updates. |
| Push | Pushes the current branch. |
| Stash Changes | Saves uncommitted work, including untracked files. |
| Undo Last Commit | Removes the last commit and keeps its changes staged. |
| Refresh Status | Reloads Git state. |

### Changes Tab Context Menu

| Command | Applies to |
| --- | --- |
| Show in Finder | Files and folders with a filesystem location. |
| Reveal in File Pad | Changed files. |
| Open | Changed files. |
| Stage Changes in File(s) | Tracked unstaged changes. |
| Unstage Changes | Staged changes. |
| Discard Changes in File(s) | Tracked unstaged changes. |
| Add | Untracked files. |
| Move to Trash | Untracked files. |
| Mark as Resolved | Conflicted files. |

### File Pad Source Control Submenu

| Command | Applies to |
| --- | --- |
| Stage Changes | Selected tracked files with unstaged changes. |
| Unstage Changes | Selected files with staged changes. |
| Discard Changes | Selected tracked files with unstaged changes. |
| Add | Selected untracked files. |
| Mark as Resolved | Selected conflicted files. |
| Track in Git LFS | Selected files not yet managed by LFS (This File or All Files Matching `*.ext`). |
| Untrack from Git LFS | Selected files tracked individually by LFS. |
| Lock File | Selected LFS files (locking-capable remote). |
| Unlock File | Selected files you have locked. |

### Repositories Tab Context Menus

| Item | Commands |
| --- | --- |
| Branch | Switch, create branch from reference, rename local branch, tag, merge into current branch. |
| Remote branch | Create branch from reference, tag, merge into current branch. |
| Tag | Create branch from reference, tag. |
| Remotes group | New Remote, Add Existing Remote. |
| Remote | Show in hosting provider, delete remote. |
| Stash | Apply, export as patch file, delete. |

## Known Limitations

Xogot for Mac source control is designed for common Git workflows. Some advanced
or provider-specific workflows still require Terminal or a dedicated Git client.

- The built-in Git UI is Mac-only. iPad and iPhone workflows still use external
  tools such as Working Copy or iSH.
- Hosted repository creation is limited to account types exposed by Xogot's
  account flow.
- Git LFS features require the separate `git-lfs` program, which is not part of
  the Xcode Command Line Tools and is usually installed with Homebrew.
- Xogot does not rewrite history to move already-committed files into LFS
  (`git lfs migrate`); track asset types before committing them.
- File locks load when you open the Locks tab or perform a lock action; lock
  badges appear after that lock data has been fetched, not through background
  polling.
