import React, { useState, useEffect, useRef } from "react";

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
      <input
        type={"text"}
        value={textInpValue}
        onInput={handleTextInput}
        placeholder="Start typing here..."
        style={{
          textAlign: "center",
          padding: "3px 8px",
          backgroundColor: "#fff",
        }}
        ref={inpRef}
      />
    </div>
  );
};

export default TextInput;
