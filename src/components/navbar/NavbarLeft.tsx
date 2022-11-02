import { Code, MediaQuery, Title } from "@mantine/core";

export const NavbarLeft = () => (
  <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
    <Title order={2}>
      hkg does {""}
      <Code
        sx={{
          fontSize: "1em", // ensure the size is same as parent's
        }}
      >
        DEV
      </Code>
    </Title>
  </MediaQuery>
);
