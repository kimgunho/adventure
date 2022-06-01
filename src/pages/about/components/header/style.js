import { css } from "@emotion/react";
import { Fontanton } from "../../../../assets/styles/fonts";
import { TABLET } from "../../../../assets/styles/mediaQuery";

export const wrapper = css`
  padding: 8.125rem 4.875rem 4.375rem;
  box-sizing: border-box;

  ${TABLET} {
    padding: 8rem 2rem 4rem;
    min-height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const title = css`
  font-size: 12vw;
  text-align: center;
  ${Fontanton};
`;
