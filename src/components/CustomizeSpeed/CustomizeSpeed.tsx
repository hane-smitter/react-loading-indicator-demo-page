"use client";

import React, { useEffect, useRef, useState } from "react";
import OrbitProgress from "react-loading-indicators/OrbitProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import styles from "./styles.module.scss";
import CodeHighlighter from "../CodeHighlighter";
import { CardBoard } from "../IndicatorsPg/MUIClient/Card";
import Selectable from "../IndicatorsPg/MUIClient/Selectable";

type OPSpeedPlus = 0 | 2 | 1 | 5 | -5 | 4 | -4 | 3 | -3 | -2 | -1 | undefined;

const easeOptions = [
  { value: "linear", label: "Linear" },
  { value: "ease-in", label: "Ease-in" },
  { value: "ease-in-out", label: "Ease-in-out" },
];

const CustomizeSpeed = () => {
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const [sliderValue, setSliderValue] = useState<OPSpeedPlus>(0);
  const [easeValue, setEaseValue] = useState({
    value: "linear",
    label: "Linear",
  });

  function handleInputChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      const value = event.target.value;
      setSliderValue(+value as OPSpeedPlus);
    }
  }

  function handleChangeEaseOption(newVal: { value: string; label: string }) {
    setEaseValue(newVal);
  }

  useEffect(() => {
    if (sliderRef.current) {
      var controller = new AbortController();
      const slideInput = sliderRef.current;

      slideInput.addEventListener("input", handleInputChange, {
        capture: false,
        signal: controller.signal,
      });
    }

    return () => {
      controller?.abort();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Typography variant="body2" textAlign="center">
        <i>Use the slider to adjust animation speed</i>
      </Typography>
      <CardBoard>
        {/* <div style={{ marginBottom: "20px" }}>
          <Styled.Code component={CodeHighlighter}>
            {`<OrbitProgress variant="track-disc" speedPlus="${sliderValue}" easing="${easeValue.value}" />`}
          </Styled.Code>
        </div> */}
        <div style={{ marginBottom: "20px" }}>
          <Typography variant="code" component={CodeHighlighter}>
            {`<OrbitProgress variant="track-disc" speedPlus="${sliderValue}" easing="${easeValue.value}" />`}
          </Typography>
        </div>

        <Box className={styles.speedAdjustBox}>
          <div style={{ position: "relative" }}>
            <input
              ref={sliderRef}
              type="range"
              min="-5"
              max="5"
              step={1}
              defaultValue={sliderValue}
              list="speed-ranges"
              style={{ width: "100%", cursor: "pointer" }}
            />

            <datalist id="speed-ranges" className={styles.dataList}>
              <option value="-5" label="-5" className={styles.option}></option>
              <option value="-4" label="-4" className={styles.option}></option>
              <option value="-3" label="-3" className={styles.option}></option>
              <option value="-2" label="-2" className={styles.option}></option>
              <option value="-1" label="-1" className={styles.option}></option>
              <option value="0" label="0" className={styles.option}></option>
              <option value="1" label="1" className={styles.option}></option>
              <option value="2" label="2" className={styles.option}></option>
              <option value="3" label="3" className={styles.option}></option>
              <option value="4" label="4" className={styles.option}></option>
              <option value="5" label="5" className={styles.option}></option>
            </datalist>
          </div>

          <div style={{ justifySelf: "center", marginTop: "40px" }}>
            <OrbitProgress
              variant="track-disc"
              speedPlus={sliderValue}
              easing={easeValue.value}
            />
          </div>

          <div className={styles.easingBox}>
            <Typography variant="caption" sx={{ fontSize: "12px" }}>
              Choose easing
            </Typography>
            <Selectable
              value={easeValue}
              onChange={handleChangeEaseOption}
              options={easeOptions}
            />
          </div>
        </Box>
      </CardBoard>
    </div>
  );
};

export default React.memo(CustomizeSpeed);
