import { Stack, Title, Text } from "@mantine/core";
import { LanguageProficiency, SkillProficiency } from "./Proficiencies";

export function SkillProficiencyBlock({
  skill,
  proficiency,
}: {
  skill: string;
  proficiency: SkillProficiency;
}) {
  return (
    <Stack spacing={0} align="center" justify="center">
      <Title align="center" order={4}>
        {skill}
      </Title>
      <Text align="center" size="sm">
        {proficiency}
      </Text>
    </Stack>
  );
}

export function LanguageProficiencyBlock({
  skill,
  proficiency,
}: {
  skill: string;
  proficiency: LanguageProficiency;
}) {
  return (
    <Stack spacing={0} align="space" justify="center">
      <Title align="center" order={4}>
        {skill}
      </Title>
      <Text align="center" size="sm">
        {proficiency}
      </Text>
    </Stack>
  );
}
