import { defineTool } from "@lovable.dev/mcp-js";
import { studio } from "../data";

export default defineTool({
  name: "get_studio_overview",
  title: "Get studio overview",
  description:
    "Get a summary of Ceylance: what the studio does, the markets it serves and what makes its delivery model different.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(studio, null, 2) }],
    structuredContent: { studio },
  }),
});