import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import * as LoadingIndicators from "../LoadIndicators";
import Styled from "./styled";

// Add order of display priority
const IndicatorNames = ArrangeByDisplayPriority(Object.keys(LoadingIndicators));
console.log("indicators:: ", IndicatorNames);

const Loaders = () => {
  const [starEmoji, setStarEmoji] = useState(false);
  return (
    <React.Fragment>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" component="p">
          A collection of <em>simple</em>, <em>light-weight</em> and{" "}
          <em>elegant</em> loading indicators. App users should be all smiles😊️
          while waiting for a response.
        </Typography>
        <br />
        <Typography variant="body1">To start using:</Typography>
        <Styled.Code
          variant="subtitle2"
          sx={(theme) => ({
            ...theme.typography.largeCode,
            fontFamily: `"Azeret Mono", monospace`,
            backgroundColor: "#E3E6E8",
          })}
          component="p"
        >
          npm install react-loading-indicators
        </Styled.Code>
      </Box>

      <Typography variant="h3" style={{ marginTop: "35px" }}>
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

      <Typography variant="h5" component="p" sx={{ mt: 5 }}>
        Like what you see?
      </Typography>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <Styled.GithubBtn href="https://github.com/hane-smitter/react-loading-indicator">
          {starEmoji ? (
            "⭐️"
          ) : (
            <img
              src="https://raw.githubusercontent.com/hane-smitter/react-loading-indicator-demo-page/assets/images/star-emoticon.png"
              onError={() => setStarEmoji(true)}
              alt="Smiley Star"
            />
          )}{" "}
          on Github
        </Styled.GithubBtn>
      </div>
    </React.Fragment>
  );
};

export default Loaders;

function ArrangeByDisplayPriority(indicators) {
  const indicatorsByPriority = indicators
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

  return indicatorsByPriority;
}
