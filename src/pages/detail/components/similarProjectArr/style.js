import { css } from "@emotion/react";
import { FontsatoshiBlack, FontsatoshiBold } from "../../../../assets/styles/fonts";

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
`;

export const list = css`
  display: flex;
  justify-content: space-between;

  > li {
    width: 25%;
    padding: 1rem;
    box-sizing: border-box;
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
  > p {
    font-size: 0.875rem;
    color: #1f1f1f;
    line-height: 2;
  }
  > h3 {
    font-size: 1.25rem;
    color: #1f1f1f;
    font-weight: 600;
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

  > span {
    padding-right: 2rem;
    ${FontsatoshiBold};
  }
`;
