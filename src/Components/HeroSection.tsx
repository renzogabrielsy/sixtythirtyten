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
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import SixtyThirtyTenApp from "./SixtyThirtyTenApp";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    [theme.fn.smallerThan("md")]: {
        display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },

  content: {
    alignItems: "center",
    maxWidth: "100vw",
    marginRight: `calc(${theme.spacing.xl} * 3)`,


    [theme.fn.smallerThan("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: "90%",
      marginRight: 0,
      height: "90vh",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function HeroSection() {
  const { classes } = useStyles();
  return (
    <div>
      <Container maw='85%'>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>The 60-30-10 Rule</Title>
            <Text color="dimmed" mt="md">
              The 60–30–10 rule is a popular color theory used by interior
              designers, fashion designers, and graphic designers to create a
              balanced and harmonious color scheme. The rule states that a color
              scheme should consist of three colors in the following
              proportions:
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>60%</b> – The dominant color. It is the foundation of your
                color scheme and sets the tone and mood for the rest of the
                design.
              </List.Item>
              <List.Item>
                <b>30%</b> – The secondary color. It should complement the
                dominant color and provide visual interest towards the whole
                design.
              </List.Item>
              <List.Item>
                <b>10%</b> – The accent color. This is the pop of color that
                adds the excitement and contrast to your design.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Github
              </Button>
            </Group>
          </div>
          <SixtyThirtyTenApp />
          {/* <Image src={image} className={classes.image} /> */}
        </div>
      </Container>
    </div>
  );
}
