import React, { useState, useEffect, useRef } from "react";
// import Styled from "../styled";
import styles from "./styles.module.scss";

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
      {/* <Styled.TextInput
        type={"text"}
        value={textInpValue}
        onInput={handleTextInput}
        placeholder="Start typing here..."
        inputRef={inpRef}
      /> */}

      <div className={styles.txtInp}>
        <input
          ref={inpRef}
          type="text"
          value={textInpValue}
          onInput={handleTextInput}
          placeholder="Start typing here..."
          className={styles.fancyInput}
        />
        <span className="borderDecorations">
          <i></i>
        </span>
      </div>
    </div>
  );
};

export default TextInput;
