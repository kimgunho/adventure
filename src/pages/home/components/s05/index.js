/** @jsxImportSource @emotion/react */
import { useState } from "react";

import arrow_right_icon from "../../../../assets/images/home/arrow_right_icon.png";
import copy_icon from "../../../../assets/images/home/copyIcon.png";
import link_icon from "../../../../assets/images/home/linkIcon.png";

import {
  container,
  title,
  flexContainer,
  introContainer,
  mailInfoContainer,
  introTitle,
  kakaoButton,
  mailInfoListArr,
  mailInfoData,
  mainControls,
  cotyDesc,
  copySucess,
} from "./style";
const S04 = () => {
  const [isSjleeCopy, setIsSjleeCopy] = useState(false);
  const [isAfCopy, setIsAfCopy] = useState(false);

  return (
    <section css={container}>
      <h2 css={title}>Contact us</h2>
      <div css={flexContainer}>
        <div css={introContainer}>
          <h3 css={introTitle}>
            세상을 놀라게 할<br />
            이야기를 해볼까요?
            <br />
            Shall we?
          </h3>

          <a href="" target={"_blank"} css={kakaoButton}>
            <span>카카오톡 상담하기</span> <img src={arrow_right_icon} alt="" />
          </a>
        </div>

        <div css={mailInfoContainer}>
          <ul css={mailInfoListArr}>
            <li>
              <div css={mailInfoData}>
                <h4>Business</h4>
                <a href="mailto:sjlee@adventure-f.com">
                  sjlee
                  <br />
                  @adventure-f.com
                </a>
              </div>

              <div css={mainControls}>
                <a
                  href="/"
                  onClick={event => {
                    event.preventDefault();
                    navigator.clipboard.writeText("sjlee@adventure-f.com");
                    setIsSjleeCopy(true);
                    setTimeout(() => {
                      setIsSjleeCopy(false);
                    }, 1000);
                  }}
                >
                  <img src={copy_icon} alt="이메일 복사하기" />
                  <p css={[cotyDesc, isSjleeCopy && copySucess]}>copy sucess!</p>
                </a>
                <a href="mailto:sjlee@adventure-f.com">
                  <img src={link_icon} alt="이메일 전송하기" />
                </a>
              </div>
            </li>
            <li>
              <div css={mailInfoData}>
                <h4>Career</h4>
                <a href="mailto:af@adventure-f.com">
                  af
                  <br />
                  @adventure-f.com
                </a>
              </div>
              <div css={mainControls}>
                <a
                  href="/"
                  onClick={event => {
                    event.preventDefault();
                    navigator.clipboard.writeText("af@adventure-f.com");
                    setIsAfCopy(true);
                    setTimeout(() => {
                      setIsAfCopy(false);
                    }, 1000);
                  }}
                >
                  <img src={copy_icon} alt="이메일 복사하기" />
                  <p css={[cotyDesc, isAfCopy && copySucess]}>copy sucess!</p>
                </a>
                <a href="mailto:af@adventure-f.com">
                  <img src={link_icon} alt="이메일 전송하기" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default S04;