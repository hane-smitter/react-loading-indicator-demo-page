import React, { useRef, useEffect, Children, cloneElement } from "react";

const OutsideClickListener = ({ children, onClickAway }) => {
  const elemRef = useOutsideClickListener(onClickAway);

  const childrenWithProps = React.Children.map(children, (child) => {
    let onlyChild = Children.only(child); // Not sure...

    return cloneElement(onlyChild, { ref: elemRef });
  });

  return childrenWithProps;
};

function useOutsideClickListener(runner) {
  const controller = new AbortController();

  const elemReference = useRef(null);

  useEffect(() => {
    let targetElem = document;

    function handleClickOutside(event) {
      if (
        elemReference.current &&
        !elemReference.current.contains(event.target)
      ) {
        // console.log(runner)
        runner && runner?.call(null, event);
      }
    }

    targetElem.addEventListener("click", handleClickOutside, {
      signal: controller.signal,
      capture: true,
    });

    return () => {
      controller.abort();
    };
  }, [elemReference]);

  return elemReference;
}

export default React.memo(OutsideClickListener);
