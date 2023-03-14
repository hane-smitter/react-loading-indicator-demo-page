import React from "react";
import { Container } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loaders from "./components/IndicatorsPg";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Loaders />
      </Container>
      <Footer />
    </>
  );
};

export default App;
