import { useState, type ClipboardEvent, type ChangeEvent } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { ChevronUp, ChevronDown } from "react-feather";
import { HexColorPicker, HexColorInput } from "react-colorful";
import colorParse from "tinycolor2";

import styles from "./ChangeColor.module.scss";
import Input from "src/components/Input";

function ChangeColor() {
  const [show, setShow] = useState(false);
  const [colorValue, setColorValue] = useState("");

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
            <Box className={styles.colorOptWrapper}>
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
            <Box className={styles.colorOptWrapper}>
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
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

export default ChangeColor;
