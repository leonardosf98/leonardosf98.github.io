import { Overlay, Container, Text, Button, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import classes from "./HeroTitle.module.css";

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, .75) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>
          Oi! Eu sou o Léo
          <br />e sou{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            desenvolvedor full stack
          </Text>{" "}
          e{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            nutricionista
          </Text>{" "}
          .
        </h1>

        <Text className={classes.description}>
          Vamos trabalhar juntos? Conecta comigo no LinkedIn!
        </Text>

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
            Linkedin
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
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
