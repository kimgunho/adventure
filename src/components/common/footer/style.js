import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiRegular } from "../../../assets/styles/fonts";

export const footerWrapper = css`
  background-color: #222;
  padding: 5.625rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const companyTitleContainer = css`
  width: 50%;

  > h2 {
    margin-bottom: 1rem;
    > img {
    }
  }
  > p {
    color: #fff;
    font-size: 0.875rem;
    ${FontsatoshiRegular};
  }
`;

export const companyCSContainer = css`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const socialContainer = css`
  > h3 {
    font-size: 1.125rem;
    color: #fff;
    ${FontsatoshiBold};
    margin-bottom: 1rem;
  }

  > ul {
    display: flex;
    align-items: center;

    > li {
      margin-right: 1.25rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const officeInfoContainer = css`
  > h3 {
    font-size: 1.125rem;
    color: #fff;
    ${FontsatoshiBold};
    margin-bottom: 1rem;
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
  }
`;
