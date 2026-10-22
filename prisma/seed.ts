// Loads the two sample projects from docs/02-data-model.md. Safe to run again:
// upsert updates a row that exists and creates one that doesn't, so no duplicates.
import "dotenv/config";
import { prisma } from "@/lib/db";
import { projects } from "@/lib/mock-data";
import { DEMO_TENANT } from "@/lib/tenant";

async function main() {
  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {},
      create: { ...project, tenantId: DEMO_TENANT },
    });
  }
  console.log(`Seeded ${projects.length} projects`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
