import { createProject } from "@/app/projects/actions";

export default function NewProjectPage() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-semibold">New project</h1>
      <form action={createProject} className="flex max-w-md flex-col gap-4 text-sm">
        <label className="flex flex-col gap-1">
          Project name
          <input name="name" required className="rounded-md border border-border px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Client
          <input name="client" required className="rounded-md border border-border px-3 py-2" />
        </label>
        <button type="submit" className="rounded-md bg-text px-3.5 py-2 text-white">
          Create project
        </button>
      </form>
    </main>
  );
}
