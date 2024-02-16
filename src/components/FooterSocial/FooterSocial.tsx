import { Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconDeviceDesktopCode,
} from '@tabler/icons-react';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <IconDeviceDesktopCode size={28} />
          <Text>leosouzanutri.dev</Text>
        </Group>
        <Group
          gap={'md'}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.linkedin.com/in/leonardo-sf98/"
          >
            <IconBrandLinkedin
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/leonardosf98"
          >
            <IconBrandGithub
              style={{ width: rem(30), height: rem(30) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
