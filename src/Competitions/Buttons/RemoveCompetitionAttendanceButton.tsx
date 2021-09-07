/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import api from "../../ApiEndpoints";
import { CompetitionModel, CompetitionTraineeModel } from "../ICompetitions";

export const RemoveCompetitionAttendanceButton = ({
  competition,
  trainee,
  fetchSortedTrainees,
}: {
  competition: CompetitionModel;
  trainee: CompetitionTraineeModel;
  fetchSortedTrainees: Function;
}) => {
  const dispatch = useDispatch();
  return (
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
          .then((res) => {
            if (res.data === 1) {
              dispatch({ type: "SWITCH", one: trainee });
            }
            //fetchSortedTrainees();
          });
      }}
    >
      -
    </button>
  );
};

export default RemoveCompetitionAttendanceButton;
