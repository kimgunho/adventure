import { css } from "@emotion/react";
import { FontsatoshiBlack, FontsatoshiBold } from "../../../../assets/styles/fonts";
import { PC_HOVER, TABLET } from "../../../../assets/styles/mediaQuery";

export const wrapper = css``;

export const headerContainer = css`
  padding: 6.25rem 5.625rem 4rem 5.625rem;
  box-sizing: border-box;

  ${TABLET} {
    padding: 5rem 2rem 0rem;
  }
`;

export const title = css`
  font-size: 4.25rem;
  color: #1f1f1f;
  ${FontsatoshiBlack};

  ${TABLET} {
    font-size: 40px;
  }
`;

export const nav = css`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  flex-wrap: wrap;

  > li {
    cursor: pointer;
    margin-right: 1rem;
    background-color: #fff;
    color: #1f1f1f;
    font-size: 1.75rem;
    padding: 1rem 2rem;
    border-radius: 5rem;
    border: 1px solid #1f1f1f;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem 1rem 0;
    ${FontsatoshiBold};

    ${TABLET} {
      font-size: 16px;
    }
  }
`;

export const active = css`
  background-color: #1f1f1f !important;
  color: #fff !important;
`;

export const bodyContainer = css`
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const projectTopContainer = css`
  display: flex;
  justify-content: center;

  ${TABLET} {
    flex-direction: column;
  }
`;

export const topArr = css`
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  ${TABLET} {
    width: 100%;
    flex-direction: column;
    order: 2;
  }

  > li {
    width: 50%;
    padding: 0.5rem;
    box-sizing: border-box;
    position: relative;

    ${TABLET} {
      width: 100%;
    }

    > a {
      &:hover {
        img {
          filter: grayscale(0%);
        }
        .imgDimmed {
          opacity: 0;
        }
      }
    }
  }
`;

export const imageBox = css`
  overflow: hidden;
  position: relative;
  line-height: 0;
  border-radius: 1rem;

  > img {
    width: 100%;
    filter: grayscale(100%);
    transition: all 0.2s ease;

    ${TABLET} {
      filter: grayscale(0%);
    }
  }
`;

export const displayImageBox = css`
  overflow: hidden;
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: all 0.2s ease;
  line-height: 0;

  ${TABLET} {
    filter: grayscale(0%);
  }

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const infoBox = css`
  text-align: center;
  position: absolute;
  z-index: 15;
  left: 50%;
  bottom: 2.125rem;
  transform: translate(-50%, 0);
  width: 100%;

  ${TABLET} {
    text-align: left;
    position: initial;
    transform: translate(0, 0);
    margin: 1rem 0;
  }
  > p {
    font-size: 0.875rem;
    color: #fff;
    margin-bottom: 5px;

    ${TABLET} {
      font-size: 14px;
      color: #0f0f0f;
      margin-bottom: 8px;
    }
  }
  > h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;

    ${TABLET} {
      font-size: 18px;
      color: #222;
    }
  }
`;

export const topDisplay = css`
  width: 49%;
  margin: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  :hover {
    .imgDimmed {
      opacity: 0;
    }
    .displayImage {
      filter: grayscale(0%);
    }
  }

  ${TABLET} {
    width: 98%;
    margin: 0.5rem auto 2rem;
  }
`;

export const projectBottomContainer = css``;

export const bottomArr = css`
  display: flex;
  flex-wrap: wrap;

  ${TABLET} {
    flex-wrap: nowrap;
    flex-direction: column;
  }

  > li {
    width: 25%;
    padding: 0.5rem;
    box-sizing: border-box;
    position: relative;

    ${TABLET} {
      width: 100%;
    }

    > a {
      &:hover {
        img {
          filter: grayscale(0%);
        }
        .imgDimmed {
          opacity: 0;
        }
      }
    }
  }
`;

export const moreButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 2rem;
  cursor: pointer;
  margin: 3rem auto 10rem;
  ${FontsatoshiBold};

  ${TABLET} {
    padding: 2rem 4rem;
    border-radius: 3rem;
    font-size: 20px;
  }

  > span {
    padding-right: 1rem;
  }
  > img {
    width: 14px;
  }
`;

export const imgDimmed = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-image: linear-gradient(to top, #000 0%, transparent 90%);
  transition: all 0.2s ease;

  ${TABLET} {
    display: none;
  }
`;
