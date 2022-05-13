/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import header_logo from "../../../assets/images/header/logo.png";
import youtube_icon from "../../../assets/images/header/youtube_icon.png";
import insta_icon from "../../../assets/images/header/insta_icon.png";
import kakao_icon from "../../../assets/images/header/kakao_icon.png";

import { header, flex, menuButton, sns } from "./style";
const Header = () => {
  return (
    <header css={header}>
      <div css={flex}>
        <h1>
          <Link to="/">
            <img src={header_logo} alt="어드밴쳐 프레임" />
          </Link>
        </h1>
        <button css={menuButton}>Menu</button>
      </div>
      <nav>
        <ul css={sns}>
          <li>
            <a href="" target={"_blank"}>
              <img src={youtube_icon} alt="유튜브 바로가기" />
            </a>
          </li>
          <li>
            <a href="" target={"_blank"}>
              <img src={insta_icon} alt="인스타 바로가기" />
            </a>
          </li>
          <li>
            <a href="" target={"_blank"}>
              <img src={kakao_icon} alt="카카오톡 바로가기" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
