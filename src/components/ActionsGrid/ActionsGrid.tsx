import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Group,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconGitCommit,
  IconBrandMysql,
  IconLanguage,
  IconFileTypeHtml,
  IconBrandTypescript,
  IconBrandNodejs,
  IconTerminal,
  IconUsersGroup,
  IconSpeakerphone,
} from "@tabler/icons-react";

import classes from "./ActionsGrid.module.css";
import { SiNestjs } from "react-icons/si";

const mockdata = [
  { title: "Javascript", icon: IconBrandJavascript, color: "indigo" },
  { title: "React", icon: IconBrandReact, color: "violet" },
  { title: "Git e Github", icon: IconGitCommit, color: "blue" },
  { title: "Colaboração em equipe", icon: IconUsersGroup, color: "violet" },
  { title: "HTML e CSS", icon: IconFileTypeHtml, color: "green" },
  { title: "MySQL", icon: IconBrandMysql, color: "teal" },
  { title: "Inglês", icon: IconLanguage, color: "cyan" },
  { title: "NestJS", icon: SiNestjs, color: "pink" },
  { title: "TypeScript", icon: IconBrandTypescript, color: "red" },
  { title: "Node.js", icon: IconBrandNodejs, color: "orange" },
  { title: "Express.js", icon: IconTerminal, color: "indigo" },
  { title: "Comunicação efetiva", icon: IconSpeakerphone, color: "cyan" },
];

export function ActionsGrid() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>Habilidades</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
