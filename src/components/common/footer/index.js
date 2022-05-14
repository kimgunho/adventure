/** @jsxImportSource @emotion/react */

import footer_logo from "../../../assets/images/footer/footer_logo.png";
import youtube_icon from "../../../assets/images/footer/youtube_icon.png";
import insta_icon from "../../../assets/images/footer/insta_icon.png";
import kakao_icon from "../../../assets/images/footer/kakao_icon.png";

import {
  footerWrapper,
  companyTitleContainer,
  companyCSContainer,
  socialContainer,
  officeInfoContainer,
} from "./style";
const Footer = () => {
  return (
    <footer css={footerWrapper}>
      <div css={companyTitleContainer}>
        <h2>
          <img src={footer_logo} alt="" />
        </h2>
        <p>Copyrightⓒ Adeventure Frame Co. All Rights Reserved</p>
      </div>
      <div css={companyCSContainer}>
        <div css={socialContainer}>
          <h3>Social</h3>
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
        </div>
        <div css={officeInfoContainer}>
          <h3>AF Office</h3>
          <a href="tel:023321237">+82) 02-332-1237</a>
          <p>서울특별시 마포구 동교로23길 40, 4층</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
