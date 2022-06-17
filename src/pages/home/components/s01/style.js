import { css } from "@emotion/react";
import { Fontanton, FontsatoshiBold, FontsatoshiRegular } from "../../../../assets/styles/fonts";
import { bounce } from "../../../../assets/styles/animaition";
import { TABLET } from "../../../../assets/styles/mediaQuery";

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  height: 100%;
  background-color: #f7f7f7;
  position: relative;

  ${TABLET} {
    display: none;
  }
`;

export const box = css`
  text-align: center;
  position: relative;
  z-index: 20;
  width: 100%;
  height: 25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const title = css`
  font-size: 12vw;
  color: #000;
  position: relative;

  > span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const en = css`
  letter-spacing: 1rem;
  white-space: nowrap;
  ${Fontanton};
`;

export const ko = css`
  letter-spacing: 3rem;
  font-weight: 600;
  font-size: 10vw;
  white-space: nowrap;
`;

export const desc = css`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  display: block;
  letter-spacing: 0px;
  font-size: 1.5rem;
  color: #000;
  ${FontsatoshiBold};
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

export const modalPopUp = isActive => css`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  z-index: 20;
  background-color: #222;
  padding: 1.875rem;
  box-sizing: border-box;
  display: ${isActive ? "flex" : "none"};
  justify-content: space-between;
  border-radius: 1rem;
  min-width: 33.125rem;

  > h3 {
    font-size: 1.375rem;
    color: #fff;
    font-weight: 600;
    text-align: left;
    > span {
      font-weight: 400;
      display: block;
    }
  }
  > a {
    border-radius: 50%;
    width: 6.25rem;
    height: 6.25rem;
    border: 1px solid #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin-right: 1rem;

    > img {
      padding-top: 0.5rem;
      width: 100%;
      max-width: 14px;
    }
  }

  > button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 1.5rem;
    }
  }
`;
