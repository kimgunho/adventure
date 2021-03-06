import { css } from "@emotion/react";
import {
  FontsatoshiBold,
  FontsatoshiMedium,
  FontsatoshiRegular,
} from "../../../../assets/styles/fonts";
import { PC_HOVER, TABLET } from "../../../../assets/styles/mediaQuery";

export const container = css`
  min-height: 50vh;
  padding: 6.75rem 5.625rem;
  box-sizing: border-box;
  background-color: #f7f7f7;

  ${TABLET} {
    padding: 5rem 2rem;
  }
`;

export const title = css`
  font-size: 1.125rem;
  color: #1f1f1f;
  margin-bottom: 4rem;
  ${FontsatoshiBold};
`;

export const flexContainer = css`
  display: flex;
  justify-content: space-between;

  ${TABLET} {
    flex-direction: column;
  }
`;

export const introContainer = css`
  width: 30%;

  ${TABLET} {
    width: 100%;
  }
`;

export const introTitle = css`
  font-size: 3rem;
  white-space: nowrap;
  font-weight: 600;
  color: #222;
  line-height: 1.8;
  margin-bottom: 4rem;

  ${TABLET} {
    font-size: 3rem;
  }
`;

export const kakaoButton = css`
  padding: 2rem;
  box-sizing: border-box;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;

  ${PC_HOVER} {
    :hover {
      background-color: #6600cc;
    }
  }

  ${TABLET} {
    display: none;
  }
`;

export const mailInfoContainer = css`
  width: 55%;

  ${TABLET} {
    width: 100%;
  }
`;

export const mailInfoListArr = css`
  width: 100%;
  > li {
    border-top: 1px solid #222;
    padding: 2rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
  }
`;

export const mailInfoData = css`
  display: flex;
  align-items: flex-start;

  ${TABLET} {
    flex-direction: column;
    width: 100%;
  }

  > h4 {
    font-size: 1.125rem;
    color: #222;
    min-width: 6.25rem;
    margin-right: 2rem;
    line-height: 1.6;
    ${FontsatoshiRegular};

    ${TABLET} {
      margin: 0;
    }
  }

  > a {
    font-size: 2.5vw;
    color: #222;
    line-height: 1.6;
    white-space: nowrap;
    border-bottom: 3px solid #222;
    line-height: 1;
    padding-bottom: 1rem;
    ${FontsatoshiMedium};

    ${PC_HOVER} {
      :hover {
        color: #6600cc;
      }
    }

    ${TABLET} {
      padding: 1rem 0;
      font-size: 2.4rem;
      border-bottom: 2px solid #222;
    }
  }
`;

export const mainControls = css`
  display: flex;
  align-items: center;

  ${TABLET} {
    position: absolute;
    top: 1rem;
    right: 0;
  }

  > a {
    position: relative;
    width: 4rem;
    line-height: 0;

    > img {
      width: 100%;
    }
  }
`;

export const cotyDesc = css`
  position: absolute;
  top: -3.75rem;
  right: 0;
  padding: 1rem;
  background-color: #222;
  color: #fff;
  font-size: 1rem;
  white-space: nowrap;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
`;

export const copySucess = css`
  display: block;
`;
