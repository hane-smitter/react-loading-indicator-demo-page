import React, { useRef, useLayoutEffect } from "react";
import Styled from "../styled";

const ControllerWidget = ({ controllingBtn, children }) => {
  const elemRef = useRef(null);

  useLayoutEffect(() => {
    if (elemRef.current && controllingBtn) {
      const element = elemRef.current;
      let elementBounds = element.getBoundingClientRect();

      //Set X position relative to `controllingBtn`
      const left = controllingBtn?.offsetLeft || 0;

      element.style.bottom = "100%";
      element.style.left = left + "px";
      element.style.removeProperty("right");

      // Triger browser to calculate new positions
      elementBounds = element.getBoundingClientRect();

      if (elementBounds.x + elementBounds.width > window.innerWidth) {
        element.style.right = "0px";
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
  }, []);

  return (
    <Styled.PoppingWidget
      ref={elemRef}
      style={{ minWidth: 200 }}
      className="widget"
    >
      {children}
    </Styled.PoppingWidget>
  );
};

export default ControllerWidget;
