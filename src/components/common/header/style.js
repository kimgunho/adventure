import { css } from "@emotion/react";
import { FontsatoshiBold } from "../../../assets/styles/fonts";
import { PC_HOVER, TABLET } from "../../../assets/styles/mediaQuery";

import youtube_icon from "../../../assets/images/header/youtube_icon.png";
import insta_icon from "../../../assets/images/header/insta_icon.png";
import kakao_icon from "../../../assets/images/header/kakao_icon.png";
import youtube_icon_color from "../../../assets/images/header/youtube_icon_color.png";
import insta_icon_color from "../../../assets/images/header/insta_icon_color.png";
import kakao_icon_color from "../../../assets/images/header/kakao_icon_color.png";

export const header = isBackground => css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 5rem;
  box-sizing: border-box;
  padding: 0 5.625rem;
  transition: background-color 0.2s ease;
  background-color: ${isBackground ? "#f7f7f7" : "transparent"};

  ${TABLET} {
    padding: 0 2rem;
  }
`;

export const logo = css`
  width: 2.8125rem;
  height: 2.8125rem;

  a {
    > img {
      width: 100%;
    }
  }
`;

export const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 16.25rem;

  ${TABLET} {
    max-width: 100%;
  }
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

  ${TABLET} {
    display: none;
  }

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
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: block;
      width: 3.25rem;
      height: 3.25rem;
    }
  }
`;

export const mobileKakaoButton = css`
  width: 8rem;
  height: 8rem;
  display: none;
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  ${TABLET} {
    display: block;
  }

  > img {
    width: 100%;
  }
`;
