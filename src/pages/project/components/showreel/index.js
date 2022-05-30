/** @jsxImportSource @emotion/react */
import { useState } from "react";
import playIcon from "../../../../assets/images/project/playIcon.png";

import { showRealWrapper, frameCSS, titleCSS, mainBackground, playButton } from "./style";

const ShowReel = ({ youtubeQuery, title }) => {
  const [isClick, setIsClick] = useState(false);

  const handleShowFrame = () => {
    setIsClick(true);
  };

  return (
    <section css={showRealWrapper}>
      <h2 css={titleCSS}>2021 SHOWREEL</h2>

      <button type="button" css={playButton(isClick)} onClick={handleShowFrame}>
        <img src={playIcon} alt="" />
      </button>
      <div
        css={mainBackground}
        style={{
          backgroundImage: `url(https://img.youtube.com/vi/${youtubeQuery}/maxresdefault.jpg)`,
        }}
      ></div>

      <iframe
        css={frameCSS(isClick)}
        src={`https://www.youtube.com/embed/${youtubeQuery}?autoplay=0&mute=0&autohide='2'&modestbranding=1&enablejsapi=1&version=3&playerapiid=ytplayer`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default ShowReel;
