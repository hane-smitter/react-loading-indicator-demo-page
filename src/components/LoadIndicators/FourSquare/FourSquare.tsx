import React from "react";
import { FourSquare } from "react-loading-indicators";

import ToolBar from "../../ToolBar";
import Styled from "../../IndicatorsPg/styled";
import CodeHighlighter from "../../CodeHighlighter";
import useControllerState from "../../../hooks/useControllerState";

const FourSquareLoader = () => {
  const controlStates = useControllerState();

  return (
    <Styled.Card>
      <ToolBar {...controlStates} />

      <div>
        <Styled.Code component={CodeHighlighter}>
          {`<FourSquare color="${controlStates.color}" size="${controlStates.size}" text="${controlStates.textInputValue}" textColor="${controlStates.textColor}" />`}
        </Styled.Code>
      </div>
      <Styled.ContentSection>
        <Styled.ComponentContainer>
          <FourSquare
            color={controlStates.color}
            size={controlStates.size}
            text={controlStates.textInputValue}
            textColor={controlStates.textColor}
          />
        </Styled.ComponentContainer>
      </Styled.ContentSection>
    </Styled.Card>
  );
};

export default FourSquareLoader;
