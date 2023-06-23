import React, { useState } from "react";
import OrbitProgress from "react-loading-indicators/dist/OrbitProgress";
import { Typography } from "@mui/material";
import Select from "react-select";

import ToolBar from "../../ToolBar";
import Styled from "../../IndicatorsPg/styled";
import CodeHighlighter from "../../CodeHighlighter";
import useControllerState from "../../../hooks/useControllerState";

const variantOptions = [
  { value: "disc", label: "Disc" },
  { value: "split-disc", label: "Split-disc" },
  { value: "bubble-dotted", label: "Bubble-dotted" },
  { value: "dotted", label: "dotted" },
  { value: "track-disc", label: "Track-disc" },
];

const OrbitProgressIndicator = () => {
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
          {`<OrbitProgress ${
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
          <OrbitProgress
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

export default OrbitProgressIndicator;
