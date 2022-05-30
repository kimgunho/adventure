import { css } from "@emotion/react";
import { FontsatoshiBlack, FontsatoshiMedium } from "../../../../assets/styles/fonts";

export const wrapper = css`
  padding: 0 5.625rem;
  box-sizing: border-box;
`;

export const title = css`
  font-size: 1.125rem;
  color: #1f1f1f;
  padding: 5rem 0 3.75rem;
  border-top: 1px solid #1f1f1f;
  ${FontsatoshiBlack};
`;

export const topHeader = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > h4 {
    font-size: 50px;
    font-weight: 600;
    color: #1f1f1f;
  }
  > div {
    width: 50%;
    > p {
      font-size: 30px;
      line-height: 1.8;

      &:first-of-type {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const topBody = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5rem 0;

  > ul {
    > li {
      > a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > span {
          font-size: 60px;
          text-decoration: underline;
          color: #1f1f1f;
          ${FontsatoshiMedium};
        }
        > img {
          margin-left: 1rem;
        }
      }
    }
  }

  > div {
    width: 50%;
    > p {
      font-size: 1.875rem;
      font-weight: 600;
      color: #1f1f1f;
      margin-bottom: 2rem;
    }
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 40rem;
      padding: 1rem 2rem;
      box-sizing: border-box;
      background-color: #1f1f1f;

      > span {
        font-size: 1.5rem;
        color: #fff;
      }
      > img {
        width: 4rem;
      }
    }
  }
`;

export const bottomBody = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5rem;
`;

export const bottomDesc = css`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > h4 {
    font-size: 50px;
    font-weight: 600;
    color: #1f1f1f;
  }

  > ul {
    > li {
      > a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > span {
          font-size: 60px;
          text-decoration: underline;
          color: #1f1f1f;
          ${FontsatoshiMedium};
        }
        > img {
          margin-left: 1rem;
        }
      }
    }
  }
`;

export const bottomForm = css`
  width: 50%;

  > form {
    > ul {
      > li {
        margin-bottom: 2rem;

        > input {
          width: 100%;
          padding: 1rem;
          box-sizing: border-box;
          font-size: 1.5rem;
          color: #666;
          border: 0;
          border-bottom: 1px solid #1f1f1f;
          background-color: transparent;
        }

        > textarea {
          width: 100%;
          min-height: 12.5rem;
          background-color: #fff;
          padding: 1rem;
          box-sizing: border-box;
          font-size: 1.5rem;
          color: #666;
          border: 0;
        }
      }
    }

    > button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 40rem;
      padding: 1rem 2rem;
      box-sizing: border-box;
      background-color: #1f1f1f;
      border: 0;
      cursor: pointer;

      > span {
        font-size: 1.5rem;
        color: #fff;
      }
      > img {
        width: 4rem;
      }
    }
  }
`;
