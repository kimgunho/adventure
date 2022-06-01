import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiRegular } from "../../../assets/styles/fonts";
import { TABLET } from "../../../assets/styles/mediaQuery";

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

      &:last-of-type {
        margin-right: 0;
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
    display: block;
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
