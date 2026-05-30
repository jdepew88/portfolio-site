import Image from "next/image";
import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
  SmartLink,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";

function QdrodlBrand() {
  return (
    <>
      <span style={{ color: "#ffffff" }}>QDRO</span>
      <span style={{ color: "#0f2847" }}>dl</span>
    </>
  );
}

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}${home.image}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="l">
        <Column maxWidth="s" horizontal="center" align="center" gap="m">
          <RevealFx translateY={2} fillWidth horizontal="center" paddingBottom="8">
            <Image
              src="/images/logo-jr.webp"
              alt="JR Technical Consulting"
              width={160}
              height={160}
              sizes="160px"
              priority
              unoptimized
              style={{
                display: "block",
                width: "8rem",
                height: "auto",
                maxWidth: "100%",
                borderRadius: "12px",
                boxShadow: "0 12px 32px rgba(15, 40, 80, 0.18)",
              }}
            />
          </RevealFx>

          <RevealFx translateY={4} fillWidth horizontal="center" paddingBottom="8">
            <Heading wrap="balance" variant="display-strong-l">
              Joseph R. Depew
            </Heading>
          </RevealFx>

          <RevealFx translateY={6} delay={0.1} fillWidth horizontal="center">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              Builder · IT generalist · Legal-tech · Homelab
            </Text>
          </RevealFx>

          <RevealFx translateY={8} delay={0.2} fillWidth horizontal="center" paddingBottom="8">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l" align="center">
              I build practical web, infrastructure, automation, and homelab projects — from legal-tech
              document workflows to Chrome extensions, Docker-based self-hosting, and network lab
              documentation.
            </Text>
          </RevealFx>

          <RevealFx delay={0.3} fillWidth horizontal="center">
            <Row wrap gap="12" horizontal="center">
              <Button data-border="rounded" href="/work" variant="primary" size="m" weight="default">
                View Projects
              </Button>
              <Button
                data-border="rounded"
                href="https://github.com/jdepew88/"
                variant="secondary"
                size="m"
                weight="default"
                prefixIcon="github"
              >
                GitHub
              </Button>
              <Button
                data-border="rounded"
                href="https://www.linkedin.com/in/joseph-depew-857459123/"
                variant="secondary"
                size="m"
                weight="default"
                prefixIcon="linkedin"
              >
                LinkedIn
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY={10} delay={0.45} fillWidth>
        <SmartLink href="/bio" fillWidth>
          <Column
            fillWidth
            border="neutral-alpha-weak"
            background="neutral-alpha-weak"
            radius="l"
            padding="l"
            gap="12"
            style={{
              backdropFilter: "blur(var(--static-space-1))",
              cursor: "pointer",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
          >
            <Row gap="8" vertical="center" horizontal="between" fillWidth>
              <Row gap="8" vertical="center">
                <Icon name="terminal" onBackground="brand-weak" />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  terminal
                </Text>
              </Row>
              <Text variant="label-default-s" onBackground="brand-weak">
                Open bio →
              </Text>
            </Row>
            <Text variant="code-default-s">
              $ whoami
              {"\n"}Joseph Depew
              {"\n\n"}$ focus
              {"\n"}web apps · Chrome extensions · homelab · legal-tech · automation
              {"\n\n"}$ currently_building
              {"\n"}
              <QdrodlBrand />
              {" · Homelab in a Box · TubeStack · TabStack"}
            </Text>
          </Column>
        </SmartLink>
      </RevealFx>

      <RevealFx translateY={12} delay={0.55} fillWidth>
        <Column fillWidth gap="16">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="12" wrap paddingX="l" horizontal="center">
            <SmartLink href="/bio">
              <Row
                border="neutral-alpha-weak"
                background="page"
                radius="m"
                paddingX="16"
                paddingY="12"
                gap="8"
                vertical="center"
              >
                <Icon name="terminal" onBackground="brand-weak" />
                <Text variant="body-default-s">Command Line Bio</Text>
              </Row>
            </SmartLink>
            <SmartLink href="/homelab">
              <Row
                border="neutral-alpha-weak"
                background="page"
                radius="m"
                paddingX="16"
                paddingY="12"
                gap="8"
                vertical="center"
              >
                <Icon name="server" onBackground="brand-weak" />
                <Text variant="body-default-s">Homelab Diagram</Text>
              </Row>
            </SmartLink>
            <SmartLink href="https://jrtechnicalconsulting.com/">
              <Row
                border="neutral-alpha-weak"
                background="page"
                radius="m"
                paddingX="16"
                paddingY="12"
                gap="8"
                vertical="center"
              >
                <Icon name="arrowUpRightFromSquare" onBackground="brand-weak" />
                <Text variant="body-default-s">JR Technical Consulting</Text>
              </Row>
            </SmartLink>
            <SmartLink href="https://qdrodl.app/">
              <Row
                border="neutral-alpha-weak"
                background="page"
                radius="m"
                paddingX="16"
                paddingY="12"
                gap="8"
                vertical="center"
              >
                <Icon name="arrowUpRightFromSquare" onBackground="brand-weak" />
                <Text variant="body-default-s" as="span">
                  <QdrodlBrand />
                </Text>
              </Row>
            </SmartLink>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      </RevealFx>

      <Column fillWidth gap="16">
        <Heading as="h2" variant="display-strong-xs" wrap="balance" paddingX="l">
          Projects
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-m" paddingX="l">
          A few things I’ve shipped or I’m actively building.
        </Text>
        <RevealFx translateY={16} delay={0.65}>
          <Projects />
        </RevealFx>
      </Column>
    </Column>
  );
}
