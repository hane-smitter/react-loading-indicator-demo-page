import React, { useState, useEffect, useRef } from "react";
import Styled from "../styled";

export interface ITextInput {
  value?: string;
  handleTextChange?: (text: string | undefined) => void;
}

const TextInput = ({ value, handleTextChange }: ITextInput) => {
  const [textInpValue, setTextInpValue] = useState(value || "");
  const inpRef = useRef<HTMLInputElement>(null);

  const handleTextInput = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setTextInpValue(newValue);
    if (typeof handleTextChange === "function") handleTextChange(newValue);
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
