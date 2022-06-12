import { css } from "@emotion/react";
import { Fontanton, FontsatoshiRegular } from "../../../../assets/styles/fonts";
import { TABLET } from "../../../../assets/styles/mediaQuery";
import { bounce } from "../../../../assets/styles/animaition";

export const showRealWrapper = css`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: #f7f7f7;

  ${TABLET} {
    min-height: 80vh;
  }
`;

export const frameCSS = active => css`
  width: 80%;
  height: 70vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  display: ${active ? "block" : "none"};

  ${TABLET} {
    width: 100%;
    height: 40vh;
  }
`;

export const titleCSS = css`
  position: absolute;
  white-space: nowrap;
  text-align: center;
  left: 50%;
  top: 35%;
  z-index: 10;
  transform: translate(-50%, -50%);
  font-size: 7.5rem;
  color: #fff;
  ${Fontanton};

  ${TABLET} {
    font-size: 10vw;
  }
`;

export const mainBackground = css`
  width: 80%;
  height: 70vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${TABLET} {
    width: 100%;
    height: 40vh;
  }
`;

export const playButton = active => css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 6.25rem;
  height: 6.25rem;
  z-index: 60;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: ${active ? "none" : "block"};

  > img {
    width: 100%;
  }
`;

export const sectionDownBox = css`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const sectionDown = css`
  text-align: center;
  animation: ${bounce} 1s ease infinite;
  margin-bottom: 1.5rem;

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
