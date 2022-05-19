import { css } from "@emotion/react";
import { Fontanton } from "../../../../assets/styles/fonts";

export const showRealWrapper = css`
  min-height: 100vh;
  position: relative;
`;

export const frameCSS = css`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const titleCSS = css`
  position: absolute;
  left: 50%;
  top: 35%;
  z-index: 10;
  transform: translate(-50%, -50%);
  font-size: 7.5rem;
  color: #fff;
  ${Fontanton};
`;
