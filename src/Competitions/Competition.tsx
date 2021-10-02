/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import { CompetitionEntryKVP, CompetitionTraineeModel } from "./ICompetitions";
import api from "../ApiEndpoints";
import { CompetitionSortedTrainees } from "./CompetitionSortedTrainees";
import { useDispatch } from "react-redux";
import { RemoveCompetitionButton } from "./Buttons/RemoveCompetitionButton";
import { fetchSortedTrainees } from "../Redux/Services/CompetitionsService";
import "../css/Shared/Arrows.css";
import { CompetitionEntry } from "../Redux/Slices/Competitions/ICompetitionsSlice";

export const Competition = ({
  competitionEntryKVP,
}: {
  competitionEntryKVP: CompetitionEntryKVP;
}) => {
  const { index, competitionEntry } = competitionEntryKVP;
  const dispatch = useDispatch();
  const [showAttending, setShowAttending] = useState(false);
  const onClickHandler = () => {
    if (
      competitionEntry.sortedTrainees?.attendingTrainees.length === 0 &&
      competitionEntry.sortedTrainees?.notAttendingTrainees.length === 0
    ) {
      fetchSortedTrainees(dispatch, competitionEntry.competition.id, index);
    }
    setShowAttending(!showAttending);
  };
  return (
    <li>
      <div onClick={onClickHandler} className="CompetitionEntry">
        <i className={showAttending ? "arrow down" : "arrow left"}></i> [
        {competitionEntry.competition.toPay}] |{" "}
        {competitionEntry.competition.name}
      </div>
      <RemoveCompetitionButton
        competitionModelKVP={{
          competition: competitionEntry.competition,
          index: index,
        }}
      />
      {showAttending && competitionEntry.sortedTrainees !== undefined && (
        <CompetitionSortedTrainees competitionEntryKVP={competitionEntryKVP} />
      )}
    </li>
  );
};
