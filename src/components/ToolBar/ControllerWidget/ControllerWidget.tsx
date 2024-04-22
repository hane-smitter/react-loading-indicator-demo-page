import React, { useRef, useLayoutEffect, PropsWithChildren } from "react";
import { HexColorPicker } from "react-colorful";

import Styled from "../styled";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import { ISelectInput } from "../SelectInput/SelectInput";
import { ITextInput } from "../TextInput/TextInput";

interface IinputTypes {
  ColorInput: {
    color?: string;
    onChange?: (newColor: string) => void;
  };
  TextInput: ITextInput;
  SelectInput: ISelectInput;
}

interface IinputPropsMap {
  colorinput: "ColorInput";
  textinput: "TextInput";
  selectinput: "SelectInput";
}

/**Remove `Name` type from `Obj` type */
type FilterOut<Name, Obj> = Obj extends { name: string }
  ? Omit<Obj, Name extends string ? Name : "">
  : Obj;
export interface IActiveWidgetTraits<T> {
  // name: keyof IinputPropsMap | (string & {});
  name: T extends { name: keyof IinputPropsMap }
    ? T["name"]
    : keyof IinputPropsMap | (string & {});
  // props: {
  //   [K in keyof FilterOut<"name", T>]: FilterOut<"name", T>[K];
  // };
  props: T extends { name: keyof IinputPropsMap }
    ? IinputTypes[IinputPropsMap[T["name"]]]
    : {
        [K in keyof FilterOut<"name", T>]: FilterOut<"name", T>[K];
      };
}

interface IControllerWidget<IT> {
  targetBtnRef: React.MutableRefObject<HTMLButtonElement | null>;
  activeWidgetTraits: IActiveWidgetTraits<IT>;
}

function ControllerWidget<
  IT extends IinputTypes[IinputPropsMap[keyof IinputPropsMap]]
>({
  targetBtnRef,
  activeWidgetTraits,
}: PropsWithChildren<IControllerWidget<IT>>) {
  const elemRef = useRef<HTMLDivElement | null>(null);
  const inputType = activeWidgetTraits.name;
  const hasProps = Object.keys(activeWidgetTraits.props).length > 0;

  // effect below is responsible for moving the widget to the active btn on the toolbar that has triggered to show content on widget
  useLayoutEffect(() => {
    if (elemRef.current && targetBtnRef.current) {
      const element = elemRef.current;
      const widgetOpenerBtn = targetBtnRef.current;
      let elementBounds = element.getBoundingClientRect();

      //Set X position relative to `targetBtnRef`
      const left = widgetOpenerBtn?.offsetLeft || 0;

      element.style.bottom = "100%";
      element.style.left = left + "px";
      element.style.transition = "left 150ms ease-in-out";
      element.style.removeProperty("right");

      // Triger browser to see and calculate new positions
      elementBounds = element.getBoundingClientRect();

      if (elementBounds.x + elementBounds.width > window.innerWidth) {
        element.style.right = "0px";
        element.style.transition = "right 150ms ease-in-out";
        element.style.removeProperty("left");
      }

      // Set Y position
      if (elementBounds.y < 0) {
        element.style.top = "90%";
        element.style.removeProperty("bottom");
      } else {
        element.style.bottom = "100%";
        element.style.removeProperty("top");
      }
    }
    // eslint-disable-next-line
  }, [JSON.stringify(activeWidgetTraits)]);

  return (
    <Styled.PoppingWidget ref={elemRef} className="widget">
      {inputType === "colorinput" && hasProps ? (
        <HexColorPicker
          {...(activeWidgetTraits.props as IinputTypes["ColorInput"])}
        />
      ) : inputType === "selectinput" && hasProps ? (
        <SelectInput
          {...(activeWidgetTraits.props as IinputTypes["SelectInput"])}
        />
      ) : inputType === "textinput" && hasProps ? (
        <TextInput
          {...(activeWidgetTraits.props as IinputTypes["TextInput"])}
        />
      ) : null}
    </Styled.PoppingWidget>
  );
}

export default ControllerWidget;
