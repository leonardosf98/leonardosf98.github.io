import {
  Container,
  Group,
  Text,
  ActionIcon,
  rem,
  Menu,
  Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import {
  IconDeviceDesktopCode,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export function HeaderSimple() {
  const { t, i18n } = useTranslation();
  const [opened, { toggle }] = useDisclosure(false);

  const linksLocal = [
    { link: "#about", label: t("header.links.about") },
    { link: "#skills", label: t("header.links.skills") },
    { link: "#projects", label: t("header.links.projects") },
  ];

  const items = linksLocal.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={toggle}
    >
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

          <Menu shadow="md" width={150}>
            <Menu.Target>
              <ActionIcon
                size="lg"
                color="gray"
                variant="subtle"
                aria-label="language"
              >
                <span style={{ fontSize: 18 }}>
                  {i18n.language === "pt"
                    ? "🇧🇷"
                    : i18n.language === "es"
                      ? "🇪🇸"
                      : "🇬🇧"}
                </span>
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => i18n.changeLanguage("en")}>
                🇬🇧 English
              </Menu.Item>
              <Menu.Item onClick={() => i18n.changeLanguage("pt")}>
                🇧🇷 Português
              </Menu.Item>
              <Menu.Item onClick={() => i18n.changeLanguage("es")}>
                🇪🇸 Español
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu
            shadow="md"
            width={200}
            closeOnClickOutside={true}
            closeOnItemClick={true}
            onClose={toggle}
          >
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
                return (
                  <Menu.Item key={String(item.props?.href)}>{item}</Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </header>
  );
}
