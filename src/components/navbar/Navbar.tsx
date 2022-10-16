import { createStyles, Group, Header } from "@mantine/core";
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
  baseHeader: {
    zIndex: 1,
    minWidth: "400px",
  },
}));

type Props = {
  ref: React.RefObject<HTMLDivElement>;
};

const CustomizedNavbar = ({ ref }: Props) => {
  const { classes } = useStyles();
  return (
    <Header height={"4em"} className={classes.baseHeader} ref={ref}>
      <Group position="apart" align="center">
        <NavbarLeft />
        <NavbarCenter pages={PAGES} />
        <NavbarRight />
      </Group>
    </Header>
  );
};

export default CustomizedNavbar;
