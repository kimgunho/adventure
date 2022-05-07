import { css } from "@emotion/react";
import { containerPadding } from "../../../assets/styles/common";
import { FontsatoshiBold } from "../../../assets/styles/fonts";

export const header = css`
  ${containerPadding}
  position:absolute;
  top: 2.5rem;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 16.25rem;
`;

export const menuButton = css`
  background-color: transparent;
  border: 0;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
  ${FontsatoshiBold}
`;

export const sns = css`
  width: 100%;
  max-width: 12.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > li {
    margin-left: 1rem;

    &:first-of-type {
      margin-left: 0;
    }

    > img {
      width: 100%;
      max-width: 3.125rem;
    }
  }
`;
