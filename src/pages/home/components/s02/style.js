import { css } from "@emotion/react";
import { PC_HOVER } from "../../../../assets/styles/mediaQuery";

export const container = css`
  min-height: 100vh;
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  position: relative;
  justify-content: center;
`;

export const info = css`
  background-color: #222;
  padding: 5.625rem;
  flex-direction: column;
  width: 45rem;
  box-sizing: border-box;
  border-radius: 0 1rem 0 0;
  position: relative;

  &.active {
    > div {
      position: fixed;
      top: 5.625rem;
    }
  }
`;

export const project = css`
  width: calc(100% - 45rem);
  padding: 1rem;
  box-sizing: border-box;
`;

export const mainProject = css`
  width: 100%;
  margin-bottom: 1.5rem;
  cursor: pointer;

  > div {
    width: 100%;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

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
    }
  }
  > h3 {
    color: #000;
    font-size: 2rem;
    line-height: 2;
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
    > div {
      width: 100%;
      border-radius: 1rem;
      position: relative;
      overflow: hidden;

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
      }
    }
    > h3 {
      color: #000;
      font-size: 2rem;
      line-height: 2;
    }
  }
`;
