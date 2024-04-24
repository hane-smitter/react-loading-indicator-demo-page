"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Stack from "@mui/material/Stack";

import OutsideClickListener from "../OutsideClickListener";
import ControllerWidget from "./ControllerWidget";
import { IActiveWidgetTraits } from "./ControllerWidget/ControllerWidget";
import WidgetBtn from "./WidgetBtn";

const initWidgetTraits = { name: "", props: {} };

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
  const activeWidgetBtn = useRef<HTMLButtonElement | null>(null);
  // Below refs are useful to find the current active button showing widget
  const colorWidgetBtn = useRef<HTMLButtonElement | null>(null);
  const txtColorWidgetBtn = useRef<HTMLButtonElement | null>(null);
  const sizeWidgetBtn = useRef<HTMLButtonElement | null>(null);
  const txtWidgetBtn = useRef<HTMLButtonElement | null>(null);

  const colorWidgetBtnActive = colorWidgetBtn.current
    ? colorWidgetBtn.current === activeWidgetBtn.current
    : false;
  const sizeWidgetBtnActive = sizeWidgetBtn.current
    ? sizeWidgetBtn.current === activeWidgetBtn.current
    : false;
  const txtColorWidgetBtnActive = txtColorWidgetBtn.current
    ? txtColorWidgetBtn.current === activeWidgetBtn.current
    : false;
  const txtWidgetBtnActive = txtWidgetBtn.current
    ? txtWidgetBtn.current === activeWidgetBtn.current
    : false;

  const [activeWidgetTraits, setActiveWidgetTraits] =
    useState<IActiveWidgetTraits<{}>>(initWidgetTraits);
  const [widgetTextinputTraits, setWidgetTextinputTraits] = useState<
    IActiveWidgetTraits<{ name: "textinput" }>
  >({ name: "textinput", props: {} });
  const [widgetColorinputTraits, setWidgetColorinputTraits] = useState<
    IActiveWidgetTraits<{ name: "colorinput" }>
  >({ name: "colorinput", props: {} });
  const [widgetSelectinputTraits, setWidgetSelectinputTraits] = useState<
    IActiveWidgetTraits<{ name: "selectinput" }>
  >({ name: "selectinput", props: {} });

  // Widget traits would have been set from each button click in the JSX `return`ed below just using `setActiveWidgetTraits`
  //
  // NOTE: The widget in topic, imported as `ControllerWidget`, has all the Elements it needs to show. And `activeWidgetTraits` contains
  // traits that needs to inform the `ControllerWidget` which widget to show/render(including props to pass to it).
  //
  // We opted to set specific state from each button click, so as to get typechecking on the Input Component we wish to show inside the floating widget.
  // Then `useEffect`s below would react accordingly to the button that sets new widget traits on its state and apply to the `activeWidgetTraits` being observed by widget container(`ControllerWidget`)
  useEffect(() => {
    if (Object.keys(widgetTextinputTraits.props).length < 1) return; // To avoid setting activeWidget on initial render

    setActiveWidgetTraits({ ...widgetTextinputTraits });
  }, [widgetTextinputTraits]);
  useEffect(() => {
    if (Object.keys(widgetColorinputTraits.props).length < 1) return;

    setActiveWidgetTraits({ ...widgetColorinputTraits });
  }, [widgetColorinputTraits]);
  useEffect(() => {
    if (Object.keys(widgetSelectinputTraits.props).length < 1) return;

    setActiveWidgetTraits({ ...widgetSelectinputTraits });
  }, [widgetSelectinputTraits]);

  const widgetOpen = useCallback(
    function (event: React.MouseEvent<HTMLButtonElement>) {
      const clickedBtn = event.currentTarget,
        btnName = clickedBtn.name;
      activeWidgetBtn.current = clickedBtn; // Ensure this is set before a rerender; so after a rerender, next frame can have the updated value.

      switch (btnName) {
        case "indicatorbodycolorbtn":
          setWidgetColorinputTraits({
            ...widgetColorinputTraits,
            props: { color, onChange: setColor },
          });
          break;

        case "indicatorsizebtn":
          setWidgetSelectinputTraits({
            ...widgetSelectinputTraits,
            props: { handleSizeChange: setSize, size: size },
          });
          break;
        case "indicatortxtbtn":
          setWidgetTextinputTraits({
            ...widgetTextinputTraits,
            props: {
              handleTextChange: setTextInputValue,
              value: textInputValue,
            },
          });
          break;
        case "indicatortxtcolorbtn":
          setWidgetColorinputTraits({
            ...widgetColorinputTraits,
            props: { color: textColor, onChange: setTextColor },
          });
          break;

        default:
          widgetClose();
          break;
      }
    },
    [
      setWidgetColorinputTraits,
      setWidgetTextinputTraits,
      setWidgetSelectinputTraits,
    ]
  );

  const widgetClose = useCallback(
    function () {
      // React will ignore update if the next state is equal to the previous state
      // Hence repeated Outside clicks won't necessarily cause a rerender
      activeWidgetBtn.current = null;
      setActiveWidgetTraits(initWidgetTraits);
    },
    [setActiveWidgetTraits]
  );

  return (
    <>
      <OutsideClickListener onClickAway={widgetClose}>
        <Stack
          direction="row"
          spacing={3}
          sx={(theme) => ({
            padding: theme.spacing(1),
            // zIndex: 10, // Avoiding to create stacking context; it conflicts with react-select dropdown
            fontSize: "13px",
            position: "relative",
            gap: "10px",
            width: "100%",
            marginInline: "auto",
            flexWrap: "nowrap",
            [theme.breakpoints.down("sm")]: {
              flexWrap: "wrap",
            },
          })}
        >
          <ControllerWidget
            targetBtnRef={activeWidgetBtn}
            activeWidgetTraits={activeWidgetTraits}
          />

          <WidgetBtn
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              if (!colorWidgetBtnActive) {
                widgetOpen(event);
              } else {
                widgetClose();
              }
            }}
            ref={colorWidgetBtn}
            name="indicatorbodycolorbtn"
            sx={{ flexGrow: "1" }} // Does not support passing a function(not hanled).
            isActive={colorWidgetBtnActive}
          >
            <span>{colorWidgetBtnActive ? "hide" : "color"}</span>
          </WidgetBtn>

          <WidgetBtn
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              if (!txtWidgetBtnActive) {
                widgetOpen(event);
              } else {
                widgetClose();
              }
            }}
            ref={txtWidgetBtn}
            name="indicatortxtbtn"
            isActive={txtWidgetBtnActive}
          >
            <span>{txtWidgetBtnActive ? "hide" : "text"}</span>
          </WidgetBtn>

          <WidgetBtn
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              if (!txtColorWidgetBtnActive) {
                widgetOpen(event);
              } else {
                widgetClose();
              }
            }}
            ref={txtColorWidgetBtn}
            name="indicatortxtcolorbtn"
            isActive={txtColorWidgetBtnActive}
          >
            <span>{txtColorWidgetBtnActive ? "hide" : "textcolor"}</span>
          </WidgetBtn>

          <WidgetBtn
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              if (!sizeWidgetBtnActive) {
                widgetOpen(event);
              } else {
                widgetClose();
              }
            }}
            ref={sizeWidgetBtn}
            name="indicatorsizebtn"
            isActive={sizeWidgetBtnActive}
          >
            <span>{sizeWidgetBtnActive ? "hide" : "size"}</span>
          </WidgetBtn>
        </Stack>
      </OutsideClickListener>
    </>
  );
};

export default React.memo(ToolBar);
