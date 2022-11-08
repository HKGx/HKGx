import { ActionIcon } from "@mantine/core";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "../../common/links";

const Icons = {
  github: { icon: BsGithub, url: GITHUB_LINK },
  linkedin: {
    icon: BsLinkedin,
    url: LINKEDIN_LINK,
  },
  email: {
    icon: BsEnvelope,
    url: `mailto:${EMAIL}`,
  },
} as const;

type Props = {
  iconType: keyof typeof Icons;
};

export const SocialLink = ({ iconType }: Props) => {
  const { icon, url } = Icons[iconType];
  return (
    <ActionIcon
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon({ size: 24 })}
    </ActionIcon>
  );
};
