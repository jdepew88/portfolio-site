import Image from "next/image";
import { Column, Meta, Row, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import styles from "./work.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth marginBottom="l" paddingX="l">
        <Row fillWidth className={styles.header} border="neutral-alpha-weak">
          <Image
            src="/images/projects/joseph/projects-header.png"
            alt="Projects — Joseph Depew"
            width={1024}
            height={341}
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </Row>
      </Column>
      <Projects compactImages />
    </Column>
  );
}
