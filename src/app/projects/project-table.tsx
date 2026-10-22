import Link from "next/link";
import { getProjects } from "@/lib/projects";

// Async component: it waits for the database. The page wraps it in <Suspense>.
export default async function ProjectTable() {
  const projects = await getProjects();

  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b">
          <th className="py-2">Project</th>
          <th className="py-2">Status</th>
          <th className="py-2">Meetings</th>
          <th className="py-2">Documents</th>
          <th className="py-2">Designs</th>
          <th className="py-2">Test cases</th>
          <th className="py-2">Updated</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id} className="border-b">
            <td className="py-2">
              <Link href={`/projects/${project.id}`} className="font-medium underline">
                {project.name}
              </Link>
            </td>
            <td className="py-2">{project.status}</td>
            <td className="py-2">{project.meetings}</td>
            <td className="py-2">{project.documents}</td>
            <td className="py-2">{project.designs}</td>
            <td className="py-2">{project.testCases}</td>
            <td className="py-2">{project.updated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
