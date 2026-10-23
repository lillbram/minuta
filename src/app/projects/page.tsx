import Link from "next/link";
import { Suspense } from "react";
import ProjectTable from "@/app/projects/project-table";

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Link href="/projects/new" className="rounded-md bg-text px-3.5 py-2 text-sm text-white">
          New project
        </Link>
      </div>
      <Suspense fallback={<p className="text-sm text-zinc-500">Loading projects…</p>}>
        <ProjectTable />
      </Suspense>
    </main>
  );
}
