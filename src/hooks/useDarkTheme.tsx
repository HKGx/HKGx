import { ColorScheme } from "@mantine/core";
import { useColorScheme, useLocalStorage, useMediaQuery } from "@mantine/hooks";

export function useDarkTheme(defaultValue?: ColorScheme) {
  const preferedColorScheme = useColorScheme();
  const isPrinting = useMediaQuery("print");
  const [theme, setTheme] = useLocalStorage<ColorScheme>({
    defaultValue: defaultValue ?? preferedColorScheme,
    key: "darkTheme",
    getInitialValueInEffect: true,
  });

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const properTheme = isPrinting ? "light" : theme; // Prevents printing in dark mode
  return [properTheme, toggleTheme] as const;
}
