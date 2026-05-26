import { Column, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import styles from "./EducationEntry.module.scss";

export type EducationEntryProps = {
  title: string;
  subtitle: string;
  detail?: string;
  tags?: string[];
  logo?: string;
  logoAlt?: string;
  link?: { href: string; label: string };
};

export function EducationEntry({
  title,
  subtitle,
  detail,
  tags,
  logo,
  logoAlt,
  link,
}: EducationEntryProps) {
  return (
    <Column
      className={styles.card}
      fillWidth
      gap="8"
      padding="l"
      radius="l"
      border="neutral-alpha-weak"
      background="neutral-alpha-weak"
    >
      <div className={styles.header}>
        {logo && (
          <div className={styles.logoRing}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logoImg} src={logo} alt={logoAlt ?? title} />
          </div>
        )}
        <Column className={styles.body} gap="8">
          <Text variant="heading-strong-l">{title}</Text>
          <Text variant="body-default-m" onBackground="brand-weak">
            {subtitle}
          </Text>
        </Column>
      </div>
      {detail && (
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          {detail}
        </Text>
      )}
      {tags && tags.length > 0 && (
        <Row wrap gap="8" paddingTop="8">
          {tags.map((tag) => (
            <Tag key={tag} size="l">
              {tag}
            </Tag>
          ))}
        </Row>
      )}
      {link && (
        <SmartLink href={link.href} suffixIcon="arrowUpRightFromSquare">
          <Text variant="body-default-s">{link.label}</Text>
        </SmartLink>
      )}
    </Column>
  );
}
