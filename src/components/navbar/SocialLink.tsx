import { Anchor } from "@mantine/core";
import { BsGithub, BsLinkedin } from "react-icons/bs";

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
    <Anchor href={url} target="_blank" rel="noopener noreferrer">
      {icon({ size: 24 })}
    </Anchor>
  );
};

export default SocialLink;
