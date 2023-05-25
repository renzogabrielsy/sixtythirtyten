import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Paper,
  Flex,
  ColorInput,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  paper: {
    height: "55vh",
    width: "130vw",

    [theme.fn.smallerThan("md")]: {
      // marginTop: '15em',
      // marginBottom: '15em',
      height: "40vh",
      width: "89vw",
    },
  },

  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    width: "40vw",

    [theme.fn.smallerThan("md")]: {
      // marginTop: '15em',
      // marginBottom: '15em',
      width: "89vw",
    },
  },
}));

type Props = {};

const SixtyThirtyTenApp = (props: Props) => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Paper
          shadow="md"
          radius="lg"
          p="xl"
          withBorder
          className={classes.paper}
        >
          <Flex justify="space-evenly" w="100%">
            <Flex justify="flex-start" direction="column" w="100%">
              <Text size="xl" weight="bold">
                Color Picker
              </Text>
              <Flex align='center'>
                <Text mr='lg'>60%</Text>
                <ColorInput
                  placeholder="Pick a color..."
                  variant="unstyled"
                  radius="xs"
                  size="xl"
                  withPreview={false}
                  withEyeDropper={false}
                />
              </Flex>
              <Flex align='center'>
                <Text mr='lg'>30%</Text>
                <ColorInput
                  placeholder="Pick a color..."
                  variant="unstyled"
                  radius="xs"
                  size="xl"
                  withPreview={false}
                  withEyeDropper={false}
                />
              </Flex>
              <Flex align='center'>
                <Text mr='lg'>10%</Text>
                <ColorInput
                  placeholder="Pick a color..."
                  variant="unstyled"
                  radius="xs"
                  size="xl"
                  withPreview={false}
                  withEyeDropper={false}
                />
              </Flex>
            </Flex>
            <Flex justify="flex-end" w="100%">
              <Paper shadow="md" radius="lg" p="xl" w="75%" withBorder></Paper>
            </Flex>
          </Flex>
        </Paper>
      </div>
    </>
  );
};

export default SixtyThirtyTenApp;
