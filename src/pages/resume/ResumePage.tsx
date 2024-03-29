import { Grid, Group, Stack, Text, Timeline } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BsCode, BsPerson } from "react-icons/bs";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "../../common/links";
import { ExternalLink } from "../../components/ExternalLink";
import { SocialLink } from "../../components/navbar/SocialLink";
import { Page } from "../../components/Page";
import { ResumeBlock, ResumeBlockTitle } from "./ResumeBlock";
import { LanguageProficiency, SkillProficiency } from "./skills/Proficiencies";
import {
  LanguageProficiencyBlock,
  SkillProficiencyBlock,
  SoftSkillsProficiencyBlock,
} from "./skills/ProficiencyBlock";

const AvatarBlock = () => (
  <ResumeBlock
    title={
      <ResumeBlockTitle>There was supposed to be a photo</ResumeBlockTitle>
    }
  >
    <BsPerson size="2em" />
  </ResumeBlock>
);

const IntroductionBlock = () => (
  <ResumeBlock title={<ResumeBlockTitle>Hubert Kowalski</ResumeBlockTitle>}>
    <Text align="center" size="md">
      Web/Fullstack Developer
    </Text>
    <Text align="center" size="sm">
      I am a passionate developer leaning towards the web. I have experience in
      both frontend and backend development.
    </Text>
  </ResumeBlock>
);

const ExperienceTimelineBlock = () => (
  <ResumeBlock
    title={<ResumeBlockTitle>Education and experiences</ResumeBlockTitle>}
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

const TechnologiesSkillsBlock = () => (
  <ResumeBlock title={<ResumeBlockTitle>Technologies</ResumeBlockTitle>}>
    <Grid>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="JavaScript"
          proficiency={SkillProficiency.Advanced}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="TypeScript"
          proficiency={SkillProficiency.Advanced}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="React"
          proficiency={SkillProficiency.Intermediate}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="GraphQL"
          proficiency={SkillProficiency.Beginner}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="Node.js"
          proficiency={SkillProficiency.Intermediate}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="Python"
          proficiency={SkillProficiency.Intermediate}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="Docker"
          proficiency={[
            SkillProficiency.Beginner,
            SkillProficiency.Intermediate,
          ]}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="SQL"
          proficiency={[
            SkillProficiency.Beginner,
            SkillProficiency.Intermediate,
          ]}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <SkillProficiencyBlock
          skill="Git"
          proficiency={SkillProficiency.Intermediate}
        />
      </Grid.Col>
    </Grid>
  </ResumeBlock>
);

const SoftSkillsBlock = () => (
  <ResumeBlock title={<ResumeBlockTitle>Soft skills</ResumeBlockTitle>}>
    <Grid>
      <Grid.Col span={6}>
        <SoftSkillsProficiencyBlock skill="Fast learner" />
      </Grid.Col>
      <Grid.Col span={6}>
        <SoftSkillsProficiencyBlock skill="Critical thinking" />
      </Grid.Col>
      <Grid.Col span={6}>
        <SoftSkillsProficiencyBlock skill="Problem solving" />
      </Grid.Col>
      <Grid.Col span={6}>
        <SoftSkillsProficiencyBlock skill="Analytical thinking" />
      </Grid.Col>
      <Grid.Col span={12}>
        <SoftSkillsProficiencyBlock skill="Teamwork and communication" />
      </Grid.Col>
    </Grid>
  </ResumeBlock>
);

const LangaugeSkillsBlock = () => (
  <ResumeBlock title={<ResumeBlockTitle>Languages</ResumeBlockTitle>}>
    <LanguageProficiencyBlock
      skill="Polish"
      proficiency={LanguageProficiency.Native}
    />
    <LanguageProficiencyBlock
      skill="English"
      proficiency={LanguageProficiency.Fluent}
    />
    <LanguageProficiencyBlock
      skill="Russian"
      proficiency={LanguageProficiency.Beginner}
    />
  </ResumeBlock>
);

const SocialsBlock = () => (
  <ResumeBlock title={<ResumeBlockTitle>Socials and contact</ResumeBlockTitle>}>
    <Grid>
      <Grid.Col span={6}>
        <SocialLink iconType="github" />
      </Grid.Col>
      <Grid.Col span={6}>
        <ExternalLink href={GITHUB_LINK}> GitHub </ExternalLink>
      </Grid.Col>
      <Grid.Col span={6}>
        <SocialLink iconType="linkedin" />
      </Grid.Col>
      <Grid.Col span={6}>
        <ExternalLink href={LINKEDIN_LINK}> LinkedIn </ExternalLink>
      </Grid.Col>
      <Grid.Col span={6}>
        <SocialLink iconType="email" />
      </Grid.Col>
      <Grid.Col span={6}>
        <ExternalLink href={`mailto:${EMAIL}`}> {EMAIL} </ExternalLink>
      </Grid.Col>
    </Grid>
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
          <Grid.Col span={8}>
            <TechnologiesSkillsBlock />
          </Grid.Col>
          <Grid.Col span={4}>
            <LangaugeSkillsBlock />
          </Grid.Col>
          <Grid.Col span={6}>
            <SoftSkillsBlock />
          </Grid.Col>
          <Grid.Col span={6}>
            <SocialsBlock />
          </Grid.Col>
        </Grid>
        <GdprClause />
      </Stack>
    </Page>
  );
};
