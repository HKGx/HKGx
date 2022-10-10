import { ActionIcon } from "@mantine/core";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Icons = {
  github: { icon: BsGithub, url: "https://www.github.com/HKGx" },
  linkedin: {
    icon: BsLinkedin,
    url: "https://www.linkedin.com/in/hkgdoesdev/",
  },
} as const;

type Props = {
  iconType: keyof typeof Icons;
};

const SocialLink = ({ iconType }: Props) => {
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

export default SocialLink;
