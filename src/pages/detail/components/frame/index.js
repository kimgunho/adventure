/** @jsxImportSource @emotion/react */

import { frameCSS } from "./style";
const Frame = ({ src, title }) => {
  return (
    <iframe
      css={frameCSS}
      src={`https://www.youtube.com/embed/${src}?autoplay=0&mute=0&autohide='2'&modestbranding=1&enablejsapi=1&version=3&playerapiid=ytplayer`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Frame;
