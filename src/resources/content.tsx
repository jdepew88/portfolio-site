import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Joseph",
  lastName: "Depew",
  name: `Joseph Depew`,
  role: "Web Development · Technical Education · Systems & Infrastructure",
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
    "I build practical software, interactive learning tools, and infrastructure solutions — combining web development, networking, and systems administration.",
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
    // Rendered inside the About hero (not as a standalone section)
    display: false,
    title: "Introduction",
    description: (
      <>
        I build practical software, interactive learning tools, and infrastructure solutions. My
        work combines web development, networking, and systems administration — from creating CCNA
        Practice Labs to deploying applications and managing self-hosted environments.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "What I build",
    experiences: [
      {
        company: "Web Development",
        timeframe: "Current focus",
        role: "Purpose-built websites, interactive applications, practical web tools",
        achievements: [
          <>
            I design and build purpose-built websites, interactive applications, and practical web
            tools. The work covers frontend development, responsive UI design, visual design,
            Git-based workflows, and deploying modern sites and applications through Cloudflare.
          </>,
          <>
            Selected work is on the <a href="/work">web development portfolio</a>, including{" "}
            <strong>QDROdl</strong> (<a href="https://qdrodl.app/">qdrodl.app</a>), a legal-tech
            web app for generating QDRO/DRO document packages with structured intake and
            repeatable workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Technical Education",
        timeframe: "Ongoing",
        role: "Interactive learning tools for complex technical subjects",
        achievements: [
          <>
            I build interactive technical learning experiences designed to make complex subjects
            easier to understand and practice.
          </>,
          <>
            The primary example is{" "}
            <strong>
              <a href="https://ccnapracticelabs.com/" target="_blank" rel="noopener noreferrer">
                CCNA Practice Labs
              </a>
            </strong>
            : a full learning platform that combines networking labs, guided lessons, quizzes,
            practice exams, and study tools — a substantial software project I designed, built,
            deployed, and operate, not a collection of notes.
          </>,
        ],
        images: [],
      },
      {
        company: "Systems & Infrastructure",
        timeframe: "Ongoing",
        role: "Networking, systems administration, virtualization, self-hosting",
        achievements: [
          <>
            Background in networking, systems administration, Linux, Windows, virtualization,
            Docker, self-hosting, routing and switching, network segmentation, remote access, and
            troubleshooting — including hands-on small-business support through{" "}
            <strong>JR Technical Consulting</strong> (
            <a href="https://jrtechnicalconsulting.com/">jrtechnicalconsulting.com</a>).
          </>,
          <>
            My <a href="/homelab">homelab</a> is a practical environment for testing deployments,
            documenting configurations, managing services, and learning through hands-on
            experimentation. <strong>Homelab in a Box</strong> grew out of it: a self-hosting
            starter for deploying useful Docker services with secure access patterns.
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
        name: "From IT to building software",
        description: (
          <>
            My background started with hands-on IT, networking, troubleshooting, and systems
            administration. Over time, that work expanded into building websites, web
            applications, and technical learning tools — including legal document workflows that
            became QDROdl. Today, I combine those disciplines to create practical software and
            infrastructure solutions, bringing the same attention to reliability, documentation,
            and maintainability to everything I build.
          </>
        ),
      },
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
              href="https://github.com/jdepew88/CCNA-Notes-Bombal-Course"
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
        title: "Web Development",
        description: (
          <>
            JavaScript / TypeScript, HTML / CSS, frontend development, UI and visual design,
            responsive design, WordPress, Git / GitHub, Cloudflare Workers / Pages, and web
            application development.
          </>
        ),
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Cloudflare", icon: "cloudflare" },
          { name: "GitHub", icon: "github" },
        ],
        images: [],
      },
      {
        title: "Technical Education & Projects",
        description: (
          <>
            Interactive learning tools, CCNA networking labs, technical documentation, quizzes and
            assessments, and learning-focused application design.
          </>
        ),
        tags: [{ name: "CCNA Practice Labs", icon: "book" }],
        images: [],
      },
      {
        title: "Systems & Infrastructure",
        description: (
          <>
            Linux / Windows, Docker / Docker Compose, Proxmox / Unraid, pfSense, routing /
            switching / VLANs, network troubleshooting, virtualization and self-hosting, backups and
            recovery, and Cloudflare Tunnels.
          </>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Linux", icon: "terminal" },
          { name: "Networking", icon: "globe" },
        ],
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
