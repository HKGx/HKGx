import { ActionIcon, Container, Dialog, MediaQuery } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useRef } from "react";
import { BsArrowUp } from "react-icons/bs";
import Navbar from "./navbar";

type Props = {
  children: JSX.Element;
};

const Page = ({ children }: Props) => {
  const [scroll] = useWindowScroll();
  const navbarRef = useRef<HTMLDivElement>(null);
  const shouldShowScrollToTop =
    scroll.y > (navbarRef.current?.clientHeight ?? 0);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Container fluid>
      <Navbar ref={navbarRef} />
      <Container px="lg">{children}</Container>{" "}
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Dialog
          opened={shouldShowScrollToTop}
          style={{
            borderRadius: "50%",
            width: "4em",
            height: "4em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActionIcon onClick={scrollToTop} size="xl">
            <BsArrowUp />
          </ActionIcon>
        </Dialog>
      </MediaQuery>
    </Container>
  );
};

export default Page;
