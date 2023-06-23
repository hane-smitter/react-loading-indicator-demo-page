import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import * as LoadingIndicators from "../LoadIndicators";
import Intro from "./Intro";
import Outro from "./Outro";
import Styled from "./styled";

// Align order of display priority
const IndicatorNames = ArrangeByDisplayPriority(Object.keys(LoadingIndicators));
console.log("indicators:: ", IndicatorNames);

const LoadIndicators = () => {
  return (
    <React.Fragment>
      <Intro />

      <Typography variant="h4" style={{ marginTop: "35px" }}>
        Components
      </Typography>
      <Typography variant="body2">
        <i>Use the button controls to customize the components</i>
      </Typography>

      <Grid container spacing={2} sx={{ my: 3 }}>
        {IndicatorNames.map((indicator, idx) => {
          const Throbber = LoadingIndicators[indicator];

          return (
            <Grid item xs={12} sm={6} key={idx}>
              <Throbber />
            </Grid>
          );
        })}
      </Grid>

      <Typography variant="body2">
        <strong>💡️ Tip:</strong>
        <br />
        <i>
          Some loading indicators can be multi-colored when supplied with an
          array of colors via the <Styled.Code>color</Styled.Code> prop.
        </i>
      </Typography>

      <Outro />
    </React.Fragment>
  );
};

export default LoadIndicators;

function ArrangeByDisplayPriority(indicators) {
  const orderedList = indicators
    .map((indicator) => {
      let priority = 0;

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
