import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

import styles from "./styles.module.scss";

interface IWidgetBtn extends ButtonProps {
  isActive: boolean;
}

const WidgetBtn = React.forwardRef(
  (
    { children, isActive, sx, ...rest }: React.PropsWithChildren<IWidgetBtn>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <Button
        variant="contained"
        sx={(theme) => ({
          typography: "body2",
          padding: theme.spacing(0.5),
          ...(sx as React.CSSProperties),
          ...(isActive && {
            backgroundColor: "#07084099",
            "&:hover": { backgroundColor: "#070840" }, // #07084005
          }),
        })}
        ref={ref}
        className={styles.widgetBtn}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

export default WidgetBtn;
