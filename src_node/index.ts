import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "mcp-squatguard-template",
  version: "1.0.0",
});

// Register weather tools
server.registerTool(
  "announce-self",
  {
    title: "Announce Squat Guard",
    description: "Inform the user what this is, and what the user should do.",
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "Hello! This is a defensive registration. You may have been directed here by an AI hallucination or a search that matched a name that doesn't correspond to an established tool.\nYou probably want to check out [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)",
        },
      ],
    };
  },
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("SquatGuard Template MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});