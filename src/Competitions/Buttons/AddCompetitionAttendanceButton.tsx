/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { addCompetitionAttendance } from "../../Redux/Services/CompetitionsService";
import {
  CompetitionModelKVP,
  CompetitionTraineeModelKVP,
} from "../../Redux/Slices/Competitions/ICompetitionsSlice";

export const AddCompetitionAttendanceButton = ({
  competitionModelKVP,
  traineeKVP,
}: {
  competitionModelKVP: CompetitionModelKVP;
  traineeKVP: CompetitionTraineeModelKVP;
}) => {
  const dispatch = useDispatch();
  const addCompetitionAttendanceHandler = () => {
    addCompetitionAttendance(dispatch, traineeKVP, competitionModelKVP);
  };
  return (
    <button
      className="AddCompAttButton"
      onClick={addCompetitionAttendanceHandler}
    >
      +
    </button>
  );
};

export default AddCompetitionAttendanceButton;
