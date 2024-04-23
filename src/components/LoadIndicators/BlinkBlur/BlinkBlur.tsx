"use client";

import React from "react";
import { BlinkBlur } from "react-loading-indicators";
import Typography from "@mui/material/Typography";

import ToolBar from "../../ToolBar";
// import Styled from "../../IndicatorsPg/styled";
import CodeHighlighter from "../../CodeHighlighter";
import useControllerState from "../../../hooks/useControllerState";
import {
  CardBoard,
  CardContent,
  IndicatorContainer,
} from "src/components/IndicatorsPg/MUIClient/Card";

const BlinkBlurIndicator = () => {
  const controlStates = useControllerState();

  return (
    <CardBoard>
      <ToolBar {...controlStates} />

      <div>
        <Typography variant="code" component={CodeHighlighter}>
          {`<BlinkBlur color="${controlStates.color}" size="${controlStates.size}" text="${controlStates.textInputValue}" textColor="${controlStates.textColor}" />`}
        </Typography>
      </div>
      <CardContent>
        <IndicatorContainer>
          <BlinkBlur
            color={controlStates.color}
            size={controlStates.size}
            text={controlStates.textInputValue}
            textColor={controlStates.textColor}
          />
        </IndicatorContainer>
      </CardContent>
    </CardBoard>
  );
};

export default BlinkBlurIndicator;
