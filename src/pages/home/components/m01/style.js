import { css } from "@emotion/react";
import { Fontanton, FontsatoshiBold, FontsatoshiRegular } from "../../../../assets/styles/fonts";
import { bounce } from "../../../../assets/styles/animaition";
import { TABLET, MOBILE } from "../../../../assets/styles/mediaQuery";

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f7f7;
  position: relative;
  display: none;

  ${TABLET} {
    display: flex;
  }
`;

export const title = css`
  font-size: 20vw;
  line-height: 1.2;
  color: #000;
  position: relative;
  text-align: center;
  ${Fontanton};
  padding: 0 2rem;
  box-sizing: border-box;
  > span {
    display: block;
    letter-spacing: 0px;
    font-size: 1.5rem;
    color: #000;
    margin-top: 4rem;
    ${FontsatoshiBold};
  }
`;

export const sectionDown = css`
  position: absolute;
  bottom: 3rem;
  text-align: center;
  transform: translate(-50%, 0);
  animation: ${bounce} 1s ease infinite;

  > p {
    font-size: 1.125rem;
    color: #000;
    padding-bottom: 1rem;
    ${FontsatoshiRegular}
  }
  > img {
    width: 100%;
    max-width: 1.25rem;
  }
`;

export const mobileVideo = css`
  padding: 2rem;
  position: relative;
  background-color: #f7f7f7;
  box-sizing: border-box;
  display: none;
  ${TABLET} {
    display: block;
  }

  > video {
    width: 100%;
  }
`;

export const playButtonCSS = isClick => css`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  display: ${isClick && "none"};

  > img {
    width: 100%;
    max-width: 70px;
  }
`;
