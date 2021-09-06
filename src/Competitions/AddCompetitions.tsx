/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import api from "../ApiEndpoints";

export const AddCompetition = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [topay, setTopay] = useState<number>(0);
  const [date, setDate] = useState<string>("");

  const onClickHandler = () => {
    axios
      .post(api.Competitions.Events.Add, {
        name: name,
        description: description,
        topay: topay,
        date: date,
      })
      .then((res) => {
        if (res.data === 1) {
        }
      });
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const descriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        Description: <input type="text" onChange={descriptionHandler} />
      </div>
      <div>
        Costs*: <input type="number" onChange={topayHandler} />
      </div>
      <div>
        Date: <input type="datetime-local" onChange={dateHandler} />
      </div>
      <button onClick={onClickHandler}>Add Competition</button>
    </div>
  );
};
