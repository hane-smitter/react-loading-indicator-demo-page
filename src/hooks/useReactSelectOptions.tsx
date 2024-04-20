"use client";

import { useState, useCallback } from "react";
import { ActionMeta } from "react-select";

interface Opt {
  value: string;
  label: string;
}

function useReactSelectOptions(options: Opt[]): {
  variantOption: {};
  handleChangeVariantOption: (opt: Opt, actionMeta: ActionMeta<Opt>) => void;
} {
  const [variantOption, setVariantOption] = useState<Opt>({
    value: "",
    label: "",
  });

  const handleChangeVariantOption: (selectedOpt: Opt) => void = useCallback(
    (selectedOpt: Opt) => {
      console.log({ "React-select-opt-newvalue": selectedOpt });
      setVariantOption(selectedOpt);
    },
    [setVariantOption]
  );

  return { variantOption, handleChangeVariantOption };
}

export default useReactSelectOptions;
