import { css } from "@emotion/react";
import { Fontanton } from "../../../../assets/styles/fonts";
import { TABLET } from "../../../../assets/styles/mediaQuery";

export const showRealWrapper = css`
  min-height: 100vh;
  position: relative;
`;

export const frameCSS = active => css`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
  display: ${active ? "block" : "none"};
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
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
