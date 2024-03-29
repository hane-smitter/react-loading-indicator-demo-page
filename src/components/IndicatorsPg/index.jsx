import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import * as LoadingIndicators from "../LoadIndicators";
import Intro from "./Intro";
import Outro from "./Outro";
import Styled from "./styled";
import CustomizeSpeed from "../CustomizeSpeed";

const IndicatorNames = Arrange(Object.keys(LoadingIndicators));
// console.log("indicators:: ", IndicatorNames);

const LoadIndicators = () => {
  return (
    <React.Fragment>
      <Intro />

      <Styled.Heading
        id="components"
        variant="h4"
        style={{ marginTop: "35px" }}
      >
        Components
      </Styled.Heading>
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

      <Styled.Tip sx={{ marginTop: "4em" }}>
        <strong>💡️ Tip:</strong>
        <br />
        <i>
          Some loading indicators can be multi-colored when supplied with an
          array of colors via the <Styled.Code>color</Styled.Code> prop.
        </i>
      </Styled.Tip>

      <Styled.Heading
        id="increase-decrease-speed"
        variant="h4"
        style={{ marginTop: "35px" }}
      >
        Increase/decrease speed
      </Styled.Heading>

      <Styled.BodyText>
        Animation can be too slow or too fast for your preferences. You can
        alter the speed of the animation using a{" "}
        <Styled.Code>speedPlus</Styled.Code> prop.
        <br />A fixed range of value is accepted, i.e an integer ranging from{" "}
        <Styled.Code>-5</Styled.Code> through <Styled.Code>5</Styled.Code>.{" "}
        <Styled.Code>0</Styled.Code> value means <em>normal</em> speed. Greater
        number means <em>higher</em> speed. Smaller number means <em>slower</em>{" "}
        speed. And number out of range means <em>normal</em> speed.
      </Styled.BodyText>

      <br />
      <Typography variant="h6" component="p">
        See Example:
      </Typography>
      <div style={{ marginBottom: "80px" }}>
        <CustomizeSpeed />
      </div>

      <Styled.BodyText>
        As shown above, you can as well pass an{" "}
        <Styled.Code>easing</Styled.Code> prop to control motion
        "ease/smoothness" of an animation.
        <br />
        It accepts values of{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function"
          target="_blank"
          rel="noreferrer"
        >
          CSS easing function
        </a>{" "}
        passed as a string.
      </Styled.BodyText>

      <Outro />
    </React.Fragment>
  );
};

export default LoadIndicators;

/**
 * Orders names of loading indicators
 * @param {string[]} indicators Names of loading indicators
 * @returns {string[]} Array of ordered names
 */
function Arrange(indicators) {
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
