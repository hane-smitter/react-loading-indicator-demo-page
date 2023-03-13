import React from "react";
import { Container } from "@mui/material";

import Header from "./components/Header";
import Loaders from "./components/Loaders";
import Footer from "./components/Footer";

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
