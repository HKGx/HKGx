import { createHashRouter, RouterProvider } from "react-router-dom";
import Resume from "./pages/resume";
import MainPage from "./pages/MainPage";
import { lazy, Suspense } from "react";
import { useColorScheme } from "@mantine/hooks";
import { MantineProvider } from "@mantine/core";
import useDarkTheme from "./hooks/useDarkTheme";

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

function App() {
  const [colorScheme] = useDarkTheme("dark");

  return (
    <MantineProvider
      theme={{
        colorScheme,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
