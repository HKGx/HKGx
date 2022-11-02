import { Anchor, Group, Title } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { useDarkTheme } from "../../hooks";

type PageAnchorProps = {
  readonly link: `/${string}`;
  readonly title: string;
};

const NavbarPageLink = ({
  link,
  title,
  pathname,
}: PageAnchorProps & { pathname: string }) => {
  const [theme] = useDarkTheme();
  const order = pathname === link ? 1 : 2;
  const themeColor = theme === "dark" ? "white" : "dark";
  const color = pathname === link ? themeColor : undefined;
  return (
    <Anchor component={Link} to={link}>
      <Title order={order} color={color}>
        {title}
      </Title>
    </Anchor>
  );
};

export const NavbarCenter = ({
  pages,
}: {
  pages: readonly PageAnchorProps[];
}) => {
  const { pathname } = useLocation();

  return (
    <Group spacing="xl" styles={{ minWidth: 400 }} position="apart">
      {pages.map((page, idx) => (
        <NavbarPageLink {...page} pathname={pathname} key={idx} />
      ))}
    </Group>
  );
};
