import { ClickAwayListener } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import Select from "react-select";

import Styled from "./styled";
import TextInput from "./TextInput";

const sizeOptions = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const RenderAction = ({ content, show, undo }) => {
  const [, setUndoState] = useState(() => {});

  useEffect(() => {
    return () => {
      setUndoState(() => undo);
      undo && undo(false);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setUndoState((previousUndo) => {
      previousUndo && previousUndo(false);
      return undo;
    });
  }, [content]);

  return (
    <>
      {show && (
        <div style={{ minWidth: 200, position: "relative" }}>{content}</div>
      )}
    </>
  );
};

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

  // RenderAction Controller states
  const [activeComponent, setActiveComponent] = useState(null);
  const [showActive, setShowActive] = useState(false);
  const [undoFn, setUndoFn] = useState(() => () => {});

  function handleCloseOnWidgetClickOutside() {
    setActiveComponent(null);
    setShowActive(false);
    setUndoFn((previous) => {
      // console.log("previous in TOOLBAR COMPONENT");
      // console.log(previous);
      previous && previous();
      return () => {};
    });
  }
  return (
    <ClickAwayListener onClickAway={handleCloseOnWidgetClickOutside}>
      <Styled.Wrapper direction="row" spacing={3}>
        <Styled.RenderActionBox>
          <RenderAction
            show={showActive}
            undo={undoFn}
            content={activeComponent}
          />
        </Styled.RenderActionBox>

        <Styled.Item
          onClick={() => {
            setColorPickerOpen((val) => {
              setUndoFn((prev) => {
                return setColorPickerOpen;
              });
              setShowActive(() => {
                return !val;
              });
              setActiveComponent(() => (
                <HexColorPicker color={color} onChange={setColor} />
              ));

              return !val;
            });
          }}
          sx={{ flexGrow: "1" }}
          variant={"contained"}
        >
          <span>{!colorPickerOpen ? "color" : "close"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            setSizeSelectOpen((val) => {
              setUndoFn(() => {
                return setSizeSelectOpen;
              });
              setShowActive(() => {
                return !val;
              });
              setActiveComponent(() => (
                <Select
                  value={sizeOptions.find((item) => item.value === size)}
                  onChange={(value) => setSize(value.value)}
                  options={sizeOptions}
                  className="select-absolute"
                />
              ));

              return !val;
            });
          }}
          variant={"contained"}
        >
          <span>{!sizeSelectOpen ? "size" : "close"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            setTextInputOpen((val) => {
              setUndoFn(() => {
                return setTextInputOpen;
              });
              setShowActive(() => {
                return !val;
              });
              setActiveComponent(() => (
                <TextInput
                  value={textInputValue}
                  onChange={setTextInputValue}
                />
              ));

              return !val;
            });
          }}
          variant={"contained"}
        >
          <span>{!textInputOpen ? "text" : "close"}</span>
        </Styled.Item>

        <Styled.Item
          onClick={() => {
            setTextColorPickerOpen((val) => {
              setUndoFn((prev) => {
                return setTextColorPickerOpen;
              });
              setShowActive(() => {
                return !val;
              });
              setActiveComponent(() => (
                <HexColorPicker color={textColor} onChange={setTextColor} />
              ));

              return !val;
            });
          }}
          variant={"contained"}
        >
          <span>{!textColorPickerOpen ? "textcolor" : "close"}</span>
        </Styled.Item>
      </Styled.Wrapper>
    </ClickAwayListener>
  );
};

export default ToolBar;
