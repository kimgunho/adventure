import { css } from "@emotion/react";
import { TABLET, MOBILE } from "./mediaQuery";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    word-break: keep-all;
    font-family: "Noto Sans KR", sans-serif;
  }

  html {
    font-size: 16px;

    ${TABLET} {
      font-size: 14px;
    }

    ${MOBILE} {
      font-size: 12px;
    }
  }
  body {
    overflow-x: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  input,
  select,
  button {
    cursor: pointer;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
  }
`;
