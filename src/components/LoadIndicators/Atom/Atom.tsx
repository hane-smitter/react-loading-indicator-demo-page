"use client";

import React from "react";
import { Atom } from "react-loading-indicators";
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

const AtomLoader = () => {
  const controlStates = useControllerState();

  return (
    <CardBoard>
      <ToolBar {...controlStates} />
      <div>
        {/* <Styled.Code component={CodeHighlighter}>
          {`<Atom color="${controlStates.color}" size="${controlStates.size}" text="${controlStates.textInputValue}" textColor="${controlStates.textColor}" />`}
        </Styled.Code> */}
        <Typography variant="code" component={CodeHighlighter}>
          {`<Atom color="${controlStates.color}" size="${controlStates.size}" text="${controlStates.textInputValue}" textColor="${controlStates.textColor}" />`}
        </Typography>
      </div>

      <CardContent>
        <IndicatorContainer>
          <Atom
            color={controlStates.color}
            size={controlStates.size}
            text={controlStates.textInputValue}
            textColor={controlStates.textColor}
          />
        </IndicatorContainer>
      </CardContent>

      {/* <Styled.ContentSection>
        <Styled.ComponentContainer>
          <Atom
            color={controlStates.color}
            size={controlStates.size}
            text={controlStates.textInputValue}
            textColor={controlStates.textColor}
          />
        </Styled.ComponentContainer>
      </Styled.ContentSection> */}
    </CardBoard>
  );
};

export default AtomLoader;
