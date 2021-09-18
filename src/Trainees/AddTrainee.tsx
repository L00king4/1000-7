/** @jsxImportSource @emotion/react */
import { css, Interpolation } from "@emotion/react";
import axios from "axios";
import moment from "moment";
import { Theme } from "pretty-format";
import { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../ApiEndpoints";
import { addTrainee } from "../Redux/Services/TraineesService";
import { InputBirthday } from "./Input/InputBirthday";
import { InputFullname } from "./Input/InputFullname";
import {
  AgeGroup,
  BeltColor,
  getAgeGroupKVPs,
  getBeltColorKVPs,
} from "./ITrainees";
import { SelectAgeGroup } from "./Select/SelectAgeGroup";
import { SelectBeltColor } from "./Select/SelectBeltColor";

export const AddTrainee = () => {
  const [showAddTrainee, setShowAddTrainee] = useState(false);
  const onClickHandler = () => {
    setShowAddTrainee(!showAddTrainee);
  };

  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState<string | null>(null);
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
    console.log(trainee);
    axios.post(api.Trainees.Add, trainee).then((res) => {
      console.log(res.data);
      if (res.data !== -1) {
        console.log("ID", res.data);
        addTrainee(dispatch, { ...trainee, id: res.data });
      }
    });
  };

  const onFullnameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  const onBirthdayChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.target.value);
  };

  const onAgeGroupChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAgeGroup(Number(e.target.value));
  };

  const onBeltColorChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setBeltColor(Number(e.target.value));
  };

  return (
    <div
      css={css`
        margin: 20px;
        display: inline-block;
      `}
    >
      <button onClick={onClickHandler}>Add Menu</button>
      {showAddTrainee && (
        <div>
          <p>Fields with * MUST be filled!</p>
          <div>
            Fullname*:{" "}
            <InputFullname
              value={fullname}
              onFullnameChangeHandler={onFullnameChangeHandler}
            />
          </div>
          <div>
            Age Group:
            <SelectAgeGroup onAgeGroupChangeHandler={onAgeGroupChangeHandler} />
          </div>
          <div>
            Birthday:{" "}
            <InputBirthday onBirthdayChangeHandler={onBirthdayChangeHandler} />
          </div>
          <div>
            Belt Color:
            <SelectBeltColor
              onBeltColorChangeHandler={onBeltColorChangeHandler}
            />
          </div>
          <button onClick={addTraineeHandler}>Add</button>
        </div>
      )}
    </div>
  );
};
