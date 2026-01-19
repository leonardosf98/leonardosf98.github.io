import { Container, Grid, rem, Title } from "@mantine/core";
import { UserInfoAction } from "../UserInfoAction/UserInfoAction";
import { t } from "i18next";
import fcamaraImg from "./fcamara.png";
import distritoImg from "./distrito.png";
import intelipostImg from "./intelipost.png";
import almapImg from "./almap.png";

const data = [
  {
    image: fcamaraImg,
    companyName: "FCamara",
    stacks: "Python (FastAPI), Svelte, React, Azure, Github Actions",
    companyLinkedin: "https://www.linkedin.com/company/grupofcamara/",
  },
  {
    image: distritoImg,
    companyName: "Distrito",
    stacks: "Next.js, Python, GCP, Github Actions" + "\n",
    companyLinkedin: "https://www.linkedin.com/company/distrito-me/",
  },
  {
    image: intelipostImg,
    companyName: "Intelipost",
    stacks: "Vue, Jenkins, AWS, Java",
    companyLinkedin: "https://www.linkedin.com/company/intelipost/",
  },
  {
    image: almapImg,
    companyName: "Almap",
    stacks: "Next.js, Python",
    companyLinkedin: "https://www.linkedin.com/company/almapbbdo/",
  },
];

export function GridAsymmetrical() {
  return (
    <Container size="xl" mb={rem(36)}>
      <Title ta={"center"} order={2} fw={600} mb={"lg"}>
        {t("companies.title")}
      </Title>
      <Grid>
        {data.map((item, idx) => (
          <Grid.Col key={idx} span={{ base: 6, xs: 3 }}>
            <UserInfoAction
              image={item.image}
              companyName={item.companyName}
              stacks={item.stacks}
              companyLinkedin={item.companyLinkedin}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
