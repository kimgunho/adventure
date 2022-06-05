/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { gsap } from "gsap";

import arrow_down_icon from "../../../../assets/images/home/arrow_down_icon.png";
import VIDEO from "../../../../assets/video/home.mp4";

import { container, box, title, desc, sectionDown, dimmed, video, en, ko } from "./style";

const S01 = () => {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    scrollAnimation();
  }, []);

  const scrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".s1Contianer",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
    tl.fromTo(
      ".video",
      {
        width: "30%",
        y: "50vh",
      },
      {
        width: "80%",
        y: "-50%",
        onComplete: () => {
          playVideo("vid");
        },
      },
      0,
    );
    tl.to(".dimmed", { opacity: 1 }, 0);
  };

  const playVideo = vid => {
    const video = document.getElementById(vid);
    video.play();
  };

  return (
    <section className="s1Contianer" css={container}>
      <div
        css={box}
        onPointerEnter={() => {
          setIsHover(true);
        }}
        onPointerLeave={() => {
          setIsHover(false);
        }}
      >
        <h2 className="title" css={title}>
          {isHover ? (
            <span className="ko" css={ko}>
              어드벤처 프레임
            </span>
          ) : (
            <span className="en" css={en}>
              ADVENTURE FRAME
            </span>
          )}
        </h2>
      </div>

      <div css={sectionDown}>
        <p>Let’s explore</p>
        <img src={arrow_down_icon} alt="" />
      </div>

      {isHover ? (
        <p css={desc}>당신이 필요한 바로 그 영상을 만듭니다</p>
      ) : (
        <p css={desc}>We make what you EXACTLY need</p>
      )}

      <video id="vid" muted loop css={video} className="video">
        <source src={VIDEO} type="video/mp4" />
      </video>

      <div className="dimmed" css={dimmed} />
    </section>
  );
};

export default S01;
