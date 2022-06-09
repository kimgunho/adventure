import { css } from "@emotion/react";
import { FontsatoshiBlack, FontsatoshiBold } from "../../../../assets/styles/fonts";
import { TABLET } from "../../../../assets/styles/mediaQuery";

export const wrapper = css``;

export const headerContainer = css`
  padding: 6.25rem 5.625rem 1rem 5.625rem;
  box-sizing: border-box;

  ${TABLET} {
    padding: 5rem 2rem;
  }
`;

export const title = css`
  font-size: 4.25rem;
  color: #1f1f1f;
  ${FontsatoshiBlack};
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
    margin: 0 2rem 2rem 0;
    ${FontsatoshiBold};
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
    padding: 1rem;
    box-sizing: border-box;
    position: relative;

    ${TABLET} {
      width: 100%;
    }
  }
`;

export const imageBox = css`
  overflow: hidden;
  line-height: 0;
  border-radius: 1rem;

  &:hover {
    > img {
      filter: grayscale(0%);
    }
  }

  > img {
    width: 100%;
    filter: grayscale(100%);
    transition: all 0.2s ease;
  }
`;

export const displayImageBox = css`
  overflow: hidden;
  border-radius: 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: all 0.2s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

export const infoBox = css`
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 2.125rem;
  transform: translate(-50%, 0);

  ${TABLET} {
    text-align: left;
  }
  > p {
    font-size: 0.875rem;
    color: #fff;
    margin: 1rem 0;

    ${TABLET} {
      /* font-size: 14px; */
      /* line-height: 3; */
    }
  }
  > h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;

    ${TABLET} {
      /* font-size: 1.25rem; */
    }
  }
`;

export const topDisplay = css`
  width: 48.5%;
  margin: 1rem;
  box-sizing: border-box;
  position: relative;

  ${TABLET} {
    width: 100%;
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
    padding: 1rem;
    box-sizing: border-box;
    position: relative;

    ${TABLET} {
      width: 100%;
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

  > span {
    padding-right: 1rem;
  }
  > img {
    width: 14px;
  }
`;
