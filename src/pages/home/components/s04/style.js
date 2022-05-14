import { css, keyframes } from "@emotion/react";
import { FontsatoshiBlack, FontsatoshiBold } from "../../../../assets/styles/fonts";
import { PC_HOVER } from "../../../../assets/styles/mediaQuery";

const changeBackgroundImage = imageArr => keyframes`
0%{
    background-image:url(${imageArr[0]});
}
25%{
    background-image:url(${imageArr[1]});
}
50%{
    background-image:url(${imageArr[2]});
}
75%{
    background-image:url(${imageArr[3]});
}
100%{
    background-image:url(${imageArr[0]});
}
`;

export const container = css`
  padding: 6.75rem 5.625rem;
  background-color: #222222;
  position: relative;
  min-height: 50vh;
`;

export const title = css`
  font-size: 1.125rem;
  color: #fff;
  margin-bottom: 4rem;
  ${FontsatoshiBold};
`;

export const nav = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const buttons = css`
  display: flex;
  justify-content: center;
  align-items: center;

  > li {
    font-size: 2.5rem;
    color: #fff;

    &::after {
      content: "|";
      padding: 0 1rem;
    }

    &:last-of-type {
      &::after {
        display: none;
      }
    }

    > a {
      padding: 1rem;
      ${FontsatoshiBlack};
    }
  }
`;

export const button = imageListArr => css`
  ${PC_HOVER} {
    &:hover {
      text-decoration: underline;
      > div {
        display: block;
        animation: ${changeBackgroundImage(imageListArr)} 5s linear infinite;
      }
    }
  }
`;

export const backgroundCSS = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 50rem;
  height: 100%;
  max-height: 28rem;
  z-index: -1;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: none;
`;

export const frame = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 51rem;
  height: 100%;
  max-height: 29rem;
  z-index: 1;
  background-color: #444;
`;
