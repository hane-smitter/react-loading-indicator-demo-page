import { Grid, Typography, Box } from "@mui/material";
import React from "react";

import AtomLoader from "./Atom";
import CommetLoader from "./Commet";
import CircularProgressLoader from "./CircularProgress";
import SeekLoader from "./Seek";
import MosaicLoader from "./Mosaic";
import RipleLoader from "./Riple";
// import ToolBar from "../ToolBar";
import Styled from "./styled";

const Loaders = () => {
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h6" component="p">
          A collection of awesome loading indicators to make waiting for a
          response a beautiful thing.
        </Typography>
        <Typography variant="body1"> Start using now: </Typography>
        <Styled.Code
          sx={(theme) => ({
            ...theme.typography.h6,
            fontFamily: `"Azeret Mono", monospace`,
            backgroundColor: "#E3E6E8",
          })}
          component="p"
        >
          npm i react-loading-indicators
        </Styled.Code>
      </Box>

      <Grid container spacing={2} sx={{ my: 3 }}>
        <Grid item xs={6}>
          <CommetLoader />
        </Grid>

        <Grid item xs={6}>
          <AtomLoader />
        </Grid>

        <Grid item xs={6}>
          <CircularProgressLoader />
        </Grid>

        <Grid item xs={6}>
          <MosaicLoader />
        </Grid>

        <Grid item xs={6}>
          <RipleLoader />
        </Grid>
        <Grid item xs={6}>
          <SeekLoader />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Loaders;
