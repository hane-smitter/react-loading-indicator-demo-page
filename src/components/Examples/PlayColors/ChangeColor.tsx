import {
  useState,
  type ClipboardEvent,
  type ChangeEvent,
  useEffect,
} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import { ChevronUp, ChevronDown } from "react-feather";
import { HexColorPicker } from "react-colorful";
import colorParse from "tinycolor2";

import styles from "./ChangeColor.module.scss";
import Input from "src/components/Input";

interface IChangeColor {
  setColors(colors: string[]): void;
  initialColor: string;
}
interface IColorSet {
  tetrad: string[];
  analogous: string[];
}

const initColorSet = { tetrad: [], analogous: [] } as IColorSet;

function ChangeColor({ initialColor, setColors }: IChangeColor) {
  const [show, setShow] = useState(false);
  const [colorValue, setColorValue] = useState(initialColor || "");
  const [preferColorSet, setPreferColorSet] = useState<
    "tetradic" | "analogous"
  >("tetradic");
  const [colorSets, setColorSets] = useState<IColorSet>({ ...initColorSet });

  useEffect(() => {
    if (colorValue) {
      const tetrad = genTetradicSet(colorValue);
      const analogous = genAnalogousSet(colorValue);

      setColorSets({
        tetrad,
        analogous,
      });

      preferColorSet === "analogous" ? setColors(analogous) : setColors(tetrad);
    }

    return () => {
      setColorSets({ ...initColorSet });
    };
  }, [colorValue, preferColorSet]);

  function handleChangeColor() {
    setShow(!show);
  }

  function handleColorInputChange(inputValue: string) {
    const inputColor = inputValue;
    if (inputColor) {
      const color = colorParse(inputColor);
      if (color.isValid()) {
        setColorValue(color.toHexString());
      } else {
        setColorValue("#000000");
      }
    }
  }
  function handleColorInputPaste(evt: ClipboardEvent<HTMLInputElement>) {
    evt.preventDefault();
    const pastedData = evt.clipboardData.getData("text").trim();

    if (pastedData.length < 1) return;

    const color = colorParse(pastedData);
    if (color.isValid()) {
      setColorValue(color.toHexString());
    } else {
      setColorValue("#000000");
    }
  }

  function handleRadioChange(
    _: ChangeEvent<HTMLInputElement>,
    value: "tetradic" | "analogous"
  ) {
    setPreferColorSet(value);
  }

  return (
    <>
      <Button
        onClick={handleChangeColor}
        startIcon={show ? <ChevronUp /> : <ChevronDown />}
        size="small"
        sx={{ mt: 2 }}
      >
        Change colors{!show ? "?" : ""}
      </Button>

      <Box>
        <Collapse in={show}>
          <Box className={styles.colorOptsContainer}>
            <Box className={`${styles.colorOptWrapper} ${styles.picker}`}>
              <Typography
                variant="subtitle2"
                className={styles.colorOptHeadline}
              >
                Pick a color
              </Typography>
              <Box>
                <HexColorPicker
                  color={colorValue}
                  onChange={handleColorInputChange}
                />
              </Box>
            </Box>
            <Box className={`${styles.colorOptWrapper} ${styles.input}`}>
              <Typography
                variant="subtitle2"
                className={styles.colorOptHeadline}
              >
                Paste or type a color
              </Typography>
              <Box>
                <Input
                  value={colorValue}
                  onPaste={handleColorInputPaste}
                  onBlur={(evt) => {
                    handleColorInputChange(evt.target.value);
                  }}
                  maxLength={40}
                  placeholder="Paste or type a color"
                />
              </Box>
            </Box>

            <Box className={`${styles.colorOptWrapper} ${styles.gen}`}>
              <Typography
                variant="subtitle2"
                className={styles.colorOptHeadline}
              >
                Generated Colors
              </Typography>
              <div className={styles.genColorsArea}>
                <FormControl>
                  <FormLabel id="radio-color-set-label">
                    Choose set to apply
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="radio-color-set-label"
                    name="radio-color-set-group"
                    sx={{ flexWrap: "nowrap" }}
                    onChange={handleRadioChange}
                    value={preferColorSet}
                  >
                    <FormControlLabel
                      value="tetradic"
                      control={<Radio />}
                      label="Tetradic set"
                    />
                    <div
                      className={styles.verticalRule}
                      style={{ height: "auto" }}
                    />
                    <FormControlLabel
                      value="analogous"
                      control={<Radio />}
                      label="Analogous set"
                    />
                  </RadioGroup>
                  <div className={styles.genSamples}>
                    <div className={styles.tetrad}>
                      {colorSets.tetrad.map((color, idx) => (
                        <span
                          key={idx}
                          className={styles.token}
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                    <div className={styles.analogous}>
                      {colorSets.analogous.map((color, idx) => (
                        <span
                          key={idx}
                          className={styles.token}
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  </div>
                </FormControl>
              </div>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

export default ChangeColor;

function genTetradicSet(baseColor: string) {
  const color = colorParse(baseColor);
  const hsl = color.toHsl(); // Get HSL values

  return [
    color.toHexString(), // Original (0°)
    colorParse({ ...hsl, h: (hsl.h + 90) % 360 }).toHexString(), // +90°
    colorParse({ ...hsl, h: (hsl.h + 180) % 360 }).toHexString(), // +180° (complementary)
    colorParse({ ...hsl, h: (hsl.h + 270) % 360 }).toHexString(), // +270°
  ];
}

function genAnalogousSet(baseColor: string) {
  const color = colorParse(baseColor);

  const colors = [
    color.clone().darken(20).toHexString(),
    color.clone().darken(10).toHexString(),
    color.toHexString(),
    color.clone().lighten(10).toHexString(),
  ];

  return colors;
}
