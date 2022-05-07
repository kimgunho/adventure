/** @jsxImportSource @emotion/react */
import { test } from "./style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import S01 from "./components/s01";
import S02 from "./components/s02";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <>
      <S01 />
      <S02 />
      <div css={test}>
        <h3>sdasda;osida;osidj;oaishd;ah</h3>
      </div>
    </>
  );
};

export default Home;
