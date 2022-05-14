/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import header_logo from "../../../assets/images/header/logo.png";

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
  );
};

export default Header;
