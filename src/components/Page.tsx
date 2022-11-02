import {
  ActionIcon,
  Affix,
  Container,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { BsArrowUp } from "react-icons/bs";
import { Navbar } from "./navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => {
  const [scroll] = useWindowScroll();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Container fluid>
      <Navbar />
      <Container px="lg">{children}</Container>{" "}
      <Affix
        position={{
          bottom: 20,
          right: 20,
        }}
      >
        <Transition transition="pop" mounted={scroll.y > 0}>
          {(styles) => (
            <ActionIcon
              variant="filled"
              onClick={scrollToTop}
              size="xl"
              style={styles}
            >
              <BsArrowUp />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </Container>
  );
};
