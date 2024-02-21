import { Container, Group, Burger, Text, ActionIcon, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import {
  IconDeviceDesktopCode,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

const links = [
  { link: "#about", label: "Sobre mim" },
  { link: "#skills", label: "Habilidades" },
  { link: "#projects", label: "Projetos" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
          <IconDeviceDesktopCode size={28} />
          <Text>leosouzanutri.dev</Text>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group
          gap={"md"}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/leonardo-sf98/"
          >
            <IconBrandLinkedin
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/leonardosf98"
          >
            <IconBrandGithub
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
