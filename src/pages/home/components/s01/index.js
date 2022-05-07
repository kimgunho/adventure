/** @jsxImportSource @emotion/react */
import { container, box, title, desc, sectionDown, dimmed, video } from "./style";
import { useEffect } from "react";
import { gsap } from "gsap";

import arrow_down_icon from "../../../../assets/images/home/arrow_down_icon.png";
import VIDEO from "../../../../assets/video/home.mp4";

const S01 = () => {
  useEffect(() => {
    scrollAnimation();
  }, []);

  const scrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        start: "top top",
        end: "200% bottom",
        scrub: true,
        markers: true,
      },
    });
    tl.to(".dimmed", { opacity: 1, duration: 2 }, 0);
    tl.to(
      ".video",
      {
        onComplete: () => {
          playVideo("vid");
        },
        top: "50%",
        width: "80%",
        duration: 2,
      },
      0,
    );
  };

  const playVideo = vid => {
    const video = document.getElementById(vid);
    video.play();
  };

  return (
    <>
      <section className="container" css={container}>
        <div css={box}>
          <h2 css={title}>ADVENTURE FRAME</h2>
          <p css={desc}>We make what you EXACTLY need</p>
        </div>
        <div css={sectionDown}>
          <p>Let’s explore</p>
          <img src={arrow_down_icon} alt="" />
        </div>
        <video id="vid" muted loop css={video} className="video">
          <source src={VIDEO} type="video/mp4" />
        </video>
        <div className="dimmed" css={dimmed} />
      </section>
    </>
  );
};

export default S01;
