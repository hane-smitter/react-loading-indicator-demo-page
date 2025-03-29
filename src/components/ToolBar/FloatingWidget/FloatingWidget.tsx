import React, { useRef, useLayoutEffect, PropsWithChildren } from "react";
import { HexColorPicker } from "react-colorful";

// import Styled from "../styled";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import { type ISelectInput } from "../SelectInput/SelectInput";
import { type ITextInput } from "../TextInput/TextInput";
import styles from "./styles.module.scss";

interface IinputTypes {
  ColorInput: {
    color?: string;
    onChange?: (newColor: string) => void;
  };
  TextInput: ITextInput;
  SelectInput: ISelectInput;
}

/**Remove `Name` type from `Obj` type */
type FilterOut<Name, Obj> = Obj extends { name: string }
  ? Omit<Obj, Name extends string ? Name : "">
  : Obj;

interface IinputPropsMap {
  colorinput: "ColorInput";
  textinput: "TextInput";
  selectinput: "SelectInput";
}

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
  anchorBtnRef: React.MutableRefObject<HTMLButtonElement | null>;
  activeWidgetTraits: IActiveWidgetTraits<IT>;
}

function FloatingWidget<
  IT extends IinputTypes[IinputPropsMap[keyof IinputPropsMap]]
>({
  anchorBtnRef,
  activeWidgetTraits,
}: PropsWithChildren<IControllerWidget<IT>>) {
  const elemRef = useRef<HTMLDivElement | null>(null);
  const inputType = activeWidgetTraits.name;
  const hasProps = Object.keys(activeWidgetTraits.props).length > 0;

  // To toggle when we show/hide wiget & widget arrow
  const widgetWillHaveContent = inputType && hasProps;

  // effect below is responsible for moving the widget to the active btn on the toolbar that has triggered to show content on widget
  useLayoutEffect(() => {
    if (elemRef.current && anchorBtnRef.current) {
      const widgetElem = elemRef.current;
      const widgetOpenerBtn = anchorBtnRef.current;
      let widgetDOMBounds: DOMRect | null = null;
      let widgetOpenerBtnBounds: DOMRect | null = null;
      let widgetOpenerBtnParentBounds: DOMRect | null = null;

      // Y axis placement
      widgetElem.style.bottom = "100%";
      widgetElem.style.removeProperty("top");
      widgetElem.classList.remove("arrow-orientaton-up");

      // Get Left value of the button that triggered the widget.
      const left = widgetOpenerBtn?.offsetLeft || 0;
      // X axis placement
      widgetElem.style.left = left + "px";
      widgetElem.style.removeProperty("right");
      widgetElem.classList.remove("arrow-orientaton-right");
      widgetElem.style.removeProperty("--arrow-orientaton-right");
      widgetElem.style.transition = "left 150ms ease-in-out";

      // Triger browser to see and calculate new positions
      widgetDOMBounds = widgetElem.getBoundingClientRect();
      widgetOpenerBtnBounds = widgetOpenerBtn.getBoundingClientRect();
      widgetOpenerBtnParentBounds =
        widgetOpenerBtn?.parentElement?.getBoundingClientRect() || null;

      // We `getBoundingClientRect` of `widgetOpenerBtn` (widgetOpenerBtnBounds) to get x distance of the widget since its `widgetDOMBounds.x` may still be lagging behind its final position
      // when browser flashes to check DOM Layout due to transition animation. The `x` axis distance of `widgetOpenerBtn` is the final position the widget will be.
      if (widgetOpenerBtnBounds.x + widgetDOMBounds.width > window.innerWidth) {
        widgetElem.style.right = "0px";
        // widgetElem.style.transition = "right 150ms ease-in-out";
        widgetElem.style.removeProperty("left");
        widgetElem.classList.add("arrow-orientaton-right");

        // All these properties needed to calculate absolute placement of the pointing arrow.
        if (
          widgetOpenerBtn?.parentElement &&
          widgetOpenerBtnParentBounds?.right &&
          widgetOpenerBtnBounds?.x
        ) {
          const widgetOpenerBtnParentStyles = window.getComputedStyle(
            widgetOpenerBtn?.parentElement
          );
          const surplusLengthDeterminants = {
            borderWidth: widgetOpenerBtnParentStyles.borderWidth,
            marginLeft: widgetOpenerBtnParentStyles.marginLeft,
            paddingLeft: widgetOpenerBtnParentStyles.paddingLeft,
          };
          const surplusLength: number =
            parseFloat(surplusLengthDeterminants.borderWidth) +
            parseFloat(surplusLengthDeterminants.marginLeft) +
            parseFloat(surplusLengthDeterminants.paddingLeft);

          const rightPlacement: number =
            widgetOpenerBtnParentBounds.right -
            surplusLength -
            widgetOpenerBtnBounds.x;

          widgetElem.style.setProperty(
            "--arrow-orientaton-right",
            rightPlacement + "px"
          );
        }
      }

      // Checking and ensure full visibility in Viewport along Y axis.
      if (widgetDOMBounds.y < 0) {
        widgetElem.style.top = "100%";
        widgetElem.style.removeProperty("bottom");
        widgetElem.classList.add("arrow-orientaton-up");
      }
    }
    // eslint-disable-next-line
  }, [JSON.stringify(activeWidgetTraits)]);

  return (
    <div
      ref={elemRef}
      className={`${styles.widget}${!widgetWillHaveContent ? " no-show" : ""}`}
    >
      <div style={{ zIndex: 3, position: "relative" }}>
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
    </div>
  );
}

export default FloatingWidget;
