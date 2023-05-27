import React from "react";
import { Paper, Flex, createStyles } from "@mantine/core";
type Props = {};

const useStyles = createStyles((theme) => ({
  paper: {
    width: '88%',
    height: '70%',

    [theme.fn.smallerThan('sm')]: {
        width: '60vw'
    }
  },
}));

const ColorPreview = (props: Props) => {
    const {classes} = useStyles()
  return (
    <Paper
      shadow="md"
      radius="lg"
      p="sm"
      w="88%"
      h="70%"
      mt={10}
      mb={10}
      withBorder
      className={classes.paper}
    >
      <Flex h="100%" direction="column">
        <Paper radius="lg" h="15%" w="100%" mt={5} mb={5} withBorder />
        <Paper radius="lg" h="50%" w="100%" mt={8} mb={5} withBorder />
        <Flex h="15%" justify="space-between" direction="row" mt={5}>
          <Paper radius="lg" h="100%" w="45%" withBorder />
          <Paper radius="lg" h="100%" w="45%" withBorder />
        </Flex>
      </Flex>
    </Paper>
  );
};

export default ColorPreview;
