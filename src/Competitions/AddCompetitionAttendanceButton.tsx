/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import api from "../ApiEndpoints";

export const AddCompetitionAttendanceButton = ({
  eventID,
  traineeID,
  fetchSortedTrainees,
}: {
  eventID: number;
  traineeID: number;
  fetchSortedTrainees: Function;
}) => (
  <button
    css={css`
      width: 50px;
      height: 50px;
      display: inline-block;
      background-color: green;
      font-size: 50px;
      margin-right: 30px;
    `}
    onClick={() => {
      axios
        .post(api.Competitions.Attendances.Add, {
          eventID: eventID,
          traineeID: traineeID,
        })
        .then(() => {
          fetchSortedTrainees();
        });
    }}
  >
    +
  </button>
);

export default AddCompetitionAttendanceButton;
