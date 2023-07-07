import React, { useState } from "react";
import Select from "react-select";

const sizeOptions = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];
function createVal(size) {
  if (!size) {
    return {};
  }
  const capitalizedSize =
    String(size).charAt(0).toUpperCase() + String(size).substring(1);
  return {
    value: size,
    label: capitalizedSize,
  };
}

const SelectInput = ({ size, setSize }) => {
  const [selectValue, setSelectValue] = useState(createVal(size));

  return (
    <Select
      value={selectValue}
      onChange={(value) => {
        setSelectValue(value);
        setSize(value.value);
      }}
      options={sizeOptions}
      defaultMenuIsOpen
      className="select-absolute"
    />
  );
};

export default React.memo(SelectInput);
