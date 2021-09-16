/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import AddCompetitionAttendanceButton from "./Buttons/AddCompetitionAttendanceButton";
import RemoveCompetitionAttendanceButton from "./Buttons/RemoveCompetitionAttendanceButton";
import AddCompetitionPaymentButton from "./Buttons/AddCompetitionPaymentButton";
import { CompetitionTrainee } from "./CompetitionTrainee";
import {} from "../Redux/Store";
import { CompetitionStore } from "../Redux/Slices/CompetitionsSlice";

export const CompetitionSortedTrainees = ({
  competitionStore,
}: {
  competitionStore: CompetitionStore;
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
          {competitionStore.sortedTrainees.attendingTrainees.map((trainee) => (
            <li
              key={
                competitionStore.competition.id.toString() +
                " " +
                trainee.id.toString() +
                trainee.fullname +
                trainee.beltColor.toString()
              }
            >
              <RemoveCompetitionAttendanceButton
                competitionStore={competitionStore}
                trainee={trainee}
              />
              <CompetitionTrainee trainee={trainee} showPayedAmount={true} />
              <AddCompetitionPaymentButton
                competitionStore={competitionStore}
                trainee={trainee}
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
          {competitionStore.sortedTrainees.notAttendingTrainees.map(
            (trainee) => (
              <li
                key={
                  competitionStore.competition.id.toString() +
                  " " +
                  trainee.id.toString() +
                  trainee.fullname +
                  trainee.beltColor.toString()
                }
              >
                <AddCompetitionAttendanceButton
                  competitionStore={competitionStore}
                  trainee={trainee}
                />
                <CompetitionTrainee trainee={trainee} showPayedAmount={false} />
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
