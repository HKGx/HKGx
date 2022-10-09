import { Container } from "@mantine/core";
import Navbar from "./navbar";

type Props = {
  component: JSX.Element;
};

const Page = ({ component }: Props) => {
  return (
    <Container fluid>
      <Navbar />
      {component}
    </Container>
  );
};

export default Page;
