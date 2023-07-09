import React from "react";

const WidgetActionCenter = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        // zIndex: "1",
        // pointerEvents: "none"
      }}
    ></div>
  );
});

export default WidgetActionCenter;
