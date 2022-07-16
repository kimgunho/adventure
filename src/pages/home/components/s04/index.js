/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import { backgroundObj } from "./constants";
import {
  container,
  title,
  nav,
  buttons,
  button,
  buttonOnlyOneBackground,
  backgroundCSS,
} from "./style";
const S04 = () => {
  return (
    <section css={container}>
      <h2 css={title}>Our expertise</h2>
      <nav css={nav}>
        <ul css={buttons}>
          <li>
            <Link to="/project/brand" css={button(backgroundObj.brandFilm)}>
              Brand film
              <div css={backgroundCSS} />
            </Link>
          </li>
          <li>
            <Link to="/project/commercial" css={button(backgroundObj.commercialFilm)}>
              Commercial film
              <div css={backgroundCSS} />
            </Link>
          </li>
          <li>
            <Link to="/project/viral" css={buttonOnlyOneBackground(backgroundObj.viralVideo)}>
              Viral video
              <div css={backgroundCSS} />
            </Link>
          </li>
          <li>
            <Link to="/project/youtube" css={button(backgroundObj.youtube)}>
              Youtube
              <div css={backgroundCSS} />
            </Link>
          </li>
          <li>
            <Link to="/project/others" css={button(backgroundObj.others)}>
              Others
              <div css={backgroundCSS} />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default S04;
