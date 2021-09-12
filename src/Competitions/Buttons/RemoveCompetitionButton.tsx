/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import api from "../../ApiEndpoints";
import { CompetitionStore, GlobalStoreActions } from "../../Redux/GlobalStore";

export const RemoveCompetitionButton = ({
  competitionStore,
}: {
  competitionStore: CompetitionStore;
}) => {
  const dispatch = useDispatch();
  const removeCompetition = () => {
    axios
      .get(api.Competitions.Events.Remove(competitionStore.competition.id))
      .then((res) => {
        if (res.data > 0) {
          console.log("Changed " + res.data);
          dispatch({
            type: GlobalStoreActions.CompetitionStore.REMOVE_ONE,
            oneCompetitionStore: competitionStore,
          });
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
      onClick={removeCompetition}
    >
      -
    </button>
  );
};
