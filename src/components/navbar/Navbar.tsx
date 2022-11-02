import { createStyles, Group, MediaQuery, Paper } from "@mantine/core";
import { NavbarCenter } from "./NavbarCenter";
import { NavbarLeft } from "./NavbarLeft";
import { NavbarRight } from "./NavbarRight";

const PAGES = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/resume",
    title: "Resume",
  },
] as const;

const useStyles = createStyles((theme) => ({
  baseHeader: {
    zIndex: 1,
    minWidth: "400px",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    marginBottom: theme.spacing.xs,
  },
}));

export const Navbar = () => {
  const { classes } = useStyles();
  return (
    <MediaQuery query="print" styles={{ display: "none" }}>
      <Paper className={classes.baseHeader}>
        <Group position="apart" align="center">
          <NavbarLeft />
          <NavbarCenter pages={PAGES} />
          <NavbarRight />
        </Group>
      </Paper>
    </MediaQuery>
  );
};
