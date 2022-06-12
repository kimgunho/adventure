/** @jsxImportSource @emotion/react */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import S01 from "./components/s01";
import M01 from "./components/m01";
import S02 from "./components/s02";
import M02 from "./components/m02";
import S03 from "./components/s03";
import M03 from "./components/m03";
import S04 from "./components/s04";
import S05 from "./components/s05";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div>
      <S01 />
      <M01 />
      <div style={{ overflow: "hidden", width: "100%", height: "100vh" }}>
        <S02 />
      </div>
      <M02 />
      <S03 />
      <M03 />
      <S04 />
      <S05 />
    </div>
  );
};

export default Home;
