import { defineTool } from "@lovable.dev/mcp-js";
import { processSteps } from "../data";

export default defineTool({
  name: "list_process_steps",
  title: "List engagement process",
  description: "List the four steps of how a Ceylance engagement runs, from first call to ongoing scale.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(processSteps, null, 2) }],
    structuredContent: { steps: processSteps },
  }),
});