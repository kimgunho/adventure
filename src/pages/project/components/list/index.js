/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";

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
import { convertDash, convertUnderscore } from "../../../../utils";

const List = () => {
  const params = useParams();
  const [count, setCount] = useState(8);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [projectTopArr, setProjectTopArr] = useState([]);
  const [projectBottomArr, setProjectBottomArr] = useState([]);
  const [mainDisplay, setMainDisplay] = useState({});
  const [dataLength, setDataLength] = useState(null);
  const [url, setUrl] = useState(params.category);
  const location = useLocation();

  useEffect(() => {
    fetchProject();
  }, [url]);

  useEffect(() => {
    setUrl(params.category);
  }, [location.pathname]);

  useEffect(() => {
    if (dataLength !== null) {
      count >= dataLength ? setIsScrollEnd(true) : setIsScrollEnd(false);
    }
  }, [count, dataLength]);

  const onClickActive = category => {
    if (category === url) {
      return;
    }
    setUrl(category);
    setCount(8);
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight);
    }, 10);
  };

  const handleIncreaseCount = () => {
    if (count >= dataLength) {
      setIsScrollEnd(true);
      return;
    }

    setCount(prev => prev + 8);
  };

  const fetchProject = async () => {
    const projects = await axios.get("../projects/data.json").then(response => response.data);

    if (url === "all") {
      const allCategoryShowMain = await projects.filter(project => project.isBigOnProject);
      const topArr = await projects.filter((project, index) => index <= 3);
      const bottmArr = await projects.filter((project, index) => index >= 4);
      setDataLength(bottmArr.length);
      setMainDisplay(allCategoryShowMain[0]);
      setProjectTopArr(topArr);
      setProjectBottomArr(bottmArr);
    } else {
      const filterCategoty = await projects.filter(
        project => convertDash(project.category) === url,
      );
      const showMain = await filterCategoty.filter(project => project.isBigOnProject);
      const filterTopArr = await filterCategoty.filter((project, index) => index <= 3);
      const filterBottomArr = await filterCategoty.filter((project, index) => index >= 4);
      setDataLength(filterBottomArr.length);
      setMainDisplay(showMain[0]);
      setProjectTopArr(filterTopArr);
      setProjectBottomArr(filterBottomArr);
    }
  };

  return (
    <main css={wrapper} id="project">
      <section css={headerContainer}>
        <h2 css={title}>PROJECTS</h2>
        <nav css={nav}>
          {menuArr.map(menu => (
            <Link
              to={`/project/${menu.query}`}
              onClick={() => onClickActive(menu.query)}
              css={url === menu.query && active}
              key={menu.title}
            >
              {menu.title}
            </Link>
          ))}
        </nav>
      </section>
      <section css={bodyContainer}>
        <div css={projectTopContainer}>
          <ul css={topArr}>
            {projectTopArr.map((project, index) => (
              <li key={index}>
                <Link
                  to={`/project/${convertDash(project.category)}/${convertUnderscore(
                    project.title,
                  )}`}
                >
                  <div css={imageBox}>
                    <div css={imgDimmed} className="imgDimmed" />
                    <img
                      src={`https://img.youtube.com/vi/${project.youTubeId}/maxresdefault.jpg`}
                      alt={project.title}
                    />
                  </div>
                  <div css={infoBox} className="infoBox">
                    <p>{project.client}</p>
                    <h3>{project.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div css={topDisplay}>
            {mainDisplay && (
              <Link
                to={`/project/${convertDash(mainDisplay.category)}/${convertUnderscore(
                  mainDisplay.title,
                )}`}
              >
                <div css={imgDimmed} className="imgDimmed" />
                <div className="displayImage" css={displayImageBox}>
                  <img
                    src={`https://img.youtube.com/vi/${mainDisplay.youTubeId}/maxresdefault.jpg`}
                    alt={mainDisplay.title}
                  />
                </div>

                <div css={infoBox} className="infoBox">
                  <p>{mainDisplay.client}</p>
                  <h3>{mainDisplay.title}</h3>
                </div>
              </Link>
            )}
          </div>
        </div>
        <div css={projectBottomContainer}>
          <ul css={bottomArr}>
            {projectBottomArr.map(
              (project, index) =>
                index < count && (
                  <li key={index}>
                    <Link
                      to={`/project/${convertDash(project.category)}/${convertUnderscore(
                        project.title,
                      )}`}
                    >
                      <div css={imageBox}>
                        <div css={imgDimmed} className="imgDimmed" />
                        <img
                          src={`https://img.youtube.com/vi/${project.youTubeId}/maxresdefault.jpg`}
                          alt={project.title}
                        />
                      </div>
                      <div css={infoBox} className="infoBox">
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
