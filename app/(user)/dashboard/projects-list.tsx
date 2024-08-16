import React from "react";
import { InferSelectModel } from "drizzle-orm";
import { projects } from "../../../db/schema";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
};

export default function projectsList(props: Props) {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
        {props.projects.map((project) => (
          <Card className="max-w-[350px] flex flex-col h-full">
            <CardHeader className="flex-1">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={`/dashboard/projects/${project.id}`}>
                <Button>Ver Projeto</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </div>
  );
}
