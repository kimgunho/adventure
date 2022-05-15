/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Link } from "react-router-dom";

import header_logo from "../../../assets/images/header/logo.png";

import Menu from "../menu";

import { header, flex, menuButton, sns } from "./style";
const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const handleShowMenu = () => {
    setIsClick(true);
  };

  return (
    <>
      <header css={header}>
        <div css={flex}>
          <h1>
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
              <a href="" target={"_blank"}></a>
            </li>
            <li>
              <a href="" target={"_blank"}></a>
            </li>
            <li>
              <a href="" target={"_blank"}></a>
            </li>
          </ul>
        </nav>
      </header>
      <Menu active={isClick} setHandleActive={setIsClick} />
    </>
  );
};

export default Header;
