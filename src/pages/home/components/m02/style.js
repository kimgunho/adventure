import { css } from "@emotion/react";
import { FontsatoshiBold, FontsatoshiRegular } from "../../../../assets/styles/fonts";
import { PC_HOVER, TABLET } from "../../../../assets/styles/mediaQuery";

export const container = css`
  min-height: 100vh;
  height: 100%;
  background-color: #f7f7f7;
  display: none;
  position: relative;
  justify-content: center;

  ${TABLET} {
    display: flex;
    flex-direction: column;
  }
`;

export const info = css`
  background-color: #222;
  padding: 5rem 2rem;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
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
  margin-bottom: 4rem;
`;

export const linkButton = css`
  display: flex;
  align-items: center;
  text-decoration: underline;
  font-size: 2.5rem;
  color: #fff;
  ${FontsatoshiRegular};

  > img {
    margin-left: 0.5rem;
  }
`;

export const project = css`
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f7f7f7;
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

      > img {
        width: 100%;
        object-fit: contain;
      }
      > p {
        position: absolute;
        left: 2rem;
        bottom: 2rem;
        font-size: 1.5rem;
        color: #fff;
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
  cursor: pointer;
  flex-direction: column;

  > li {
    margin-bottom: 1.5rem;
    > a {
      display: block;
      > div {
        width: 100%;
        border-radius: 1rem;
        position: relative;
        overflow: hidden;

        > img {
          width: 100%;
          object-fit: contain;
        }
        > p {
          position: absolute;
          left: 2rem;
          bottom: 2rem;
          font-size: 1.5rem;
          color: #fff;
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
