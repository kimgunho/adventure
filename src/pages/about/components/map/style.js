import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiMedium } from "../../../../assets/styles/fonts";

export const wrapper = css`
  display: flex;
`;

export const info = css`
  width: 40%;
  padding: 5.625rem;
  box-sizing: border-box;

  > h2 {
    color: #1f1f1f;
    font-size: 1.125rem;
    ${FontsatoshiBold};
  }

  > p {
    padding-top: 6rem;
    color: #1f1f1f;
    font-size: 2.5rem;
    line-height: 1.6;
    font-weight: 600;
  }

  > a {
    color: #1f1f1f;
    text-decoration: underline;
    font-size: 2.5rem;
    ${FontsatoshiMedium};
    padding-top: 2rem;
    display: block;
  }
`;

export const map = css`
  width: 60%;

  > iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
