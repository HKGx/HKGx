import { ColorScheme } from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";

export default function useDarkTheme(defaultValue?: ColorScheme) {
  const preferedColorScheme = useColorScheme();
  const [theme, setTheme] = useLocalStorage<ColorScheme>({
    defaultValue: defaultValue ?? preferedColorScheme,
    key: "darkTheme",
    getInitialValueInEffect: true,
  });

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return [theme, toggleTheme] as const;
}
