import { notFound } from "next/navigation";
import { projects } from "@/lib/mock-data";

// Build one static page per project id. Needed because params is read at build time.
export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="p-8">
      <p className="mb-2 text-sm text-zinc-500">Projects · {project.name}</p>
      <h1 className="mb-2 text-2xl font-semibold">{project.name}</h1>
      <p className="mb-6 text-sm">
        {project.client} · {project.status}
      </p>
      <ul className="space-y-2 text-sm">
        <li>Meetings: {project.meetings}</li>
        <li>Documents: {project.documents}</li>
        <li>Designs: {project.designs}</li>
        <li>Test cases: {project.testCases}</li>
      </ul>
    </main>
  );
}
