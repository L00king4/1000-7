/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import api from "../../ApiEndpoints";
import { removeCompetition } from "../../Redux/Services/CompetitionsService";
import { CompetitionEntry } from "../../Redux/Slices/Competitions/ICompetitionsSlice";
import { CompetitionModelKVP } from "../ICompetitions";

export const RemoveCompetitionButton = ({
  competitionModelKVP,
}: {
  competitionModelKVP: CompetitionModelKVP;
}) => {
  const dispatch = useDispatch();
  const removeCompetitionHandler = () => {
    removeCompetition(dispatch, competitionModelKVP);
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
