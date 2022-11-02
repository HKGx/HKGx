import { Anchor } from "@mantine/core";
import { ReactNode } from "react";

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Anchor href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Anchor>
);
