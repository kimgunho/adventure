/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import youtube_icon from "../../../assets/images/header/youtube_icon_white.png";
import insta_icon from "../../../assets/images/header/insta_icon_white.png";
import kakao_icon from "../../../assets/images/header/kakao_icon_white.png";
import close_button_icon from "../../../assets/images/header/close_button_icon.png";

import {
  menuWrapper,
  infoContainer,
  menuContainer,
  companyInfo,
  mailList,
  closeButton,
  companyInfoTitle,
  addressInfo,
  munuList,
} from "./style";
const Menu = ({ active, setHandleActive }) => {
  const handleHideMenu = () => {
    setHandleActive(false);
  };
  return (
    <section css={menuWrapper} className={active && "active"}>
      <div css={infoContainer}>
        <ul css={mailList}>
          <li>
            <p>Business</p>
            <a href="mailto:sjlee@adventure-f.com">sjlee@adventure-f.com</a>
          </li>
          <li>
            <p>Career</p>
            <a href="mailto:af@adventure-f.com">af@adventure-f.com</a>
          </li>
        </ul>
        <div css={companyInfo}>
          <h2 css={companyInfoTitle}>ADVENTURE FRAME Office</h2>
          <ul css={addressInfo}>
            <li>
              <a href="tel:023321237">+82.02.332.1237</a>
            </li>
            <li>서울특별시 마포구 동교로23길 40, 4층</li>
          </ul>
        </div>
      </div>
      <div css={menuContainer}>
        <ul css={munuList}>
          <li onClick={handleHideMenu}>
            <span>01</span>
            <Link to="/">HOME</Link>
          </li>
          <li onClick={handleHideMenu}>
            <span>02</span>
            <Link to="/project/all">PROJECTS</Link>
          </li>
          <li onClick={handleHideMenu}>
            <span>03</span>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <ul>
              <li>
                <a href="">
                  <img src={kakao_icon} alt="카카오 바로가기" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={youtube_icon} alt="유튜브 바로가기" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={insta_icon} alt="인스타 바로가기" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button onClick={handleHideMenu} type="button" css={closeButton}>
        <img src={close_button_icon} alt="닫기" />
      </button>
    </section>
  );
};

export default Menu;
