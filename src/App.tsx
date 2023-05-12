import { useState } from "react";
import {
  MantineProvider,
  Text,
  ColorSchemeProvider,
  ColorScheme,
  Flex,
} from "@mantine/core";
import ColorSchemePicker from "./Components/ColorSchemePicker";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const dark = colorScheme === "dark";
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ fontFamily: "Alata" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Flex
          mih="100vh"
          miw="100vw"
          bg={colorScheme}
          gap="xl"
          justify="center"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <Flex
            mih={50}
            m={20}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <ColorSchemePicker />
            <Text color={dark ? "white" : "black"} weight='bold'>SixtyThirtyTen</Text>
          </Flex>
        </Flex>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
