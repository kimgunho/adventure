/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import playButtonImage from "../../assets/images/detail/playIcon.png";
import arrowLeft from "../../assets/images/detail/arrow_left.svg";
import arrowRight from "../../assets/images/detail/arrow_right.svg";

import SimilarProjectsArr from "./components/similarProjectArr";
import Frame from "./components/frame";

import {
  wrapper,
  detailHeader,
  imageBox,
  info,
  desc,
  infoList,
  sliderImageCSS,
  sliderWrapper,
  sliderButton,
  frameButton,
} from "./style";
import { convertDash, convertUnderscore } from "../../utils";

const settings = {
  centerPadding: "0px",
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
};

const Detail = () => {
  const params = useParams();
  const [detail, setDetail] = useState({});
  const [moreData, setMoreData] = useState([]);
  const [isFrameActive, setIsFrameActive] = useState(false);
  const sliderContainerRef = useRef();

  useEffect(() => {
    fetchDetail();
  }, []);

  const getCategory = () => {
    switch (params.category) {
      case "brand-film":
        return "Brand Film";
      case "commercial-film":
        return "Commercial film";
      case "viral-video":
        return "Viral video";
      case "youtube":
        return "Youtube";
      case "others":
        return "Others";
      default:
        break;
    }
  };

  const fetchDetail = async () => {
    const projects = await axios.get("../../projects/data.json").then(response => response.data);
    const similarItems = await projects.filter(
      project => convertDash(project.category) === params.category,
    );
    const currentItem = await projects.find(
      project => convertUnderscore(project.title) === params.title,
    );
    setMoreData(similarItems);
    setDetail(currentItem);
  };

  fetchDetail();

  return (
    <main css={wrapper}>
      <header css={detailHeader}>
        <p>{getCategory()}</p>
        <h2>{detail.title}</h2>
      </header>
      <section>
        <div css={imageBox}>
          <button
            css={frameButton(isFrameActive)}
            type="button"
            onClick={() => setIsFrameActive(true)}
          >
            <img src={playButtonImage} alt="play video" />
          </button>
          {isFrameActive ? (
            <Frame src={detail.youtube} title={detail.title} />
          ) : (
            <img
              src={`https://img.youtube.com/vi/${detail.youTubeId}/maxresdefault.jpg`}
              alt={detail.title}
            />
          )}
        </div>
        <div css={info}>
          <div css={desc}>
            <p>{detail.desc}</p>
          </div>
          <div css={infoList}>
            <ul>
              <li>
                <span>PROJECTS NAME</span>
                <span>{detail.title}</span>
              </li>
              <li>
                <span>PROJECTS TIME</span>
                <span>{detail.year}</span>
              </li>
              <li>
                <span>PROJECTS CLIENT</span>
                <span>{detail.client}</span>
              </li>
              <li>
                <span>KEY STAFF</span>
                <span>{detail.staff}</span>
              </li>
            </ul>
          </div>
        </div>
        <div css={sliderWrapper}>
          {detail.images && (
            <Slider {...settings} ref={sliderContainerRef}>
              {detail.images.map((imgSrc, index) => (
                <div key={index} css={sliderImageCSS}>
                  <img src={`${imgSrc}`} alt="" />
                </div>
              ))}
            </Slider>
          )}

          <button css={sliderButton}>
            <span onClick={() => sliderContainerRef.current?.slickPrev()}>
              <img src={arrowLeft} alt="prev image" /> prev
            </span>
            <span onClick={() => sliderContainerRef.current?.slickNext()}>
              next <img src={arrowRight} alt="next image" />
            </span>
          </button>
        </div>
      </section>
      <SimilarProjectsArr project={moreData} category={getCategory()} moreSrc={params.category} />
    </main>
  );
};

export default Detail;
