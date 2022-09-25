import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/azeret-mono";

import "./global.scss";
import App from "./App";

const container = document.getElementById("root");

const RenderApp = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  );
};
ReactDOM.render(<RenderApp />, container);
