# MCP Servers

Connect additional tools to the built-in Coding Assistant through Model Context Protocol (MCP).

## Overview

An MCP server supplies tools that the assistant can use in a conversation.
These tools can retrieve information from another service or perform actions
that the service supports. Xogot already supplies project and editor tools.
Add an MCP server when you need access to another service.

First, connect an AI provider as described in <doc:Coding-Assistant>. Then add
an MCP server in the built-in AI settings. Installing a skill for an external
AI tool does not configure MCP servers for the built-in assistant.

## Choose a connection type

| Connection | What you enter | Supported platforms |
| --- | --- | --- |
| **Web address** | The server's HTTPS MCP endpoint and, if required, a bearer token. | Mac, iPad, and iPhone where the Coding Assistant is enabled. |
| **Local command** | A command that starts an MCP server, with its arguments. | An unsandboxed Mac app. |

A local command server runs as a separate process on your Mac. It does not run
on iPad, iPhone, or in a sandboxed Mac app. Use a server with a web address on
those platforms. Xogot shows the reason when a configured server cannot run.

## Open the server settings

1. Open **AI** settings. On Mac, use **Editor Settings > AI > Built-in AI**.
2. Select **MCP Servers > Manage Servers**.
3. Select **Add Server**.

Server settings apply across projects. After you add, edit, enable, or disable
a server, start a new conversation. An existing conversation keeps the server
configuration that it loaded.

## Add a server with a web address

1. Enter a **Server Name**. Use a name that is not already in the list.
2. Set **Connection** to **Web address**.
3. Enter the server's MCP endpoint in **Web address**. The address must start
   with `https://`.
4. If the server requires a bearer token, enter it in **Bearer Token**.
5. Select **Save**.

Use the MCP endpoint from the server's instructions. A service's home page is
not necessarily its MCP endpoint. Xogot stores the bearer token in the Keychain,
not in the `mcp.json` configuration file.

The screenshots use [DeepWiki](https://docs.devin.ai/work-with-devin/deepwiki-mcp),
a public repository documentation service. Its Streamable HTTP endpoint is
`https://mcp.deepwiki.com/mcp`. This public server does not require a bearer
token.

@Image(source: "mcp-web-server.png", alt: "New MCP Server form with the name deepwiki, Web address selected, and the HTTPS MCP endpoint entered.") {
    Enter the MCP endpoint in Web address. Leave Bearer Token empty for this public example.
}

## Add a local command server on Mac

Install the server and its required runtime according to the server's
instructions before you configure it in Xogot.

1. Select **Add Server** and enter a **Server Name**.
2. Set **Connection** to **Local command**.
3. Enter the executable path or command name in **Local command**.
4. Enter each argument on a separate line in **Arguments**.
5. Select **Save**.

Keep the command and arguments in their separate fields. Do not paste a full
shell command into **Local command**. A path with spaces is one argument if
you put it on one line. Do not add shell quotes around that path.

The following image shows the fields for the
[filesystem MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem).
This example uses `npx` and requires Node.js. Its arguments name the package
and a sample folder. Replace the sample path with a folder that you intend
the server to access. Xogot's own project tools do not require this server.

@Image(source: "mcp-local-server.png", alt: "Local command setup with npx and three separate argument lines: -y, the filesystem server package, and a sample folder path.") {
    Put each argument on a separate line. The image shows a setup example for a sample folder.
}

## Test and enable a server

1. Find the server in **MCP Servers**.
2. Open its **More** menu, then select **Test**.
3. Wait for the result. A successful test shows **Connected** and the number
   of tools supplied by the server.
4. Turn on the switch beside the server name.
5. Close the settings and start a new conversation.

The test makes a separate connection and closes it after the check. A local
server test starts a separate process. The test checks the connection and tool
list; it does not run each tool.

@Image(source: "mcp-connected-server.png", alt: "MCP server list with deepwiki enabled and a successful test showing Connected, 3 tools.") {
    Check the test result and the server's enable switch before you start a new conversation.
}

## Import servers from other tools on Mac

Xogot can find server entries in these user configuration files:

| Tool | Configuration file |
| --- | --- |
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Code | `~/.claude.json` |
| Codex | `~/.codex/config.toml` |

1. Open **MCP Servers > Manage Servers**.
2. Select **Import from Other Tools**. This button appears when Xogot finds
   server entries.
3. Check the entries grouped by their source tool. Turn off entries that you
   do not want to import.
4. Select **Import Servers**.
5. Test the imported servers and start a new conversation.

Entries available for import are selected by default. Entries already in
Xogot appear under **Already Configured**. Xogot lists unsupported entries
under **Cannot Be Imported Here**, with the reason. For example, a relative
command path can depend on the other tool's working directory.

Import copies the configuration. It does not change the source tool's file.
Xogot does not scan project configuration files for this import. Do not assume
that the other tool's sign-in transfers. If authentication fails, configure
the server's required credentials in Xogot.

@Image(source: "mcp-import-servers.png", alt: "Import MCP Servers sheet with entries grouped under Claude Desktop, Claude Code, and Codex, plus selection switches and Import servers.") {
    Select the server entries that you want to copy to Xogot.
}

## Use server tools in a conversation

1. Start a new Coding Assistant conversation after you configure the server.
2. Enter `/mcp` and send it to check the server's connection status.
3. Enter a request that names the server and describes the task.
4. Check the tool actions and results in the conversation.

For the DeepWiki example, use this request:

```text
Use DeepWiki's read_wiki_structure MCP tool to list three documentation topics
for godotengine/godot. Do not read or change project files. Keep the answer short.
```

The assistant finds and calls the server tools needed for the task. You do not
need to write the tool calls yourself. The conversation can show tool discovery
and execution before the assistant's answer.

The **Tool Approval** setting also applies to MCP tool calls. With **Ask**,
check each proposed action and allow or deny it. A tool can require approval
even when its task is to retrieve information. See <doc:Coding-Assistant> for
the approval settings. **Read Only** blocks MCP tool calls.

@Image(source: "mcp-conversation.png", alt: "Coding Assistant conversation using the deepwiki MCP server to retrieve documentation topics for the Godot repository.") {
    Name the server in your request and check the tool results in the conversation.
}

## Edit, disable, or remove a server

Use the server's **More** menu to select **Edit** or **Delete**. To stop using
a server in new conversations without removing its configuration, turn off
its switch. Start a new conversation after a configuration change.

Xogot stores server entries in `mcp.json` in its assistant settings folder.
When the server list is empty, the sheet shows the full file path. You can
edit that file for configuration fields that the form does not show.
For example, a local server can require environment variables or a working
directory. Keep bearer tokens in the settings form so that Xogot stores them
in the Keychain.

## Troubleshooting

| Problem | Action |
| --- | --- |
| The server cannot be saved. | Enter a unique name. For a web server, use an address that starts with `https://`. For a local server, enter a command. |
| The connection test fails or times out. | Check the MCP endpoint, network connection, and required authentication. For a local server, check that its executable and runtime are installed. |
| A command is not found. | Use the full executable path. Check each argument and any required working directory. |
| A local server cannot run on this platform. | Use a server with a web address, or use an unsandboxed Mac app. |
| Import from Other Tools is missing. | Check that you are on Mac and that a supported user configuration file contains server entries. |
| The assistant does not see a new or changed server. | Enable the server, test it, and start a new conversation. |
| A tool action is waiting. | Check the conversation for an approval request. Allow or deny the action. |
