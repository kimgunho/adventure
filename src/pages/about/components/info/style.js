import { css } from "@emotion/react";
import { FontsatoshiBlack, FontsatoshiMedium } from "../../../../assets/styles/fonts";
import { TABLET } from "../../../../assets/styles/mediaQuery";

export const wrapper = css`
  padding: 0 5.625rem;
  box-sizing: border-box;

  ${TABLET} {
    padding: 0 2rem;
  }
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

  ${TABLET} {
    flex-direction: column;
  }

  > h4 {
    font-size: 50px;
    font-weight: 600;
    color: #1f1f1f;

    ${TABLET} {
      margin-bottom: 3rem;
    }
  }
  > div {
    width: 50%;

    ${TABLET} {
      width: 100%;
    }
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

  ${TABLET} {
    flex-direction: column;
  }

  > ul {
    ${TABLET} {
      order: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
      width: 100%;
    }
    > li {
      > a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > span {
          font-size: 60px;
          color: #1f1f1f;
          border-bottom: 5px solid #1f1f1f;
          padding-bottom: 0.2rem;
          ${FontsatoshiMedium};

          ${TABLET} {
            font-size: 1.8rem;
          }
        }
        > img {
          margin-left: 1rem;
          ${TABLET} {
            width: 3rem;
          }
        }
      }
    }
  }

  > div {
    width: 50%;

    ${TABLET} {
      width: 100%;
    }
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

  ${TABLET} {
    flex-direction: column;
  }
`;

export const bottomDesc = css`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ${TABLET} {
    width: 100%;
  }

  > h4 {
    font-size: 50px;
    font-weight: 600;
    color: #1f1f1f;
    margin-bottom: 3rem;

    @media (max-width: 1600px) {
      font-size: 2.4rem;
    }
  }

  > ul {
    ${TABLET} {
      display: none;
    }
    > li {
      > a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > span {
          font-size: 60px;
          border-bottom: 5px solid #1f1f1f;
          padding-bottom: 0.2rem;
          color: #1f1f1f;
          white-space: nowrap;
          ${FontsatoshiMedium};

          @media (max-width: 1600px) {
            font-size: 2.4rem;
          }
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

  ${TABLET} {
    width: 100%;
  }

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

  > ul {
    display: none;
    ${TABLET} {
      margin-top: 3rem;
      display: block;
    }
    > li {
      margin-bottom: 2rem;

      &:last-of-type {
        margin-bottom: 0;
      }
      > a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > span {
          font-size: 2rem;
          text-decoration: underline;
          color: #1f1f1f;
          white-space: nowrap;
          ${FontsatoshiMedium};
        }
        > img {
          margin-left: 1rem;
          width: 35px;
        }
      }
    }
  }
`;
