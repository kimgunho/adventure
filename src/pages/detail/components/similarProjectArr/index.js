/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import arrow_right from "../../../../assets/images/detail/arrow_right_black.svg";

import { moreWrapper, title, list, imageBox, info, button } from "./style";
const SimilarProjectsArr = ({ category, project, moreSrc }) => {
  return (
    <section css={moreWrapper}>
      <h2 css={title}>MORE {category}</h2>
      <ul css={list}>
        {project.map(
          (project, index) =>
            index <= 3 && (
              <li key={index}>
                <Link to={`/project/${project.category}/${project.id}`}>
                  <div css={imageBox}>
                    <img
                      src={`https://img.youtube.com/vi/${project.youtube}/maxresdefault.jpg`}
                      alt={project.title}
                    />
                  </div>
                  <div css={info}>
                    <p>{project.client}</p>
                    <h3>{project.title}</h3>
                  </div>
                </Link>
              </li>
            ),
        )}
      </ul>
      <Link
        to={`/project/${moreSrc}`}
        css={button}
        onClick={() => {
          setTimeout(() => {
            window.scrollTo(0, window.innerHeight);
          }, 10);
        }}
      >
        <span>Do you want to see more?</span>
        <img src={arrow_right} alt="" />
      </Link>
    </section>
  );
};

export default SimilarProjectsArr;
