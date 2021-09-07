/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../ApiEndpoints";
import { CompetitionModel } from "./ICompetitions";
import { CompetitionStore } from "./Stores/CompetitionStore";
import { useDispatch, useSelector } from "react-redux";

const fetchCompetitions = (setCompetitions: Function) => {
  axios
    .get(api.Competitions.Events.GetAll)
    .then((res) => {
      setCompetitions(res.data);
    })
    .catch(() => {});
};

export const Competitions = () => {
  const dispatch = useDispatch();
  const competitions = useSelector<CompetitionModel[], CompetitionModel[]>(
    (state) => state
  );
  useEffect(() => {
    axios
      .get(api.Competitions.Events.GetAll)
      .then((res) => dispatch({ type: "SET_MANY", many: res.data }));
  }, []);
  return (
    <div
      css={css`
        align-items: center;
        justify-content: center;
      `}
    >
      <Link to="Add">ADD COMPETITION</Link>
      <ul
        css={css`
          list-style-type: none;
        `}
      >
        {competitions.map((competition) => (
          <CompetitionStore
            key={competition.id.toString() + " " + competition.name}
            competition={competition}
          />
        ))}
      </ul>
    </div>
  );
};
