/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { CompetitionAttendanceModel } from "./ICompetitions";
import * as api from "../ApiEndpoints";
import { fetchSortedTrainees } from "./Competition";

export const AddCompetitionAttendanceButton = ({
  eventID,
  traineeID,
}: CompetitionAttendanceModel) => (
  <div
    css={css`
      width: 50px;
      height: 50px;
      border: 1px black solid;
    `}
    onClick={() => {
      axios
        .post(api.AddCompetitionAttendance, {
          eventID: eventID,
          traineeID: traineeID,
        })
        .then(() => {
          fetchSortedTrainees(eventID);
        });
    }}
  >
    ADD
  </div>
);

export default AddCompetitionAttendanceButton;
