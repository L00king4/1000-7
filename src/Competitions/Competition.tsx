/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import { CompetitionModel, SortedTrainees } from "./ICompetitions";
import api from "../ApiEndpoints";
import { CompetitionSortedTrainees } from "./CompetitionSortedTrainees";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCompetitionButton } from "./Buttons/RemoveCompetitionButton";
import { OneCompetitionActions } from "./Stores/OneCompetitionStore";

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
        dispatch({ type: OneCompetitionActions.SET_MANY, many: res.data });
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
          display: inline-block;
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
      <RemoveCompetitionButton competition={competition} />
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
