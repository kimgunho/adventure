import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiRegular } from "../../../assets/styles/fonts";
import { PC_HOVER, TABLET } from "../../../assets/styles/mediaQuery";

import youtube_icon from "../../../assets/images/footer/youtube_icon.png";
import insta_icon from "../../../assets/images/footer/insta_icon.png";
import kakao_icon from "../../../assets/images/footer/kakao_icon.png";
import youtube_icon_color from "../../../assets/images/header/youtube_icon_color.png";
import insta_icon_color from "../../../assets/images/header/insta_icon_color.png";
import kakao_icon_color from "../../../assets/images/header/kakao_icon_color.png";

export const footerWrapper = css`
  background-color: #222;
  padding: 5.625rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${TABLET} {
    flex-direction: column;
    padding: 5rem 2rem;
  }
`;

export const companyTitleContainer = css`
  > h2 {
    color: #fff;
    font-size: 3.125rem;
    padding-bottom: 2rem;
    ${FontsatoshiBold};

    ${TABLET} {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  > div {
    display: none;
    text-align: center;

    ${TABLET} {
      display: block;
    }
    > a {
      color: #fff;
      font-size: 1rem;
      padding-bottom: 0.5rem;
      display: block;
    }
    > p {
      color: #fff;
      font-size: 1rem;
      padding-bottom: 0.5rem;
    }
  }
  > p {
    color: #fff;
    font-size: 0.875rem;
    ${FontsatoshiRegular};

    ${TABLET} {
      display: none;
    }

    > span {
      display: block;
      margin-top: 1rem;
      font-size: 0.875rem;
    }
  }
`;

export const companyCSContainer = css`
  > ul {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    ${TABLET} {
      justify-content: center;
      margin-top: 2rem;
    }

    > li {
      margin-right: 1.25rem;
      width: 3.25rem;
      height: 3.25rem;

      &:last-of-type {
        margin-right: 0;
      }

      :nth-of-type(1) {
        > a {
          background-image: url(${youtube_icon});
          ${PC_HOVER} {
            :hover {
              background-image: url(${youtube_icon_color});
            }
          }
        }
      }
      :nth-of-type(2) {
        > a {
          background-image: url(${insta_icon});
          ${PC_HOVER} {
            :hover {
              background-image: url(${insta_icon_color});
            }
          }
        }
      }
      :nth-of-type(3) {
        > a {
          background-image: url(${kakao_icon});
          ${PC_HOVER} {
            :hover {
              background-image: url(${kakao_icon_color});
            }
          }
        }
      }

      > a {
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 3.25rem;
        height: 3.25rem;

        > img {
          width: 100%;
        }
      }
    }
  }

  > div {
    display: none;

    ${TABLET} {
      display: block;
      text-align: center;

      > p {
        color: #fff;
        font-size: 0.875rem;
        ${FontsatoshiRegular};

        > span {
          display: block;
          margin-top: 1rem;
          font-size: 0.875rem;
        }
      }
    }
  }

  > a {
    color: #fff;
    font-size: 0.875rem;
    padding-bottom: 0.5rem;

    ${PC_HOVER} {
      :hover {
        color: #6600cc;
      }
    }
    ${TABLET} {
      display: none;
    }
  }
  > p {
    color: #fff;
    font-size: 0.875rem;
    padding-bottom: 0.5rem;
    ${TABLET} {
      display: none;
    }
  }
`;

export const mobile = css`
  display: none;
  ${TABLET} {
    display: block;
  }
`;

export const pc = css`
  display: block;
  ${TABLET} {
    display: none;
  }
`;
