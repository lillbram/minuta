"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { DEMO_TENANT } from "@/lib/tenant";

// "use server" at the top: every function in this file runs on the server, even when a form calls it.

// "Test Project 2" -> "test-project-2". Used as the row id, like the mock data ids.
function toId(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createProject(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const client = String(formData.get("client") ?? "").trim();

  await prisma.project.create({
    data: {
      id: toId(name),
      tenantId: DEMO_TENANT,
      name,
      client,
      status: "Active",
      updated: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
    },
  });

  revalidatePath("/projects"); // the list page shows the new row on its next load
  redirect("/projects"); // stops here; the code below never runs
}
