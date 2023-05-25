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
  BackgroundImage,
} from "@mantine/core";
import { sizes } from "@mantine/core/lib/Input/Input.styles";

const useStyles = createStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
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

  pickerSixty: {
    display:'flex',
    fontSize: '0px',
    backgroundColor: "orange",
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '1px 2px 5px gray',
    height: '1em',
    width: '13.5rem',
    type: 'hidden'
  },
  pickerThirty: {
    display:'flex',
    fontSize: '0px',
    backgroundColor: "orange",
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '1px 2px 5px gray',
    height: '1em',
    width: '7rem',
  },
  pickerTen: {
    display:'flex',
    fontSize: '0px',
    backgroundColor: "orange",
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '1px 2px 5px gray',
    height: '1em',
    width: '3rem',

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
          maw='558px'
          mah='350px'
          p='2.5em'
          pt='1em'
          withBorder
          className={classes.paper}
        >
          <Flex justify="center" w="100%" h='100%'>
            <Flex justify="center" direction="column" w="60%">
              <Text size='1.8em' mb={10} weight="bold">
                Color Picker
              </Text>
              <Flex align="center">
                <Text mr='1em'>60%</Text>
                <ColorInput
                  variant="filled"
                  m={5}
                  radius='md'
                  withPreview={false}
                  withEyeDropper={false}
                //   className={classes.pickerSixty}
                  classNames={{
                    input: classes.pickerSixty,
                  }}
                  disallowInput
                />
              </Flex>
              <Flex align="center">
                <Text mr="1em">30%</Text>
                <ColorInput
                  variant="filled"
                  m={5}
                  radius='md'
                  withPreview={false}
                  withEyeDropper={false}
                  classNames={{
                    input: classes.pickerThirty,
                  }}

                />
              </Flex>
              <Flex align="center">
                <Text mr="1.25em">10%</Text>
                <ColorInput
                  variant="filled"
                  m={5}
                  radius='md'
                  withPreview={false}
                  withEyeDropper={false}
                //   className={classes.pickerSixty}
                  classNames={{
                    input: classes.pickerTen,
                  }}
                  disallowInput
                />
              </Flex>
            </Flex>
            <Flex justify="flex-end" w="40%" align='center'>
              <Paper
              shadow="md"
                radius="lg"
                p="sm"
                w="88%"
                h='70%'
                mt={10}
                mb={10}
                withBorder
              >
                <Flex h="100%" direction="column">
                  <Paper
                    radius="lg"
                    h="15%"
                    w="100%"
                    mt={5}
                    mb={5}
                    withBorder
                  />
                  <Paper
                    radius="lg"
                    h="50%"
                    w="100%"
                    mt={8}
                    mb={5}
                    withBorder
                  />
                  <Flex h='15%' justify='space-between' direction='row' mt={5}>
                    <Paper
                      radius="lg"
                      h="100%"
                      w="45%"
                    //   mr={10}
                    //   ml={10}
                      withBorder
                    />
                    <Paper
                      radius="lg"
                      h="100%"
                      w="45%"
                    //   mr={10}
                    //   ml={10}
                      withBorder
                    />
                  </Flex>
                </Flex>
              </Paper>
            </Flex>
          </Flex>
        </Paper>
      </div>
    </>
  );
};

export default SixtyThirtyTenApp;
