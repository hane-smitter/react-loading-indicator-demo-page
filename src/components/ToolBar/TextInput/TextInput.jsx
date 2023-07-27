import React, { useState, useEffect, useRef } from "react";
import Styled from "../styled";

const TextInput = ({ value, onChange }) => {
  const [textInpValue, setTextInpValue] = useState(value || "");
  const inpRef = useRef(null);

  const handleTextInput = (event) => {
    const newValue = event?.target?.value;
    setTextInpValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    if (inpRef.current) {
      inpRef.current.focus();
    }
  }, []);

  return (
    <div>
      <Styled.TextInput
        type={"text"}
        value={textInpValue}
        onInput={handleTextInput}
        placeholder="Start typing here..."
        inputRef={inpRef}
      />
    </div>
  );
};

export default TextInput;
