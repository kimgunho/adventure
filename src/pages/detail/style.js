import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiMedium } from "../../assets/styles/fonts";

export const wrapper = css``;

export const detailHeader = css`
  padding: 12.1875rem 2rem 4.0625rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > p {
    font-size: 1.5rem;
    color: #1f1f1f;
    line-height: 2;
    ${FontsatoshiBold};
  }

  > h2 {
    color: #1f1f1f;
    font-size: 4rem;
    font-weight: 600;
  }
`;

export const imageBox = css`
  position: relative;
  > img {
    width: 100%;
  }
`;

export const frameButton = active => css`
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: ${active ? "none" : "block"};
`;

export const info = css`
  padding: 90px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const desc = css`
  width: 45%;
  > p {
    font-size: 1.75rem;
    color: #1f1f1f;
    line-height: 1.8;
    font-weight: 600;
    word-break: keep-all;
  }
`;

export const infoList = css`
  width: 45%;

  > ul {
    border-top: 1px solid #1f1f1f;
    > li {
      border-bottom: 1px solid #1f1f1f;
      display: flex;
      justify-content: space-between;
      padding: 1.5rem 0;

      > span {
        &:first-of-type {
          font-size: 1.25rem;
          color: #222;
          ${FontsatoshiMedium};
        }
        &:last-of-type {
          font-size: 1.25rem;
          color: #222;
          font-weight: 600;
        }
      }
    }
  }
`;

export const sliderWrapper = css`
  overflow: hidden;
  position: relative;
`;

export const sliderImageCSS = css`
  padding: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  > img {
    width: 100%;
    border-radius: 1rem;
  }
`;

export const sliderButton = css`
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #1f1f1f;
  color: #fff;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5rem;
  padding: 1rem 2rem;
  cursor: pointer;

  > span {
    font-size: 1.25rem;
    ${FontsatoshiBold};
    line-height: 0;
    display: flex;
    align-items: center;

    > img {
      width: 1.25rem;
    }

    &:nth-of-type(1) {
      padding-right: 1rem;
      > img {
        padding-right: 0.5rem;
      }
    }

    &:nth-of-type(2) {
      padding-left: 1rem;
      > img {
        padding-left: 0.5rem;
      }
    }
  }
`;
