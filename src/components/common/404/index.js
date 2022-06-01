/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import { wrapper, title, linkButton } from "./style";
const NotPage = () => {
  return (
    <div css={wrapper}>
      <h2 css={title}>존재하지 않는 페이지입니다.</h2>
      <Link css={linkButton} to="/">
        메인 페이지로 이동
      </Link>
    </div>
  );
};

export default NotPage;
