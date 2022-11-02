import { createHashRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ResumePage } from "./pages/resume";
import { MainPage } from "./pages/MainPage";
import { useDarkTheme } from "./hooks";

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
