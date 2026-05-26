import { Column, Meta, Schema } from "@once-ui-system/core";
import { TerminalWindow } from "@/components/bio/TerminalWindow";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Bio – ${person.name}`,
    description:
      "Command-line bio for Joseph Depew — systems, legal-tech, infrastructure, and automation. Type help for commands.",
    baseURL,
    path: "/bio",
  });
}

export default function BioPage() {
  return (
    <Column maxWidth="l" gap="l" paddingTop="24" paddingX="l" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/bio"
        title={`Bio – ${person.name}`}
        description="Interactive command-line bio for Joseph Depew."
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <TerminalWindow src="/bio/whois-terminal.html?v=24" />
    </Column>
  );
}
