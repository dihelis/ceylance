import { defineMcp } from "@lovable.dev/mcp-js";
import getContactDetails from "./tools/get-contact-details";
import getStudioOverview from "./tools/get-studio-overview";
import listCaseStudies from "./tools/list-case-studies";
import listProcessSteps from "./tools/list-process-steps";
import listServicePackages from "./tools/list-service-packages";

export default defineMcp({
  name: "ceylance-studio",
  title: "Ceylance Studio",
  version: "0.1.0",
  instructions:
    "Public tools describing Ceylance, an AI-native product development studio. Use `get_studio_overview` for what the studio does, `list_service_packages` for engagement options and timelines, `list_case_studies` for past work (optionally filtered by industry), `list_process_steps` for how an engagement runs, and `get_contact_details` to reach the team.",
  tools: [getStudioOverview, listServicePackages, listCaseStudies, listProcessSteps, getContactDetails],
});