/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import arrowDownIcon from "../../../../assets/images/project/arrow_down_icon.png";
import arrowUpIcon from "../../../../assets/images/project/arrow_up_icon.png";

import { menuArr } from "../../constants";
import {
  wrapper,
  headerContainer,
  title,
  nav,
  active,
  bodyContainer,
  projectTopContainer,
  projectBottomContainer,
  topArr,
  topDisplay,
  imageBox,
  infoBox,
  bottomArr,
  moreButton,
  displayImageBox,
  imgDimmed,
} from "./style";
const List = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [activeKind, setActiveKind] = useState(params.kind);
  const [count, setCount] = useState(8);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [mainDisplay, setMainDisplay] = useState({});
  const [url, setUrl] = useState(params.kind);

  useEffect(() => {
    dataLength !== 0 && count >= data.length - 3 && setIsScrollEnd(true);
  }, [count]);

  useEffect(() => {
    getActiveJson();
  }, [activeKind]);

  useEffect(() => {
    fetchProject();
  }, [url]);

  const getActiveJson = () => {
    switch (params.kind) {
      case "all":
        setUrl("../local-json/project_all.json");
        break;
      case "brand":
        setUrl("../local-json/project_brand.json");
        break;
      case "commercial":
        setUrl("../local-json/project_commercial.json");
        break;
      case "viral":
        setUrl("../local-json/project_viral.json");
        break;
      case "youtube":
        setUrl("../local-json/project_youtube.json");
        break;
      case "others":
        setUrl("../local-json/project_others.json");
        break;
      default:
        setUrl("../local-json/project_all.json");
        break;
    }
  };

  const fetchProject = async () => {
    const response = await axios.get(url);
    const { main, data } = await response.data;
    setDataLength(data.length);
    setData(data);
    setMainDisplay(main);
  };

  const onClickActive = (kind, navLink) => {
    if (kind === activeKind) {
      return;
    }
    navigate(navLink);
    setActiveKind(kind);
    setCount(8);
    setIsScrollEnd(false);
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight);
    }, 10);
  };

  if (!data) {
    return <div>loading</div>;
  }

  const bodyData = data?.filter((item, index) => index > 3);

  const handleIncreaseCount = () => {
    setCount(prev => prev + 8);
    return;
  };

  return (
    <main css={wrapper}>
      <section css={headerContainer}>
        <h2 css={title}>PROJECTS</h2>
        <ul css={nav}>
          {menuArr.map((menu, index) => (
            <li
              onClick={() => onClickActive(menu.query, `/project/${menu.query}`)}
              css={activeKind === menu.query && active}
              key={index}
            >
              {menu.title}
            </li>
          ))}
        </ul>
      </section>
      <section css={bodyContainer}>
        <div css={projectTopContainer}>
          <ul css={topArr}>
            {data?.map(
              (project, index) =>
                index < 4 && (
                  <li key={project.id}>
                    <Link to={`/project/${project.category}/${project.id}`}>
                      <div css={imageBox}>
                        <div css={imgDimmed} className="imgDimmed" />
                        <img
                          src={`https://img.youtube.com/vi/${project.youtube}/maxresdefault.jpg`}
                          alt=""
                        />
                      </div>
                      <div css={infoBox}>
                        <p>{project.client}</p>
                        <h3>{project.title}</h3>
                      </div>
                    </Link>
                  </li>
                ),
            )}
          </ul>
          <div css={topDisplay}>
            <Link to={`/project/${mainDisplay?.category}/${mainDisplay?.id}`}>
              <div css={imgDimmed} className="imgDimmed" />
              <div
                className="displayImage"
                css={displayImageBox}
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${mainDisplay?.youtube}/maxresdefault.jpg)`,
                }}
              ></div>
              <div css={infoBox}>
                <p>{mainDisplay?.client}</p>
                <h3>{mainDisplay?.title}</h3>
              </div>
            </Link>
          </div>
        </div>
        <div css={projectBottomContainer}>
          <ul css={bottomArr}>
            {bodyData?.map(
              (project, index) =>
                index < count && (
                  <li key={project.id}>
                    <Link to={`/project/${project.category}/${project.id}`}>
                      <div css={imageBox}>
                        <div css={imgDimmed} className="imgDimmed" />
                        <img
                          src={`https://img.youtube.com/vi/${project.youtube}/maxresdefault.jpg`}
                          alt=""
                        />
                      </div>
                      <div css={infoBox}>
                        <p>{project.client}</p>
                        <h3>{project.title}</h3>
                      </div>
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </div>
      </section>
      <button
        css={moreButton}
        type="button"
        onClick={
          !isScrollEnd
            ? handleIncreaseCount
            : () => {
                window.scrollTo(0, window.innerHeight);
              }
        }
      >
        <span>{!isScrollEnd ? "More works" : "Go to top"} </span>
        <img
          src={!isScrollEnd ? arrowDownIcon : arrowUpIcon}
          alt={!isScrollEnd ? "More works" : "Go to top"}
        />
      </button>
    </main>
  );
};

export default List;
