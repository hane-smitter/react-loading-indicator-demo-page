import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import * as LoadingIndicators from "../LoadIndicators";
import Styled from "./styled";

const indicators = Object.keys(LoadingIndicators);

const Loaders = () => {
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
        {indicators.map((indicator, idx) => {
          const Loader = LoadingIndicators[indicator];

          return (
            <Grid item xs={12} sm={6} key={idx}>
              <Loader />
            </Grid>
          );
        })}
      </Grid>

      <Typography variant="h6" component="p" sx={{ mt: 5 }}>
        <Typography variant="h5" component="span" sx={{ fontWeight: 700 }}>
          You like what you see?
        </Typography>{" "}
        If this is so, kindly take a moment to star ⭐️ the Github repository.
        <br />
        Your support helps me improve this project and spread the word.
      </Typography>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <Styled.GithubBtn href="https://github.com/hane-smitter/react-loading-indicator">
          Drop a star ⭐️ on Github
        </Styled.GithubBtn>
      </div>
    </React.Fragment>
  );
};

export default Loaders;
