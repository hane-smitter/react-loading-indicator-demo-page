"use client";

import OrbitProgress from "react-loading-indicators/dist/OrbitProgress";
import Typography from "@mui/material/Typography";
import Select from "react-select";

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

type OrbitProgressVariant =
  | "disc"
  | "split-disc"
  | "bubble-dotted"
  | "dotted"
  | "track-disc"
  | undefined;

const variantOptions: SelectOpt<OrbitProgressVariant>[] = [
  { value: "disc", label: "Disc" },
  { value: "split-disc", label: "Split-disc" },
  { value: "bubble-dotted", label: "Bubble-dotted" },
  { value: "dotted", label: "dotted" },
  { value: "track-disc", label: "Track-disc" },
];

const OrbitProgressIndicator = () => {
  const controlStates = useControllerState();
  const { variantOption, handleChangeVariantOption } =
    useReactSelectOptions<OrbitProgressVariant>();

  return (
    <CardBoard>
      <ToolBar {...controlStates} />

      <div>
        <Typography variant="code" component={CodeHighlighter}>
          {`<OrbitProgress ${
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
          <OrbitProgress
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

export default OrbitProgressIndicator;
