"use client";

import React, { useCallback, useState } from "react";
import Button from "@mui/material/Button";
// import Mosaic from "react-loading-indicators/Mosaic";
import * as Indicators from "react-loading-indicators";

import {
  CardBoard,
  CardContent,
  IndicatorContainer,
} from "src/components/IndicatorsPg/MUIClient/Card";
import CodeHighlighter from "src/components/CodeHighlighter/CodeHighlighter";
import styles from "./PlayColors.module.scss";
import ChangeColor from "./ChangeColor";

interface ILoadingIndicators {
  Mosaic: Indicators.MosaicProps;
  Atom: Indicators.AtomProps;
  Commet: Indicators.CommetProps;
  FourSquare: Indicators.FourSquareProps;
  OrbitProgress: Indicators.OrbitProgressProps;
  Slab: Indicators.SlabProps;
  TrophySpin: Indicators.TrophySpinProps;
  BlinkBlur: Indicators.BlinkBlurProps;
  ThreeDot: Indicators.ThreeDotProps;
  Riple: Indicators.RipleProps;
  LifeLine: Indicators.LifeLineProps;
}

const indicatorNames = Object.keys(Indicators) as Array<
  keyof ILoadingIndicators
>;
// const colors = ["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]; // #33CC36, #33CCCC

function PlayColors({ stableRandSeed }: { stableRandSeed: number }) {
  const [activeIndicatorName, setActiveIndicatorName] = useState<
    keyof ILoadingIndicators
  >(function () {
    return shuffleArray(indicatorNames, stableRandSeed)[0];
  });
  const [colors, setColors] = useState<string[]>([
    "#32cd32",
    "#327fcd",
    "#cd32cd",
    "#cd8032",
  ]);

  function handleChangeCmp(name: keyof ILoadingIndicators) {
    if (name) {
      setActiveIndicatorName(name);
    }
  }
  const changeColors = useCallback(
    (colors: string[]) => {
      if (colors.length > 0) {
        setColors(colors);
      }
    },
    [setColors]
  );

  const IndicatorComponent = Indicators[activeIndicatorName];

  return (
    <div style={{ width: "50%", marginInline: "auto" }}>
      <div style={{ marginBlockEnd: "30px" }}>
        <p>Change Loading Indicator</p>
        <div className={styles.indicatorBtnsContainer}>
          {indicatorNames.map((name) => (
            <span
              className={`${styles.indicatorBtnItem}${
                name === activeIndicatorName ? " active" : ""
              }`}
              key={name}
            >
              <Button
                fullWidth
                sx={{ wordBreak: "break-word" }}
                variant={name === activeIndicatorName ? "contained" : "text"}
                onClick={
                  name !== activeIndicatorName
                    ? (_) => handleChangeCmp(name)
                    : undefined
                }
              >
                {name}
              </Button>
            </span>
          ))}
        </div>

        <ChangeColor setColors={changeColors} initialColor="#32cd32" />
      </div>

      <CardBoard>
        <div style={{ marginBottom: "20px" }}>
          <CodeHighlighter lang={"jsx"}>
            {`<${activeIndicatorName} color={["${colors.join('", "')}"]} />`}
          </CodeHighlighter>
        </div>

        <CardContent>
          <IndicatorContainer>
            <IndicatorComponent color={colors} />
          </IndicatorContainer>
        </CardContent>
      </CardBoard>
    </div>
  );
}

function shuffleArray(array: any[], seed?: number) {
  const randomSeed = seed || Math.random();

  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = (randomSeed * (i + 1)) | 0;
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export default React.memo(PlayColors);
