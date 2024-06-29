import Container from "@mui/material/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loaders from "./components/IndicatorsPg";

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Loaders />
      </Container>
      <Footer />
    </>
  );
};

export default App;
