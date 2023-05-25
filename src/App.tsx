import { useState } from "react";
import {
  MantineProvider,
  Text,
  ColorSchemeProvider,
  ColorScheme,
  Flex,
} from "@mantine/core";
import ColorSchemePicker from "./Components/ColorSchemePicker";
import { Navbar } from "./Components/Navbar";
import { HeroSection } from "./Components/HeroSection";

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
        theme={{ fontFamily: "Alata", colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Flex
          h="100%"
          w="98vw"
          bg={colorScheme}
          // gap="xl"
          justify="center"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <Flex
            // mih={50}
            // mb={20}
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <Navbar />
          </Flex>
          <HeroSection />
        </Flex>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
