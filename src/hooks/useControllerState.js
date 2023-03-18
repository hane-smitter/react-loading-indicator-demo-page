import { useState, useCallback } from "react";

const useControllerState = () => {
  const [color, setColor] = useState("#32cd32");
  const [size, setSize] = useState("medium");
  const [textInputValue, setTextInputValue] = useState("");
  const [textColor, setTextColor] = useState("");

  const cachedSetColor = useCallback(
    setColor,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const cachedSetSize = useCallback(
    setSize,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const cachedSetTextInputValue = useCallback(
    setTextInputValue,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const cachedSetTextColor = useCallback(
    setTextColor,
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
