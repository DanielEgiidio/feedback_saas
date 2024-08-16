import NewProject from "../../../components/new-project";
import { db } from "../../../db";
import { projects } from "../../../db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ProjectsList from "./projects-list";

export default async function Page() {
  const allProjects = await db.select().from(projects);

  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center my-4">
          Lista dos seus Projetos
        </h1>
        <NewProject />
      </div>
      <ProjectsList projects={userProjects} />
    </div>
  );
}
