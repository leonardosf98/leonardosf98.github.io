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
import { useTranslation } from "react-i18next";

export function HeroBullets() {
  const { t } = useTranslation();

  return (
    <Container size="lg">
      <Flex direction="column" align={"center"} mb={80}>
        <div className={classes.inner} id="about">
          <div className={classes.content}>
            <Title className={classes.title}>
              {t("hero.title")}{" "}
              <span className={classes.highlight}>{t("hero.titleSpan")}</span>{" "}
              <br /> {t("hero.titleLastPart")}
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
                <b>{t("hero.bulletOneTitle")} - </b>
                {t("hero.bulletOneContent")}
              </List.Item>
              <List.Item>
                <b>{t("hero.bulletTwoTitle")} - </b>
                {t("hero.bulletTwoContent")}
              </List.Item>
              <List.Item>
                <b>{t("hero.bulletThreeTitle")} - </b>
                {t("hero.bulletThreeContent")}
              </List.Item>
            </List>
          </div>
          <Image src={programming} className={classes.image} />
        </div>
      </Flex>
    </Container>
  );
}
