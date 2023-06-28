import React, { useEffect, useRef, useState } from "react";
import OrbitProgress from "react-loading-indicators/dist/OrbitProgress";
import Select from "react-select";
import Typography from "@mui/material/Typography";

import Styled from "../IndicatorsPg/styled";
import LocalStyled from "./styled";
import CodeHighlighter from "../CodeHighlighter";

const easeOptions = [
  { value: "linear", label: "Linear" },
  { value: "ease-in", label: "Ease-in" },
  { value: "ease-in-out", label: "Ease-in-out" },
];

const CustomizeSpeed = () => {
  const sliderRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [easeValue, setEaseValue] = useState({
    value: "linear",
    label: "Linear",
  });

  function handleInputChange(event) {
    const value = event.target.value;

    setSliderValue(value);
  }

  function handleChangeEaseOption(newVal) {
    // console.log("Select val: ", newVal);
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
    <LocalStyled.Wrapper>
      <Typography variant="body2" textAlign="center">
        <i>Use the slider to adjust animation speed</i>
      </Typography>
      <Styled.Card>
        <div style={{ marginBottom: "20px" }}>
          <Styled.Code component={CodeHighlighter}>
            {`<OrbitProgress variant="track-disc" speedPlus="${sliderValue}" easing="${easeValue.value}" />`}
          </Styled.Code>
        </div>

        <LocalStyled.SpeedAdjustBox>
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
            <LocalStyled.DataList id="speed-ranges">
              <LocalStyled.Option value="-5" label="-5"></LocalStyled.Option>
              <LocalStyled.Option value="-4" label="-4"></LocalStyled.Option>
              <LocalStyled.Option value="-3" label="-3"></LocalStyled.Option>
              <LocalStyled.Option value="-2" label="-2"></LocalStyled.Option>
              <LocalStyled.Option value="-1" label="-1"></LocalStyled.Option>
              <LocalStyled.Option value="0" label="0"></LocalStyled.Option>
              <LocalStyled.Option value="1" label="1"></LocalStyled.Option>
              <LocalStyled.Option value="2" label="2"></LocalStyled.Option>
              <LocalStyled.Option value="3" label="3"></LocalStyled.Option>
              <LocalStyled.Option value="4" label="4"></LocalStyled.Option>
              <LocalStyled.Option value="5" label="5"></LocalStyled.Option>
            </LocalStyled.DataList>
          </div>

          <div style={{ justifySelf: "center", marginTop: "40px" }}>
            <OrbitProgress
              variant="track-disc"
              speedPlus={sliderValue}
              easing={easeValue.value}
            />
          </div>

          <LocalStyled.EasingBox>
            <Typography variant="caption" sx={{ fontSize: "12px" }}>
              Choose easing
            </Typography>
            <Select
              value={easeValue}
              onChange={handleChangeEaseOption}
              options={easeOptions}
            />
          </LocalStyled.EasingBox>
        </LocalStyled.SpeedAdjustBox>
      </Styled.Card>
    </LocalStyled.Wrapper>
  );
};

export default React.memo(CustomizeSpeed);
