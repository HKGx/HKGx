import { Grid, Stack, Text, Timeline, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BsCode, BsPerson } from "react-icons/bs";
import { ExternalLink } from "../../components/ExternalLink";
import { Page } from "../../components/Page";
import { ResumeBlock } from "./ResumeBlock";
import { LanguageProficiency, SkillProficiency } from "./skills/Proficiencies";
import {
  LanguageProficiencyBlock,
  SkillProficiencyBlock,
} from "./skills/ProficiencyBlock";

const AvatarBlock = () => (
  <ResumeBlock title={<Text align="center">There will be a photo</Text>}>
    <BsPerson size={"2em"} />
  </ResumeBlock>
);

const IntroductionBlock = () => (
  <ResumeBlock title={<Title align="center">Hubert Kowalski</Title>}>
    <Text size="sm" align="center">
      Web/Fullstack Developer
    </Text>
  </ResumeBlock>
);

const ExperienceTimelineBlock = () => (
  <ResumeBlock
    title={
      <Title align="center" order={2}>
        Education and experiences
      </Title>
    }
  >
    <Timeline>
      <Timeline.Item title="Highschool Graduation">
        <Text size="xs" mt="xs">
          29.04.2022
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title={
          <Text>
            Internship at{" "}
            <ExternalLink href="https://www.omnicalculator.com/">
              OmniCalculator
            </ExternalLink>
          </Text>
        }
        bullet={<BsCode />}
        lineActive
      >
        <Text>
          I worked mainly with TypeScript, GraphQL, PostgreSQL, and React. We
          worked in an agile environment, using Jira. I also tried to mantain
          our internal Python services.
        </Text>
        <Text size="xs" mt="xs">
          01.06.2022 - 01.10.2022
        </Text>
      </Timeline.Item>
      <Timeline.Item title="University enrollment" active>
        <Text>
          I am currently enrolled in the Faculty of Technical Physics and
          Applied Mathematics at Łódź University of Technology pursuing a
          bachelor's degree in Applied Computer Science.
        </Text>
        <Text size="xs" mt="xs">
          01.10.2022
        </Text>
      </Timeline.Item>
    </Timeline>
  </ResumeBlock>
);

const ProrgammingSkillsBlock = () => (
  <ResumeBlock
    title={
      <Title align="center" order={2}>
        Programming Languages
      </Title>
    }
  >
    <SkillProficiencyBlock
      skill="JavaScript"
      proficiency={SkillProficiency.Beginner}
    />
    <SkillProficiencyBlock
      skill="TypeScript"
      proficiency={SkillProficiency.Intermediate}
    />
    <SkillProficiencyBlock
      skill="Python"
      proficiency={SkillProficiency.Advanced}
    />
    <SkillProficiencyBlock skill="trl" proficiency={SkillProficiency.Expert} />
  </ResumeBlock>
);

const LangaugeSkillsBlock = () => (
  <ResumeBlock
    title={
      <Title align="center" order={2}>
        Languages
      </Title>
    }
  >
    <LanguageProficiencyBlock
      skill="Polish"
      proficiency={LanguageProficiency.Native}
    />
    <LanguageProficiencyBlock
      skill="English"
      proficiency={LanguageProficiency.Fluent}
    />
  </ResumeBlock>
);

const GdprClause = () => {
  const isPrinting = useMediaQuery("print", false);
  return isPrinting ? (
    <Text
      size="xs"
      style={{
        fontSize: "8px",
        opacity: "0.75",
      }}
    >
      I agree to the processing of personal data provided in this document for
      realising the recruitment process pursuant to the Personal Data Protection
      Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with
      Regulation (EU) 2016/679 of the European Parliament and of the Council of
      27 April 2016 on the protection of natural persons with regard to the
      processing of personal data and on the free movement of such data, and
      repealing Directive 95/46/EC (General Data Protection Regulation).
    </Text>
  ) : null;
};

export const ResumePage = () => {
  return (
    <Page>
      <Stack>
        <Grid>
          <Grid.Col span={4}>
            <AvatarBlock />
          </Grid.Col>
          <Grid.Col span={8}>
            <IntroductionBlock />
          </Grid.Col>
          <Grid.Col span={12}>
            <ExperienceTimelineBlock />
          </Grid.Col>
          <Grid.Col span={6}>
            <ProrgammingSkillsBlock />
          </Grid.Col>
          <Grid.Col span={6}>
            <LangaugeSkillsBlock />
          </Grid.Col>
        </Grid>
        <GdprClause />
      </Stack>
    </Page>
  );
};
