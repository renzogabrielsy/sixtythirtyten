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

type Props = {
  name: string;
  width: string;
};

const ColorInputApp = (props: Props) => {
  const useStyles = createStyles((theme) => ({
    input: {
      display: "flex",
      fontSize: "0px",
      backgroundColor: "orange",
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: "1px",
      boxShadow: "1px 2px 5px gray",
      height: "1em",
      width: props.width,
      type: "hidden",
    },
  }));
  const { classes } = useStyles();
  return (
    <Flex align="center">
      <Text mr="1em">{props.name}</Text>
      <ColorInput
        variant="filled"
        m={5}
        radius="md"
        withPreview={false}
        withEyeDropper={false}
        classNames={{
          input: classes.input,
        }}
        disallowInput
      />
    </Flex>
  );
};

export default ColorInputApp;