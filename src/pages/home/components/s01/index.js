/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import arrow_down_icon from "../../../../assets/images/home/arrow_down_icon.png";
import arrow_right_icon from "../../../../assets/images/home/arrow_right_icon.png";
import close_icon from "../../../../assets/images/home/closeIcon.png";
import VIDEO from "../../../../assets/video/home.mp4";

import {
  container,
  box,
  title,
  desc,
  sectionDown,
  dimmed,
  video,
  en,
  ko,
  modalPopUp,
} from "./style";

const S01 = () => {
  const [isActive, setIsActive] = useState(true);
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
      <div css={box}>
        <h2 className="title" css={title}>
          <span className="en" css={en}>
            ADVENTURE FRAME
          </span>
          <span className="ko" css={ko}>
            어드벤처 프레임
          </span>
        </h2>
        <p className="en" css={desc}>
          We make what you EXACTLY need
        </p>
        <p className="ko" css={desc}>
          당신이 필요한 바로 그 영상을 만듭니다
        </p>
      </div>

      <div css={sectionDown}>
        <p>Let’s explore</p>
        <img src={arrow_down_icon} alt="" />
      </div>

      <video id="vid" muted loop css={video} className="video">
        <source src={VIDEO} type="video/mp4" />
      </video>

      <div css={modalPopUp(isActive)}>
        <h3>
          <span>2022</span>
          중소기업 혁신바우처 플랫폼
          <br />
          수행기관 선정
        </h3>
        <Link to="/about">
          문의하기
          <img src={arrow_right_icon} alt="문의하기" />
        </Link>
        <button
          type="button"
          onClick={() => {
            setIsActive(false);
          }}
        >
          <img src={close_icon} alt="닫기" />
        </button>
      </div>
      <div className="dimmed" css={dimmed} />
    </section>
  );
};

export default S01;
