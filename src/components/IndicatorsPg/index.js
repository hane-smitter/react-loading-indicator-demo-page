import { Grid, Typography, Box, Link } from "@mui/material";
import React from "react";

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

      <div>
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
      </div>

      <Link href="https://github.com/hane-smitter/react-loading-indicator">
        Visit Repo
      </Link>
    </React.Fragment>
  );
};

export default Loaders;
