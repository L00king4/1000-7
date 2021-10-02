/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCompetition } from "./AddCompetitions";
import { fetchCompetitions } from "../Redux/Services/CompetitionsService";
import { useCompetitionsSelector } from "../Redux/Slices/Competitions/CompetitionsSlice";
import { Competition } from "./Competition";
import { useGlobalSelector } from "../Redux/Store";
import "../css/Competitions/Competitions.css";

export const Competitions = () => {
  const dispatch = useDispatch();
  const [showAddCompetition, setShowAddCompetition] = useState(false);
  const competitionStore = useGlobalSelector(useCompetitionsSelector);
  useEffect(() => {
    fetchCompetitions(dispatch);
  }, []);
  return (
    <div>
      <div onClick={() => setShowAddCompetition(!showAddCompetition)}>
        Add competition
      </div>
      {showAddCompetition && <AddCompetition />}
      <ul
        css={css`
          list-style-type: none;
        `}
      >
        {competitionStore.competitionEntries.map(
          (competitionEntry, competitionEntryIndex) => (
            <Competition
              key={
                competitionEntry.competition.id.toString() +
                " " +
                competitionEntry.competition.name
              }
              competitionEntryKVP={{
                competitionEntry: competitionEntry,
                index: competitionEntryIndex,
              }}
            />
          )
        )}
      </ul>
    </div>
  );
};
