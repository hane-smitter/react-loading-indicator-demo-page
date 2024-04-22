import React, {
  useRef,
  useEffect,
  Children,
  cloneElement,
  PropsWithChildren,
  ReactElement,
} from "react";

interface IOutsideClickListener {
  onClickAway: (event: globalThis.MouseEvent) => void | undefined;
}
/** This should be wrapped around a __single__ React Element that can hold/handle react `ref` */
const OutsideClickListener = React.memo(
  ({ children, onClickAway }: PropsWithChildren<IOutsideClickListener>) => {
    const elemRef = useOutsideClickListener(onClickAway);

    // const childrenWithProps = React.Children.map(children, (child) => {
    //   let onlyChild = Children.only(child); // Not sure...

    //   return cloneElement(onlyChild, { ref: elemRef });
    // });

    const Elem = Children.only(children); // assert `children` is a single React element. Otherwise throws error.
    const ElemWithNewProps = cloneElement(Elem as ReactElement, {
      ref: elemRef,
    });

    return ElemWithNewProps;
  }
);

function useOutsideClickListener(
  runner: (event: globalThis.MouseEvent) => void | undefined
) {

  const parentElemRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    if (!parentElemRef.current) return;

    // Towering Element that will hold click listener to check if, a DOM node below it, contains another node.
    const towerElem: Document = document;

    // (this: Document, ev: MouseEvent)
    function handleClickOutsideCheck(event: globalThis.MouseEvent) {
      if (!parentElemRef.current?.contains(event.target as globalThis.Node)) {
        // Setting `this` value though not used
        runner?.call(parentElemRef.current, event);
        return;
      }

    }

    towerElem.addEventListener("click", handleClickOutsideCheck, {
      signal: controller.signal,
      capture: true,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return parentElemRef;
}

export default OutsideClickListener;
