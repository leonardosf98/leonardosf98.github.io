import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import wordle from '../../assets/wordle.png';
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from '@mantine/core';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
  link: string;
}

function Card({ image, title, category, link }: CardProps) {
  return (
    <Paper
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
      <Button
        component="a"
        href={link}
        target="_blank"
        variant="white"
        color="dark"
      >
        Acessar projeto
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hackaton Orange Juice Tech',
    category: 'React - Express.js - MySQL',
    link: 'https://github.com/leonardosf98/backend-hackaton',
  },
  {
    image: wordle,
    title: 'Wordle',
    category: 'Javascript Vanilla - HTML - CSS',
    link: 'https://wordle-leonardosf.vercel.app/',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Sudoku',
    category: 'React',
    link: 'https://sudoku-leonardosf98.vercel.app/',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Diário Alimentar',
    category: 'React',
    link: 'https://diario-alimentar-app.vercel.app/',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
