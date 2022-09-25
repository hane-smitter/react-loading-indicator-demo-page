import React, { useState } from "react";
import { Mosaic } from "react-loading-indicators";

import ToolBar from "../../ToolBar";
import Styled from "../styled";

const MosaicLoader = () => {
  const [color, setColor] = useState("#32cd32");
  const [size, setSize] = useState("medium");
  const [textInputValue, setTextInputValue] = useState("");
  const [textColor, setTextColor] = useState("");

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
        <Styled.Code>{`<Mosaic color="${color}" size="${size}" text="${textInputValue}" textColor="${textColor}" />`}</Styled.Code>
      </div>
      <Styled.ContentSection>
        <Styled.ComponentContainer>
          <Mosaic
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

export default MosaicLoader;