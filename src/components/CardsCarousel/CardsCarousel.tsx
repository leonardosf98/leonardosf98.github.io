import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import wordle from "../../assets/wordle.png";
import sudoku from "../../assets/sudoku.png";
import calculadora from "../../assets/calculadora.png";
import tasklist from "../../assets/api-task.png";

import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Group,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import classes from "./CardsCarousel.module.css";
import { Container } from "@mantine/core";
import { t } from "i18next";

interface CardProps {
  image: string;
  title: string;
  category: string;
  link: string;
  repo: string;
}

function Card({ image, title, category, link, repo }: CardProps) {
  const { t } = useTranslation();
  return (
    <Paper
      id="projects"
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Group>
        <Button
          component="a"
          href={link}
          target="_blank"
          variant="white"
          color="dark"
        >
          {t("projects.accessProject")}
        </Button>
        <Button
          component="a"
          href={repo}
          target="_blank"
          variant="white"
          color="dark"
        >
          {t("projects.accessRepo")}
        </Button>
      </Group>
    </Paper>
  );
}

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1503980850968-b7c3b4af0e05?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hackaton Orange Juice Tech",
    category: "React - Express.js - MySQL",
    link: "https://orange-portifolio-5ecc222b61eb.herokuapp.com/api",
    repo: "https://github.com/leonardosf98/backend-hackaton",
  },
  {
    image: wordle,
    title: "Wordle",
    category: "Javascript Vanilla - HTML - CSS",
    link: "https://wordle-leonardosf.vercel.app/",
    repo: "https://github.com/leonardosf98/wordle",
  },
  {
    image: sudoku,
    title: "Sudoku",
    category: "React",
    link: "https://sudoku-leonardosf98.vercel.app/",
    repo: "https://github.com/leonardosf98/sudoku",
  },
  {
    image: tasklist,
    title: "API Lista de tarefas",
    category: "Java - Spring - H2",
    link: "https://github.com/leonardosf98/todolist-backend/",
    repo: "https://github.com/leonardosf98/todolist-backend",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503980850968-b7c3b4af0e05?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Diário Alimentar",
    category: "React",
    link: "https://diario-alimentar-app.vercel.app/",
    repo: "https://github.com/leonardosf98/diario-alimentar-app",
  },
  {
    image: calculadora,
    title: "Calculadora",
    category: "HTML - Javascript Vanilla - CSS",
    link: "https://calculadora-simples-five.vercel.app/",
    repo: "https://github.com/leonardosf98/calculadora-simples",
  },
];

export function CardsCarousel() {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="xl" mb={rem(36)}>
      <Title ta={"center"} order={2} fw={600} mb={"lg"}>
        {t("projects.title")}
      </Title>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        loop
      >
        {slides}
      </Carousel>
    </Container>
  );
}
