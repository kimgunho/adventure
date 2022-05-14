import { css } from "@emotion/react";
import { FontsatoshiBold } from "../../../assets/styles/fonts";
import { PC_HOVER } from "../../../assets/styles/mediaQuery";

import youtube_icon from "../../../assets/images/header/youtube_icon.png";
import insta_icon from "../../../assets/images/header/insta_icon.png";
import kakao_icon from "../../../assets/images/header/kakao_icon.png";
import youtube_icon_color from "../../../assets/images/header/youtube_icon_color.png";
import insta_icon_color from "../../../assets/images/header/insta_icon_color.png";
import kakao_icon_color from "../../../assets/images/header/kakao_icon_color.png";

export const header = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 15;
  width: 100%;
  height: 7.5rem;
  box-sizing: border-box;
  padding: 0 5.625rem;
  background-color: #f7f7f7;
`;

export const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 16.25rem;
`;

export const menuButton = css`
  background-color: transparent;
  border: 0;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
  ${FontsatoshiBold}
`;

export const sns = css`
  width: 100%;
  max-width: 12.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > li {
    margin-left: 1rem;
    transition: opacity 0.2s ease;

    &:first-of-type {
      margin-left: 0;
    }

    &:nth-of-type(1) {
      > a {
        background-image: url(${youtube_icon});

        ${PC_HOVER} {
          &:hover {
            background-image: url(${youtube_icon_color});
          }
        }
      }
    }
    &:nth-of-type(2) {
      > a {
        background-image: url(${insta_icon});

        ${PC_HOVER} {
          &:hover {
            background-image: url(${insta_icon_color});
          }
        }
      }
    }
    &:nth-of-type(3) {
      > a {
        background-image: url(${kakao_icon});

        ${PC_HOVER} {
          &:hover {
            background-image: url(${kakao_icon_color});
          }
        }
      }
    }

    > a {
      display: block;
      width: 3.25rem;
      height: 3.25rem;
    }
  }
`;
