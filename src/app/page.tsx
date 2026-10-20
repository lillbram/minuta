import { redirect } from "next/navigation";

// docs/04-routes.md: / redirects to /projects.
export default function Home() {
  redirect("/projects");
}
