/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef, useMemo } from "react";
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
  title,
  desc,
  imgDimmed,
  linkButton,
} from "./style";
import { convertDash, convertUnderscore } from "../../../../utils";

const S02 = () => {
  const [projects, setProjects] = useState();
  const projectRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".s2Contianer",
          start: "top top+=80px",
          end: `bottom bottom`,
          pin: ".box",
          scrub: true,
          markers: false,
        },
      });
    }, 1000);
  }, [window.innerWidth]);

  useEffect(() => {
    axios.get("../projects/data.json").then(response => setProjects(response.data));
  }, []);

  // 큰 썸네일 프로젝트
  const bigProject = useMemo(() => {
    return projects?.find(project => project.isBigOnMain);
  }, [projects]);

  // 작은 썸네일 프로젝트
  const smallProjects = useMemo(() => {
    if (projects) {
      return projects.filter(project => project.isSmallOnMain);
    }
    return [];
  }, [projects]);

  return (
    <section className="s2Contianer" css={container}>
      <article css={info} className="box">
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
      <article css={project} className="project" ref={projectRef}>
        <div css={mainProject}>
          {bigProject && (
            <Link
              to={`/project/${convertDash(bigProject.category)}/${convertUnderscore(
                bigProject.title,
              )}`}
            >
              <div>
                <div css={imgDimmed} className="imgDimmed" />
                <img
                  src={`https://img.youtube.com/vi/${bigProject.youTubeId}/maxresdefault.jpg`}
                  alt={bigProject.title}
                />
                <p>{bigProject.category}</p>
              </div>
              <h3>{bigProject.title}</h3>
            </Link>
          )}
        </div>
        <ul css={projectList} className="projectArr">
          {smallProjects.map((project, index) => (
            <li key={index}>
              <Link
                to={`/project/${convertDash(project.category)}/${convertUnderscore(project.title)}`}
              >
                <div>
                  <div css={imgDimmed} className="imgDimmed" />
                  <img
                    src={`https://img.youtube.com/vi/${project.youTubeId}/maxresdefault.jpg`}
                    alt={project.title}
                  />
                  <p>{project.category}</p>
                </div>
                <h3>{project.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default S02;
