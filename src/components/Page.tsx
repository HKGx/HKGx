import { Container } from "@mantine/core";
import Navbar from "./navbar";

type Props = {
  children: JSX.Element;
};

const Page = ({ children }: Props) => {
  return (
    <Container fluid>
      <Navbar />
      <Container px="lg">{children}</Container>
    </Container>
  );
};

export default Page;
