import {
  Container,
  Group,
  Text,
  ActionIcon,
  rem,
  Menu,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import {
  IconDeviceDesktopCode,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react';

const links = [
  { link: '#about', label: 'Sobre mim' },
  { link: '#skills', label: 'Habilidades' },
  { link: '#projects', label: 'Projetos' },
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
          gap={'md'}
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

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="xs"
                size="sm"
              />
            </Menu.Target>
            <Menu.Dropdown>
              {items.map((item) => {
                return <Menu.Item>{item}</Menu.Item>;
              })}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </header>
  );
}
