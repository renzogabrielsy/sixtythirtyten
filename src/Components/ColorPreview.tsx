import React from "react";
import { Paper, Flex } from "@mantine/core";
type Props = {};

const ColorPreview = (props: Props) => {
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
