import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiRegular } from "../../../assets/styles/fonts";

export const footerWrapper = css`
  background-color: #222;
  padding: 5.625rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const companyTitleContainer = css`
  > h2 {
    color: #fff;
    font-size: 3.125rem;
    padding-bottom: 2rem;
    ${FontsatoshiBold};
  }
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
`;

export const companyCSContainer = css`
  > ul {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    > li {
      margin-right: 1.25rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  > a {
    color: #fff;
    font-size: 0.875rem;
    padding-bottom: 0.5rem;
    display: block;
  }
  > p {
    color: #fff;
    font-size: 0.875rem;
    padding-bottom: 0.5rem;
  }
`;
