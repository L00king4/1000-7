/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Trainee } from "../Trainees/Trainee";
import { CompetitionModel, SortedTrainees } from "./ICompetitions";
import AddCompetitionAttendanceButton from "./Buttons/AddCompetitionAttendanceButton";
import RemoveCompetitionAttendanceButton from "./Buttons/RemoveCompetitionAttendanceButton";
import AddCompetitionPaymentButton from "./Buttons/AddCompetitionPaymentButton";
import { CompetitionTrainee } from "./CompetitionTrainee";

export const CompetitionSortedTrainees = ({
  sortedTrainees,
  competition,
  fetchSortedTrainees,
}: {
  sortedTrainees: SortedTrainees;
  competition: CompetitionModel;
  fetchSortedTrainees: Function;
}) => {
  const [showNotAttending, setShowNotAttending] = useState(false);
  const [showAttending, setShowAttending] = useState(true);
  return (
    <div
      css={css`
        border: 1px solid black;
        border-radius: 10px;
        background-color: #24bce2;
        padding: 10px;
        width: 665px;
        margin-left: 30px;
        display: block;
      `}
    >
      <div
        onClick={() => setShowAttending(!showAttending)}
        css={css`
          text-align: center;
          margin-bottom: 30px;
        `}
      >
        Attending:
      </div>
      {showAttending && (
        <ul>
          {sortedTrainees.attendingTrainees.map((trainee) => (
            <li
              key={
                competition.id.toString() +
                " " +
                trainee.id.toString() +
                trainee.fullname +
                trainee.beltColor.toString()
              }
            >
              <RemoveCompetitionAttendanceButton
                trainee={trainee}
                competition={competition}
                fetchSortedTrainees={fetchSortedTrainees}
              />
              <CompetitionTrainee trainee={trainee} />
              <AddCompetitionPaymentButton
                competition={competition}
                trainee={trainee}
                fetchSortedTrainees={fetchSortedTrainees}
              />
            </li>
          ))}
        </ul>
      )}
      <div
        css={css`
          text-align: center;
          padding-bottom: 30px;
        `}
        onClick={() => setShowNotAttending(!showNotAttending)}
      >
        Not Attending:
      </div>
      {showNotAttending && (
        <ul>
          {sortedTrainees.notAttendingTrainees.map((trainee) => (
            <li
              key={
                competition.id.toString() +
                " " +
                trainee.id.toString() +
                trainee.fullname +
                trainee.beltColor.toString()
              }
            >
              <AddCompetitionAttendanceButton
                trainee={trainee}
                competition={competition}
                fetchSortedTrainees={fetchSortedTrainees}
              />
              <Trainee trainee={trainee} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
