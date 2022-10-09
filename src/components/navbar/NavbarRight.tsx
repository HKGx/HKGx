import { Group } from "@mantine/core";
import DarkModeSwitch from "./DarkModeSwitch";
import SocialLink from "./SocialLink";

const NavbarRight = () => (
  <Group>
    <SocialLink iconType="github" />
    <SocialLink iconType="linkedin" />
    <DarkModeSwitch />
  </Group>
);

export default NavbarRight;
