import { useId } from "react";
import Select, { type Props } from "react-select";

function Selectable(props: Omit<Props, "instanceId" | "styles">) {
  return (
    <Select
      {...props}
      instanceId={useId()}
      styles={{
        option: (base, state) => ({
          ...base,
          fontSize: "12px",
          cursor: "pointer",
          ...(state.isSelected && {
            backgroundColor: "var(--rli-palette-primary-main)",
            fontWeight: 600,
          }),
        }),
        control: (base, state) => ({
          ...base,
          ...(state.isFocused && {
            borderColor: "var(--rli-palette-primary-main) !important",
            boxShadow: "0 0 0 1px var(--rli-palette-primary-main)",
          }),
        }),
      }}
      // classNamePrefix="selectable"
    />
  );
}

export default Selectable;
