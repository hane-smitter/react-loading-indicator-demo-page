import {
  type ChangeEvent,
  type ChangeEventHandler,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type KeyboardEventHandler,
  type FC,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import styles from "./Input.module.scss";

interface IinputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

interface PropsWithErrorAsString extends IinputProps {
  error?: string;
  msg?: string; // optional when error is a string
}

interface PropsWithErrorAsTrue extends IinputProps {
  error: true; // specifically true
  msg: string; // required when error is true
}

interface PropsWithErrorAsFalse extends IinputProps {
  error: false; // specifically false
  msg?: string; // optional when error is false
}

const Input: FC<
  PropsWithErrorAsString | PropsWithErrorAsTrue | PropsWithErrorAsFalse
> = ({ value, onChange, onKeyDown, error, msg, ...others }) => {
  const [inputValue, setInputValue] = useState<string>(value || "");
  const inpRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setInputValue(value ?? "");
  }, [value]);

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    const newValue = evt.target.value;

    if (newValue.length && newValue !== inputValue) {
      setInputValue(newValue);

      typeof onChange === "function" && onChange(evt);
    }
  }

  // Handle key navigation (e.g., backspace)
  function handleKeyDown(evt: KeyboardEvent<HTMLInputElement>) {
    if (!inpRef.current) return;

    if (evt.key === "Enter" || evt.key === "Escape") {
      inpRef.current.blur();
    }

    typeof onKeyDown === "function" && onKeyDown(evt);
  }

  return (
    <FormControl error={Boolean(error)}>
      <input
        {...others}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={(elem) => {
          inpRef.current = elem;
          return () => {
            inpRef.current = null;
          };
        }}
        className={styles.customInp}
      />

      {(Boolean(error) || Boolean(msg)) && (
        <FormHelperText id="color-input-helper-text">
          {typeof error === "string" ? error : msg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default memo(Input);
