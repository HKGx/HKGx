import { Switch } from "@mantine/core";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDarkTheme } from "../../hooks";

export const DarkModeSwitch = () => {
  const [theme, toggle] = useDarkTheme();
  return (
    <Switch
      size="md"
      checked={theme === "light"}
      onChange={toggle}
      offLabel={<BsMoon size="2em" />}
      onLabel={<BsSun size="2em" />}
    />
  );
};
