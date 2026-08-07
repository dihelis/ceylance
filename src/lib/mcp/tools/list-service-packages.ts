import { defineTool } from "@lovable.dev/mcp-js";
import { packages } from "../data";

export default defineTool({
  name: "list_service_packages",
  title: "List service packages",
  description:
    "List Ceylance's service packages by business outcome, including who each is best for, what is included and the typical delivery timeline.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(packages, null, 2) }],
    structuredContent: { packages },
  }),
});