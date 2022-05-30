/** @jsxImportSource @emotion/react */

import { useRef } from "react";
// import emailjs from "@emailjs/browser";

import linkIcon from "../../../../assets/images/about/linkIcon.png";
import downLoadIcon from "../../../../assets/images/about/downloadIcon.svg";
import rightIcon from "../../../../assets/images/about/rightIcon.svg";

import { wrapper, topHeader, title, topBody, bottomBody, bottomDesc, bottomForm } from "./style";
const Info = () => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  // const sendEmail = e => {
  //   e.preventDefault();
  //   const value = nameRef.current.value;
  //   /* eslint-disable */
  //   const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  //   if (!reg_email.test(value)) {
  //     alert("메일양식이 아닙니다.");
  //     return false;
  //   }

  //   emailjs
  //     .sendForm("service_c1pz9pc", "template_dfxj2vr", formRef.current, "DANFrNV4TKqMu48p7")
  //     .then(
  //       alert("감사합니다 빠른 시일내에 답변을 드리겠습니다."),
  //       (nameRef.current.value = ""),
  //       error => {
  //         console.log(error.text);
  //       },
  //     );
  // };

  return (
    <>
      <section css={wrapper}>
        <h3 css={title}>About</h3>
        <div css={topHeader}>
          <h4>
            걱정마세요!
            <br />
            답을 찾아 드릴게요.
          </h4>
          <div>
            <p>
              우리는 홍보영상, 브랜드 필름, 바이럴 영상, 유튜브 콘텐츠, 아트필름, 뮤직비디오까지 못
              하는게 없는 영상의 전문가. 생각하고 구성하고 화면을 만들고 이야기를 조립하는 일을
              합니다.
            </p>
            <p>
              당신이 마케터, 영상 제작 담당자, 광고 기획사, 광고 대행사, 콘텐츠 기획자, 행사 기획자,
              홍보 전문가… 그 누구라도! 우린 좋은 파트너가 될 거라고 확신해요.
            </p>
          </div>
        </div>
        <div css={topBody}>
          <ul>
            <li>
              <a href="" target={"_blank"}>
                <span>Instagram</span>
                <img src={linkIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="" target={"_blank"}>
                <span>youtube</span>
                <img src={linkIcon} alt="" />
              </a>
            </li>
          </ul>
          <div>
            <p>우리가 한 일을 한 번 보시겠어요?</p>
            <a href="" download>
              <span>회사소개서 다운로드</span>
              <img src={downLoadIcon} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section css={wrapper}>
        <h3 css={title}>Contact us</h3>
        <div css={bottomBody}>
          <div css={bottomDesc}>
            <h4>
              함께 멋진 일을
              <br />
              시작해 볼까요?
            </h4>

            <ul>
              <li>
                <a href="mailto:sjlee@adventure-f.com">
                  <span>sjlee@adventure-f.com</span>
                  <img src={linkIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="" target={"_blank"}>
                  <span>Kakaotalk channel</span>
                  <img src={linkIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div css={bottomForm}>
            {/* onSubmit={sendEmail} */}
            <form ref={formRef}>
              <ul>
                <li>
                  <input
                    name="name"
                    ref={nameRef}
                    type="text"
                    placeholder="회사/이름은 무엇인가요?"
                  />
                </li>
                <li>
                  <input
                    name="email"
                    ref={emailRef}
                    type="text"
                    placeholder="이메일 주소를 적어주세요."
                  />
                </li>
                <li>
                  <textarea
                    name="text"
                    ref={textRef}
                    placeholder="내용을 간단히 적어주세요. 확인 후 곧 연락 드릴게요!"
                  />
                </li>
              </ul>
              <button>
                <span>메세지 보내기</span>
                <img src={rightIcon} alt="" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
