/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import { Trainee } from "../Trainees/Trainee";
import {
  CompetitionAttendanceModel,
  CompetitionAttendanceModelProp,
  CompetitionModel,
  CompetitionModelProp,
  SortedTrainees,
  SortedTraineesProp,
} from "./ICompetitions";
import * as api from "../ApiEndpoints";
import { TraineeModel, TraineeModelProp } from "../Trainees/ITrainees";
import AddCompetitionAttendanceButton from "./AddCompetitionAttendanceButton";

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
  return (
    <div
      css={css`
        border: 1px solid black;
        border-radius: 10px;
        background-color: #24bce2;
        padding: 10px;
        width: 665px;
        margin-left: 30px;
      `}
    >
      Attending:
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
            <Trainee trainee={trainee} />
          </li>
        ))}
      </ul>
      <div onClick={() => setShowNotAttending(!showNotAttending)}>
        Not Attending:{" "}
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
              <Trainee trainee={trainee} />
              <AddCompetitionAttendanceButton
                traineeID={trainee.id}
                eventID={competition.id}
                fetchSortedTrainees={fetchSortedTrainees}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
