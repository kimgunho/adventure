import { css, keyframes } from "@emotion/react";
import { FontsatoshiBlack, FontsatoshiBold } from "../../../../assets/styles/fonts";
import { PC_HOVER, TABLET } from "../../../../assets/styles/mediaQuery";

const changeBackgroundImage = imageArr => keyframes`
0%{
  background-image:url(${imageArr[1]});
}
1%{
  background-image:url(${imageArr[1]});
}
25%{
  background-image:url(${imageArr[1]});
}
26%{
  background-image:url(${imageArr[2]});
}
50%{
  background-image:url(${imageArr[2]});
}
51%{
  background-image:url(${imageArr[3]});
}
75%{
  background-image:url(${imageArr[3]});
}
76%{
  background-image:url(${imageArr[0]});
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
  overflow: hidden;
  overflow-x: hidden;

  ${TABLET} {
    min-height: auto;
    padding: 5rem 2rem;
  }
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

  ${TABLET} {
    transform: translate(0, 0);
    position: initial;
  }
`;

export const buttons = css`
  display: flex;
  justify-content: center;
  align-items: center;

  ${TABLET} {
    flex-direction: column;
  }

  > li {
    font-size: 2.5rem;
    color: #fff;
    white-space: nowrap;

    ${TABLET} {
      margin-bottom: 2rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &::after {
      content: "|";
      padding: 0 1rem;

      ${TABLET} {
        display: none;
      }
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
        animation: ${changeBackgroundImage(imageListArr)} 3s linear infinite;
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
  opacity: 0.4;
  display: none;
`;
