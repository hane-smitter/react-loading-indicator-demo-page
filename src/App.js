import React from "react";
import { Container } from "@mui/material";

import Header from "./components/Header";
import Loaders from "./components/Loaders";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container>
      <Header />
      <Loaders />
      <Footer />
    </Container>
  );
};

export default App;
