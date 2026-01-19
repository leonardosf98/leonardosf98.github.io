import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";

import { FooterSocial } from "./components/FooterSocial/FooterSocial";
import { Container, MantineProvider } from "@mantine/core";
import { HeaderSimple } from "./components/HeaderSimple/HeaderSimple";
import { HeroTitle } from "./components/HeroTitle/HeroTitle";
import { theme } from "./theme";
import { CardsCarousel } from "./components/CardsCarousel/CardsCarousel";
import { ActionsGrid } from "./components/ActionsGrid/ActionsGrid";
import { HeroBullets } from "./components/HeroBullets/HeroBullets";
import { GridAsymmetrical } from "./components/GridsAsymmetrical/GridsAsymmetrical";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderSimple />
      <HeroTitle />
      <Container size={"xl"}>
        <HeroBullets />
        <ActionsGrid />
        <GridAsymmetrical />
        <CardsCarousel />
      </Container>
      <FooterSocial />
    </MantineProvider>
  );
}
