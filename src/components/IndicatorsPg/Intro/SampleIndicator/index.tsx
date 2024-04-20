"use client";

import OrbitProgress from "react-loading-indicators/dist/OrbitProgress";

function SampleIndicator() {
  return (
    <OrbitProgress
      variant="dotted"
      speedPlus={2}
      style={{ fontSize: "4px", marginLeft: "6px" }}
    />
  );
}

export default SampleIndicator;
