from typing import Any

from mcp.server.fastmcp import FastMCP


MESSAGE = """
Hello! This is a defensive registration. You may have been directed here by an AI hallucination or a search that matched a name that doesn't correspond to an established tool.

You probably want to check out [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
"""

# Initialize FastMCP server
mcp = FastMCP("mcp-squatguard-template")


@mcp.tool()
async def announce_self() -> str:
    return MESSAGE


def main():
    # Initialize and run the server
    mcp.run(transport="stdio")


if __name__ == "__main__":
    main()
