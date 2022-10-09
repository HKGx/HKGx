import { Switch } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { BsSun, BsMoon } from "react-icons/bs";
import useDarkTheme from "../../hooks/useDarkTheme";

const DarkModeSwitch = () => {
  const [theme, toggle] = useDarkTheme();
  return (
    <Switch
      checked={theme === "light"}
      onChange={toggle}
      onLabel={<BsMoon />}
      offLabel={<BsSun />}
    />
  );
};

export default DarkModeSwitch;
