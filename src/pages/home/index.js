/** @jsxImportSource @emotion/react */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import S01 from "./components/s01";
import S02 from "./components/s02";
import S03 from "./components/s03";
import S04 from "./components/s04";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div>
      <S01 />
      <S02 />
      <S03 />
      <S04 />
      <div style={{ height: "100vh" }}>빈페이지</div>
    </div>
  );
};

export default Home;
