"use client";

import React from "react";
import { FourSquare } from "react-loading-indicators";

import ToolBar from "../../ToolBar";
import CodeHighlighter from "../../CodeHighlighter";
import useControllerState from "../../../hooks/useControllerState";
import {
  CardBoard,
  CardContent,
  IndicatorContainer,
} from "src/components/IndicatorsPg/MUIClient/Card";

const FourSquareLoader = () => {
  const controlStates = useControllerState();

  return (
    <CardBoard>
      <ToolBar {...controlStates} />

      <div>
        <CodeHighlighter lang="jsx">
          {`<FourSquare color="${controlStates.color}" size="${controlStates.size}" text="${controlStates.textInputValue}" textColor="${controlStates.textColor}" />`}
        </CodeHighlighter>
      </div>
      <CardContent>
        <IndicatorContainer>
          <FourSquare
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

export default FourSquareLoader;
