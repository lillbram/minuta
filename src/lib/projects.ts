import { connection } from "next/server";
import { prisma } from "@/lib/db";
import { DEMO_TENANT } from "@/lib/tenant";

// Every query filters by tenantId, so one tenant never reads another tenant's rows.

export async function getProjects() {
  await connection(); // run at request time, not at build time
  return prisma.project.findMany({
    where: { tenantId: DEMO_TENANT },
    orderBy: { createdAt: "asc" },
  });
}

export async function getProject(id: string) {
  await connection();
  return prisma.project.findFirst({
    where: { id, tenantId: DEMO_TENANT },
  });
}
