import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Home from "./pages/home";
import Project from "./pages/project";
import Detail from "./pages/detail";
import About from "./pages/about";
import PostProject from "./pages/post";
import Footer from "./components/common/footer";
import { Global } from "@emotion/react";
import { globalStyles } from "./assets/styles/globalStyle";

function App() {
  const timestamp = Date.now();
  const date = new Date(timestamp);

  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:kind" element={<Project />} />
        <Route path="/project/:kind/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path={`/post-project-${date.getHours()}-Adeventure`} element={<PostProject />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
