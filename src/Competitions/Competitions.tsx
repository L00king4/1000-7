/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../ApiEndpoints";
import { CompetitionModel } from "./ICompetitions";
import { OneCompetitionStore } from "./Stores/OneCompetitionStore";
import { useDispatch, useSelector } from "react-redux";
import { AllCompetitionsActions } from "./Stores/AllCompetitionsStore";

export const Competitions = () => {
  const dispatch = useDispatch();
  const competitions = useSelector<CompetitionModel[], CompetitionModel[]>(
    (state) => state
  );
  useEffect(() => {
    axios.get(api.Competitions.Events.GetAll).then((res) => {
      dispatch({ type: AllCompetitionsActions.SET_MANY, many: res.data });
    });
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
          <OneCompetitionStore
            key={competition.id.toString() + " " + competition.name}
            competition={competition}
          />
        ))}
      </ul>
    </div>
  );
};
