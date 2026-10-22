import { Suspense } from "react";
import ProjectDetail from "@/app/projects/[projectId]/project-detail";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  return (
    <main className="p-8">
      <Suspense fallback={<p className="text-sm text-zinc-500">Loading project…</p>}>
        <ProjectDetail params={params} />
      </Suspense>
    </main>
  );
}
