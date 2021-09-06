/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import api from "../ApiEndpoints";
import { CompetitionModel, CompetitionTraineeModel } from "./ICompetitions";

export const RemoveCompetitionAttendanceButton = ({
  competition,
  trainee,
  fetchSortedTrainees,
}: {
  competition: CompetitionModel;
  trainee: CompetitionTraineeModel;
  fetchSortedTrainees: Function;
}) => (
  <button
    css={css`
      width: 50px;
      height: 50px;
      display: inline-block;
      background-color: red;
      font-size: 50px;
      margin-right: 30px;
    `}
    className="trainee"
    onClick={() => {
      axios
        .post(api.Competitions.Attendances.Remove, {
          eventID: competition.id,
          traineeID: trainee.id,
        })
        .then(() => {
          fetchSortedTrainees();
        });
    }}
  >
    -
  </button>
);

export default RemoveCompetitionAttendanceButton;
