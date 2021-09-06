/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  CompetitionModel,
  CompetitionPayment,
  CompetitionTraineeModel,
  SortedTrainees,
} from "./ICompetitions";
import api from "../ApiEndpoints";
import { CompetitionSortedTrainees } from "./CompetitionSortedTrainees";
import { createStore } from "redux";
import { CompetitionTrainee } from "./CompetitionTrainee";
import { type } from "os";
import { useDispatch, useSelector } from "react-redux";

export const Competition = ({
  competition,
}: {
  competition: CompetitionModel;
}) => {
  const dispatch = useDispatch();
  const sortedTrainees = useSelector<SortedTrainees, SortedTrainees>(
    (state) => state
  );

  const [showAttending, setShowAttending] = useState(false);
  const fetchSortedTrainees = () => {
    axios
      .get(api.Competitions.Events.GetSortedTrainees(competition.id))
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "UPDATE_ALL", many: res.data });
      });
  };
  // useEffect(() => {
  //   fetchSortedTrainees(id, setSortedTrainees);
  // }, []);
  return (
    <li>
      <div
        onClick={() => {
          if (
            sortedTrainees.attendingTrainees.length === 0 &&
            sortedTrainees.notAttendingTrainees.length === 0
          ) {
            fetchSortedTrainees();
          }
          setShowAttending(!showAttending);
        }}
        css={css`
          background-color: #6ac46a;
          border-radius: 10px;
          border-radius: 8px;
          box-shadow: -4px 8px 10px black;
          padding: 10px 35px;
          margin: 20px 0px;
          list-style-type: none;
          width: 650px;
          height: fit-content;
          text-align: center;
          :hover {
            background-color: #56a556;
          }
        `}
      >
        [{competition.toPay}] | {competition.name}
      </div>
      {showAttending && sortedTrainees !== null && (
        <CompetitionSortedTrainees
          sortedTrainees={sortedTrainees}
          competition={competition}
          fetchSortedTrainees={fetchSortedTrainees}
        />
      )}
    </li>
  );
};
