"use client";

import React from "react";
import { Commet } from "react-loading-indicators";

import CodeHighlighter from "../../CodeHighlighter";
import ToolBar from "../../ToolBar";
// import Styled from "../../IndicatorsPg/styled";
import useControllerState from "../../../hooks/useControllerState";
import {
  CardBoard,
  CardContent,
  IndicatorContainer,
} from "src/components/IndicatorsPg/MUIClient/Card";

const CommetLoader = () => {
  const controlStates = useControllerState();

  return (
    <CardBoard>
      <ToolBar {...controlStates} />

      <div>
        <CodeHighlighter lang="jsx">
          {`<Commet color="${controlStates.color}" size="${controlStates.size}" text="${controlStates.textInputValue}" textColor="${controlStates.textColor}" />`}
        </CodeHighlighter>
      </div>

      <CardContent>
        <IndicatorContainer>
          <Commet
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

export default CommetLoader;
