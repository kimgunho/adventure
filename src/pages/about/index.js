/** @jsxImportSource @emotion/react */

import Header from "./components/header";
import Info from "./components/info";
import CS from "./components/cs";
import Map from "./components/map";

import { wrapper } from "./style";
const About = () => {
  return (
    <main css={wrapper}>
      <Header />
      <Info />
      <CS />
      <Map />
    </main>
  );
};

export default About;
