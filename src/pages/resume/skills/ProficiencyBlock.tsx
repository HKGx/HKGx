import { Stack, Text } from "@mantine/core";
import { LanguageProficiency, SkillProficiency } from "./Proficiencies";

export function SkillProficiencyBlock({
  skill,
  proficiency,
}: {
  skill: string;
  proficiency: SkillProficiency | [SkillProficiency, SkillProficiency];
}) {
  return (
    <Stack spacing={0} align="center" justify="center">
      <Text align="center" size="md" weight={700}>
        {skill}
      </Text>
      <Text align="center" size="sm" italic>
        {Array.isArray(proficiency) ? proficiency.join(" / ") : proficiency}
      </Text>
    </Stack>
  );
}

export function SoftSkillsProficiencyBlock({ skill }: { skill: string }) {
  return (
    <Stack spacing={0} align="center" justify="center">
      <Text align="center" size="md" weight={700}>
        {skill}
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
    <Stack spacing={0} align="center" justify="center">
      <Text align="center" size="md" weight={700}>
        {skill}
      </Text>
      <Text align="center" size="sm" italic>
        {proficiency}
      </Text>
    </Stack>
  );
}
