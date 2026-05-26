import { Column, Heading, Line, Meta, Row, Schema, Text } from "@once-ui-system/core";
import { EducationEntry } from "@/components/education/EducationEntry";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Education and Certifications – ${person.name}`,
    description:
      "Education and certifications for Joseph Depew: Cal State LA, Pasadena City College, CCNA, and Certified Legal Document Assistant (Los Angeles County).",
    baseURL,
    path: "/education",
  });
}

export default function EducationPage() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24" paddingX="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/education"
        title={`Education and Certifications – ${person.name}`}
        description="Education and certifications for Joseph Depew."
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column gap="12" horizontal="center" align="center">
        <Heading as="h1" variant="display-strong-m" align="center">
          Education and Certifications
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" align="center">
          Formal education and certifications — listed plainly.
        </Text>
      </Column>

      <Column fillWidth gap="24">
        <Row fillWidth>
          <Line />
        </Row>

        <Column gap="16">
          <Heading as="h2" variant="heading-strong-xl">
            Education
          </Heading>

          <Column fillWidth gap="12">
            <EducationEntry
              logo="/images/education/csula.svg"
              logoAlt="Cal State LA logo"
              title="California State University, Los Angeles"
              subtitle="B.A., History — General Option"
              detail="History background with a bias toward clear writing, research, and documentation — skills that carry over into legal-tech workflows, runbooks, and technical notes."
              tags={["History", "Research & writing", "Documentation"]}
            />
            <EducationEntry
              logo="/images/education/pcc.svg"
              logoAlt="Pasadena City College logo"
              title="Pasadena City College"
              subtitle="A.A., Humanities"
            />
            <EducationEntry
              logo="/images/education/pcc.svg"
              logoAlt="Pasadena City College logo"
              title="Pasadena City College"
              subtitle="A.A., Social and Behavior Sciences"
            />
          </Column>
        </Column>

        <Row fillWidth>
          <Line />
        </Row>

        <Column gap="16">
          <Heading as="h2" variant="heading-strong-xl">
            Certifications
          </Heading>

          <Column fillWidth gap="12">
            <EducationEntry
              logo="/images/education/ccna-badge.svg"
              logoAlt="Cisco CCNA logo"
              title="CCNA"
              subtitle="Earned June 2023 · Renewing June 2026"
              detail="Cisco Certified Network Associate — routing, switching, and practical networking fundamentals."
              tags={["Networking", "Routing", "Switching"]}
              link={{
                href: "https://github.com/jdepew88/CCNA-Notes---jdepew88",
                label: "CCNA Notes (GitHub)",
              }}
            />
            <EducationEntry
              logo="/images/education/la-county-seal.png"
              logoAlt="Los Angeles County Registrar-Recorder / County Clerk seal"
              logoTight
              title="Certified Legal Document Assistant"
              subtitle="County of Los Angeles · May 2026"
              detail="Certification for legal document preparation work in California — aligned with QDRO/DRO and practical legal-tech document workflows."
              tags={["Legal tech", "Document preparation", "California"]}
              link={{
                href: "https://qdrodl.app/",
                label: "QDROdl",
              }}
            />
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
