import { createStyles, Text, Paper, Flex } from "@mantine/core";
import ColorInputApp from "./ColorInputApp";
import ColorPreview from "./ColorPreview";

const useStyles = createStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    height: "55vh",
    width: "130vw",

    [theme.fn.smallerThan("md")]: {
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
          maw="558px"
          mah="350px"
          p="2.5em"
          pt="1em"
          withBorder
          className={classes.paper}
        >
          <Flex justify="center" w="100%" h="100%">
            <Flex justify="center" direction="column" w="60%">
              <Text size="1.8em" mb={10} weight="bold">
                Color Picker
              </Text>
              <ColorInputApp name="60%" width="13.5rem" />
              <ColorInputApp name="30%" width="7rem" />
              <ColorInputApp name="10%" width="3rem" />
            </Flex>
            <Flex justify="flex-end" w="40%" align="center">
              <ColorPreview />
            </Flex>
          </Flex>
        </Paper>
      </div>
    </>
  );
};

export default SixtyThirtyTenApp;
