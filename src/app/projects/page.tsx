import { Suspense } from "react";
import ProjectTable from "@/app/projects/project-table";

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-semibold">Projects</h1>
      <Suspense fallback={<p className="text-sm text-zinc-500">Loading projects…</p>}>
        <ProjectTable />
      </Suspense>
    </main>
  );
}
