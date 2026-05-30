/** Projects listed on /work without a case-study page — link out to GitHub or the live site. */

export type ExternalProject = {
  slug: string;
  title: string;
  summary: string;
  images: string[];
  link: string;
  publishedAt: string;
};

export const externalProjects: ExternalProject[] = [
  {
    slug: "jr-technical-consulting",
    title: "JR Technical Consulting",
    publishedAt: "2026-05-25",
    summary:
      "Practical IT and infrastructure consulting for small businesses — networking, endpoints, backups, and reliable day-to-day systems support.",
    images: ["/images/projects/joseph/jr-technical-consulting.webp"],
    link: "https://jrtechnicalconsulting.com/",
  },
  {
    slug: "tabstack",
    title: "TabStack",
    publishedAt: "2026-05-21",
    summary:
      "A browser session and project organization tool inspired by OneTab, expanded around saving tabs, project context, and local-first organization.",
    images: ["/images/projects/joseph/tabstack.webp"],
    link: "https://github.com/jdepew88/TabStack",
  },
  {
    slug: "tubestack",
    title: "TubeStack",
    publishedAt: "2026-05-22",
    summary:
      "Chrome extension for organizing YouTube tabs into useful collections, reducing tab clutter, and building a better YouTube research/library workflow.",
    images: ["/images/projects/joseph/tubestack.webp"],
    link: "https://github.com/jdepew88/TubeStack",
  },
  {
    slug: "ccna-notes",
    title: "CCNA Notes",
    publishedAt: "2026-05-20",
    summary:
      "Networking study notes focused on routing, switching, subnetting, and practical CCNA review.",
    images: ["/images/projects/joseph/ccna-notes-cover.webp"],
    link: "https://github.com/jdepew88/CCNA-Notes---jdepew88",
  },
  {
    slug: "homelab-in-a-box",
    title: "Homelab in a Box",
    publishedAt: "2026-05-24",
    summary:
      "A self-hosting starter project for deploying useful Docker services on a small VPS or homelab host, with practical instructions for Debian/Ubuntu, SSH keys, Docker Compose, Cloudflare, Traefik, and secure access.",
    images: ["/images/projects/joseph/homelab-in-a-box-cover.webp"],
    link: "https://homelabinabox.app/",
  },
];
