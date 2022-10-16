import { Switch } from "@mantine/core";
import { BsSun, BsMoon } from "react-icons/bs";
import useDarkTheme from "../../hooks/useDarkTheme";

const DarkModeSwitch = () => {
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

export default DarkModeSwitch;
