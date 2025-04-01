"use client";

import { useState } from "react";
import OrbitProgress, {
  type OrbitProgressProps,
} from "react-loading-indicators/OrbitProgress";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

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
import { ToggleSwitch } from "src/components/IndicatorsPg/MUIClient";

const variantOptions: SelectOpt<OrbitProgressProps["variant"]>[] = [
  { value: undefined, label: "Default" },
  { value: "disc", label: "Disc" },
  { value: "split-disc", label: "Split-disc" },
  { value: "spokes", label: "Spokes" },
  { value: "dotted", label: "dotted" },
  { value: "track-disc", label: "Track-disc" },
];

const OrbitProgressIndicator = () => {
  const [dense, setDense] = useState<boolean>(false);
  const controlStates = useControllerState();
  const { variantOption, handleChangeVariantOption } =
    useReactSelectOptions<OrbitProgressProps["variant"]>();

  return (
    <CardBoard>
      <ToolBar {...controlStates} />

      <div>
        <CodeHighlighter lang="jsx">
          {`<OrbitProgress${
            variantOption?.value
              ? ' variant="' + variantOption?.value + '"'
              : ""
          }${dense ? " dense" : ""} color="${controlStates.color}" size="${
            controlStates.size
          }" text="${controlStates.textInputValue}" textColor="${
            controlStates.textColor
          }" />`}
        </CodeHighlighter>
      </div>

      <CardContent>
        <VariantsContainer>
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

          <div className="group">
            <Typography
              variant="caption"
              sx={{
                fontSize:
                  "1em" /* relative to Font-size set in `VariantsContainer` */,
                fontWeight: 600,
              }}
            >
              Dense
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                variant="caption"
                component="span"
                sx={{ color: "var(--text-muted)" }}
              >
                false
              </Typography>
              <ToggleSwitch
                checked={dense}
                inputProps={{ "aria-label": "indicator density switch" }}
                onChange={(_event, checked) => {
                  setDense(checked);
                }}
              />
              <Typography
                variant="caption"
                component="span"
                sx={{ color: "var(--text-muted)" }}
              >
                true
              </Typography>
            </Stack>
          </div>
        </VariantsContainer>

        <IndicatorContainer>
          <OrbitProgress
            color={controlStates.color}
            size={controlStates.size}
            text={controlStates.textInputValue}
            textColor={controlStates.textColor}
            variant={variantOption.value}
            dense={dense}
          />
        </IndicatorContainer>
      </CardContent>
    </CardBoard>
  );
};

export default OrbitProgressIndicator;
