import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiRegular } from "../../../../assets/styles/fonts";
import { PC_HOVER, TABLET } from "../../../../assets/styles/mediaQuery";

export const container = css`
  min-height: 100vh;
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  position: relative;
  justify-content: center;

  ${TABLET} {
    display: none;
  }
`;

export const line = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 30;
  transition: opacity 0.2s ease;
  opacity: 0;

  ${TABLET} {
    display: none;
  }

  &.active {
    opacity: 1;
  }
`;

export const percentLine = width => css`
  width: ${width * 100}%;
  height: 10px;
  background-color: #f7f7f7;
  position: absolute;
  left: 0;
  top: 0;
`;

export const info = css`
  background-color: #222;
  padding: 5.625rem;
  flex-direction: column;
  width: 40%;
  box-sizing: border-box;
  position: relative;

  > div {
    width: 100%;
    max-width: 33.75rem;
  }
`;

export const title = css`
  font-size: 1.125rem;
  color: #fff;
  margin-bottom: 4rem;
  ${FontsatoshiBold};
`;

export const desc = css`
  font-size: 1.5rem;
  color: #fff;
  line-height: 1.8;
  transition: opacity 1s ease;
  width: 100%;
  max-width: 30vw;
`;

export const linkButton = css`
  display: flex;
  align-items: center;
  text-decoration: underline;
  font-size: 2.5rem;
  color: #fff;
  transition: all 1s ease;
  opacity: 0;
  position: fixed;
  bottom: 3rem;
  ${FontsatoshiRegular};

  &.active {
    opacity: 1;
  }

  > img {
    margin-left: 0.5rem;
  }
`;

export const project = css`
  width: 60%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #fff;
`;

export const mainProject = css`
  width: 100%;
  margin-bottom: 1.5rem;
  cursor: pointer;

  > a {
    > div {
      width: 100%;
      border-radius: 1rem;
      position: relative;
      overflow: hidden;
      line-height: 0;

      > img {
        width: 100%;
        filter: grayscale(100%);
        object-fit: contain;
        transition: all 0.2s ease;

        ${PC_HOVER} {
          &:hover {
            filter: grayscale(0);
          }
        }
      }
      > p {
        position: absolute;
        left: 2rem;
        bottom: 2rem;
        font-size: 1.5rem;
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    }
    > h3 {
      color: #000;
      font-size: 2rem;
      line-height: 2;
    }
  }
`;

export const projectList = css`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  justify-content: space-between;

  > li {
    width: calc(50% - 0.5rem);
    margin-bottom: 1.5rem;
    > a {
      display: block;
      > div {
        width: 100%;
        border-radius: 1rem;
        position: relative;
        overflow: hidden;
        line-height: 0;

        > img {
          filter: grayscale(100%);
          width: 100%;
          object-fit: contain;
          transition: all 0.2s ease;

          ${PC_HOVER} {
            &:hover {
              filter: grayscale(0);
            }
          }
        }
        > p {
          position: absolute;
          left: 2rem;
          bottom: 2rem;
          font-size: 1.5rem;
          color: #fff;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
      }
      > h3 {
        color: #000;
        font-size: 2rem;
        line-height: 2;
      }
    }
  }
`;
