/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import "./LeftSide.css";

export const LeftSide = () => (
  <div
    css={css`
      color: black;
      font-size: 5px;
      flex: 60%;
      border: 1px black solid;
      animation-name: example;
    `}
  >
    <Link to="Competitions">Competitions</Link>
    <Link to="Trainings">Trainings</Link>
    <Link to="PayEvents">Other Events</Link>
  </div>
);

export default LeftSide;
