/** @jsxImportSource @emotion/react */
import { container, box, title, desc, sectionDown } from "./style";

import arrow_down_icon from "../../assets/images/home/arrow_down_icon.png";

const Home = () => {
  return (
    <section css={container}>
      <div css={box}>
        <h2 css={title}>ADVENTURE FRAME</h2>
        <p css={desc}>We make what you EXACTLY need</p>
      </div>
      <div css={sectionDown}>
        <p>Let’s explore</p>
        <img src={arrow_down_icon} alt="" />
      </div>
    </section>
  );
};

export default Home;
