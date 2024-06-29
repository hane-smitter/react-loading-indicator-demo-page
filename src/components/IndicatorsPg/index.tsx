import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import * as LoadingIndicators from "../LoadIndicators";
import Intro from "./Intro";
import Outro from "./Outro";
import { BodyCode, BodyText, ScrollHeading } from "./MUIClient";
import styles from "./styles.module.scss";
import CustomizeSpeed from "../Examples/CustomizeSpeed";
import PlayColors from "../Examples/PlayColors";

const IndicatorNames = Arrange(Object.keys(LoadingIndicators));

const LoadIndicators = () => {
  return (
    <>
      <Intro />

      <ScrollHeading sx={{ mt: 4 }} variant="h4">
        Components
      </ScrollHeading>

      <Typography variant="body2">
        <i>Use the button controls to customize the components</i>
      </Typography>

      <Grid container spacing={2} sx={{ my: 3 }}>
        {IndicatorNames.map((name, idx) => {
          const Throbber = LoadingIndicators[name];

          return (
            <Grid item xs={12} sm={6} key={idx}>
              <Throbber />
            </Grid>
          );
        })}
      </Grid>

      <ScrollHeading sx={{ mt: 6 }} variant="h4">
        Color animation
      </ScrollHeading>
      <BodyText>
        A loading indicator can change colors. Flashing colors is one way to
        entice waiting users.
        <br />
        To make an indicator change between colors, pass an array of colors via
        the <BodyCode>color</BodyCode> prop. And each color will be applied per
        frame.
      </BodyText>
      <Typography variant="h6" component="p" sx={{ mt: 3, mb: 1 }}>
        An example result would look like this:
      </Typography>

      <PlayColors />

      <Typography
        variant="body1"
        sx={{ marginTop: "4em" }}
        className={styles.tip}
      >
        <strong style={{ fontSize: "1.1rem" }}>💡️ Hear this:</strong>
        <br />
        <span style={{ fontStyle: "italic" }}>
          Maximum number of colors played for an indicator is <strong>4</strong>
          . Therefore color array longer than this limit will be truncated to
          the first four. Otherwise any length of colors is accepted.
        </span>
      </Typography>

      <ScrollHeading sx={{ mt: 5 }} variant="h4">
        Increase/decrease speed
      </ScrollHeading>

      <BodyText>
        Animation can be too slow or too fast for your preferences. You can
        alter the speed of the animation using a&#8200;
        <BodyCode>speedPlus</BodyCode>
        &#8200;prop.
        <br />A fixed range of value is accepted, i.e an integer ranging
        from&#8200;
        <BodyCode>-5</BodyCode> through <BodyCode>5</BodyCode>.&#8200;
        <BodyCode>0</BodyCode> value means <em>normal</em> speed. Greater number
        means <em>higher</em> speed. Smaller number means <em>slower</em> speed.
        And number out of range means <em>normal</em> speed.
      </BodyText>

      <br />
      <Typography variant="h6" component="p">
        See Example:
      </Typography>
      <div style={{ marginBottom: "80px" }}>
        <CustomizeSpeed />
      </div>

      <BodyText>
        As shown above, you can as well pass an <BodyCode>easing</BodyCode> prop
        to control motion "ease/smoothness" of an animation.
        <br />
        It accepts values of&#8200;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function"
          target="_blank"
          rel="noreferrer"
        >
          CSS easing function
        </a>
        &#8200;passed as a string.
      </BodyText>

      <Outro />
    </>
  );
};

export default LoadIndicators;

function Arrange(indicators: string[]): string[] {
  const orderedList = indicators
    .map((indicator) => {
      let priority = 0;

      // eslint-disable-next-line default-case
      switch (indicator) {
        case "Atom":
          priority = priority + 3;
          break;

        case "OrbitProgress":
          priority = priority + 2;
          break;

        case "Mosaic":
          priority = priority + 1;
          break;

        case "ThreeDot":
          priority = priority + 1;
          break;
      }

      return { indicator, priority };
    })
    .sort((a, b) => b.priority - a.priority)
    .map((indicator) => indicator.indicator);

  return orderedList;
}
