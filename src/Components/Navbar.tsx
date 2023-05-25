import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  rem,
  Text,
  AppShell,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandInstagram } from "@tabler/icons-react";
import ColorSchemePicker from "./ColorSchemePicker";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

type Props = {};
export function Navbar(props: Props) {
  //   const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  //   const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  //   const toggleColorScheme = (value?: ColorScheme) =>
  //     setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  //   const dark = colorScheme === "dark";

  return (
      <Header height={60} mb={0} bg="black" miw="100vw" fixed={true}>
        <Container className={classes.inner}>
          <Group className={classes.links} spacing={5}></Group>
          <Text color="white">Sixty-Thirty-Ten</Text>
          <Group spacing={5} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.1rem" stroke={1.5} />
            </ActionIcon>
            <ColorSchemePicker />
          </Group>
        </Container>
      </Header>

  );
}
