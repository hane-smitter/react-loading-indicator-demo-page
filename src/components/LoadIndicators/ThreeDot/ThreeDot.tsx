"use client";

import ThreeDot from "react-loading-indicators/dist/ThreeDot";
import Select from "react-select";
import Typography from "@mui/material/Typography";

import ToolBar from "../../ToolBar";
import CodeHighlighter from "../../CodeHighlighter";
import useControllerState from "../../../hooks/useControllerState";
import useReactSelectOptions, {
  type SelectOpt,
} from "src/hooks/useReactSelectOptions";
import {
  CardBoard,
  CardContent,
  IndicatorContainer,
  VariantsContainer,
} from "src/components/IndicatorsPg/MUIClient/Card";

type ThreeDotVariant =
  | "pulsate"
  | "windmill"
  | "bob"
  | "brick-stack"
  | undefined;

const variantOptions: SelectOpt<ThreeDotVariant>[] = [
  { value: "pulsate", label: "Pulsate" },
  { value: "windmill", label: "Windmill" },
  { value: "bob", label: "Bob" },
  { value: "brick-stack", label: "Brick-stack" },
];

const ThreeDotIndicator = () => {
  const controlStates = useControllerState();
  const { variantOption, handleChangeVariantOption } =
    useReactSelectOptions<ThreeDotVariant>();

  return (
    <CardBoard>
      <ToolBar {...controlStates} />

      <div>
        <Typography variant="code" component={CodeHighlighter}>
          {`<ThreeDot ${
            variantOption?.value ? 'variant="' + variantOption?.value + '"' : ""
          } color="${controlStates.color}" size="${controlStates.size}" text="${
            controlStates.textInputValue
          }" textColor="${controlStates.textColor}" />`}
        </Typography>
      </div>

      <CardContent>
        <VariantsContainer>
          <Typography variant="caption" sx={{ fontSize: "9.8px" }}>
            Choose Variation
          </Typography>
          <Select
            value={variantOption}
            onChange={handleChangeVariantOption}
            options={variantOptions}
          />
        </VariantsContainer>

        <IndicatorContainer>
          <ThreeDot
            color={controlStates.color}
            size={controlStates.size}
            text={controlStates.textInputValue}
            textColor={controlStates.textColor}
            variant={variantOption.value}
          />
        </IndicatorContainer>
      </CardContent>
    </CardBoard>
  );
};

export default ThreeDotIndicator;
