import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../data";

export default defineTool({
  name: "get_contact_details",
  title: "Get contact details",
  description:
    "Get Ceylance's public contact details: email, phone, base city, expected response time and the company brochure link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: { contact },
  }),
});