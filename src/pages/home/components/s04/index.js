/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import { backgroundObj } from "./constants";
import { container, title, nav, buttons, button, backgroundCSS, frame } from "./style";
const S04 = () => {
  return (
    <section css={container}>
      <h2 css={title}>Our expertise</h2>
      <nav css={nav}>
        <ul css={buttons}>
          <li>
            <Link to="/" css={button(backgroundObj.brandFilm)}>
              Brand film
              <div css={backgroundCSS} />
            </Link>
          </li>
          <li>
            <Link to="/" css={button(backgroundObj.commercialFilm)}>
              Commercial film
              <div css={backgroundCSS} />
            </Link>
          </li>
          <li>
            <Link to="/" css={button(backgroundObj.viralVideo)}>
              Viral video
              <div css={backgroundCSS} />
            </Link>
          </li>
          <li>
            <Link to="/ss" css={button(backgroundObj.youtube)}>
              Youtube
              <div css={backgroundCSS} />
            </Link>
          </li>
          <li>
            <Link to="/" css={button(backgroundObj.others)}>
              Others
              <div css={backgroundCSS} />
            </Link>
          </li>
        </ul>
      </nav>
      <div css={frame} />
    </section>
  );
};

export default S04;
