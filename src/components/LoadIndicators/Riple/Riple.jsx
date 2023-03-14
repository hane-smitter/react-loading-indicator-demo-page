import React, { useState } from "react";
import { Riple } from "react-loading-indicators";

import ToolBar from "../../ToolBar";
import Styled from "../../IndicatorsPg/styled";
import CodeHighlighter from "../../CodeHighlighter";

const RipleLoader = () => {
  const [color, setColor] = useState("#32cd32");
  const [size, setSize] = useState("medium");
  const [textInputValue, setTextInputValue] = useState("");
  const [textColor, setTextColor] = useState("");

  const textColorOptimized = React.useMemo(() => {
    if (textColor.includes("NaN")) return "";
    return textColor;
  }, [textColor]);

  const cachedSetColor = React.useCallback(setColor, []);
  const cachedSetSize = React.useCallback(setSize, []);
  const cachedSetTextInputValue = React.useCallback(setTextInputValue, []);
  const cachedSetTextColor = React.useCallback(setTextColor, []);

  return (
    <Styled.Card>
      <ToolBar
        color={color}
        setColor={cachedSetColor}
        size={size}
        setSize={cachedSetSize}
        textInputValue={textInputValue}
        setTextInputValue={cachedSetTextInputValue}
        textColor={textColor}
        setTextColor={cachedSetTextColor}
      />

      <div>
        <Styled.Code component={CodeHighlighter}>
          {`<Riple color="${color}" size="${size}" text="${textInputValue}" textColor="${textColorOptimized}" />`}
        </Styled.Code>
      </div>
      <Styled.ContentSection>
        <Styled.ComponentContainer>
          <Riple
            color={color}
            size={size}
            text={textInputValue}
            textColor={textColor}
          />
        </Styled.ComponentContainer>
      </Styled.ContentSection>
    </Styled.Card>
  );
};

export default RipleLoader;
