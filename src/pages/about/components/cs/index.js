/** @jsxImportSource @emotion/react */

import linkIcon from "../../../../assets/images/about/linkIcon_white.svg";

import { wrapper } from "./style";
const CS = () => {
  return (
    <section css={wrapper}>
      <h2>Career</h2>
      <p>
        어드벤처프레임과 멋진 프로젝트를 만들 인재를 기다립니다.
        <br />
        함께 일해볼까요? CV를 보내주세요!
      </p>
      <a href="mailto:af@adventure-f.com">
        <span>af@adventure-f.com</span>
        <img src={linkIcon} alt="" />
      </a>
    </section>
  );
};

export default CS;
