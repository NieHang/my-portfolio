import type { Route } from "./+types/home";
import Portfolio from "@/portfolio/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NieHang" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
