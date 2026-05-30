import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Joseph",
  lastName: "Depew",
  name: `Joseph Depew`,
  role: "Builder · IT generalist · Legal-tech · Homelab",
  avatar: "/images/joseph-depew.webp",
  email: "hello@joeydepew.com",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Updates</>,
  description: <>Occasional notes on builds and systems.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jdepew88/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/joseph-depew-857459123/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Joseph Depew`,
  description:
    "Builder focused on practical web apps, infrastructure, automation, and homelab projects.",
  headline: <>I build practical web, infrastructure, automation, and homelab projects.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Project
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Legal-tech founder, IT generalist, and self-hosting builder working across web apps, Chrome
      extensions, Docker, networking, and automation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description:
    "I like building systems that are understandable, recoverable, and useful — across software, infrastructure, and legal-tech workflows.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: false,
    title: "Introduction",
    description: (
      <>
        I like building systems that are understandable, recoverable, and useful. My work sits
        between software, infrastructure, legal automation, and practical IT support — the kind of
        work you can document, repeat, and fix without heroics.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "What I build",
    experiences: [
      {
        company: "Legal-tech / document workflows",
        timeframe: "Current focus",
        role: "QDRO automation, structured intake, standardized outputs",
        achievements: [
          <>
            Building <strong>QDROdl</strong> (
            <a href="https://qdrodl.app/">qdrodl.app</a>
            ): a legal-tech web app for generating QDRO/DRO document packages with structured
            intake and repeatable workflows.
          </>,
          <>
            Grounded in real-world QDRO workflow experience — reducing rework, standardizing
            templates, and making document prep more consistent.
          </>,
        ],
        images: [],
      },
      {
        company: "IT generalist / practical support",
        timeframe: "Ongoing",
        role: "Hands-on troubleshooting, networks, small business workflows",
        achievements: [
          <>
            <strong>JR Technical Consulting</strong> —{" "}
            <a href="https://jrtechnicalconsulting.com/">jrtechnicalconsulting.com</a> for practical
            IT support, networking, endpoints, backups, and small-business systems.
          </>,
          <>
            Building and maintaining small, understandable systems: websites, backups, endpoints,
            Wi‑Fi/networking, and “make it work reliably” business automation.
          </>,
          <>
            Focused on repeatability and recovery: clean documentation, sane defaults, and simple
            runbooks.
          </>,
        ],
        images: [],
      },
      {
        company: "Homelab / self-hosting",
        timeframe: "Ongoing",
        role: "Proxmox, Unraid, Docker, VLANs, reverse proxy, secure remote access",
        achievements: [
          <>
            Building <strong>Homelab in a Box</strong>: a self-hosting starter project for deploying
            useful Docker services with practical instructions and secure access patterns.
          </>,
          <>
            I’m most interested in setups that can be repeated: bootstrap, deploy, backup, and
            restore — then write it down so it’s not tribal knowledge.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Background",
    institutions: [
      {
        name: "California State University, Los Angeles",
        description: (
          <>
            B.A., History (General Option).
            <br />
            <br />
            <strong>CCNA</strong> — Cisco Certified Network Associate (earned June 2023, renewing
            June 2026). Routing, switching, and practical networking fundamentals.{" "}
            <a
              href="https://github.com/jdepew88/CCNA-Notes---jdepew88"
              target="_blank"
              rel="noopener noreferrer"
            >
              CCNA Notes (GitHub)
            </a>
            <br />
            <br />
            More on the <a href="/education">Education and Certifications</a> page.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Tools and domains",
    skills: [
      {
        title: "Web apps",
        description: <>Next.js/TypeScript apps with practical data models, workflows, and payments where needed.</>,
        tags: [{ name: "Next.js", icon: "nextjs" }, { name: "TypeScript", icon: "typescript" }],
        images: [],
      },
      {
        title: "Infrastructure and self-hosting",
        description: (
          <>
            Docker Compose, reverse proxy, Cloudflare, Linux, backups, and secure access for small
            systems that you can actually maintain.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Linux", icon: "terminal" },
          { name: "Cloudflare", icon: "cloudflare" },
        ],
        images: [],
      },
      {
        title: "Chrome extensions",
        description: <>Local-first browser tools for tab/session organization and better workflows.</>,
        tags: [{ name: "Manifest V3", icon: "chrome" }, { name: "JavaScript", icon: "javascript" }],
        images: [],
      },
      {
        title: "Networking and lab work",
        description: <>VLANs, routing, firewalling, and hands-on CCNA-style documentation.</>,
        tags: [{ name: "Networking", icon: "globe" }],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes",
  description: `Notes and writeups by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name} across web, infrastructure, automation, and homelab.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Optional: add your own screenshots/photos
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
