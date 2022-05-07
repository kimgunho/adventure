/** @jsxImportSource @emotion/react */
import { container, info, project, mainProject, projectList } from "./style";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mainData, data } from "./constants";

import arrow_right_icon from "../../../../assets/images/home/arrow_right_icon.png";

gsap.registerPlugin(ScrollTrigger);

const S02 = () => {
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.create({
        trigger: ".s2Contianer",
        start: "top top",
        end: "bottom 25%",
        scrub: true,
        markers: false,
        toggleClass: { className: "active", targets: ".info" },
      });
    }, 100);
  }, []);

  return (
    <section className="s2Contianer" css={container}>
      <article css={info} className="info">
        <div>
          <h2>What we do</h2>
          <p>
            타겟에 대한 이해, 정확한 기획 의도 분석
            <br />
            과감한 연출, 아름다운 미장-쎈, 감각적인 편집을 바탕으로
            <br />
            생각 보다 한 단계 더 설득력 있는 광고를 만듭니다.
          </p>
          <Link to="/">
            MORE WORKS <img src={arrow_right_icon} alt="" />
          </Link>
        </div>
      </article>
      <article css={project} className="project">
        <div css={mainProject}>
          <div>
            <img src={mainData.image} alt="" />
            <p>{mainData.kind}</p>
          </div>
          <h3>{mainData.title}</h3>
        </div>
        <ul css={projectList}>
          {data.map((item, index) => (
            <li key={index}>
              <div>
                <img src={item.image} alt={item.title} />
                <p>{item.kind}</p>
              </div>
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default S02;
