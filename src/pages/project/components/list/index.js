/** @jsxImportSource @emotion/react */

import { menuArr } from "../../constants";

const List = () => {
  return (
    <section>
      <div>
        <h2>PROJECTS</h2>
        <ul>
          {menuArr.map((menu, index) => (
            <li key={index}>{menu.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <div>main</div>
        </div>
        <div>
          <ul>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
          </ul>
        </div>
      </div>
      <button type="button">More works</button>
    </section>
  );
};

export default List;
