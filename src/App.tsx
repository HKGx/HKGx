import { MantineProvider } from "@mantine/core";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { useDarkTheme } from "./hooks";
import { MainPage } from "./pages/MainPage";
import { ResumePage } from "./pages/resume";

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
]);

export const App = () => {
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
};
