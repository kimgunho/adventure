/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

import playButtonImage from "../../assets/images/detail/playIcon.png";
import arrowLeft from "../../assets/images/detail/arrow_left.svg";
import arrowRight from "../../assets/images/detail/arrow_right.svg";
import closeButtonIcon from "../../assets/images/detail/close_button_icon.png";

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
  modal,
  closeButton,
} from "./style";

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
  const [state, setState] = useState({ category: "", url: "" });
  const sliderContainerRef = useRef();
  const modalRef = useRef();
  const [modalSrc, setModalSrc] = useState("");
  const [isModal, setIsMadal] = useState(false);

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    fetchProject();
  }, [state]);

  const getCategory = () => {
    switch (params.kind) {
      case "brand":
        setState({ category: "Brand Film", url: "../../local-json/project_brand.json" });
        break;
      case "commercial":
        setState({ category: "Commercial film", url: "../../local-json/project_commercial.json" });
        break;
      case "viral":
        setState({ category: "Viral video", url: "../../local-json/project_viral.json" });
        break;
      case "youtube":
        setState({ category: "Youtube", url: "../../local-json/project_youtube.json" });
        break;
      case "others":
        setState({ category: "Others", url: "../../local-json/project_others.json" });
        break;
      default:
        break;
    }
  };

  const fetchProject = async () => {
    const response = await axios.get(state.url);
    const { main, data } = await response.data;
    const filterData = await data.filter((item, index) => index < 4);
    const currentData = await data.filter(item => item.id === Number(params.id));
    Number(params.id) === 0 ? setDetail(main) : setDetail(currentData[0]);
    setMoreData(filterData);
  };

  const showModalImage = event => {
    setModalSrc(event.target.currentSrc);
    setIsMadal(true);
  };

  const hideModalImage = event => {
    setIsMadal(false);
  };

  return (
    <main css={wrapper}>
      <header css={detailHeader}>
        <p>{state.category}</p>
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
              src={`https://img.youtube.com/vi/${detail.youtube}/maxresdefault.jpg`}
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
                <span>PROJECTS TYPE</span>
                <span>{detail.type}</span>
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
                <div key={index} css={sliderImageCSS} onClick={showModalImage}>
                  <img src={`${imgSrc}`} alt="" />
                </div>
              ))}
            </Slider>
          )}

          <div css={modal(isModal)}>
            <button css={closeButton} type="button" onClick={hideModalImage}>
              <img src={closeButtonIcon} alt="" />
            </button>
            <img ref={modalRef} src={modalSrc} alt="" />
          </div>

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
      <SimilarProjectsArr project={moreData} category={state.category} moreSrc={params.kind} />
    </main>
  );
};

export default Detail;
