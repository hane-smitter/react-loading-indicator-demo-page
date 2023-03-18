import React, { useState } from "react";
import CircularProgress from "react-loading-indicators";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Select from "react-select";

import ToolBar from "../../ToolBar";
import Styled from "../../IndicatorsPg/styled";
import CodeHighlighter from "../../CodeHighlighter";
import useControllerState from "../../../hooks/useControllerState";

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
  const controlStates = useControllerState();
  const [variantOption, setVariantOption] = useState({});

  function handleChangeVariantOption(selectedOpt) {
    const newVariant = selectedOpt;
    setVariantOption(newVariant);
  }

  return (
    <Styled.Card>
      <ToolBar {...controlStates} />

      <div>
        <Styled.Code component={CodeHighlighter}>
          {`<CircularProgress ${
            variantOption?.value ? 'variant="' + variantOption?.value + '"' : ""
          } color="${controlStates.color}" size="${controlStates.size}" text="${
            controlStates.textInputValue
          }" textColor="${controlStates.textColor}" />`}
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
            color={controlStates.color}
            size={controlStates.size}
            text={controlStates.textInputValue}
            textColor={controlStates.textColor}
            variant={variantOption?.value}
          />
        </Styled.ComponentContainer>
      </Styled.ContentSection>
    </Styled.Card>
  );
};

export default CircularProgressLoader;
