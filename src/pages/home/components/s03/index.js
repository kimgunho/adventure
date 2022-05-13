/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { gsap } from "gsap";

import authImage from "../../../../assets/images/home/autoSlideImage.png";

import {
  container,
  textFrameContainer,
  title,
  rightText,
  autoSliderWrapper,
  slideCSS,
  frame,
  realText,
} from "./style";

const S03 = () => {
  useEffect(() => {
    setTimeout(() => {
      scrollAnimation();
    }, 1000);
  }, []);

  const scrollAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".s3Contianer",
        pin: false,
        start: "10% center",
        end: "center+=100px center",
        scrub: true,
        markers: false,
      },
    });
    tl.to(".text01", { width: "auto" }, 0);
    tl.to(".text02", { width: "auto" }, 0.2);
    tl.to(".text03", { width: "auto" }, 0.4);
    tl.to(".text04", { width: "auto" }, 0.6);
    tl.to(".text05", { width: "auto" }, 0.8);
    tl.to(".text06", { width: "auto" }, 1);
  };

  return (
    <div css={container} className="s3Contianer">
      <div css={textFrameContainer}>
        <h2 css={title}>Who we are</h2>
        <p css={rightText}>
          <span className="text01" css={realText}>
            어드벤처 프레임
          </span>
          <span css={frame}>어드벤처 프레임</span>
        </p>
        <p css={rightText}>
          <span className="text02" css={realText}>
            사람들이 좋아하는 광고를 만드는
          </span>
          <span css={frame}>사람들이 좋아하는 광고를 만드는</span>
        </p>
        <p css={rightText}>
          <span className="text03" css={realText}>
            가장 좋은 방법
          </span>
          <span css={frame}>가장 좋은 방법</span>
        </p>
        <br />
        <br />
        <p css={rightText}>
          <span className="text04" css={realText}>
            거침 없는 연출, 세심한 제작
          </span>
          <span css={frame}>거침 없는 연출, 세심한 제작</span>
        </p>
        <p css={rightText}>
          <span className="text05" css={realText}>
            고객사의 광고 타겟까지 걱정해 주는
          </span>
          <span css={frame}>고객사의 광고 타겟까지 걱정해 주는</span>
        </p>
        <p css={rightText}>
          <span className="text06" css={realText}>
            상냥한 프로덕션
          </span>
          <span css={frame}>상냥한 프로덕션</span>
        </p>
      </div>
      <div css={autoSliderWrapper}>
        {Array.from(Array(6)).map((_, index) => (
          <div key={index} css={slideCSS}>
            <img src={authImage} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default S03;
