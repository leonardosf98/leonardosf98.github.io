import { Carousel } from "@mantine/carousel";
import wordle from "../../assets/wordle.png";
import sudoku from "../../assets/sudoku.png";
import lex from "../../assets/lex.gif";
import agroraculum from "../../assets/agroraculum.png";

import {
  Paper,
  Text,
  Title,
  Button,
  rem,
  Group,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import classes from "./CardsCarousel.module.css";
import { Container } from "@mantine/core";

interface CardProps {
  image: string;
  title: string;
  category: string;
  imagePosition?: string;
  link?: string;
  repo?: string;
}

function Card({ image, title, category, imagePosition, link, repo }: CardProps) {
  const { t } = useTranslation();
  return (
    <Paper
      id="projects"
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.55)), url(${image})`,
        backgroundPosition: imagePosition ?? "center",
      }}
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
        {link && (
          <Button
            component="a"
            href={link}
            target="_blank"
            variant="white"
            color="dark"
          >
            {t("projects.accessProject")}
          </Button>
        )}
        {repo && (
          <Button
            component="a"
            href={repo}
            target="_blank"
            variant="white"
            color="dark"
          >
            {t("projects.accessRepo")}
          </Button>
        )}
      </Group>
    </Paper>
  );
}

const data = [
  {
    image: agroraculum,
    title: "AgrOraculum",
    category: "Vue 3 - TypeScript - FastAPI - PostgreSQL",
    imagePosition: "center top",
    link: "https://agroraculum-frontend.vercel.app/login?redirect=/",
  },
  {
    image: lex,
    title: "AWS Lex & Python",
    category: "Python - Vue - AWS",
    repo: "https://github.com/leonardosf98/lex_python",
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
];

export function CardsCarousel() {
  const { t } = useTranslation();
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
        slidesToScroll={1}
        loop
      >
        {slides}
      </Carousel>
    </Container>
  );
}
