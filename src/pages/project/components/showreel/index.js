/** @jsxImportSource @emotion/react */

import { showRealWrapper, frameCSS, titleCSS } from "./style";

const ShowReel = ({ youtubeQuery, title }) => {
  return (
    <section css={showRealWrapper}>
      <h2 css={titleCSS}>2021 SHOWREEL</h2>
      <iframe
        onClick={() => {
          console.log("aa");
        }}
        css={frameCSS}
        src={`https://www.youtube.com/embed/${youtubeQuery}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default ShowReel;
