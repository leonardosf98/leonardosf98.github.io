import {
  Image,
  Container,
  Title,
  Flex,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./HeroBullets.module.css";
import programming from "./programming.svg";

export function HeroBullets() {
  const info = {
    title: "Desenvolvedor Full Stack ",
    titleSpan: "com foco em Backend",
    titleLastPart: " (Java, Node.js, Python)",

    bulletOneTitle: "Experiência e adaptabilidade",
    bulletOneContent:
      " - Atuei em projetos diversos, de sistemas legados a soluções modernas com IA. Domino Java, Python, Jenkins, Vue 2 e GCP, com rápida adaptação a diferentes stacks.",

    bulletTwoTitle: "Formação",
    bulletTwoContent:
      " - Graduando em Sistemas para Internet (FATEC). Fui monitor de Lógica de Programação por dois semestres.",

    bulletThreeTitle: "IA e entregas com impacto",
    bulletThreeContent:
      " - Desenvolvi soluções com IA usando Python e GCP, focadas em otimização de processos. Entrego sistemas completos com impacto direto para o cliente.",

    image: programming,
  };

  return (
    <Container size="lg">
      <Flex direction="column" align={"center"} mb={80}>
        <div className={classes.inner} id="about">
          <div className={classes.content}>
            <Title className={classes.title}>
              {info.title}{" "}
              <span className={classes.highlight}>{info.titleSpan}</span> <br />{" "}
              {info.titleLastPart}
            </Title>
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>{info.bulletOneTitle}</b>
                {info.bulletOneContent}
              </List.Item>
              <List.Item>
                <b>{info.bulletTwoTitle}</b>
                {info.bulletTwoContent}
              </List.Item>
              <List.Item>
                <b>{info.bulletThreeTitle}</b>
                {info.bulletThreeContent}
              </List.Item>
            </List>
          </div>
          <Image src={info.image} className={classes.image} />
        </div>
      </Flex>
    </Container>
  );
}
