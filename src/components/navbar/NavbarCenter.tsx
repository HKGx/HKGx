import { Anchor, Group, Title } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

type PageAnchorProps = {
  readonly link: `/${string}`;
  readonly title: string;
};

const NavbarPageLink = ({
  link,
  title,
  pathname,
}: PageAnchorProps & { pathname: string }) => {
  const order = pathname === link ? 1 : 2;
  const color = pathname === link ? "white" : undefined;
  return (
    <Anchor component={Link} to={link} >
      <Title order={order} color={color}>
        {title}
      </Title>
    </Anchor>
  );
};

const NavbarCenter = ({ pages }: { pages: readonly PageAnchorProps[] }) => {
  const { pathname } = useLocation();

  return (
    <Group spacing="xl">
      {pages.map((page, idx) => (
        <NavbarPageLink {...page} pathname={pathname} key={idx} />
      ))}
    </Group>
  );
};

export default NavbarCenter;
