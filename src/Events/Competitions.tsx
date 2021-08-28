/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { MouseEventHandler } from "react";
import { useEffect } from "react";
import * as api from "../ApiEndpoints";

interface Competition {
  id: number;
  toPay: number;
}

interface Trainee {
  id: number;
  fullname: string;
  age: number;
  beltColor: number;
}

interface CompetitionAttendance {
  id: number;
  hasPayedBool: boolean;
  traineeID: number;
}

interface TraineesChecklist {
  id: number;
  enabled: boolean;
  attendingTrainees: Trainee[] | null;
  filteredTrainees?: Trainee[] | null;
}

const testCompetitions: Competition[] = [
  { id: 1, toPay: 200 },
  { id: 2, toPay: 300 },
  { id: 3, toPay: 400 },
  { id: 4, toPay: 500 },
];

export const ListCompetitions = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [debug, setDebug] = useState("Loading...");
  // const [checklist, setChecklist] = useState<TraineesChecklist[]>([]);
  useEffect(() => {
    axios
      .get(api.GetAllCompetitions)
      .then((res) => {
        setCompetitions(res.data);
        setDebug("Set from remote.");
      })
      .catch(() => {
        setCompetitions(testCompetitions);
        testCompetitions.forEach((x) =>
          setChecklist(
            checklist.concat({
              id: x.id,
              enabled: false,
              alltrainees: null,
              filteredtrainees: null,
            })
          )
        );
        setDebug("Set from locals.");
      });
  }, []);
  return (
    <div>
      <h2>{debug}</h2>
      <ul>
        {competitions.map((competition) =>  (
          <li
            key={competition.id}
            css={css`
              background-color: #6ac46a;
              border-left: 5px black solid;
              border-bottom: 5px black solid;
              border-radius: 8px;
              margin: 10px 0;
              padding: 10px 35px;
              list-style-type: none;
              width: 150px;
              height: fit-content;
              text-align: center;
              :hover {
                background-color: #56a556;
              }
            `}
            onClick={(e) => {
              console.log(123);
            }}
          >
            {competition.id} costs {competition.toPay}
          </li>
        ))}
      </ul>
    </div>
  );
};

const filterAttendances = (
  trainees: Trainee[],
  competitionAttendances: CompetitionAttendance[]
): Trainee[] =>
  trainees.filter((x) =>
    competitionAttendances.some((y) => y.traineeID === x.id)
  );

export const ViewCompetition = (competition: Competition) => {
  const [trainees, setTrainees] = useState<Trainee[]>([]);
  const [competitionAttendances, setCompetitionAttendances] = useState<
    CompetitionAttendance[]
  >([]);
  axios.get(api.GetAllTrainees).then((res) => {
    setTrainees(res.data);
  });
  axios
    .get(api.GetCompetitionAttendancesByEventID(competition.id))
    .then((res) => {
      setCompetitionAttendances(res.data);
    });

  return (
    <div>
      <div>
        <h2>Trainees:</h2>
        <ul>
          {trainees.map((trainee) => (
            <li key={trainee.id}>-{trainee.fullname}-</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Attending Trainees:</h2>
        <ul>
          {filterAttendances(trainees, competitionAttendances).map(
            (filteredTrainee) => (
              <li key={filteredTrainee.id}>-{filteredTrainee.fullname}-</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
