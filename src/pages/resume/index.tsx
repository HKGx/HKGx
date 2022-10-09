import { Grid, Image, Paper } from "@mantine/core";
import Page from "../../components/Page";

const ResumePage = () => {
  return (
    <Grid>
      <Grid.Col span={4}></Grid.Col>
      <Grid.Col span={8}></Grid.Col>
    </Grid>
  );
};

export default () => {
  return Page({
    component: <ResumePage />,
  });
};
