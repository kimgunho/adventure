/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import axios from "axios";

import arrow_right_icon from "../../../../assets/images/home/arrow_right_icon.png";

import {
  container,
  info,
  project,
  mainProject,
  projectList,
  line,
  percentLine,
  title,
  desc,
  linkButton,
} from "./style";

const S02 = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [data, setData] = useState([]);
  const [mainDisplay, setMainDisplay] = useState({});

  useEffect(() => {
    setTimeout(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".s2Contianer",
          start: "top top",
          end: `bottom bottom-=90px`,
          scrub: true,
          markers: false,
          toggleClass: { className: "active", targets: [".line", ".moreProject"] },
          onUpdate: self => {
            setContainerWidth(self.progress);
          },
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    const response = await axios.get("../local-json/main_display.json");
    const { main, data: mainData } = await response.data;
    setData(mainData);
    setMainDisplay(main);
  };

  return (
    <section className="s2Contianer" css={container}>
      <div className="line" css={line}>
        <div css={percentLine(containerWidth)} />
      </div>
      <article css={info} className="info">
        <div>
          <h2 css={title}>What we do</h2>
          <p css={desc} className="infoDesc">
            타겟에 대한 이해, 정확한 기획 의도 분석, 과감한 연출, 아름다운 미장-쎈, 감각적인 편집을
            바탕으로 한 단계 더 설득력 있는 광고를 만듭니다. 우리의 포트폴리오를 확인하세요! 당신이
            원하는 영상이 여기에 없다고요? 그럼 같이 만들어보죠.
          </p>
          <Link className="moreProject" to="/project/all" css={linkButton}>
            MORE WORKS <img src={arrow_right_icon} alt="" />
          </Link>
        </div>
      </article>
      <article css={project} className="project">
        <div css={mainProject}>
          <Link to={`/project/${mainDisplay.category}/${mainDisplay.id}`}>
            <div>
              <img
                src={`https://img.youtube.com/vi/${mainDisplay.youtube}/maxresdefault.jpg`}
                alt=""
              />
              <p>{mainDisplay.category}</p>
            </div>
            <h3>{mainDisplay.title}</h3>
          </Link>
        </div>
        <ul css={projectList}>
          {data.map(item => (
            <li key={item.id}>
              <Link to={`/project/${item.category}/${item.id}`}>
                <div>
                  <img
                    src={`https://img.youtube.com/vi/${item.youtube}/maxresdefault.jpg`}
                    alt={item.title}
                  />
                  <p>{item.category}</p>
                </div>
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default S02;
