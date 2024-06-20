"use client";

import { useState, useCallback } from "react";
import type { ActionMeta } from "react-select";

export interface SelectOpt<V = string> {
  value: V | undefined;
  label: string | undefined;
}

function useReactSelectOptions<OptVal = string>(): {
  variantOption: SelectOpt<OptVal>;
  handleChangeVariantOption: (
    opt: SelectOpt<OptVal>,
    actionMeta: ActionMeta<SelectOpt<OptVal>>
  ) => void;
} {
  const [variantOption, setVariantOption] = useState<SelectOpt<OptVal>>({
    value: undefined,
    label: undefined,
  });

  const handleChangeVariantOption = useCallback<
    (selectedOpt: SelectOpt<OptVal>) => void
  >(
    (selectedOpt) => {
      // console.log({ "React-select-opt-newvalue": selectedOpt });
      setVariantOption(selectedOpt);
    },
    [setVariantOption]
  );

  return { variantOption, handleChangeVariantOption };
}

export default useReactSelectOptions;
