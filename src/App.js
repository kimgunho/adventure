import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Home from "./pages/home";
import Footer from "./components/common/footer";
import { Global } from "@emotion/react";
import { globalStyles } from "./assets/styles/globalStyle";

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
