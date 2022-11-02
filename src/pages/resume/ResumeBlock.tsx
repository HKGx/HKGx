import { Paper, Stack } from "@mantine/core";
import { ReactNode } from "react";

export const ResumeBlock = ({
  children,
  title,
}: {
  children: ReactNode;
  title: ReactNode;
}) => {
  return (
    <Paper withBorder p="md" style={{ height: "100%", width: "100%" }}>
      {title}
      <Stack align="center">{children}</Stack>
    </Paper>
  );
};
