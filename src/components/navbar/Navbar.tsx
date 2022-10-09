import { Navbar } from "@mantine/core";
import { NavLink } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
import SocialLink from "./SocialLink";

const NavbarRightPart = () => (
  <Navbar.Section>
    <SocialLink iconType="github" />
    <SocialLink iconType="linkedin" />
    <DarkModeSwitch />
  </Navbar.Section>
);

const CustomizedNavbar = () => {
  return (
    <Navbar withBorder fixed={false} position={{ top: 0, left: 0 }}>
      <Navbar.Section>hkg does dev</Navbar.Section>
      <Navbar.Section grow>
        <NavLink to="/"> Main </NavLink>
        <NavLink to="/resume"> Resume </NavLink>
      </Navbar.Section>
      <NavbarRightPart />
    </Navbar>
  );
};

export default CustomizedNavbar;
