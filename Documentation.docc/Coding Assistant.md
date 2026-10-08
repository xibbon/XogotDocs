# Coding Assistant

Use the built-in AI assistant to inspect, change, and test the project open in Xogot.

## Overview

The Coding Assistant is enabled by default on Mac and in TestFlight builds for
iPad and iPhone. It is not enabled by default in the iPad and iPhone App Store
builds. You can ask questions about Godot, request changes to scripts and scenes,
or get help with errors.
The assistant can read project files and use tools to control the Xogot editor.

Connect an AI provider before you send a message. The built-in integration runs
in Xogot, but the selected provider processes your requests. Project content and
attachments used in a request are sent to that provider.

## Choose an AI integration

Choose the integration that fits where you want to work:

| Integration | Use it when | Setup |
| --- | --- | --- |
| Built-in Coding Assistant | You want to work in Xogot on Mac, iPad, or iPhone. You want to add code, errors, or files to a conversation from the editor. | Connect a provider in **AI** settings and select a model. |
| External AI agent | You want to use a separate AI coding tool with Xogot for Mac. | Install the Xogot skill for that tool in **AI > External Agents**. See <doc:integrating_with_ai_tools>. |

On Mac, **Editor Settings > AI** has two sections: **Built-in AI** and
**External Agents**. On iPad and iPhone, AI settings show the built-in assistant
settings. An external skill installation does not connect a provider to the
built-in assistant. Each integration has its own setup.

@Image(source: "coding-assistant-settings.png", alt: "AI settings with Built-in AI selected, a connected provider, and tool approval set to Ask.") {
    Use Built-in AI to connect a provider and select the assistant defaults.
}

## Connect a provider

1. Open a project in Xogot.
2. Select the **Coding Assistant** button with the sparkles icon in the sidebar.
3. If no provider is connected, select **Open AI Settings**.
4. On Mac, select **Built-in AI** if the AI settings show **External Agents**.
5. Select **Add Provider**.
6. Select a provider under **Sign In** or **API Key**.
7. Complete the sign-in instructions. For an API key, enter the key and select
   **Validate & Save**.
8. Select a **Default Model** under **Defaults**.

Xogot stores provider credentials in the Keychain. You can connect more than one
provider. Select an account in AI settings to choose which of its models appear
in the model menus. Use **Reset to Recommended** to restore the model list.

For an OpenAI-compatible provider that is not in the list, select
**Add Provider > Custom Provider**.
Enter its name, base URL, API key, and model IDs. Set the context window, maximum
tokens, and API dialect to match the provider. Then select **Save**.

The provider and model lists can change. Use the choices shown in Xogot. Choose
a provider account that gives you access to the model you need.

## Start a conversation

1. Open the Coding Assistant sidebar.
2. Select **New Conversation**.
3. Check the provider and model shown below the message field.
4. Enter a request, then select the send button.

Give the assistant a clear task and the result you want. For example:

```text
Read the player script. Add a double jump. Keep the current input actions.
Explain the changes and test the scene.
```

You can change the provider and model from the conversation controls. Select
**Effort** to change the thinking level when the model supports it. The default
model and thinking level in AI settings apply to new conversations.

On Mac, press **Command-0** to show the assistant. In AI settings, use
**Open Conversations In** to choose **Editor Tab** or **Assistant Window**.
Hold **Option** when you select **New Conversation** to use the other location.
Press **Shift-Command-0** to open a new assistant window.

@Image(source: "coding-assistant-conversation.png", alt: "An assistant window with a request about player.gd, completed tool actions, and a response about movement and jumping.") {
    The assistant reads the sample player script and explains its movement controls.
}

## Add context to a request

Use the attachment button to add a file or image. Where the editor offers
**Add to Assistant**, use it to add the selected code or project files to the
message. Check the attachment labels before you send. Remove an attachment if
it is not relevant to the task.

On Mac, type `@` in the message field to choose a project file or editor context.
The available context includes:

| Reference | Content |
| --- | --- |
| `@selection` | The selected code. |
| `@problems` | Code problems from the editor. |
| `@scene` | A reference to the current saved scene. |
| `@output` | Recent editor output. |
| `@screenshot` | An image of the editor viewport. |

To get help with a code problem, select **Fix with AI** where it is available.
Xogot starts a conversation with the problem and its code location. This action
sends a request to diagnose and fix the problem. The tool approval setting
controls whether the assistant must ask before it makes changes.

## Control tool actions

Set **Tool Approval** in AI settings or use the approval menu below the message
field:

| Setting | Behavior |
| --- | --- |
| **Ask** | The assistant can use read-only tools. It asks before file changes, commands, and other tools that require approval. |
| **Read Only** | Only read-only tools can run. Tools that change files or run commands are blocked. |
| **Allow All** | Tools run without approval prompts. Xogot asks you to confirm full access before you enable this setting. |

Use **Ask** if you want to check actions before they run. Read each approval
request and allow or deny the action. With **Allow All**, file access is subject
to the app's permissions. It is not limited to the open project.

The conversation shows tool actions and results. Check the changed files and
run your game to verify the result. Select the stop button to stop the assistant.
You can also send another message while it works to give it new instructions.

@Image(source: "coding-assistant-approval.png", alt: "A command to read player.gd waiting for approval, with Allow once, Always allow bash, and Deny buttons.") {
    Check the proposed command before you allow it to run.
}

## Manage conversations and settings

Use the Coding Assistant sidebar to open previous conversations. You can pin,
rename, group, archive, or delete conversations. Start a new conversation when
you begin a separate task.

AI settings also have controls for conversation summaries, skill commands,
images, and transport. **Auto-Compact Conversations** summarizes older messages
when the context fills up. The settings page states which changes apply to new
conversations.

Keep **Bash Execution** set to **Automatic** unless you need a specific mode.
Automatic uses real Bash on an unsandboxed Mac. It uses virtual Bash in a
sandboxed Mac app and on iPad or iPhone. Virtual Bash supports a limited set of
commands, including Xogot editor commands. It cannot run arbitrary installed
command-line tools.

To connect additional tools through Model Context Protocol (MCP), select
**MCP Servers > Manage Servers** in AI settings. These servers are optional;
the assistant already has access to Xogot's project and editor tools.
Servers with a web address are supported on all three platforms. Local command
servers require an unsandboxed Mac app.

For setup steps, connection tests, imports, and examples, see <doc:MCP-Servers>.

## Troubleshooting

- If the Coding Assistant button is missing, check that your Xogot build has
  the assistant enabled. On iPad and iPhone, use a TestFlight build.
- If you cannot send a message, open AI settings and check the provider account.
  Complete sign-in or add an API key, then select an available model.
- If a model is missing from the conversation menu, select its account in AI
  settings and enable the model.
- If the assistant cannot change files or run commands, check **Tool Approval**.
  **Read Only** blocks those actions. **Ask** can leave an action waiting for
  your approval.
- If a shell command is unavailable, check **Bash Execution**. Virtual Bash has
  a limited command set.
- If an external tool cannot reach Xogot for Mac, use the troubleshooting steps
  in <doc:integrating_with_ai_tools>.
