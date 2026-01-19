import { Avatar, Button, Paper, Text } from "@mantine/core";

type UserInfoActionProps = {
  image: string;
  companyName: string;
  stacks?: string;
  companyLinkedin?: string;
};

export function UserInfoAction({
  image,
  companyName,
  stacks,
  companyLinkedin,
}: UserInfoActionProps) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      bg="var(--mantine-color-body)"
      h="100%"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Avatar src={image} size={120} radius={120} mx="auto" />

      <Text ta="center" fz="lg" fw={500} mt="md">
        {companyName}
      </Text>

      <Text ta="center" c="dimmed" fz="sm">
        {stacks}
      </Text>

      <Button
        onClick={() =>
          companyLinkedin &&
          window.open(companyLinkedin, "_blank", "noopener,noreferrer")
        }
        variant="default"
        fullWidth
        mt="auto"
        disabled={!companyLinkedin}
      >
        LinkedIn
      </Button>
    </Paper>
  );
}
