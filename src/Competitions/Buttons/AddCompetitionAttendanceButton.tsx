/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import api from "../../ApiEndpoints";
import { CompetitionStore } from "../../Redux/Slices/CompetitionsSlice";
import { CompetitionTraineeModel } from "../ICompetitions";

export const AddCompetitionAttendanceButton = ({
  competitionStore,
  trainee,
}: {
  competitionStore: CompetitionStore;
  trainee: CompetitionTraineeModel;
}) => {
  const dispatch = useDispatch();
  return (
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
            eventID: competitionStore.competition.id,
            traineeID: trainee.id,
          })
          .then((res) => {
            if (res.data === 1) {
              // dispatch({
              //   type: GlobalStoreActions.CompetitionStore.SortedTrainees.SWITCH,
              //   oneCompetitionTrainee: trainee,
              //   oneCompetitionStore: competitionStore,
              // });
            }
          });
      }}
    >
      +
    </button>
  );
};

export default AddCompetitionAttendanceButton;
