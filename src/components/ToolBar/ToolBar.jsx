import React, { useState, useEffect, useRef, useCallback } from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { HexColorPicker } from "react-colorful";

import Styled from "./styled";
import OutsideClickListener from "../OutsideClickListener";
import WidgetActionCenter from "./WidgetActionCenter";
import ControllerWidget from "./ControllerWidget";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

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

  const widgetReference = useRef(null); // Ref to widget that displays the component controls
  const resetActiveState = useRef(null); // To track the current `setState` modifying the widget

  // ActionWidget Controller states
  const [widgetActive, setWidgetActive] = useState(false);
  const [triggerWidgetShutOP, setTriggerWidgetShutOP] = useState(0);

  useEffect(() => {
    if (!widgetActive) return;
    unmountComponentAtNode(widgetReference.current);
    if (typeof resetActiveState.current === "function")
      resetActiveState.current(null);
    setWidgetActive(false);
  }, [triggerWidgetShutOP]); // eslint-disable-line

  const widgetClose = useCallback(
    function () {
      // Below commented code does not work correctly inside a function due to closure issues
      // if (!widgetActive) return; // A workaround is to use useEffect

      setTriggerWidgetShutOP((prev) => prev + 1);
    },
    // eslint-disable-next-line
    [widgetActive]
  );

  /**
   * This functions waits transitions on **Text** control input to finish before removal
   * Does not work for other controls other than `<Text />` control
   * @param {HTMLElement} elContainer - Element containing element to be removed
   */
  async function unmountComponent(elContainer) {
    const transitionElements = Array.from(
      elContainer?.querySelectorAll("span.focus-border, span.focus-border i")
    );

    const promises = new Array();
    transitionElements.forEach((el) => {
      const controller = new AbortController();

      promises.push(
        new Promise((resolve, reject) => {
          el.addEventListener(
            "transitionend",
            () => {
              resolve();
              controller.abort();
            },
            { signal: controller.signal }
          );
        })
      );
    });

    await Promise.all(promises);
    unmountComponentAtNode(elContainer);
  }

  return (
    <OutsideClickListener onClickAway={widgetClose}>
      <Styled.Wrapper direction="row" spacing={3}>
        <WidgetActionCenter ref={widgetReference} />

        <Styled.Item
          onClick={(event) => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(null);

            const clickedTarget = event.currentTarget;
            setShowColorPicker(!showColorPicker);
            setWidgetActive(!showColorPicker);
            resetActiveState.current = setShowColorPicker;

            !showColorPicker
              ? render(
                  <ControllerWidget controllingBtn={clickedTarget} key={1}>
                    <HexColorPicker color={color} onChange={setColor} />
                  </ControllerWidget>,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          sx={{ flexGrow: "1" }}
          isActive={showColorPicker}
        >
          <span>{!showColorPicker ? "color" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={(event) => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(null);

            const clickedTarget = event.currentTarget;
            setShowSizeSelect(!showSizeSelect);
            setWidgetActive(!showSizeSelect);
            resetActiveState.current = setShowSizeSelect;

            !showSizeSelect
              ? render(
                  <ControllerWidget controllingBtn={clickedTarget} key={2}>
                    <SelectInput setSize={setSize} size={size} />
                  </ControllerWidget>,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          isActive={showSizeSelect}
        >
          <span>{!showSizeSelect ? "size" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={(event) => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(null);

            const clickedTarget = event.currentTarget;
            setShowTextInput(!showTextInput);
            setWidgetActive(!showTextInput);
            resetActiveState.current = setShowTextInput;

            !showTextInput
              ? render(
                  <ControllerWidget controllingBtn={clickedTarget} key={3}>
                    <TextInput
                      value={textInputValue}
                      onChange={setTextInputValue}
                    />
                  </ControllerWidget>,
                  widgetReference.current
                )
              : unmountComponent(widgetReference.current);
          }}
          isActive={showTextInput}
        >
          <span>{!showTextInput ? "text" : "hide"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={(event) => {
            if (typeof resetActiveState.current === "function")
              resetActiveState.current(null);

            const clickedTarget = event.currentTarget;
            setShowTextColorPicker(!showTextColorPicker);
            setWidgetActive(!showTextColorPicker);
            resetActiveState.current = setShowTextColorPicker;

            !showTextColorPicker
              ? render(
                  <ControllerWidget controllingBtn={clickedTarget} key={4}>
                    <HexColorPicker
                      color={textColor || undefined}
                      onChange={setTextColor}
                    />
                  </ControllerWidget>,
                  widgetReference.current
                )
              : unmountComponentAtNode(widgetReference.current);
          }}
          isActive={showTextColorPicker}
        >
          <span>{!showTextColorPicker ? "textcolor" : "hide"}</span>
        </Styled.Item>
      </Styled.Wrapper>
    </OutsideClickListener>
  );
};

export default React.memo(ToolBar);
