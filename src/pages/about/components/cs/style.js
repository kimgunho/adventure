import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiMedium } from "../../../../assets/styles/fonts";

export const wrapper = css`
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 2rem;
  text-align: center;
  color: #fff;

  > h2 {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    ${FontsatoshiBold};
  }

  > p {
    font-size: 2.25rem;
    line-height: 1.8;
    padding-bottom: 5rem;
  }

  > a {
    display: flex;
    justify-content: center;
    justify-content: center;

    > span {
      text-decoration: underline;
      padding-right: 1rem;
      font-size: 3.75rem;
      ${FontsatoshiMedium};
    }

    > img {
      width: 4rem;
    }
  }
`;
