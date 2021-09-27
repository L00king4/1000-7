/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import "./LeftSide.css";

export const LeftSide = () => (
  <div>
    <Link to="Competitions">Competitions</Link>
    <Link to="Trainings">Trainings</Link>
    <Link to="PayEvents">Other Events</Link>
  </div>
);

export default LeftSide;
