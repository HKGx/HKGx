import { Group } from "@mantine/core";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { SocialLink } from "./SocialLink";

export const NavbarRight = () => (
  <Group>
    <SocialLink iconType="github" />
    <SocialLink iconType="linkedin" />
    <DarkModeSwitch />
  </Group>
);
