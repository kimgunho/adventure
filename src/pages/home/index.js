/** @jsxImportSource @emotion/react */
import { test } from "./style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import S01 from "./components/s01";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <>
      <S01 />
      <section css={test}>sssssss</section>
    </>
  );
};

export default Home;
