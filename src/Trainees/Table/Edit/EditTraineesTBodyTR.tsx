/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Date2Datetime,
  Datetime2Date,
} from "../../../Addons/Functions/DateConverter";
import {
  editEditingTrainee,
  getTraineesStore,
  removeTrainee,
  resetUpdatingTrainee,
  saveEditingTrainee,
} from "../../../Redux/Services/TraineesService";
import { birthday2Age } from "../../../Addons/Functions/Birthday2Age";
import { InputBirthday } from "../../Input/InputBirthday";
import { InputFullname } from "../../Input/InputFullname";
import { AgeGroup, BeltColor, TraineeModel } from "../../ITrainees";
import { SelectAgeGroup } from "../../Select/SelectAgeGroup";
import { SelectBeltColor } from "../../Select/SelectBeltColor";
import "../../../css/trainees/EditTraineesTBodyTR.css";
import { useTraineesSelector } from "../../../Redux/Slices/Trainees/TraineesSlice";
import { DoubleTapButton } from "../../../Addons/Components/DoubleTapButton";
import { EditTraineesTBodyTD } from "./EditTraineesTBodyTD";

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
    saveEditingTrainee(dispatch, trainee, traineeIndex);
  };
  const onResetClickHandler = () => {
    resetUpdatingTrainee(dispatch, traineeIndex);
  };
  const onDeleteClickHandler = () => {
    removeTrainee(dispatch, trainee.id, traineeIndex);
  };
  if (trainee.id === 10) console.log(getTraineesStore());
  return (
    <tr>
      {/* Fullname */}
      <EditTraineesTBodyTD>
        <div className="OldValue">({correspondingTrainee.fullname})</div>
        <div className="NewValue">
          <InputFullname
            onFullnameChangeHandler={onFullnameChangeHandler}
            value={trainee.fullname}
          />
        </div>
      </EditTraineesTBodyTD>
      {/* AgeGroup */}
      <EditTraineesTBodyTD>
        <div className="OldValue">
          ({AgeGroup[correspondingTrainee.ageGroup]})
        </div>
        <div className="NewValue">
          <SelectAgeGroup
            onAgeGroupChangeHandler={onAgeGroupChangeHandler}
            value={trainee.ageGroup}
          />
        </div>
      </EditTraineesTBodyTD>
      {/* Birthday */}
      <EditTraineesTBodyTD>
        <div className="OldValue">
          ({Datetime2Date(correspondingTrainee.birthday)})
        </div>
        <div className="NewValue">
          <InputBirthday
            onBirthdayChangeHandler={onBirthdayChangeHandler}
            value={Datetime2Date(trainee.birthday)}
          />
        </div>
      </EditTraineesTBodyTD>
      {/* Age */}
      <EditTraineesTBodyTD>
        <div className="OldValue">
          ({birthday2Age(correspondingTrainee.birthday)})
        </div>
        <div className="NewValue">{birthday2Age(trainee.birthday)}</div>
      </EditTraineesTBodyTD>
      {/* Belt */}
      <EditTraineesTBodyTD>
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
      </EditTraineesTBodyTD>
      <EditTraineesTBodyTD>
        <DoubleTapButton
          buttonText={"Save"}
          onApproveClickHandler={onSaveClickHandler}
        />
      </EditTraineesTBodyTD>
      <EditTraineesTBodyTD>
        <DoubleTapButton
          buttonText={"Reset"}
          onApproveClickHandler={onResetClickHandler}
        />
      </EditTraineesTBodyTD>
      <EditTraineesTBodyTD>
        <DoubleTapButton
          buttonText={"Delete"}
          onApproveClickHandler={onDeleteClickHandler}
        />
      </EditTraineesTBodyTD>
    </tr>
  );
};
