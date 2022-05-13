import { css } from "@emotion/react";
import { Fontanton, FontsatoshiBold, FontsatoshiRegular } from "../../../../assets/styles/fonts";
import { bounce } from "../../../../assets/styles/animaition";
import { PC_HOVER } from "../../../../assets/styles/mediaQuery";

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  background-color: #f7f7f7;
  position: relative;
  /* margin-bottom: 100vh; */
`;

export const box = css`
  text-align: center;
  position: relative;
  z-index: 20;
  cursor: pointer;

  ${PC_HOVER} {
    &:hover {
      .en {
        opacity: 0;
        transform: translateY(0%);
      }
      .ko {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export const title = css`
  font-size: 10vw;
  color: #000;
  text-shadow: 10px 10px 30px #0000008a;
  position: relative;

  > span {
    transition: all 0.5s ease;
    position: absolute;
    left: 50%;
    top: 50%;
  }
`;

export const en = css`
  letter-spacing: 1rem;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  ${Fontanton};
`;

export const ko = css`
  letter-spacing: 2rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transform: translate(-80%, -80%);
`;

export const desc = css`
  display: block;
  letter-spacing: 0px;
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
  transform: translateX(-50%);
  cursor: pointer;
`;
