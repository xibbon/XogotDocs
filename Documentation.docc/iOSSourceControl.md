# Source Control in Xogot for iPad and iPhone

Use Git in Xogot on iPad and iPhone to clone, commit, push, pull, and manage
branches, without an external app.

## Overview

Xogot for iPad and iPhone has built-in Git support. You can clone a
repository, review your changes, stage files or hunks, commit, push, pull, and
manage branches, tags, stashes, and remotes. Git LFS and SSH keys are also
built in. You do not install other software.

The commands are in these locations:

- The **Source Control navigator** in the sidebar. Use it to review changes and
  to see branches, tags, stashes, and remotes.
- The **Integrate menu**. This is the ⋯ button at the top of the Source Control
  navigator. It has the repository commands, for example Pull, Push, and Stage
  All Changes.
- **Context menus**. Touch and hold an item in the navigator to see the
  commands for that item.
- **Status badges** next to the files in the file pad.

The commit composer, branch history, and stashes open as editor tabs.

The Git features are almost the same as in Xogot for Mac. If you use Xogot on a
Mac too, read <doc:MacSourceControl>. The section [Differences from Xogot for
Mac](#Differences-from-Xogot-for-Mac) gives the differences.

## How Source Control Works

If you do not know Git, these are the important words:

- A **commit** is a snapshot of your project at one point in time. The history
  of your project is a series of commits.
- **Staging** selects the changes for the next commit. Changes start as
  *unstaged*. You *stage* the changes that you want, then you commit them. Thus
  you can commit some changes and keep other changes for a different commit.
- A **remote** is a copy of your repository on a different computer, for
  example on GitHub or GitLab. You **push** your commits to the remote to keep
  a backup or to share them. You **pull** to get the commits of other people.

Until you push to a remote, your commits are only on this device.

## The Everyday Workflow

You do the setup one time: you clone or create the repository, and you add an
account. After the setup, you do these steps again and again:

@Image(source: "typical-workflow.png",
       alt: "A flowchart of the everyday Xogot source control loop: start, pull latest changes, edit the project, review what changed, stage the changes, write a commit message, commit, and if there is more work loop back to editing, otherwise push to the remote.")

1. **Pull first.** If you work with other people, or on more than one device,
   tap ⋯ > Pull at the start. Then your project has the latest commits before
   you add your commits. If you work alone and have no remote, do not do this
   step.
2. **Work in Xogot.** Edit your scenes, scripts, and assets. The status badges
   in the file pad show the files that you changed.
3. **Review the changes.** Open the Changes tab and read the diffs before you
   commit. Look for changes that you did not want, and for new files that you
   forgot.
4. **Stage the changes that go together.** Select the changes for one task.
   You do not have to commit all your changes at one time.
5. **Commit with a message.** Write a short message that tells *why* you made
   the change. Small commits are easier to understand than one large commit.
6. **Do steps 2 to 5 again** while you work.
7. **Push when you are ready.** Tap ⋯ > Push to send your commits to the
   remote. Until you push, your work is only on this device.

**Commit frequently, and push when you stop work.** A commit is fast and
local. A push publishes your work.

## Before You Start

### Set Your Git Identity

Each commit records the name and email of the person who made it. Set your
identity before your first commit:

1. In an open project, tap ⋯ at the top right of the editor, then tap
   **Settings**.
2. Tap **Xogot Settings**, then tap **Source Control**.
3. In **Committer Identity**, type your name and email address.
4. Tap **Save Identity**.

Xogot uses this identity for all repositories on this device. If there is no
identity, the commit composer shows **No committer identity** and a **Set…**
button. If you commit and there is no identity, Xogot asks for your name and
email. Then it saves them and makes the commit.

@Image(source: "iOSSourceControl-iPad-settings-source-control.png",
       alt: "Xogot Settings on iPad, Source Control page, with the Accounts section, the SSH Keys and Known Hosts link, and the Committer Identity fields.")

## Opening the Source Control Navigator

The Source Control navigator is a page of the sidebar.

1. Show the sidebar. On iPhone, tap the sidebar button at the top left.
2. In the row of buttons at the bottom of the sidebar, tap the Source Control
   button. It is the fifth button.

The navigator has two tabs:

- **Changes** shows the uncommitted changes of the open repository.
- **Repositories** shows the branches, tags, stashes, and remotes.

Use the Search field at the bottom of the navigator to filter the items.

@TabNavigator {
    @Tab("iPad") {
        @Image(source: "iOSSourceControl-iPad-changes-tab.png",
               alt: "The Source Control navigator on iPad, Changes tab, with the uncommitted changes of the SpaceRocks project and their status badges.")
    }
    @Tab("iPhone") {
        @Image(source: "iOSSourceControl-iPhone-changes-tab.png",
               alt: "The Source Control navigator on iPhone, Changes tab, in the sidebar over the editor.")
    }
}

### The Integrate Menu

On Mac, the repository commands are in the Integrate menu of the menu bar. On
iPad and iPhone, the same commands are in the ⋯ button at the top right of the
Source Control navigator.

@TabNavigator {
    @Tab("iPad") {
        @Image(source: "iOSSourceControl-iPad-actions-menu.png",
               alt: "The Integrate menu open on iPad, with Fetch Changes, Pull, Push, Stage All Changes, Unstage All Changes, Selected Files, More, Git LFS, and Clone Repository.")
    }
    @Tab("iPhone") {
        @Image(source: "iOSSourceControl-iPhone-actions-menu.png",
               alt: "The Integrate menu open on iPhone.")
    }
}

The **More** submenu has the commands that you use less frequently:

@Image(source: "iOSSourceControl-iPad-actions-menu-more.png",
       alt: "The More submenu of the Integrate menu, with Create Pull Request, Discard All Changes, Stash Changes, Undo Last Commit, Update All Submodules, Refresh Status, and New Git Repository.")

[The Integrate Menu reference](#Integrate-Menu-Reference) gives all the
commands.

## Cloning a Repository

Clone a repository when the project is already in Git, for example on GitHub.

1. In the project list, tap the Download button (the arrow in a circle).
2. Tap **Clone Repository…**.
3. In **Repository URL**, type or paste the URL of the repository. You can use
   an HTTPS URL (`https://github.com/owner/repo.git`) or an SSH URL
   (`git@github.com:owner/repo.git`).
4. Xogot fills in the folder name from the URL. You can change it.
5. Optionally, type a branch name.
6. Tap **Clone**.

You can also clone from an open project: tap ⋯ > **Clone Repository…** in the
Source Control navigator.

@TabNavigator {
    @Tab("iPad") {
        @Image(source: "iOSSourceControl-iPad-projectlist-clone.png",
               alt: "The project list on iPad with the Download menu open, showing Clone Repository and Download from GitHub.")
    }
    @Tab("iPhone") {
        @Image(source: "iOSSourceControl-iPhone-projectlist-clone.png",
               alt: "The project list on iPhone with the Download menu open.")
    }
}

@TabNavigator {
    @Tab("iPad") {
        @Image(source: "iOSSourceControl-iPad-clone-dialog.png",
               alt: "The Clone Repository sheet on iPad, with the repository URL, the folder name, and the optional branch.")
    }
    @Tab("iPhone") {
        @Image(source: "iOSSourceControl-iPhone-clone-dialog.png",
               alt: "The Clone Repository sheet on iPhone.")
    }
}

Xogot clones into the Xogot folder of your device (On My iPad > Xogot, or On
My iPhone > Xogot). The project list shows the new project. When you clone
from the project list, Xogot opens the project when the clone is complete. If
the repository has more than one Godot project, Xogot asks which project to
open.

Some more information:

- If a folder with the same name exists, Xogot adds a number to the name. The
  sheet tells you the name before you clone.
- If you have external storage, a **Location** row lets you select a different
  folder.
- Do not clone into iCloud Drive. iCloud can change the files of a repository
  while it syncs them, and this can damage the repository. Xogot shows a
  warning if you select a folder in iCloud Drive.
- For a private repository, Xogot uses your account for that server. If there
  is no account, Xogot asks for your user name and password. See
  [Signing In When Xogot Asks](#Signing-In-When-Xogot-Asks).
- Keep Xogot open until the clone is complete. If Xogot is in the background
  for too long, iOS stops the clone. Then clone again.

## Adding Git to an Existing Project

If your project is not a Git repository, you can create a repository from
Xogot.

1. Open the project.
2. Open the Source Control navigator. It shows **Not a Git Repository**.
3. Tap **Create Git Repository**.

You can also tap ⋯ > More > **New Git Repository**.

Xogot starts Git in the project folder. This is the same as `git init`. Xogot
also adds a `.gitignore` file for Godot projects. This file keeps generated
files, for example the `.godot/` folder, out of source control. Your files
then show in the Changes tab.

Then make the first commit:

1. Tap ⋯ > **Stage All Changes**.
2. Tap a file in the Changes tab to open the commit composer.
3. Type a commit message, for example `Initial commit`.
4. Tap **Commit**.

To put the new repository on GitHub or a different server, see [Publishing a
New Repository](#Publishing-a-New-Repository).

## Understanding File Status

The file pad shows a badge next to each changed file. Use the badges to see
which files you changed, and which new files Git does not track yet. A badge is
a letter in a square. The square is filled when all the changes of the file
are staged.

@Image(source: "iOSSourceControl-iPad-filepad-badges.png",
       alt: "The file pad on iPad with an M badge next to player.gd, a filled M badge next to the staged README.md, and a question mark badge next to enemy.gd.")

| Badge | Meaning | What it tells you |
| --- | --- | --- |
| A | Added | A new file that you staged. The next commit includes it. |
| M | Modified | A tracked file that you changed after the last commit. |
| D | Deleted | A tracked file that you removed. |
| R | Renamed | A tracked file that you moved or renamed. |
| ? | Untracked | A new file that Git does not track. The next commit does *not* include it until you add it. |
| ⚠︎ | Conflicted | A file with merge conflicts. Resolve them before you continue. |

A file with no badge has no changes after the last commit.

Look carefully for the `?` badge. A new scene, script, or asset is not in a
commit until you add it. If a person on your team cannot find a file, an
untracked file is a frequent cause.

The Changes tab shows all the changed files in one list, with the same
badges. If the Changes tab is empty, there is nothing to commit.

VoiceOver reads the status of each file, for example "Modified, staged".

Touch and hold a changed file in the Changes tab to see its commands:

@Image(source: "iOSSourceControl-iPad-changes-context-menu.png",
       alt: "The context menu of player.gd in the Changes tab, with Reveal in File Pad, Open, Stage Changes in File, Unstage Changes, Discard Changes in red, Add, Delete, Resolve Conflicts, and Mark as Resolved.")

## Committing Changes

To open the commit composer, tap a changed file in the Changes tab. The
composer opens as an editor tab, goes to the diff of that file, and selects it.
If the filter hides the file, the filter changes to **All**. On iPhone, the
sidebar closes so that you can see the composer, and the message and the diffs
scroll together. Thus the diffs can use the full height of the screen.

@TabNavigator {
    @Tab("iPad") {
        @Image(source: "iOSSourceControl-iPad-commit-composer.png",
               alt: "The commit composer on iPad, with the committer name and email, the Amend switch, the Commit button, the commit message, the Signed-off-by switch, the All, Unstaged and Staged filter, Stage All, and the diffs with Stage Hunk and Unstage Hunk buttons.")
    }
    @Tab("iPhone") {
        @Image(source: "iOSSourceControl-iPhone-commit-composer.png",
               alt: "The commit composer on iPhone.")
    }
}

The composer has these items:

- An **Amend Commit** switch. See [Commit and Amend](#Commit-and-Amend).
- The **Commit** button.
- The commit message field.
- An **Add Signed-off-by line** switch.
- A filter: **All**, **Unstaged**, or **Staged**.
- **Stage All**.
- The diff of each changed file. Each hunk has a **Stage Hunk** or **Unstage
  Hunk** button. Tap the status badge of a file to stage or unstage the full
  file.

To make a commit:

1. Stage the changes that you want in the commit.
2. Type a commit message.
3. Tap **Commit**.

If the Commit button is not available, make sure that you typed a message and
that you staged one or more changes.

To commit and push in one step, touch and hold **Commit**, then tap **Commit
and Push**.

@Image(source: "iOSSourceControl-iPad-commit-menu.png",
       alt: "The Commit button menu with Commit and Push.")

### Staging Part of a File

Use **Stage Hunk** to put only one part of a file into the next commit. A hunk
is one area of changed lines. The other hunks of the file stay unstaged.

@Image(source: "iOSSourceControl-iPad-commit-composer-hunks.png",
       alt: "The commit composer scrolled to the player.gd diff, with the Stage Hunk button above the changed line.")

Xogot cannot show the diff of a binary file, for example an image. You can
stage, commit, or discard a binary file as one unit.

### Signed-off-by

The **Add Signed-off-by line** switch adds `Signed-off-by: Your Name
<you@example.com>` to the end of the commit message. Some open source projects,
for example the Godot engine, require this line in each commit. For your own
projects, you usually do not need it.

### Commit and Amend

**Commit** adds a new snapshot to the history. Use it almost all the time.

**Amend** replaces your last commit. Turn on the **Amend Commit** switch to
change the message of the last commit, or to add a change that you forgot.
Then the button changes to **Amend**.

Do not amend a commit that you pushed. The amended commit replaces the old
commit, so the history on your device and the history on the remote are
different. Then a normal push fails, and you must force push. A force push can
remove the commits of other people. Use Amend only for commits that you did
not push.

## Syncing with Remotes

Use these commands in the ⋯ menu:

| Command | What it does |
| --- | --- |
| Fetch Changes | Downloads the changes from the remote. It does not merge them. |
| Pull | Opens the sync sheet. Gets the changes from the remote and merges or rebases them. |
| Push | Opens the sync sheet. Sends your commits to the remote. |
| More > Refresh Status | Reads the Git status from the disk again. |
| More > Undo Last Commit | Removes the last commit. Its changes stay staged. |
| More > Create Pull Request | Opens the pull request page of the hosting service in the browser. |

You can also pull or push one branch: touch and hold the branch in the
Repositories tab, then tap **Pull…** or **Push…**. These commands are available
for the current branch.

The sync sheet is the same as on Mac. Select the remote branch for a pull, or
the remote for a push. For a pull, you can rebase your local changes. For a
push, you can force push and select the tags to push. For more information,
see the sync sheet section of <doc:MacSourceControl>.

When the first push of a branch is complete, Xogot links the local branch to
the remote branch (the *upstream*). Then the next pushes and pulls use that
branch.

## Accounts and Credentials

You need an account to push to a server, and to clone or pull a private
repository. To clone a public repository, you do not need an account.

### Add an Account

1. Open **Settings > Xogot Settings > Source Control**.
2. Tap **Add Account**.
3. Select the service: **GitHub**, **GitLab**, **GitLab (Self-Hosted)**,
   **Codeberg**, **Forgejo or Gitea (Self-Hosted)**, or **Other Git Server**.
4. Sign in.

For GitHub, you can sign in two ways:

- **Sign in with Browser.** Xogot shows a code. Type the code on the GitHub
  page that opens. This is the easiest way.
- **Personal access token.** Some organizations do not let third-party apps
  sign in. Then make a personal access token on GitHub and paste it in
  **Personal Access Token**. The token must have these scopes: `admin:public_key`,
  `repo`, and `user`. Tap **Create a Token on github.com…** to open the GitHub
  page.

For the other services, use a token:

- **GitLab:** a personal access token with the `api` and `write_repository`
  scopes.
- **Codeberg, Forgejo, or Gitea:** an access token with read and write
  permission for repository and user.
- **Other Git Server:** the server URL, your user name, and your password or
  a token. Xogot uses this account for all the URLs that start with the server
  URL.

@Image(source: "iOSSourceControl-iPad-add-account-form.png",
       alt: "The Add Account sheet with GitHub selected, the Name, Username and Personal Access Token fields, and the Sign in with Browser button.")

Xogot keeps your tokens in the Keychain. If you have more than one account for
the same server, open the account and tap **Set as Default for *server***
to select the account that Xogot uses.

Xogot sends credentials only over HTTPS. It never sends them to an `http://`
URL.

### Signing In When Xogot Asks

Sometimes no account applies to a server, or the server refuses the account.
Then Xogot asks for a user name and a password or token:

- **Sign In** uses them until you close Xogot.
- **Sign In and Save** makes an account from them when the server accepts
  them.

Use this for a private server, for example a Gitea server on your network.

## SSH Keys

Use SSH keys for remote URLs such as `git@github.com:owner/repo.git`. HTTPS
remotes use the accounts in the section above.

To open the SSH settings, tap **SSH Keys and Known Hosts** on the Source
Control settings page.

@Image(source: "iOSSourceControl-iPad-ssh-keys.png",
       alt: "The SSH page with the SSH Keys section, the Create Key and Import Private Key buttons, and the Known Hosts list for github.com, gitlab.com, and bitbucket.org.")

### Create a Key

1. Tap **Create Key…**.
2. Optionally, type a name for the key and a host. If you do not type a host,
   Xogot uses the key for all hosts.
3. Select **Keep in the Secure Enclave** to keep the private key in the secure
   hardware of your device. The private key never leaves the device, and each
   use of the key needs Face ID, Touch ID, or your passcode.
4. Tap **Create**.

@Image(source: "iOSSourceControl-iPad-ssh-create-key.png",
       alt: "The Create SSH Key form with the name and host fields and the Keep in the Secure Enclave switch.")

Then add the public key to your account on the server:

1. Touch and hold the key.
2. Tap **Copy Public Key**, then paste it on the SSH keys page of your server.
   If you have an account for the server in Xogot, you can tap **Add to
   *account*** instead.

### Import a Key

Tap **Import Private Key…** and paste an OpenSSH or PEM private key. Xogot
supports Ed25519 and ECDSA keys. If the key has a passphrase, type it. Xogot
does not support RSA keys.

### Known Hosts

Xogot keeps the host keys of the SSH servers that it knows. It already knows
GitHub, GitLab, and Bitbucket.

When you connect to a server for the first time, Xogot shows its fingerprint
and asks **Trust this server?** Compare the fingerprint with the fingerprint
that the server publishes, then tap **Trust**.

If the key of a known server changes, the connection fails. This can show an
attack. Remove the old key from **Known Hosts** only when you know that the
server changed its key.

### SSH Password Login

Some SSH servers accept a password. If no SSH key works and the server accepts
a password, Xogot asks for the password:

- **Sign In** uses the password until you close Xogot.
- **Sign In and Save** keeps the password in the Keychain when the server
  accepts it.

Xogot asks a maximum of three times for each connection. Servers that accept
only keys, for example GitHub, never show this prompt.

The **Saved Passwords** section of the SSH page shows the saved passwords.
Swipe a password to remove it. If the server refuses a saved password, Xogot
removes it.

## Publishing a New Repository

After you make a local repository and commit, you can push it to a server.

### Create a Remote Repository from Xogot

Use this procedure if the repository does not exist on the server yet. You
must have an account for the server (see [Add an
Account](#Add-an-Account)).

1. Open the Repositories tab of the Source Control navigator.
2. Touch and hold **Remotes**.
3. Tap **New Remote…**.
4. Select the account. Type the repository name, and optionally the owner or
   organization and a description.
5. Select **Private** or **Public**.
6. Type the local remote name. Usually this is `origin`.
7. Tap **Create**.
8. Tap ⋯ > **Push** to send your commits.

### Add an Existing Remote

Use this procedure if the repository already exists on the server.

1. Copy the clone URL of the repository from the server.
2. In the Repositories tab, touch and hold **Remotes**.
3. Tap **Add Existing Remote…**.
4. Type the remote name, usually `origin`, and paste the URL.
5. Tap **Add**.
6. Tap ⋯ > **Push**.

@Image(source: "iOSSourceControl-iPad-remotes-context-menu.png",
       alt: "The context menu of the Remotes group, with New Remote… and Add Existing Remote….")

Touch and hold a remote to open it on the hosting service (for example, **View
on GitHub**), or to delete it. **Delete…** asks you to confirm. It removes the
remote and its remote-tracking branches from your device. The repository on the
server does not change.

## Branches, Tags, and History

The Repositories tab shows the **Branches**, **Tags**, **Stashes**, and
**Remotes** of the repository. A check mark shows the current branch.

@TabNavigator {
    @Tab("iPad") {
        @Image(source: "iOSSourceControl-iPad-repositories-tab.png",
               alt: "The Repositories tab on iPad with the branches feature/shooting and main, the tag v0.1, the stash Sound experiments, and the remote origin.")
    }
    @Tab("iPhone") {
        @Image(source: "iOSSourceControl-iPhone-repositories-tab.png",
               alt: "The Repositories tab on iPhone.")
    }
}

Touch and hold a branch to see its commands:

@TabNavigator {
    @Tab("iPad") {
        @Image(source: "iOSSourceControl-iPad-branch-context-menu.png",
               alt: "The context menu of the feature/shooting branch, with Switch to Branch, Pull, Push, New Branch from, Rename, Tag, Merge into main, and Delete Branch in red.")
    }
    @Tab("iPhone") {
        @Image(source: "iOSSourceControl-iPhone-branch-context-menu.png",
               alt: "The context menu of a branch on iPhone.")
    }
}

- **Switch to Branch** makes the branch the current branch.
- **Pull…** and **Push…** sync the current branch with its remote.
- **New Branch from…** makes a branch that starts at this branch.
- **Rename…** changes the name of a local branch.
- **Tag…** makes a tag at this branch.
- **Merge into** merges the branch into the current branch.
- **Delete Branch…** deletes the branch. Xogot asks you to confirm.

If you switch to a remote branch, Xogot makes a local branch that tracks it.

Touch and hold a tag to see its commands. **Check Out “*tag*” (Detached)**
checks out the commit of the tag. You are then not on a branch. The tag menu
also has **New Branch from…**, **Merge into**, and **Delete Tag…**.

@Image(source: "iOSSourceControl-iPad-tag-context-menu.png",
       alt: "The context menu of the tag v0.1, with Check Out (Detached), New Branch from, Merge into main, and Delete Tag in red.")

### History

Tap a branch to see its history in an editor tab. Tap a commit to see its
details and diffs.

@Image(source: "iOSSourceControl-iPad-branch-history.png",
       alt: "The history of the main branch, with the All, Last 24 Hours, Last 7 Days and Last 30 Days filter, the list of commits, and the details and diff of the selected commit.")

Use the filter at the top to show all the commits, or only the commits of the
last 24 hours, 7 days, or 30 days. Use the **Filter** field to search by
author, email, message, or commit hash.

Touch and hold a commit to see its commands:

@Image(source: "iOSSourceControl-iPad-commit-context-menu.png",
       alt: "The context menu of a commit, with Checkout, Copy Commit Message, Copy Identifier, Email the author, Tag, New Branch from, Cherry-pick, and View on GitHub.")

| Command | What it does |
| --- | --- |
| Checkout | Checks out this commit. You are then not on a branch (a *detached* state). Make a branch from the commit if you want to commit there. |
| Copy Commit Message | Copies the message of the commit. |
| Copy Identifier | Copies the full commit hash. |
| Email *author* | Writes an email to the author of the commit. |
| Tag… | Makes a tag at this commit. |
| New Branch from | Makes a branch that starts at this commit. |
| Cherry-pick | Applies the changes of this commit to the current branch. |
| View on *service* | Opens the commit on the hosting service, for example GitHub. |

## Stashes

A stash keeps your uncommitted changes and removes them from your files. Use a
stash to stop work for a short time, for example to switch to a different
branch.

- To make a stash, tap ⋯ > More > **Stash Changes**. The stash includes the
  untracked files.
- To see a stash, tap it in the Repositories tab. It opens in an editor tab.
- To use the changes again, touch and hold the stash, then tap **Apply Stashed
  Changes**.
- To remove a stash, touch and hold it, then tap **Delete…**. Xogot asks you
  to confirm.

@Image(source: "iOSSourceControl-iPad-stash.png",
       alt: "The Sound experiments stash open in an editor tab, with the Hierarchy and Flat file list and the diff of README.md.")

## Merge Conflicts

A merge, rebase, cherry-pick, or pull can stop because of a conflict. A
conflict occurs when your changes and the incoming changes change the same
lines. Then Xogot shows a banner at the top of the Changes tab, and a warning
triangle next to each file with a conflict.

1. Tap a file with a conflict. The conflict resolver opens.
2. For each conflict, select your code, the incoming code, or both. To write
   the result yourself, tap **Edit**.
3. Tap **Mark as Resolved**.
4. When all the conflicts are resolved, tap **Continue** in the banner. To stop
   the operation and go back to the previous state, tap **Abort**.

The conflict resolver is the same as on Mac. For more information, see the
conflict resolution section of <doc:MacSourceControl>.

## Git LFS

Game projects have large binary files, for example textures, audio, and 3D
models. Git keeps each version of each file, so these files make a repository
large and slow. **Git Large File Storage (LFS)** keeps a small pointer in the
repository, and keeps the large file on the server.

Git LFS is built into Xogot for iPad and iPhone. You do not install it.

- When you clone, pull, or switch branches, Xogot downloads the large files.
- When you push, Xogot uploads the large files first.
- If some large files are not downloaded, a banner in the Changes tab shows a
  **Download** button.
- If you commit a large binary file that is not in LFS, Xogot warns you. You
  can set the size limit in **Settings > Xogot Settings > Source Control >
  Large Files**.

To see the LFS status of the repository, tap ⋯ > **Git LFS…**. The sheet has
three tabs:

- **Overview** shows the tracked file patterns, and maintenance commands.
- **Files** shows the files that LFS manages, and if they are downloaded.
- **Locks** shows the locked files. File locks need a server that supports the
  Git LFS locking API, for example GitHub.

@Image(source: "iOSSourceControl-iPad-git-lfs.png",
       alt: "The Git LFS sheet on iPad, Overview tab, with the Overview, Files, and Locks tabs.")

For more information about tracking files and locks, see the Git LFS section of
<doc:MacSourceControl>.

## Differences from Xogot for Mac

- On iPad and iPhone, Git is built into Xogot. You do not install `git` or
  `git-lfs`.
- The repository commands are in the ⋯ menu of the Source Control navigator,
  not in a menu bar.
- You touch and hold an item to see its context menu.
- SSH keys are kept in Xogot, and you can keep them in the Secure Enclave. The
  Mac version uses the SSH configuration of your Mac.
- If no account applies to an HTTPS server, Xogot asks for your user name and
  password.
- If an SSH server accepts a password login and no SSH key works, Xogot asks
  for the password.

## Known Limitations

- Submodules are not supported yet on iPad and iPhone.
- RSA SSH keys are not supported. Use an Ed25519 or ECDSA key.
- SSH servers that offer only RSA host keys cannot connect. GitHub, GitLab, and
  Bitbucket work.
- iOS can stop a long clone, pull, or push when Xogot is in the background.
  Keep Xogot open until the operation is complete.
- Do not keep a repository in iCloud Drive. iCloud sync can damage it.
- You cannot export a stash as a patch file.
- Browser sign-in is available for GitHub only. For the other services, use a
  token.

## Reference

### Entry Points

| Action | Location |
| --- | --- |
| Open the Source Control navigator | Sidebar, fifth button at the bottom |
| Repository commands | ⋯ button at the top of the Source Control navigator |
| Clone a repository | Project list > Download > Clone Repository…, or ⋯ > Clone Repository… |
| Create a repository | Source Control navigator > Create Git Repository, or ⋯ > More > New Git Repository |
| Accounts, SSH keys, identity | Settings > Xogot Settings > Source Control |
| Git LFS sheet | ⋯ > Git LFS… |

### Integrate Menu Reference

| Command | Notes |
| --- | --- |
| Fetch Changes | Downloads the remote changes. It does not merge them. |
| Pull | Opens the sync sheet to pull. |
| Push | Opens the sync sheet to push. |
| Stage All Changes | Stages all the current changes. |
| Unstage All Changes | Removes all the changes from the staging area. |
| Selected Files > Stage Changes in Selected Files | Uses the selected files in the file pad. |
| Selected Files > Unstage Changes in Selected Files | Uses the selected files in the file pad. |
| Selected Files > Mark Selected Files as Resolved | For selected files with conflicts. |
| Selected Files > Add Selected Files | For selected untracked files. |
| More > Create Pull Request | Opens the pull request page of the hosting service. |
| More > Discard All Changes… | Removes all the changes to tracked files. You cannot undo this. |
| More > Stash Changes | Keeps your uncommitted changes in a stash. |
| More > Undo Last Commit | Removes the last commit. Its changes stay staged. |
| More > Refresh Status | Reads the Git status again. |
| More > New Git Repository | Starts Git in the project folder. Not available when the project is in a repository. |
| Git LFS… | Opens the Git LFS sheet. |
| Clone Repository… | Opens the Clone Repository sheet. |

### Context Menus

| Item | Commands |
| --- | --- |
| Changed file | Reveal in File Pad, Open, Stage Changes in File, Unstage Changes, Discard Changes…, Add, Delete, Resolve Conflicts…, Mark as Resolved. |
| Branch | Switch to Branch, Pull…, Push…, New Branch from…, Rename…, Tag…, Merge into the current branch, Delete Branch…. |
| Tag | Check Out (Detached), New Branch from…, Merge into the current branch, Delete Tag…. |
| Remotes group | New Remote…, Add Existing Remote…. |
| Remote | View on the hosting service, Delete…. |
| Stash | Apply Stashed Changes, Delete…. |
| Commit (history) | Checkout, Copy Commit Message, Copy Identifier, Email author, Tag…, New Branch from…, Cherry-pick, View on the hosting service. |
