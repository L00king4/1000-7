/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import * as api from "../ApiEndpoints";
import { Competition } from "./Competition";
import { CompetitionModel, SortedTrainees } from "./ICompetitions";

const testCompetitions: CompetitionModel[] = [
  { id: 1, toPay: 200, name: "first" },
  { id: 2, toPay: 300, name: "second" },
  { id: 3, toPay: 400, name: "thjird" },
  { id: 4, toPay: 500, name: "foruth" },
];

const fetchCompetitions = (setCompetitions: Function) => {
  axios
    .get(api.GetAllCompetitions)
    .then((res) => {
      setCompetitions(res.data);
    })
    .catch(() => {
      setCompetitions(testCompetitions);
    });
};

export const Competitions = () => {
  const [competitions, setCompetitions] = useState<CompetitionModel[]>([]);

  useEffect(() => {
    fetchCompetitions(setCompetitions);
  }, []);

  return (
    <div>
      <ul
        css={css`
          list-style-type: none;
        `}
      >
        {competitions.map((competition) => (
          <Competition
            key={competition.id.toString() + " " + competition.name}
            competition={competition}
          />
        ))}
      </ul>
    </div>
  );
};