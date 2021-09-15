/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../ApiEndpoints";
import { addCompetition } from "../Redux/Services/CompetitionsService";
import { getEmptySortedTrainees } from "../Trainees/SortedTrainees";

export const AddCompetition = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [topay, setTopay] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const dispatch = useDispatch();

  const addCompetitionHandler = () => {
    const competition = {
      name: name,
      description: description,
      toPay: topay,
      date: date,
    };

    axios.post(api.Competitions.Events.Add, competition).then((res) => {
      if (res.data !== -1) {
        console.log("ID", res.data);
        addCompetition(dispatch, {
          competition: { ...competition, id: res.data },
          sortedTrainees: getEmptySortedTrainees(),
        });
      }
    });
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const descriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const topayHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopay(parseFloat(e.target.value));
  };

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div
      css={css`
        display: block;
        margin: 20px;
      `}
    >
      <p>Fields with * MUST be filled!</p>
      <div>
        Name*: <input type="text" onChange={nameHandler} />
      </div>
      <div>
        Costs*: <input type="number" onChange={topayHandler} />
      </div>
      <div>
        Date*: <input type="datetime-local" onChange={dateHandler} />
      </div>
      <div>
        Description: <textarea onChange={descriptionHandler} />
      </div>
      <button onClick={addCompetitionHandler}>Add Competition</button>
    </div>
  );
};
