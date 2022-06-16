/** @jsxImportSource @emotion/react */
import { links } from "../../../links";

import footer_logo from "../../../assets/images/footer/footer_logo.png";

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
            <a href={links.youtube} target={"_blank"} rel="noreferrer"></a>
          </li>
          <li>
            <a href={links.insta} target={"_blank"} rel="noreferrer"></a>
          </li>
          <li>
            <a href={links.kakao} target={"_blank"} rel="noreferrer"></a>
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
