import React, { useState } from "react";

const TextInput = ({ value, onChange }) => {
  const [textInpValue, setTextInpValue] = useState(value || "");

  const handleTextInput = (event) => {
    const newValue = event?.target?.value;
    setTextInpValue(newValue);
    onChange(newValue);
  };
  return (
    <div>
      <input
        type={"text"}
        value={textInpValue}
        onInput={handleTextInput}
        placeholder="Start typing here..."
      />
    </div>
  );
};

export default TextInput;
