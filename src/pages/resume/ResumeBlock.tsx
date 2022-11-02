import { Paper, Stack, Title } from "@mantine/core";
import { ReactNode } from "react";

export const RESUME_BLOCK_TITLE_ORDER = 3;
export const RESUME_BLOCK_CONTENT_TITLE_ORDER = 4;

export const ResumeBlockTitle = ({ children }: { children: string }) => (
  <Title order={RESUME_BLOCK_TITLE_ORDER} align="center">
    {children}
  </Title>
);

export const ResumeBlock = ({
  children,
  title,
}: {
  children: ReactNode;
  title: ReactNode;
}) => {
  return (
    <Paper withBorder p="md" style={{ height: "100%", width: "100%" }}>
      <Stack align="center" justify="space-between">
        {title}
        {children}
      </Stack>
    </Paper>
  );
};
