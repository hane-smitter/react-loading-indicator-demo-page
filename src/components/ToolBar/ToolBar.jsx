import React, { useState, useEffect, useRef, useCallback } from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { HexColorPicker } from "react-colorful";
import Select from "react-select";

import Styled from "./styled";
import TextInput from "./TextInput";
import OutsideClickListener from "../OutsideClickListener";

const sizeOptions = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const ToolBar = ({
  color,
  setColor,
  size,
  setSize,
  textInputValue,
  setTextInputValue,
  textColor,
  setTextColor,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showSizeSelect, setShowSizeSelect] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);

  const widgetReference = useRef(null);
  const resetActiveState = useRef(() => {}); // To track the current `setState` modifying the widget

  // ActionWidget Controller states
  const [widgetActive, setWidgetActive] = useState(false);
  const [triggerWidgetShutOP, setTriggerWidgetShutOP] = useState(0);

  useEffect(() => {
    if (!widgetActive) return;
    unmountComponentAtNode(widgetReference.current);
    if (typeof resetActiveState.current === "function")
      resetActiveState.current(false);
    setWidgetActive(false);
  }, [triggerWidgetShutOP]);

  const widgetClose = useCallback(
    function () {
      // The LOC below does not work correctly inside a function due to closures
      // if (!widgetActive) return; // A workaround is to use useEffect

      setTriggerWidgetShutOP((prev) => prev + 1);
    },
    [widgetActive]
  );

  return (
    <OutsideClickListener onClickAway={widgetClose}>
      <Styled.Wrapper direction="row" spacing={3}>
        {/*  */}
        <Styled.ActionWidgetBox>
          <ActionWidget ref={widgetReference} />
        </Styled.ActionWidgetBox>

        <Styled.Item
          onClick={() => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(false);

            setShowColorPicker(!showColorPicker);

            setWidgetActive(!showColorPicker);
            resetActiveState.current = setShowColorPicker;

            !showColorPicker
              ? render(
                  <HexColorPicker color={color} onChange={setColor} />,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          sx={{ flexGrow: "1" }}
          isActive={showColorPicker}
          variant={"contained"}
        >
          <span>{!showColorPicker ? "color" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(false);

            setShowSizeSelect(!showSizeSelect);

            setWidgetActive(!showSizeSelect);
            resetActiveState.current = setShowSizeSelect;

            !showSizeSelect
              ? render(
                  <Select
                    value={sizeOptions.find((item) => item.value === size)}
                    onChange={(value) => setSize(value.value)}
                    options={sizeOptions}
                    className="select-absolute"
                  />,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          variant={"contained"}
          isActive={showSizeSelect}
        >
          <span>{!showSizeSelect ? "size" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(false);

            setShowTextInput(!showTextInput);

            setWidgetActive(!showTextInput);
            resetActiveState.current = setShowTextInput;

            !showTextInput
              ? render(
                  <TextInput
                    value={textInputValue}
                    onChange={setTextInputValue}
                  />,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          variant={"contained"}
          isActive={showTextInput}
        >
          <span>{!showTextInput ? "text" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(false);

            setShowTextColorPicker(!showTextColorPicker);

            setWidgetActive(!showTextColorPicker);
            resetActiveState.current = setShowTextColorPicker;

            !showTextColorPicker
              ? render(
                  <HexColorPicker color={textColor || undefined} onChange={setTextColor} />,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          variant={"contained"}
          isActive={showTextColorPicker}
        >
          <span>{!showTextColorPicker ? "textcolor" : "hide"}</span>
        </Styled.Item>
      </Styled.Wrapper>
    </OutsideClickListener>
  );
};

const ActionWidget = React.forwardRef(({ children }, ref) => {
  return (
    <div style={{ minWidth: 200, position: "relative" }} ref={ref}>
      {children}
    </div>
  );
});

export default React.memo(ToolBar);
