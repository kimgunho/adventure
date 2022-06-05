/** @jsxImportSource @emotion/react */

import footer_logo from "../../../assets/images/footer/footer_logo.png";
import youtube_icon from "../../../assets/images/footer/youtube_icon.png";
import insta_icon from "../../../assets/images/footer/insta_icon.png";
import kakao_icon from "../../../assets/images/footer/kakao_icon.png";

import { footerWrapper, companyTitleContainer, companyCSContainer, mobile, pc } from "./style";
const Footer = () => {
  return (
    <footer css={footerWrapper}>
      <div css={companyTitleContainer}>
        <h2>
          Trust us. <br />
          We know what you want.
        </h2>
        <div>
          <a href="tel:023321237">+82) 02-332-1237</a>
          <p>서울특별시 마포구 동교로23길 40, 4층</p>
          <a href="mailto:sjlee@adventure-f.com">sjlee@adventure-f.com</a>
        </div>
        <p>
          <img src={footer_logo} alt="" />
          <span>Copyrightⓒ Adeventure Frame Co. All Rights Reserved</span>
        </p>
      </div>
      <div css={companyCSContainer}>
        <ul>
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
              <img src={kakao_icon} alt="카카오 바로가기" />
            </a>
          </li>
        </ul>
        <div>
          <p>
            <img src={footer_logo} alt="" />
            <span>Copyrightⓒ Adeventure Frame Co. All Rights Reserved</span>
          </p>
        </div>
        <a css={mobile} href="tel:023321237">
          +82) 02-332-1237
        </a>
        <p css={pc}>+82) 02-332-1237</p>
        <p>서울특별시 마포구 동교로23길 40, 4층</p>
        <a href="mailto:sjlee@adventure-f.com">sjlee@adventure-f.com</a>
      </div>
    </footer>
  );
};

export default Footer;
