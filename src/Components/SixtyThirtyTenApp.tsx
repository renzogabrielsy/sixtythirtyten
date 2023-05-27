import { createStyles, Text, Paper, Flex } from "@mantine/core";
import ColorInputApp from "./ColorInputApp";
import ColorPreview from "./ColorPreview";

const useStyles = createStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    height: "55vh",
    width: "130vw",
    flexWrap: "wrap",
    alignContent: "space-around",
    border: "1px solid #CACACA",
    boxShadow: "9px 8px 11px -3px rgba(0,0,0,0.6)",

    [theme.fn.smallerThan("sm")]: {
        display: 'flex',
        flexDirection: 'column',
      maxHeight: "100%",
      height: '90vh',
      width: "89vw",
      border: "none",
      boxShadow: "none",
      paddingBottom: '0rem',
    },
    
  },

  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    // width: "40vw",

    [theme.fn.smallerThan("sm")]: {
      //   width: "89vw",
    },
  },

  colorPreviewContainer: {
    [theme.fn.smallerThan("sm")]: {
      alignItems: 'flex-start',
      height: '50%',
    },
  },

  colorInputContainer: {
    [theme.fn.smallerThan("sm")]: {
        height: '40%',
        marginTop: '2em',
        // justifyContent: 'flex-end',
        // paddingBottom: '3rem',
      },
  }
}));

type Props = {};

const SixtyThirtyTenApp = (props: Props) => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Paper
          //   shadow="md"
          radius="lg"
          maw="558px"
          mah="350px"
          p="2.5em"
          pt="1em"
          //   withBorder
          className={classes.paper}
        >
          <Flex justify="center" w="100%" h="100%" wrap="wrap">
            <Flex justify="center" direction="column" miw="60%" h="100%" className={classes.colorInputContainer}>
              <Text size="1.8em" mb={10} weight="bold">
                Color Picker
              </Text>
              <ColorInputApp name="60%" width="12rem" />
              <ColorInputApp name="30%" width="6rem" />
              <ColorInputApp name="10%" width="3rem" />
            </Flex>
            <Flex
              justify="flex-end"
              miw="40%"
              align="center"
              h="100%"
              className={classes.colorPreviewContainer}
            >
              <ColorPreview />
            </Flex>
          </Flex>
        </Paper>
      </div>
    </>
  );
};

export default SixtyThirtyTenApp;
