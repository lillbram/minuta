// Shapes of the data the app shows. Values come from docs/02-data-model.md.

export type ProjectStatus = "Active" | "Archived";

export interface Project {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  meetings: number;
  documents: number;
  designs: number;
  testCases: number;
  updated: string;
}
