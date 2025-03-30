"use client";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Mosaic from "react-loading-indicators/Mosaic";
import * as Indicators from "react-loading-indicators";

import {
  CardBoard,
  CardContent,
  IndicatorContainer,
} from "src/components/IndicatorsPg/MUIClient/Card";
import CodeHighlighter from "src/components/CodeHighlighter";
import styles from "./styles.module.scss";

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
const colors = ["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]; // #33CC36, #33CCCC

function PlayColors({ stableRandSeed }: { stableRandSeed: number }) {
  const [indicatorName, setCurrentIndicatorName] = useState<
    keyof ILoadingIndicators
  >(function () {
    return shuffleArray(indicatorNames, stableRandSeed)[0];
  });

  const IndicatorComponent = Indicators[indicatorName];

  return (
    <div style={{ width: "50%", marginInline: "auto" }}>
      <div>
        <p>Change Loading Indicator</p>
        <div className={styles.indicatorBtnsContainer}>
          {indicatorNames.map((name) => (
            <span className={styles.indicatorBtnItem} key={name}>
              <Button fullWidth sx={{ wordBreak: "break-word" }}>
                {name}
              </Button>
            </span>
          ))}
        </div>
        <p>Change color</p>
      </div>

      <CardBoard>
        <div style={{ marginBottom: "20px" }}>
          <Typography variant="code" component={CodeHighlighter}>
            {`<${indicatorName} color={["${colors.join('", "')}"]} />`}
          </Typography>
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
