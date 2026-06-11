import type { Route } from "./+types/home";
import ProjectOverview from "@/views/project-overview/ProjectOverview";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Projects" }, { name: "description", content: "Projects" }];
}

export default function Projects() {
  return <ProjectOverview />;
}
