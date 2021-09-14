/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCompetitions } from "../Redux/Services/CompetitionsService";
import { useCompetitionsSelector } from "../Redux/Slices/CompetitionsSlice";
import { Competition } from "./Competition";

export const Competitions = () => {
  const dispatch = useDispatch();
  const competitionStores = useCompetitionsSelector(
    (state) => state.competitionsSlice
  );
  useEffect(() => {
    fetchCompetitions(dispatch);
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
        {competitionStores.map((competitionStore) => (
          <Competition
            key={
              competitionStore.competition.id.toString() +
              " " +
              competitionStore.competition.name
            }
            competitionStore={competitionStore}
          />
        ))}
      </ul>
    </div>
  );
};
