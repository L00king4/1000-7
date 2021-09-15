/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../ApiEndpoints";
import { addTrainee } from "../Redux/Services/TraineesService";
import { AgeGroup, BeltColor } from "./ITrainees";

export const AddTrainee = () => {
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(0);
  const [beltColor, setBeltColor] = useState<BeltColor>(0);
  const dispatch = useDispatch();

  const addTraineeHandler = () => {
    const trainee = {
      fullname: fullname,
      birthday: birthday,
      ageGroup: ageGroup,
      beltColor: beltColor,
    };

    axios.post(api.Trainees.Add, trainee).then((res) => {
      if (res.data !== -1) {
        console.log("ID", res.data);
        addTrainee(dispatch, { ...trainee, id: res.data });
      }
    });
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  const birthdayHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  const ageGroupHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeGroup(e.target.valueAsNumber);
  };

  const beltColorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBeltColor(e.target.valueAsNumber);
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
        Fullname*: <input type="text" onChange={nameHandler} />
      </div>
      <div>
        Age Group*: <input type="number" onChange={ageGroupHandler} />
      </div>
      <div>
        Birthday: <input type="datetime-local" onChange={birthdayHandler} />
      </div>
      <div>
        Belt Color: <input type="datetime-local" onChange={beltColorHandler} />
      </div>
      <button onClick={addTraineeHandler}>Add Competition</button>
    </div>
  );
};
