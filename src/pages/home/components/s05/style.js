import { css } from "@emotion/react";
import {
  FontsatoshiBold,
  FontsatoshiMedium,
  FontsatoshiRegular,
} from "../../../../assets/styles/fonts";

export const container = css`
  min-height: 50vh;
  padding: 6.75rem 5.625rem;
  box-sizing: border-box;
  background-color: #f7f7f7;
`;

export const title = css`
  font-size: 1.125rem;
  color: #1f1f1f;
  margin-bottom: 4rem;
  ${FontsatoshiBold};
`;

export const flexContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const introContainer = css`
  width: 100%;
  max-width: 31.25rem;
`;

export const introTitle = css`
  font-size: 60px;
  font-weight: 600;
  color: #222;
  line-height: 1.8;
  margin-bottom: 4rem;
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
`;

export const mailInfoContainer = css`
  width: 100%;
  max-width: calc(100% - 50rem);
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
  }
`;

export const mailInfoData = css`
  display: flex;
  align-items: flex-start;
  > h4 {
    font-size: 1.125rem;
    color: #222;
    line-height: 1.6;
    ${FontsatoshiRegular};
  }

  > a {
    font-size: 3.75rem;
    color: #222;
    line-height: 1.6;
    text-decoration: underline;
    padding-left: 4.6875rem;
    ${FontsatoshiMedium};
  }
`;

export const mainControls = css`
  display: flex;
  align-items: center;

  > a {
    position: relative;
    > img {
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
