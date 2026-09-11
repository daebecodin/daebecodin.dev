export type ProjectStatus = "In progress" | "Complete";

export type Project = {
  slug: string;
  name: string;
  publishedAt: string;
  status: ProjectStatus;
  featured: boolean;
  description: string;
  technologies: string[];
  image?: { src: string; alt: string };
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
  articleSlug?: string;
};

export const projects: Project[] = [
  {
    slug: "account-armory",
    name: "Account Armory",
    publishedAt: "2026-08-31",
    status: "In progress",
    featured: true,
    description:
      "A local Windows credential organizer for game-launcher accounts and general website credentials, protected with Windows Hello, Windows DPAPI, automatic locking, and encrypted backups.",
    technologies: ["C++", "C++/WinRT", "WinUI 3", "XAML", "Windows App SDK"],
    image: {
      src: "/projects/account-armory/credential-vault.png",
      alt: "Account Armory Credential Vault in a dark theme, showing navigation, credential controls, utilities, and the locked vault state.",
    },
    liveUrl: "https://apps.microsoft.com/detail/9NF1D0BKTJKF",
    liveLabel: "Microsoft Store",
    githubUrl: "https://github.com/daebecodin/AccountVault",
  },
  {
    slug: "sauerbraten-trainer",
    name: "Sauerbraten Trainer",
    publishedAt: "2026-08-29",
    status: "In progress",
    featured: true,
    description:
      "A Windows external trainer for Cube 2: Sauerbraten, built while learning the Win32 API, process discovery, pointer traversal, and live memory editing.",
    technologies: ["C++", "Win32 API", "MSVC", "Process memory"],
    githubUrl: "https://github.com/daebecodin/SauerbratenTrainer",
  },
  {
    slug: "minimum-c",
    name: "minimum-c",
    publishedAt: "2026-03-29",
    status: "Complete",
    featured: true,
    description:
      "A minimal malloc and free implementation in C using sbrk, linked-list block metadata, 8-byte alignment, block splitting, reuse, and coalescing.",
    technologies: ["C", "C17", "CMake", "Systems programming"],
    githubUrl: "https://github.com/daebecodin/minimum-c",
  },
];

export function getFeaturedProjects(limit = 3) {
  return projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}
