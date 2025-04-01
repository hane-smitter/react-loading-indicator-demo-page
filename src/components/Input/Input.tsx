import {
  type ChangeEvent,
  type ChangeEventHandler,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type KeyboardEventHandler,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
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

function Input({ value, onChange, onKeyDown, ...others }: IinputProps) {
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
  );
}

export default memo(Input);
