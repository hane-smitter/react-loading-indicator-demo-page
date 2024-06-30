import { useState, useCallback } from "react";

interface IControllerStateProps {
  color?: string;
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  textInput?: string;
  textColor?: string;
}

const useControllerState = () => {
  const [color, setColor] = useState<IControllerStateProps["color"]>("#32cd32");
  const [size, setSize] = useState<IControllerStateProps["size"]>("medium");
  const [textInputValue, setTextInputValue] =
    useState<IControllerStateProps["textInput"]>("");
  const [textColor, setTextColor] =
    useState<IControllerStateProps["textColor"]>("");

  const cachedSetColor = useCallback(
    (newColor: IControllerStateProps["color"]): void => setColor(newColor),
    [setColor]
  );
  const cachedSetSize = useCallback(
    (newSize: IControllerStateProps["size"]): void => setSize(newSize),
    [setSize]
  );
  const cachedSetTextInputValue = useCallback(
    (newTxtVal: IControllerStateProps["textInput"]): void =>
      setTextInputValue(newTxtVal),
    [setTextInputValue]
  );
  const cachedSetTextColor = useCallback(
    (newTxtColor: IControllerStateProps["textColor"]) =>
      setTextColor(newTxtColor),
    [setTextColor]
  );

  return {
    color,
    setColor: cachedSetColor,
    size,
    setSize: cachedSetSize,
    textInputValue,
    setTextInputValue: cachedSetTextInputValue,
    textColor,
    setTextColor: cachedSetTextColor,
  };
};

export default useControllerState;
