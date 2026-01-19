import { Overlay, Container, Text, Button, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./HeroTitle.module.css";
import { useTranslation } from "react-i18next";

export function HeroTitle() {
  const { t } = useTranslation();
  return (
    <div className={classes.wrapper}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, .75) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>
          {t("hero.greeting")}
          <br />
          {t("hero.andIam")}{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            {t("hero.role")}
          </Text>{" "}
          {t("hero.technologies")}
        </h1>

        <Text className={classes.description}>{t("hero.description")}</Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="https://www.linkedin.com/in/leonardo-sf98/"
            target="_blank"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            leftSection={<IconBrandLinkedin size={20} />}
          >
            {t("hero.cta.linkedin")}
          </Button>

          <Button
            component="a"
            href="https://github.com/leonardosf98"
            target="_blank"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconBrandGithub size={20} />}
          >
            {t("hero.cta.github")}
          </Button>
        </Group>
      </Container>
    </div>
  );
}
