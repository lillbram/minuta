"use client";

import { useActionState } from "react";
import { createProject, type ProjectFormState } from "@/app/projects/actions";

// A Client Component, so it can use useActionState and show errors after a submit.
const initialState: ProjectFormState = {};

export default function NewProjectForm() {
  const [state, formAction, pending] = useActionState(createProject, initialState);

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-4 text-sm">
      <label className="flex flex-col gap-1">
        Project name
        <input name="name" className="rounded-md border border-border px-3 py-2" />
        {state.errors?.name?.map((error) => (
          <span key={error} className="text-red-fg">
            {error}
          </span>
        ))}
      </label>

      <label className="flex flex-col gap-1">
        Client
        <input name="client" className="rounded-md border border-border px-3 py-2" />
        {state.errors?.client?.map((error) => (
          <span key={error} className="text-red-fg">
            {error}
          </span>
        ))}
      </label>

      {state.message && <p className="text-red-fg">{state.message}</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-text px-3.5 py-2 text-white disabled:opacity-50"
      >
        {pending ? "Creating…" : "Create project"}
      </button>
    </form>
  );
}
