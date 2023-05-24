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
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  paper: {
    height: "55vh",
    width: "120vw",

    [theme.fn.smallerThan("md")]: {
      // marginTop: '15em',
      // marginBottom: '15em',
      height: "40vh",
      width: "89vw",
    },
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    height: "100vh",
    width: '30vw',

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
          p="md"
          withBorder
          className={classes.paper}
        >
          <Text>App</Text>
        </Paper>
      </div>
    </>
  );
};

export default SixtyThirtyTenApp;
