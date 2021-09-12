/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../ApiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import {
  CompetitionStore,
  GlobalStore,
  GlobalStoreActions,
} from "../Redux/GlobalStore";
import { Competition } from "./Competition";
import { CompetitionModel } from "./ICompetitions";
import { SortedTrainees } from "../Trainees/SortedTrainees";

export const Competitions = () => {
  const dispatch = useDispatch();
  const competitionStores = useSelector(
    (state: GlobalStore) => state.competitionStores
  );
  useEffect(() => {
    axios
      .get<CompetitionModel[]>(api.Competitions.Events.GetAll)
      .then((res) => {
        let manyCompetitionStores: CompetitionStore[] = [];
        res.data.forEach((competition) =>
          manyCompetitionStores.push({
            competition: competition,
            sortedTrainees: new SortedTrainees(undefined),
          })
        );
        dispatch({
          type: GlobalStoreActions.CompetitionStore.SET_MANY,
          manyCompetitionStores: manyCompetitionStores,
        });
      });
  }, []);
  return (
    <div
      css={css`
        align-items: center;
        justify-content: center;
      `}
    >
      <Link to="Add">ADD COMPETITION</Link>
      <ul
        css={css`
          list-style-type: none;
        `}
      >
        {competitionStores.map((competitionStore) => (
          <Competition
            key={
              competitionStore.competition.id.toString() +
              " " +
              competitionStore.competition.name
            }
            competitionStore={competitionStore}
          />
        ))}
      </ul>
    </div>
  );
};
