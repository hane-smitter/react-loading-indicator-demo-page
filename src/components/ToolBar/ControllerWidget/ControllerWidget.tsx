import React, { useRef, useLayoutEffect, PropsWithChildren } from "react";
import { HexColorPicker } from "react-colorful";

// import Styled from "../styled";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import { ISelectInput } from "../SelectInput/SelectInput";
import { ITextInput } from "../TextInput/TextInput";
import styles from "./styles.module.scss";

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
      const widgetElem = elemRef.current;
      const widgetOpenerBtn = targetBtnRef.current;
      let widgetDOMBounds: DOMRect | null = null;
      let widgetOpenerBtnBounds: DOMRect | null = null;

      //Set X position relative to `targetBtnRef`
      const left = widgetOpenerBtn?.offsetLeft || 0;

      widgetElem.style.bottom = "100%";
      widgetElem.style.left = left + "px";
      widgetElem.style.transition = "left 150ms ease-in-out";
      widgetElem.style.removeProperty("right");

      // Triger browser to see and calculate new positions
      widgetDOMBounds = widgetElem.getBoundingClientRect();
      widgetOpenerBtnBounds = widgetOpenerBtn.getBoundingClientRect();

      // We `getBoundingClientRect` of `widgetOpenerBtn` (widgetOpenerBtnBounds) to get x distance of the widget since its `widgetDOMBounds.x` may still be lagging behind its final position
      // when browser flashes to check DOM Layout due to transition animation. The `x` axis distance of `widgetOpenerBtn` is the final position the widget will be.
      if (widgetOpenerBtnBounds.x + widgetDOMBounds.width > window.innerWidth) {
        widgetElem.style.right = "0px";
        // widgetElem.style.transition = "right 150ms ease-in-out";
        widgetElem.style.removeProperty("left");
      }

      // Set Y position
      if (widgetDOMBounds.y < 0) {
        console.group("Widget Y bounds < 0: GOES OFFSCREEN ON Y-AXIS");
        console.log(widgetElem);
        console.log("widgetDOMBounds.y: ", widgetDOMBounds.y);
        console.groupEnd();

        widgetElem.style.top = "90%";
        widgetElem.style.removeProperty("bottom");
        widgetElem.classList.add("bottomTranspose");
      } else {
        console.group("Widget Y bounds GREATER THAN 0: WITHIN Y AXIS VIEWPORT");
        console.log(widgetElem);
        console.log("widgetDOMBounds.y: ", widgetDOMBounds.y);
        console.groupEnd();

        widgetElem.style.bottom = "100%";
        widgetElem.style.removeProperty("top");
        widgetElem.classList.remove("bottomTranspose");
      }
    }
    // eslint-disable-next-line
  }, [JSON.stringify(activeWidgetTraits)]);

  return (
    <div ref={elemRef} className={styles.widget}>
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
    </div>
  );
}

export default ControllerWidget;
