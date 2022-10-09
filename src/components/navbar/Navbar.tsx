import { Container, createStyles, Header } from "@mantine/core";
import NavbarCenter from "./NavbarCenter";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

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
  headerRoot: {
    position: "relative",
    zIndex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
}));

const CustomizedNavbar = () => {
  const { classes } = useStyles();
  return (
    <Header height={"4em"} className={classes.headerRoot}>
      <Container className={classes.header}>
        <NavbarLeft />
        <NavbarCenter pages={PAGES} />
        <NavbarRight />
      </Container>
    </Header>
  );
};

export default CustomizedNavbar;
