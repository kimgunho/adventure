import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiMedium } from "../../../../assets/styles/fonts";
import { TABLET, PC_HOVER } from "../../../../assets/styles/mediaQuery";

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

    ${TABLET} {
      font-size: 15px;
    }
  }

  > p {
    font-size: 2.25rem;
    line-height: 1.8;
    padding-bottom: 5rem;

    ${TABLET} {
      font-size: 20px;
    }
  }

  > a {
    display: flex;
    justify-content: center;
    justify-content: center;

    ${PC_HOVER} {
      :hover {
        color: #6600cc;
        > span {
          border-bottom-color: #6600cc;
        }
      }
    }

    > span {
      border-bottom: 3px solid #fff;
      padding-bottom: 0.2rem;
      padding-right: 1rem;
      font-size: 3.75rem;
      ${FontsatoshiMedium};

      ${TABLET} {
        font-size: 24px;
        border-bottom-width: 2px;
      }
    }

    > img {
      width: 4rem;

      ${TABLET} {
        width: 3rem;
      }
    }
  }
`;
