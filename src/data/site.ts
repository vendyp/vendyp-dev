import { siteMeta } from "./metadata";

export const navLinks = [
  { href: "/", label: "About", key: "about" },
  { href: "/posts", label: "Post", key: "post" },
  { href: "/projects", label: "Project", key: "project" },
] as const;

export { siteMeta };
