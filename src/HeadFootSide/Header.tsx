/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Tab = "Competitions" | "Trainees" | "Trainings" | "None";
export const Header = () => {
  const location = useLocation();
  const [currTab, setCurrTab] = useState<Tab>("None");
  const [navLinksVisible, setNavLinksVisible] = useState(false);
  const onClickHandler = (caller: Tab) => {
    setCurrTab(caller);
    setNavLinksVisible(false);
  };
  return (
    <div className="topnav">
      <i
        className="fa fa-bars navicon"
        onClick={() => {
          setNavLinksVisible(!navLinksVisible);
        }}
      ></i>
      <div className="currnav">{location.pathname.substring(1)}</div>
      <div className={navLinksVisible ? "navlinks-showed" : "navlinks-hidden"}>
        <Fragment>
          <Link
            to="/Competitions"
            className="navlink"
            onClick={() => onClickHandler("Competitions")}
          >
            Competitions
          </Link>
          <Link
            to="/Trainees"
            className="navlink"
            onClick={() => onClickHandler("Trainees")}
          >
            Trainees
          </Link>
          <Link
            to="/Trainings"
            className="navlink"
            onClick={() => onClickHandler("Trainings")}
          >
            Trainings
          </Link>
        </Fragment>
      </div>
    </div>
  );
};

export default Header;
