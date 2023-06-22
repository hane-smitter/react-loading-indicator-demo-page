import React, { useState } from "react";
import ThreeDot from "react-loading-indicators/dist/ThreeDot";
import Select from "react-select";

import ToolBar from "../../ToolBar";
import Styled from "../../IndicatorsPg/styled";
import CodeHighlighter from "../../CodeHighlighter";
import useControllerState from "../../../hooks/useControllerState";
import { Typography } from "@mui/material";

const variantOptions = [
  { value: "pulsate", label: "Pulsate" },
  { value: "windmill", label: "Windmill" },
  { value: "bob", label: "Bob" },
  { value: "brick-stack", label: "Brick-stack" },
];

const ThreeDotIndicator = () => {
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
          {`<ThreeDot ${
            variantOption?.value ? 'variant="' + variantOption?.value + '"' : ""
          } color="${controlStates.color}" size="${controlStates.size}" text="${
            controlStates.textInputValue
          }" textColor="${controlStates.textColor}" />`}
        </Styled.Code>
      </div>
      <Styled.ContentSection>
        <Styled.VariantsBox>
          <Typography variant="caption" sx={{ fontSize: "9.8px" }}>
            Choose Variation
          </Typography>
          <Select
            value={variantOption}
            onChange={handleChangeVariantOption}
            options={variantOptions}
          />
        </Styled.VariantsBox>

        <Styled.ComponentContainer>
          <ThreeDot
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

export default ThreeDotIndicator;
