/** @jsxImportSource @emotion/react */
import { css, Interpolation } from "@emotion/react";
import axios from "axios";
import moment from "moment";
import { Theme } from "pretty-format";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../Addons/Components/Modal";
import { ModalBody } from "../../Addons/Components/ModalBody";
import { ModalFooter } from "../../Addons/Components/ModalFooter";
import { ModalHeader } from "../../Addons/Components/ModalHeader";
import api from "../../ApiEndpoints";
import {
  addTrainee,
  setTraineesShowedBooleans,
} from "../../Redux/Services/TraineesService";
import {
  AgeGroup,
  BeltColor,
} from "../../Redux/Slices/Trainees/ITraineesSlice";
import { InputBirthday } from "../Input/InputBirthday";
import { InputFullname } from "../Input/InputFullname";
import { SelectAgeGroup } from "../Select/SelectAgeGroup";
import { SelectBeltColor } from "../Select/SelectBeltColor";

export const AddTraineeModal = () => {
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState<string>("");
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(0);
  const [beltColor, setBeltColor] = useState<BeltColor>(0);
  const dispatch = useDispatch();

  const addTraineeHandler = () => {
    // CHANGE CHANGE CHANGE  CHANGE CHANGE CHANGE
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
        addTrainee(dispatch, {
          ...trainee,
          id: res.data,
          birthday: moment(birthday),
        });
      }
    });
  };

  // CHANGE CHANGE CHANGE  CHANGE CHANGE CHANGE

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

  const hideModalFunc = () => {
    setTraineesShowedBooleans(dispatch, { showAddTrainee: true });
  };

  return (
    <Modal hideModalFunc={hideModalFunc}>
      <ModalHeader hideModalFunc={hideModalFunc}>Add Trainee</ModalHeader>
      <ModalBody>
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
      </ModalBody>
      <ModalFooter>
        <button onClick={addTraineeHandler}>Add</button>
      </ModalFooter>
    </Modal>
  );
};
