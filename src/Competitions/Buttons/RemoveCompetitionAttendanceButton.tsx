/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import api from "../../ApiEndpoints";
import { CompetitionStore, GlobalStoreActions } from "../../Redux/GlobalStore";
import { CompetitionTraineeModel } from "../ICompetitions";

export const RemoveCompetitionAttendanceButton = ({
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
        background-color: red;
        font-size: 50px;
        margin-right: 30px;
      `}
      className="trainee"
      onClick={() => {
        axios
          .post(api.Competitions.Attendances.Remove, {
            eventID: competitionStore.competition.id,
            traineeID: trainee.id,
          })
          .then((res) => {
            if (res.data === 1) {
              dispatch({
                type: GlobalStoreActions.CompetitionStore.SortedTrainees.SWITCH,
                oneCompetitionTrainee: trainee,
                oneCompetitionStore: competitionStore,
              });
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
