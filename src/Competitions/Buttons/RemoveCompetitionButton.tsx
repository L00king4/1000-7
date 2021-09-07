/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import api from "../../ApiEndpoints";
import { CompetitionModel } from "../ICompetitions";

export const RemoveCompetitionButton = ({
  competition,
}: {
  competition: CompetitionModel;
}) => {
  const removeCompetition = () => {
    axios.get(api.Competitions.Events.Remove(competition.id)).then((res) => {
      if (res.data > 0) {
        console.log("Changed " + res.data);
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