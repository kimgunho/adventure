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
} from "./style";
const List = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [activeKind, setActiveKind] = useState(params.kind);
  const [count, setCount] = useState(8);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [data, setData] = useState([]);
  const [mainDisplay, setMainDisplay] = useState({});
  const [url, setUrl] = useState(params.kind);

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
    setData(data);
    setMainDisplay(main);
  };

  const onClickActive = (kind, navLink) => {
    if (kind === activeKind) {
      return;
    }
    navigate(navLink);
    setActiveKind(kind);
  };

  if (!data) {
    return <div>loading</div>;
  }

  const bodyData = data?.filter((item, index) => index > 3);

  const handleIncreaseCount = () => {
    if (count >= bodyData.length) {
      setIsScrollEnd(true);
      return;
    }
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
              <div css={imageBox}>
                <img
                  src={`https://img.youtube.com/vi/${mainDisplay?.youtube}/maxresdefault.jpg`}
                  alt={mainDisplay?.title}
                />
              </div>
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
      {!isScrollEnd ? (
        <button css={moreButton} type="button" onClick={handleIncreaseCount}>
          <span>More works</span>
          <img src={arrowDownIcon} alt="More works" />
        </button>
      ) : (
        <button
          css={moreButton}
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            setIsScrollEnd(false);
            setCount(8);
          }}
        >
          <span>Go to top</span>
          <img src={arrowUpIcon} alt="Go to top" />
        </button>
      )}
    </main>
  );
};

export default List;
