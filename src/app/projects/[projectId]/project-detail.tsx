import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";

// Async component: it waits for the URL params and the database. The page wraps it in <Suspense>.
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <>
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
    </>
  );
}
