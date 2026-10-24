import NewProjectForm from "@/app/projects/new/new-project-form";

export default function NewProjectPage() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-semibold">New project</h1>
      <NewProjectForm />
    </main>
  );
}
