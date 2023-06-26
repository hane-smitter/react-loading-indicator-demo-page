import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/azeret-mono";
import "@fontsource/nunito";

import App from "./App";
import theme from "./theme";

const container = document.getElementById("root");

const RenderApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
ReactDOM.render(<RenderApp />, container);
