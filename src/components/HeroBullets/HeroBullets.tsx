import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Transition,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./HeroBullets.module.css";
import { useToggle } from "@mantine/hooks";
import programming from "./programming.svg";
import interview from "./interview.svg";
import { useState } from "react";

export function HeroBullets() {
  const nutrition = {
    title: "Abordagem",
    titleSpan: "humana e individual",
    titleLastPart: "da nutrição",
    subtitle:
      " Escuta ativa, foco no cliente e trabalho em equipe são algumas das habilidades que desenvolvi ao longo da minha carreira como nutricionista clínico",
    bulletOneTitle: "Formação",
    bulletOneContent: " - Graduado na Universidade Federal de São Paulo",
    bulletTwoTitle: "Educação",
    bulletTwoContent:
      " – Meu trabalho como nutricionista envolve educaros pacientes sobre as escolhas que eles fazem",
    bulletThreeTitle: "Trabalho em equipe",
    bulletThreeContent:
      " - Muitas vezes a atuação envolve contato com outros profissionais da área da saúde",
    image: interview,
    buttonOneState: "default",
    buttonTwoState: "filled",
  };
  const tech = {
    title: "Um novo ",
    titleSpan: "desafio",
    titleLastPart: "em uma nova área",
    subtitle:
      "Sempre fui muito curioso quanto ao funcionamento do computador que tive desde pequeno em casa, meus pais odiavam quando eu o desmontava. Hoje me apoiam na carreira.",
    bulletOneTitle: "Formação ",
    bulletOneContent:
      " - Graduando em Sistemas para Internet na Faculdade de Tecnologia do Estado de São Paulo (FATEC)",
    bulletTwoTitle: "Facilidade em ensinar",
    bulletTwoContent:
      " - Queria passar o que sei para os outros e minha primeira oportunidade foi na monitoria de lógica de programação da faculdade.",
    bulletThreeTitle: "Trabalho em Equipe",
    bulletThreeContent:
      " - Colaborei em projetos de desenvolvimento de software, interagindo com colegas e profissionais para alcançar soluções eficientes e inovadoras.",
    image: programming,
    buttonOneState: "filled",
    buttonTwoState: "default",
  };
  const handleClick = () => {
    setShow(false);
    console.log(show);
    toggle();
    setTimeout(() => {
      setShow(true);
    }, 200);
  };

  const [info, toggle] = useToggle([tech, nutrition]);
  const [show, setShow] = useState(true);

  return (
    <Container size="lg">
      <Transition
        mounted={show}
        transition="slide-right"
        duration={300}
        timingFunction="ease"
        keepMounted
      >
        {(styles) => {
          return (
            <div style={styles} className={classes.inner} id="about">
              <div className={classes.content}>
                <Title className={classes.title}>
                  {info.title}{" "}
                  <span className={classes.highlight}>{info.titleSpan}</span>{" "}
                  <br /> {info.titleLastPart}
                </Title>
                <Text c="dimmed" mt="md">
                  {info.subtitle}
                </Text>

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

                <Group mt={30}>
                  <Button
                    variant={info.buttonOneState}
                    radius="xl"
                    size="md"
                    className={classes.control}
                    onClick={() => handleClick()}
                  >
                    Tecnologia
                  </Button>
                  <Button
                    variant={info.buttonTwoState}
                    radius="xl"
                    size="md"
                    className={classes.control}
                    onClick={() => handleClick()}
                    id="skills"
                  >
                    Saúde
                  </Button>
                </Group>
              </div>
              <Image src={info.image} className={classes.image} />
            </div>
          );
        }}
      </Transition>
    </Container>
  );
}
