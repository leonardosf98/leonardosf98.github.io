import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IconGitCommit,
  IconLanguage,
  IconBrandNodejs,
  IconBrandVue,
  IconBrandPython,
  IconBrandNextjs,
  IconBrandAws,
  IconExternalLink,
} from "@tabler/icons-react";

import classes from "./ActionsGrid.module.css";
import { SiGooglecloud, SiSpringboot } from "react-icons/si";

const mockdata = [
  { id: "vue", icon: IconBrandVue, color: "indigo" },
  { id: "next", icon: IconBrandNextjs, color: "violet" },
  { id: "git", icon: IconGitCommit, color: "blue" },
  { id: "gcp", icon: SiGooglecloud, color: "violet" },
  { id: "aws", icon: IconBrandAws, color: "red" },
  { id: "english", icon: IconLanguage, color: "cyan" },
  { id: "java", icon: SiSpringboot, color: "green" },
  { id: "node", icon: IconBrandNodejs, color: "orange" },
  { id: "python", icon: IconBrandPython, color: "indigo" },
];

export function ActionsGrid() {
  const theme = useMantineTheme();
  const { t } = useTranslation();

  const certificateUrl =
    "https://www.credly.com/badges/b15952a6-dbce-47ba-8e82-e38115701c0b/public_url";

  const items = mockdata.map((item) => {
    const title = t(`skills.items.${item.id}`);
    const isAws = item.id === "aws";

    return (
      <UnstyledButton
        key={item.id}
        component={isAws ? "a" : "button"}
        href={isAws ? certificateUrl : undefined}
        target={isAws ? "_blank" : undefined}
        rel={isAws ? "noopener noreferrer" : undefined}
        className={classes.item}
      >
        <item.icon color={theme.colors[item.color][6]} size="2rem" />

        <Text size="xs" mt={7}>
          {title}
        </Text>

        {isAws && (
          <IconExternalLink size={14} className={classes.externalIcon} />
        )}
      </UnstyledButton>
    );
  });

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>{t("skills.title")}</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
