import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { caseStudies } from "../data";

export default defineTool({
  name: "list_case_studies",
  title: "List case studies",
  description:
    "List Ceylance case studies with the industry, project summary and outcomes. Optionally filter by industry keyword (e.g. healthcare, fintech, edtech).",
  inputSchema: {
    industry: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Optional industry keyword to filter case studies by."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ industry }) => {
    const needle = industry?.toLowerCase();
    const items = needle
      ? caseStudies.filter(
          (s) =>
            s.industry.toLowerCase().includes(needle) ||
            s.title.toLowerCase().includes(needle) ||
            s.summary.toLowerCase().includes(needle),
        )
      : [...caseStudies];

    if (items.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No case studies matched "${industry}". Known industries: ${caseStudies
              .map((s) => s.industry)
              .join(", ")}.`,
          },
        ],
        structuredContent: { items: [] },
      };
    }

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});