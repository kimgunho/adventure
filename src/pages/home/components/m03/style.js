import { css, keyframes } from "@emotion/react";
import { FontsatoshiBold } from "../../../../assets/styles/fonts";
import { MOBILE, TABLET } from "../../../../assets/styles/mediaQuery";

const bannermove = keyframes`
  0% {
      margin-left: 0%;
    }
    100% {
      margin-left: -100%;
    }
`;

export const container = css`
  background-color: #f7f7f7;
  position: relative;
  overflow: hidden;
  display: none;

  ${TABLET} {
    display: block;
  }
`;

export const textFrameContainer = css`
  padding: 5rem 2rem;

  box-sizing: border-box;
`;

export const title = css`
  font-size: 1.125rem;
  color: #222;
  margin-bottom: 4rem;
  ${FontsatoshiBold};
`;

export const rightText = css`
  font-size: 34px;
  color: #222;
  line-height: 1.8;
  font-weight: 600;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  height: 60px;

  > span {
    position: absolute;
    white-space: nowrap;
  }
`;

export const marginDown = css`
  margin-bottom: 4rem;
`;

export const realText = css`
  color: #222;
  width: 0px;
  overflow: hidden;
  z-index: 3;
`;

export const frame = css`
  color: #d9d9d4;
`;

export const autoSliderWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #222;
  overflow-x: hidden;
  overflow: hidden;
  padding: 2rem 0;
  width: 200%;
  animation: ${bannermove} 5s linear infinite;
`;

export const slideCSS = css`
  width: 50%;
  padding: 0 2rem;
  box-sizing: border-box;

  > img {
    width: 100%;
    object-fit: fill;
  }
`;
