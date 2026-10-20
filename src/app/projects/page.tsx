import { projects } from "@/lib/mock-data";

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-semibold">Projects</h1>
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
              <td className="py-2">{project.name}</td>
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
    </main>
  );
}
