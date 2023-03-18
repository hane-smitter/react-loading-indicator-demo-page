import React from "react";
import { Commet } from "react-loading-indicators";

import CodeHighlighter from "../../CodeHighlighter";
import ToolBar from "../../ToolBar";
import Styled from "../../IndicatorsPg/styled";
import useControllerState from "../../../hooks/useControllerState";

const CommetLoader = () => {
  const controlStates = useControllerState();

  return (
    <Styled.Card>
      <ToolBar {...controlStates} />

      <div>
        <Styled.Code component={CodeHighlighter}>
          {`<Commet color="${controlStates.color}" size="${controlStates.size}" text="${controlStates.textInputValue}" textColor="${controlStates.textColor}" />`}
        </Styled.Code>
      </div>

      <Styled.ContentSection>
        <Styled.ComponentContainer>
          <Commet
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

export default CommetLoader;
