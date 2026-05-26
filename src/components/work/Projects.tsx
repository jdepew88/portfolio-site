import { getPosts } from "@/utils/utils";
import { externalProjects } from "@/resources/github-projects";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  /** Shrink project images by 33% (used on /work). */
  compactImages?: boolean;
}

type ProjectEntry = {
  slug: string;
  title: string;
  summary: string;
  images: string[];
  link: string;
  publishedAt: string;
  content: string;
  caseStudyHref?: string;
  avatars: { src: string }[];
};

export function Projects({ range, exclude, compactImages = false }: ProjectsProps) {
  const caseStudyPosts = getPosts(["src", "app", "work", "projects"]);

  const allProjects: ProjectEntry[] = [
    ...caseStudyPosts.map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      summary: post.metadata.summary,
      images: post.metadata.images,
      link: post.metadata.link || "",
      publishedAt: post.metadata.publishedAt,
      content: post.content,
      caseStudyHref: `/work/${post.slug}`,
      avatars: post.metadata.team?.map((member) => ({ src: member.avatar })) || [],
    })),
    ...externalProjects.map((project) => ({
      slug: project.slug,
      title: project.title,
      summary: project.summary,
      images: project.images,
      link: project.link,
      publishedAt: project.publishedAt,
      content: "",
      caseStudyHref: undefined,
      avatars: [],
    })),
  ];

  let filtered = allProjects;
  if (exclude && exclude.length > 0) {
    filtered = filtered.filter((project) => !exclude.includes(project.slug));
  }

  const sorted = filtered.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const displayed = range ? sorted.slice(range[0] - 1, range[1] ?? sorted.length) : sorted;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayed.map((project, index) => (
        <ProjectCard
          priority={index < 2}
          key={project.slug}
          href={project.caseStudyHref || project.link}
          caseStudyHref={project.caseStudyHref}
          images={project.images}
          title={project.title}
          description={project.summary}
          content={project.content}
          avatars={project.avatars}
          link={project.link}
          compactImages={compactImages}
        />
      ))}
    </Column>
  );
}
