/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import { CompetitionModel, CompetitionTraineeModel } from "./ICompetitions";
import api from "../ApiEndpoints";
import { CompetitionSortedTrainees } from "./CompetitionSortedTrainees";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCompetitionButton } from "./Buttons/RemoveCompetitionButton";
import {
  CompetitionStore,
  GlobalStoreActions,
  GlobalStore,
} from "../Redux/GlobalStore";
import { SortedTrainees } from "../Trainees/SortedTrainees";

export const Competition = ({
  competitionStore2,
}: {
  competitionStore2: CompetitionStore;
}) => {
  const dispatch = useDispatch();
  const competitionStore = useSelector(
    (state: GlobalStore) =>
      state.competitionStores.find((x) => x === competitionStore2) ??
      competitionStore2
  );
  const [showAttending, setShowAttending] = useState(false);
  const fetchSortedTrainees = () => {
    axios
      .get<CompetitionTraineeModel[]>(
        api.Competitions.Events.GetSortedTrainees(
          competitionStore.competition.id
        )
      )
      .then((res) => {
        console.log("BEFORE DISPATCH", competitionStore);
        dispatch({
          type: GlobalStoreActions.CompetitionStore.UPDATE_ONE,
          oneCompetitionStore: {
            competition: competitionStore.competition,
            sortedTrainees: new SortedTrainees(res),
          },
        });
        console.log("AFTER DISPATCH", competitionStore);
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
            competitionStore.sortedTrainees?.attendingTrainees.length === 0 &&
            competitionStore.sortedTrainees?.notAttendingTrainees.length === 0
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
        [{competitionStore.competition.toPay}] |{" "}
        {competitionStore.competition.name}
      </div>
      <RemoveCompetitionButton competitionStore={competitionStore} />
      {showAttending && competitionStore.sortedTrainees !== undefined && (
        <CompetitionSortedTrainees competitionStore={competitionStore} />
      )}
    </li>
  );
};
