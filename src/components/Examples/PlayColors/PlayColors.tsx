"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Mosaic from "react-loading-indicators/Mosaic";

import {
  CardBoard,
  CardContent,
  IndicatorContainer,
} from "src/components/IndicatorsPg/MUIClient/Card";
import CodeHighlighter from "src/components/CodeHighlighter";

const colors = ["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]; // #33CC36, #33CCCC

function PlayColors() {
  return (
    <div style={{ width: "50%", marginInline: "auto" }}>
      <CardBoard>
        <div style={{ marginBottom: "20px" }}>
          <Typography variant="code" component={CodeHighlighter}>
            {`<Mosaic color={["${colors.join('", "')}"]} />`}
          </Typography>
        </div>

        <CardContent>
          <IndicatorContainer>
            <Mosaic color={colors} />
          </IndicatorContainer>
        </CardContent>
      </CardBoard>
    </div>
  );
}

export default React.memo(PlayColors);
