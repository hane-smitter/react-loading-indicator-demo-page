import React from "react";
import LifeLine from "react-loading-indicators/dist/LifeLine";
import ToolBar from "../../ToolBar";

import Styled from "../../IndicatorsPg/styled";
import CodeHighlighter from "../../CodeHighlighter";
import useControllerState from "../../../hooks/useControllerState";

const LifeLineIndicator = () => {
  const controlStates = useControllerState();

  return (
    <Styled.Card>
      <ToolBar {...controlStates} />

      <div>
        <Styled.Code component={CodeHighlighter}>
          {`<LifeLine color="${controlStates.color}" size="${controlStates.size}" text="${controlStates.textInputValue}" textColor="${controlStates.textColor}" />`}
        </Styled.Code>
      </div>
      <Styled.ContentSection>
        <Styled.ComponentContainer>
          <LifeLine
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

export default LifeLineIndicator;
