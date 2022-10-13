import React, { useState } from "react";
import { Seek } from "react-loading-indicators";
import ToolBar from "../../ToolBar";

import Styled from "../styled";

const SeekLoader = () => {
  const [color, setColor] = useState("#32cd32");
  const [size, setSize] = useState("medium");
  const [textInputValue, setTextInputValue] = useState("");
  const [textColor, setTextColor] = useState("");

  const textColorOptimized = React.useMemo(() => {
    if (textColor.includes("NaN")) return "";
    return textColor;
  }, [textColor]);

  return (
    <Styled.Card>
      <ToolBar
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        textInputValue={textInputValue}
        setTextInputValue={setTextInputValue}
        textColor={textColor}
        setTextColor={setTextColor}
      />

      <div>
        <Styled.Code>{`<Seek color="${color}" size="${size}" text="${textInputValue}" textColor="${textColorOptimized}" />`}</Styled.Code>
      </div>
      <Styled.ContentSection>
        <Styled.ComponentContainer>
          <Seek
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

export default SeekLoader;
