// Sample records from docs/02-data-model.md. Use only these as mock data.

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "northwind-phase-one",
    name: "Northwind phase one",
    client: "Northwind",
    status: "Active",
    meetings: 3,
    documents: 6,
    designs: 3,
    testCases: 4,
    updated: "16 Oct",
  },
  {
    id: "kalbe-pilot",
    name: "Kalbe pilot",
    client: "Kalbe Group",
    status: "Active",
    meetings: 1,
    documents: 1,
    designs: 1,
    testCases: 0,
    updated: "10 Oct",
  },
];
