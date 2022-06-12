/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import arrow_down_icon from "../../../../assets/images/home/arrow_down_icon.png";
import playButton from "../../../../assets/images/home/playIcon.png";

import VIDEO from "../../../../assets/video/home.mp4";
import introVideoThumImg from "../../../../assets/images/home/introVideoThum.jpg";

import { container, title, sectionDown, mobileVideo, playButtonCSS } from "./style";

const M01 = () => {
  const [isClick, setIsClick] = useState(false);
  const videoRef = useRef();

  const playVideo = () => {
    setIsClick(true);
    videoRef.current.play();
  };

  return (
    <>
      <section css={container}>
        <h2 css={title}>
          ADVENTURE
          <br />
          FRAME
          <span>We make what you EXACTLY need</span>
        </h2>

        <div css={sectionDown}>
          <p>Let’s explore</p>
          <img src={arrow_down_icon} alt="" />
        </div>
      </section>
      <div css={mobileVideo}>
        <button css={playButtonCSS(isClick)} type="button" onClick={playVideo}>
          <img src={playButton} alt="play video" />
        </button>
        <video
          autoPlay={false}
          loop
          muted
          playsinline={false}
          ref={videoRef}
          poster={introVideoThumImg}
        >
          <source src={VIDEO} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default M01;
