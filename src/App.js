import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Home from "./pages/home";
import Project from "./pages/project";
import Detail from "./pages/detail";
import About from "./pages/about";
import Footer from "./components/common/footer";
import NotPage from "./components/common/404";
import ScrollTop from "./components/common/scrollTop";
import { Global } from "@emotion/react";
import { globalStyles } from "./assets/styles/globalStyle";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:kind" element={<Project />} />
        <Route path="/project/:kind/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;
