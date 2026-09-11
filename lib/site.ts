export const siteConfig = {
  name: "daebecodin",
  title: "dae",
  url: "https://daebecodin.dev",
  email: "duranddyer123@gmail.com",
  description:
    "Durand is a student at San Francisco State University who builds software projects and writes about programming and what he learns.",
  social: {
    github: "https://github.com/daebecodin",
    linkedin: "https://www.linkedin.com/in/daebecodin",
    x: "https://x.com/daecantaim",
    youtube: "https://www.youtube.com/@DaeBeCodin",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
] as const;
