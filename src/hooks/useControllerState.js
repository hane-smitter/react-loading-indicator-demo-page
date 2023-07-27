import { useState, useCallback } from "react";

const useControllerState = () => {
  const [color, setColor] = useState("#32cd32");
  const [size, setSize] = useState("medium");
  const [textInputValue, setTextInputValue] = useState("");
  const [textColor, setTextColor] = useState("");

  const cachedSetColor = useCallback(
    (value) => setColor(value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const cachedSetSize = useCallback(
    (value) => setSize(value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const cachedSetTextInputValue = useCallback(
    (value) => setTextInputValue(value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const cachedSetTextColor = useCallback(
    (value) => setTextColor(value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
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
