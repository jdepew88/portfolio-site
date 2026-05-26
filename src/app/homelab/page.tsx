import { Column, Heading, Line, Media, Meta, Row, Schema, SmartLink, Tag, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Homelab – ${person.name}`,
    description:
      "Practical homelab setup work: firewalling, VLANs, virtualization, self-hosting, reverse proxy, tunnels, backups, and repeatable documentation.",
    baseURL,
    path: "/homelab",
  });
}

export default function HomelabPage() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/homelab"
        title={`Homelab – ${person.name}`}
        description="Practical homelab setup work: firewalling, VLANs, virtualization, self-hosting, reverse proxy, tunnels, backups, and repeatable documentation."
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column gap="12" paddingX="l" horizontal="center" align="center">
        <Heading as="h1" variant="display-strong-m">
          Homelab
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" align="center">
          I’m building a lab that’s useful, recoverable, and easy to explain. The goal isn’t a “cool rack” — it’s
          repeatable setups, sane segmentation, and backups that actually restore.
        </Text>
      </Column>

      <Row fillWidth paddingX="l" horizontal="center" wrap gap="8">
        <Tag size="l">pfSense</Tag>
        <Tag size="l">VLANs</Tag>
        <Tag size="l">Proxmox</Tag>
        <Tag size="l">Unraid</Tag>
        <Tag size="l">Docker</Tag>
        <Tag size="l">Traefik</Tag>
        <Tag size="l">Cloudflare Tunnels</Tag>
        <Tag size="l">Backups</Tag>
      </Row>

      <Column fillWidth gap="16" paddingX="l">
        <Row fillWidth>
          <Line />
        </Row>
        <Heading as="h2" variant="heading-strong-xl">
          Diagram
        </Heading>

        <Media
          enlarge
          radius="l"
          border="neutral-alpha-weak"
          alt="Homelab network diagram — VLANs, pfSense, Proxmox, Unraid, and services"
          src="/images/homelab/homelab-diagram-full.png"
          aspectRatio="original"
          objectFit="contain"
          unoptimized
          sizes="(max-width: 960px) 100vw, 960px"
        />

        <Text variant="body-default-m" onBackground="neutral-weak">
          This is a living document. I’m gradually turning the lab into a set of “known-good” deployable patterns.
        </Text>

        <Row fillWidth>
          <Line />
        </Row>

        <Heading as="h2" variant="heading-strong-xl">
          Documenting it
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          I’m packaging the repeatable parts into{" "}
          <SmartLink href="https://homelabinabox.app/" suffixIcon="arrowUpRightFromSquare">
            Homelab in a Box
          </SmartLink>
          : practical instructions for Debian/Ubuntu, SSH keys, Docker Compose, Cloudflare, Traefik, and secure
          access.
        </Text>
      </Column>
    </Column>
  );
}
