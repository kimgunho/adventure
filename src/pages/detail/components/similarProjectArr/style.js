import { css } from "@emotion/react";
import { FontsatoshiBlack, FontsatoshiBold } from "../../../../assets/styles/fonts";
import { TABLET } from "../../../../assets/styles/mediaQuery";

export const moreWrapper = css`
  background-color: #f7f7f7;
  padding: 6.875rem 0;
  margin-top: 3rem;
`;

export const title = css`
  text-align: center;
  font-size: 3.125rem;
  margin-bottom: 4.0625rem;
  text-transform: uppercase;
  ${FontsatoshiBlack};

  ${TABLET} {
    font-size: 30px;
  }
`;

export const list = css`
  display: flex;
  justify-content: space-between;

  ${TABLET} {
    flex-direction: column;
  }

  > li {
    width: 25%;
    padding: 1rem;
    box-sizing: border-box;

    ${TABLET} {
      width: 100%;
    }
  }
`;

export const imageBox = css`
  overflow: hidden;
  border-radius: 1rem;
  line-height: 0;

  > img {
    width: 100%;
  }
`;

export const info = css`
  text-align: center;
  margin-top: 1rem;
  ${TABLET} {
    text-align: left;
  }
  > p {
    font-size: 0.875rem;
    color: #1f1f1f;
    line-height: 2;

    ${TABLET} {
      font-size: 14px;
      line-height: 3;
    }
  }
  > h3 {
    font-size: 1.25rem;
    color: #1f1f1f;
    font-weight: 600;

    ${TABLET} {
      font-size: 1.5rem;
    }
  }
`;

export const button = css`
  display: flex;
  margin: 5rem auto 0;
  border: 1px solid #1f1f1f;
  padding: 2rem 5rem;
  border-radius: 5rem;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;

  ${TABLET} {
    padding: 2rem;
    font-size: 20px;
  }

  > span {
    padding-right: 2rem;
    ${FontsatoshiBold};
  }
`;
