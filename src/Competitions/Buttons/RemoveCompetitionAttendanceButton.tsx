/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import api from "../../ApiEndpoints";
import { removeCompetitionAttendance } from "../../Redux/Services/CompetitionsService";
import { CompetitionEntry } from "../../Redux/Slices/Competitions/ICompetitionsSlice";
import {
  CompetitionModelKVP,
  CompetitionTraineeModel,
  CompetitionTraineeModelKVP,
} from "../ICompetitions";

export const RemoveCompetitionAttendanceButton = ({
  competitionModelKVP,
  traineeKVP,
}: {
  competitionModelKVP: CompetitionModelKVP;
  traineeKVP: CompetitionTraineeModelKVP;
}) => {
  const dispatch = useDispatch();
  const removeCompetitionAttendanceHandler = () => {
    removeCompetitionAttendance(dispatch, traineeKVP, competitionModelKVP);
  };
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
      onClick={removeCompetitionAttendanceHandler}
    >
      -
    </button>
  );
};

export default RemoveCompetitionAttendanceButton;
