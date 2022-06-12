/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../../../links";

import header_logo from "../../../assets/images/header/logo.png";
import kakaoButton from "../../../assets/images/header/kakao.png";

import Menu from "../menu";

import { header, flex, logo, menuButton, sns, mobileKakaoButton } from "./style";
const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const [isBackgroundColor, setIsBackgroundColor] = useState(false);

  useEffect(() => {
    setHeaderBackgroundColor();
  }, []);

  const setHeaderBackgroundColor = () => {
    window.addEventListener("scroll", () => {
      const { scrollY } = window;
      if (scrollY >= 120) {
        setIsBackgroundColor(true);
      } else {
        setIsBackgroundColor(false);
      }
    });
  };

  const handleShowMenu = () => {
    setIsClick(true);
  };

  return (
    <>
      <header css={header(isBackgroundColor)} className="header">
        <div css={flex}>
          <h1 css={logo}>
            <Link to="/">
              <img src={header_logo} alt="어드밴쳐 프레임" />
            </Link>
          </h1>
          <button onClick={handleShowMenu} css={menuButton}>
            Menu
          </button>
        </div>
        <nav>
          <ul css={sns}>
            <li>
              <a href={links.youtube} target={"_blank"} rel="noreferrer"></a>
            </li>
            <li>
              <a href={links.insta} target={"_blank"} rel="noreferrer"></a>
            </li>
            <li>
              <a href={links.kakao} target={"_blank"} rel="noreferrer"></a>
            </li>
          </ul>
        </nav>
        <a href={links.kakao} target={"_blank"} css={mobileKakaoButton} rel="noreferrer">
          <img src={kakaoButton} alt="" />
        </a>
      </header>
      <Menu active={isClick} setHandleActive={setIsClick} />
    </>
  );
};

export default Header;
