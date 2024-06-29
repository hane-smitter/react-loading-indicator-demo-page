"use client";

import ThreeDot, {
  type ThreeDotProps,
} from "react-loading-indicators/ThreeDot";
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
import Selectable from "src/components/IndicatorsPg/MUIClient/Selectable";

const variantOptions: SelectOpt<ThreeDotProps["variant"]>[] = [
  { value: undefined, label: "Default" },
  { value: "pulsate", label: "Pulsate" },
  { value: "bounce", label: "Bounce" },
  { value: "bob", label: "Bob" },
  { value: "brick-stack", label: "Brick-stack" },
];

const ThreeDotIndicator = () => {
  const controlStates = useControllerState();
  const { variantOption, handleChangeVariantOption } =
    useReactSelectOptions<ThreeDotProps["variant"]>();

  return (
    <CardBoard>
      <ToolBar {...controlStates} />

      <div>
        <Typography variant="code" component={CodeHighlighter}>
          {`<ThreeDot${
            variantOption?.value ? ' variant="' + variantOption?.value + '"' : ""
          } color="${controlStates.color}" size="${controlStates.size}" text="${
            controlStates.textInputValue
          }" textColor="${controlStates.textColor}" />`}
        </Typography>
      </div>

      <CardContent>
        <VariantsContainer>
          {/* No styling for `.group` class name; only for sematic meaning of grouping items for aligned Flexbox layout */}
          <div className="group">
            <Typography
              variant="caption"
              sx={{
                fontSize:
                  "1em" /* relative to Font-size set in `VariantsContainer` */,
                fontWeight: 600,
              }}
            >
              Choose Variant
            </Typography>
            <Selectable
              value={variantOption}
              onChange={handleChangeVariantOption}
              options={variantOptions}
            />
          </div>
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
