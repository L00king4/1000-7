/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import api from "../../ApiEndpoints";
import { removeCompetition } from "../../Redux/Services/CompetitionsService";
import { CompetitionStore } from "../../Redux/Slices/Competitions/CompetitionsSlice";

export const RemoveCompetitionButton = ({
  competitionStore,
}: {
  competitionStore: CompetitionStore;
}) => {
  const dispatch = useDispatch();
  const removeCompetitionHandler = () => {
    axios
      .get(api.Competitions.Events.Remove(competitionStore.competition.id))
      .then((res) => {
        if (res.data > 0) {
          console.log("Changed " + res.data);
          removeCompetition(dispatch, competitionStore);
        }
      });
  };
  return (
    <button
      css={css`
        background-color: red;
        width: 50px;
        height: 50px;
        display: inline-block;
        margin-left: 30px;
        color: white;
        font-size: 10px;
        text-align: center;
      `}
      onClick={removeCompetitionHandler}
    >
      -
    </button>
  );
};
