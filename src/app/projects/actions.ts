"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/db";
import { DEMO_TENANT } from "@/lib/tenant";

// "use server" at the top: every exported function runs on the server, even when a form calls it.

// The rules for a valid project. Checked on the server, because the browser can skip client checks.
const ProjectInput = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Project name is required.")
    .max(80, "Keep the project name under 80 characters."),
  client: z.string().trim().min(1, "Client is required."),
});

// What the form shows after a failed submit. The form reads this back with useActionState.
export type ProjectFormState = {
  errors?: { name?: string[]; client?: string[] };
  message?: string;
};

// "Test Project 2" -> "test-project-2". Used as the row id, like the mock data ids.
function toId(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Prisma error P2002 = unique constraint failed (the id already exists).
function isDuplicateError(error: unknown) {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002";
}

export async function createProject(
  _prevState: ProjectFormState,
  formData: FormData,
): Promise<ProjectFormState> {
  const parsed = ProjectInput.safeParse({
    name: formData.get("name"),
    client: formData.get("client"),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const { name, client } = parsed.data;
  const id = toId(name);

  if (!id) {
    return { errors: { name: ["Use at least one letter or number."] } };
  }

  try {
    await prisma.project.create({
      data: {
        id,
        tenantId: DEMO_TENANT,
        name,
        client,
        status: "Active",
        updated: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      },
    });
  } catch (error) {
    if (isDuplicateError(error)) {
      return { message: `A project named "${name}" already exists.` };
    }
    throw error; // anything else is a real bug: let Next.js show the error
  }

  revalidatePath("/projects");
  redirect("/projects"); // stops here; the code below never runs
}
