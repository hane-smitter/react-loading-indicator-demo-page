import React, { useState } from "react";
import Select from "react-select";

export interface ISelectInput {
  size?: string;
  handleSizeChange?: (size: string | undefined) => void;
}
interface ISelectInputOptions {
  value?: string;
  label?: string;
}

const sizeOptions: ISelectInputOptions[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];
function createVal(size: string | undefined): ISelectInputOptions | null {
  if (!size) {
    return null;
  }
  const capitalizedSize = size.charAt(0).toUpperCase() + size.substring(1);
  return {
    value: size,
    label: capitalizedSize,
  };
}

const SelectInput = ({ size, handleSizeChange }: ISelectInput) => {
  const [selectValue, setSelectValue] = useState(createVal(size));

  return (
    <Select
      value={selectValue}
      onChange={(selected) => {
        setSelectValue(selected);
        if (typeof handleSizeChange === "function")
          handleSizeChange(selected?.value);
      }}
      options={sizeOptions}
      defaultMenuIsOpen
      className="select-absolute"
    />
  );
};

export default React.memo(SelectInput);
