/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Date2Datetime, Datetime2Date } from "../../../Addons/DateConverted";
import {
  editEditingTrainee,
  getTraineesStore,
  removeTrainee,
  resetUpdatingTrainee,
  saveEditingTrainee,
} from "../../../Redux/Services/TraineesService";
import { birthday2Age } from "../../../Addons/Birthday2Age";
import { InputBirthday } from "../../Input/InputBirthday";
import { InputFullname } from "../../Input/InputFullname";
import { AgeGroup, BeltColor, TraineeModel } from "../../ITrainees";
import { SelectAgeGroup } from "../../Select/SelectAgeGroup";
import { SelectBeltColor } from "../../Select/SelectBeltColor";
import "../../../css/trainees/EditTraineesTBodyTR.css";
import axios from "axios";
import { useTraineesSelector } from "../../../Redux/Slices/TraineesSlice";
import { DoubleTapButton } from "../../../Addons/DoubleTapButton";
import api from "../../../ApiEndpoints";

export const EditTraineesTBodyTR = ({
  trainee,
  traineeIndex,
}: {
  trainee: TraineeModel;
  traineeIndex: number;
}) => {
  const dispatch = useDispatch();
  // const correspondingTrainee = getTraineesStore().trainees[traineeIndex];
  const correspondingTrainee = useTraineesSelector(
    (state) => state.traineesSlice.trainees[traineeIndex]
  );
  const onFullnameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    editEditingTrainee(dispatch, { fullname: e.target.value }, traineeIndex);
  };
  const onAgeGroupChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    editEditingTrainee(
      dispatch,
      { ageGroup: Number(e.target.value) },
      traineeIndex
    );
  };
  const onBeltColorChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    editEditingTrainee(
      dispatch,
      { beltColor: Number(e.target.value) },
      traineeIndex
    );
  };
  const onBirthdayChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    editEditingTrainee(
      dispatch,
      { birthday: Date2Datetime(e.target.value) },
      traineeIndex
    );
  };
  const onSaveClickHandler = () => {
    axios
      .post(
        api.Trainees.Update,
        getTraineesStore().editingTrainees[traineeIndex]
      )
      .then((res) => {
        if (res.data !== -1) {
          saveEditingTrainee(dispatch, traineeIndex);
        }
      });
  };
  const onResetClickHandler = () => {
    resetUpdatingTrainee(dispatch, traineeIndex);
  };
  const onDeleteClickHandler = () => {
    removeTrainee(dispatch, trainee.id, traineeIndex);
  };
  console.log(Object(trainee));
  return (
    <tr>
      {/* Fullname */}
      <td>
        <div className="OldValue">({correspondingTrainee.fullname})</div>
        <div className="NewValue">
          <InputFullname
            onFullnameChangeHandler={onFullnameChangeHandler}
            value={trainee.fullname}
          />
        </div>
      </td>
      {/* AgeGroup */}
      <td>
        <div className="OldValue">
          ({AgeGroup[correspondingTrainee.ageGroup]})
        </div>
        <div className="NewValue">
          <SelectAgeGroup
            onAgeGroupChangeHandler={onAgeGroupChangeHandler}
            value={trainee.ageGroup}
          />
        </div>
      </td>
      {/* Birthday */}
      <td>
        <div className="OldValue">
          ({Datetime2Date(correspondingTrainee.birthday)})
        </div>
        <div className="NewValue">
          <InputBirthday
            onBirthdayChangeHandler={onBirthdayChangeHandler}
            value={Datetime2Date(trainee.birthday)}
          />
        </div>
      </td>
      {/* Age */}
      <td>
        <div className="OldValue">
          ({birthday2Age(correspondingTrainee.birthday)})
        </div>
        <div className="NewValue">{birthday2Age(trainee.birthday)}</div>
      </td>
      {/* Belt */}
      <td>
        <div className="OldValue">
          {" "}
          ({BeltColor[correspondingTrainee.beltColor]})
        </div>
        <div className="NewValue">
          <SelectBeltColor
            onBeltColorChangeHandler={onBeltColorChangeHandler}
            value={trainee.beltColor}
          />
        </div>
      </td>
      <td>
        <DoubleTapButton
          buttonText={"Save"}
          onApproveClickHandler={onSaveClickHandler}
        />
      </td>
      <td>
        <DoubleTapButton
          buttonText={"Reset"}
          onApproveClickHandler={onResetClickHandler}
        />
      </td>
      <td css={css``}>
        <DoubleTapButton
          buttonText={"Delete"}
          onApproveClickHandler={onDeleteClickHandler}
        />
      </td>
    </tr>
  );
};
