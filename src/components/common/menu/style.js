import { css } from "@emotion/react";
import { Fontanton, FontsatoshiBold } from "../../../assets/styles/fonts";
import { PC_HOVER, TABLET } from "../../../assets/styles/mediaQuery";

export const menuWrapper = css`
  background-image: linear-gradient(130deg, #6820cc, #8853d1);
  min-height: 100vh;
  z-index: 150;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  display: none;

  ${TABLET} {
    flex-direction: column;
  }

  &.active {
    display: flex;
  }
`;

export const infoContainer = css`
  width: 35%;
  height: 100%;
  border-right: 1px solid #fff;
  display: flex;
  flex-direction: column;

  ${TABLET} {
    display: none;
  }
`;

export const mailList = css`
  padding: 11.25rem 5.625rem;
  box-sizing: border-box;
  border-bottom: 1px solid #fff;
  height: 70%;

  ${TABLET} {
    padding: 2rem;
    height: auto;
  }

  > li {
    color: #fff;
    line-height: 2;
    margin-bottom: 3rem;

    &:last-of-type {
      margin-bottom: 0;
    }

    > p {
      font-size: 1.125rem;
      padding-bottom: 1rem;
    }
    > a {
      font-size: 2rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #fff;
    }
  }
`;

export const companyInfo = css`
  height: 30%;
  padding: 0 5.625rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${TABLET} {
    padding: 2rem;
    height: auto;
  }
`;

export const companyInfoTitle = css`
  font-size: 1.125rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const addressInfo = css`
  > li {
    color: #fff;
    font-size: 1rem;
    line-height: 2;
  }
`;

export const menuContainer = css`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${TABLET} {
    height: auto;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
  }
`;

export const closeButton = css`
  cursor: pointer;
  position: absolute;
  right: 3.5rem;
  top: 3.5rem;
  background-color: transparent;
  appearance: none;
  border: 0;

  ${TABLET} {
    right: 2rem;
    top: 2rem;
  }
`;

export const munuList = css`
  > li {
    display: flex;
    margin-bottom: 4rem;

    &:last-of-type {
      margin-bottom: 0;
      ${TABLET} {
        justify-content: center;
      }
    }

    > span {
      color: #fff;
      padding-right: 1rem;
      font-size: 1.5rem;
      ${FontsatoshiBold};
    }
    > a {
      color: #fff;
      font-size: 8.75rem;
      line-height: 1;
      ${Fontanton};

      ${TABLET} {
        font-size: 5rem;
      }

      ${PC_HOVER} {
        &:hover {
          text-decoration: underline;
        }
      }
    }
    > ul {
      display: flex;
      padding-left: 3rem;

      ${TABLET} {
        padding: 0;
      }

      > li {
        margin-right: 1rem;
        width: 3.25rem;
        height: 3.25rem;

        &:last-of-type {
          margin-right: 0;
        }

        a {
          > img {
            width: 100%;
          }
        }
      }
    }
  }
`;
