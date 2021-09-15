/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export const Header = () => (
  <div
    css={css`
      color: black;
      font-size: 64px;
      display: inline-block;
    `}
  >
    <Link to="/Competitions">Competitions</Link>
    <Link to="/Trainees">Trainees</Link>
  </div>
);

export default Header;
