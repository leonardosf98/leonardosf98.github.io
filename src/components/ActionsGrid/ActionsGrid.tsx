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
  IconGitCommit,
  IconLanguage,
  IconBrandNodejs,
  IconBrandVue,
  IconBrandPython,
} from "@tabler/icons-react";

import classes from "./ActionsGrid.module.css";
import { SiJenkins, SiPostgresql, SiSpringboot } from "react-icons/si";

const mockdata = [
  { title: "Vue", icon: IconBrandVue, color: "indigo" },
  { title: "React", icon: IconBrandReact, color: "violet" },
  { title: "Git e Github", icon: IconGitCommit, color: "blue" },
  { title: "Jenkins", icon: SiJenkins, color: "violet" },
  { title: "Postgres", icon: SiPostgresql, color: "red" },
  { title: "Inglês", icon: IconLanguage, color: "cyan" },
  { title: "Java e Spring", icon: SiSpringboot, color: "green" },
  { title: "Node.js (Nest.js)", icon: IconBrandNodejs, color: "orange" },
  { title: "Pyhton (FastAPI)", icon: IconBrandPython, color: "indigo" },
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
