import { css } from "@emotion/react";
import { Fontanton, FontsatoshiBold, FontsatoshiRegular } from "../../assets/styles/fonts";
import { bounce } from "../../assets/styles/animaition";

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f7f7;
  position: relative;
  z-index: -1;
`;

export const box = css`
  text-align: center;
  cursor: pointer;
`;

export const title = css`
  font-size: 10vw;
  letter-spacing: 1rem;
  color: #000;
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
