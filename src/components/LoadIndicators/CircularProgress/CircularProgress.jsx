import React, { useState } from "react";
import CircularProgress from "react-loading-indicators";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Select from "react-select";

import ToolBar from "../../ToolBar";
import Styled from "../../IndicatorsPg/styled";
import CodeHighlighter from "../../CodeHighlighter";

const VariantsBox = styled("span")`
  width: 100px;
  padding: 8px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;

  @media (max-width: 400px) {
    display: none;
  }
`;

const variantOptions = [
  { value: "disc", label: "Disc" },
  { value: "split-disc", label: "Split-disc" },
  { value: "bubble-dotted", label: "Bubble-dotted" },
  { value: "dotted", label: "dotted" },
];

const CircularProgressLoader = () => {
  const [color, setColor] = useState("#32cd32");
  const [size, setSize] = useState("medium");
  const [textInputValue, setTextInputValue] = useState("");
  const [textColor, setTextColor] = useState("");
  const [variantOption, setVariantOption] = useState({});

  const textColorOptimized = React.useMemo(() => {
    if (textColor.includes("NaN")) return "";
    return textColor;
  }, [textColor]);

  function handleChangeVariantOption(selectedOpt) {
    const newVariant = selectedOpt;
    setVariantOption(newVariant);
  }

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
        <Styled.Code component={CodeHighlighter}>
          {`<CircularProgress ${
            variantOption?.value ? 'variant="' + variantOption?.value + '"' : ""
          } color="${color}" size="${size}" text="${textInputValue}" textColor="${textColorOptimized}" />`}
        </Styled.Code>
      </div>

      <Styled.ContentSection>
        <VariantsBox>
          <Typography variant="caption" sx={{ fontSize: "9.8px" }}>
            Choose Variation
          </Typography>
          <Select
            value={variantOption}
            onChange={handleChangeVariantOption}
            options={variantOptions}
          />
        </VariantsBox>

        <Styled.ComponentContainer>
          <CircularProgress
            color={color}
            size={size}
            text={textInputValue}
            textColor={textColor}
            variant={variantOption?.value}
          />
        </Styled.ComponentContainer>
      </Styled.ContentSection>
    </Styled.Card>
  );
};

export default CircularProgressLoader;
