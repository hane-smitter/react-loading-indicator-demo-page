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
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [sizeSelectOpen, setSizeSelectOpen] = useState(false);
  const [textInputOpen, setTextInputOpen] = useState(false);
  const [textColorPickerOpen, setTextColorPickerOpen] = useState(false);

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

            setColorPickerOpen(!colorPickerOpen);

            setWidgetActive(!colorPickerOpen);
            resetActiveState.current = setColorPickerOpen;

            !colorPickerOpen
              ? render(
                  <HexColorPicker color={color} onChange={setColor} />,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          sx={{
            ...(colorPickerOpen && { backgroundColor: "#070840" }),
            ...{ flexGrow: "1" },
          }}
          variant={"contained"}
        >
          <span>{!colorPickerOpen ? "color" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(false);

            setSizeSelectOpen(!sizeSelectOpen);

            setWidgetActive(!sizeSelectOpen);
            resetActiveState.current = setSizeSelectOpen;

            !sizeSelectOpen
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
          sx={{
            ...(sizeSelectOpen && { backgroundColor: "#070840" }),
          }}
        >
          <span>{!sizeSelectOpen ? "size" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(false);

            setTextInputOpen(!textInputOpen);

            setWidgetActive(!textInputOpen);
            resetActiveState.current = setTextInputOpen;

            !textInputOpen
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
          sx={{
            ...(textInputOpen && { backgroundColor: "#070840" }),
          }}
        >
          <span>{!textInputOpen ? "text" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(false);

            setTextColorPickerOpen(!textColorPickerOpen);

            setWidgetActive(!textColorPickerOpen);
            resetActiveState.current = setTextColorPickerOpen;

            !textColorPickerOpen
              ? render(
                  <HexColorPicker color={textColor} onChange={setTextColor} />,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          variant={"contained"}
          sx={{
            ...(textColorPickerOpen && { backgroundColor: "#070840" }),
          }}
        >
          <span>{!textColorPickerOpen ? "textcolor" : "hide"}</span>
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
