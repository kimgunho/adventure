import { css } from "@emotion/react";
import { Fontanton, FontsatoshiBold, FontsatoshiRegular } from "../../../../assets/styles/fonts";
import { bounce } from "../../../../assets/styles/animaition";

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  background-color: #f7f7f7;
  position: relative;
`;

export const box = css`
  text-align: center;
  position: relative;
  z-index: 20;
  cursor: pointer;
`;

export const title = css`
  font-size: 10vw;
  letter-spacing: 1rem;
  color: #000;
  text-shadow: 10px 10px 30px #0000008a;
  ${Fontanton}
`;

export const desc = css`
  font-size: 1.5rem;
  color: #000;
  ${FontsatoshiBold}
`;

export const sectionDown = css`
  position: absolute;
  bottom: 2rem;
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

export const dimmed = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  background-color: rgba(34, 34, 34, 0.6);
  opacity: 0;
`;

export const video = css`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 21;
  transform: translate(-50%, 50vh);
  width: 30%;
  cursor: pointer;
`;
