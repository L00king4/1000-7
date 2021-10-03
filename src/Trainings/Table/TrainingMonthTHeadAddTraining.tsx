import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../Addons/Components/Modal";
import { setShowAddTrainingMenu } from "../../Redux/Services/TrainingsService";
import { AddTrainingMenu } from "../AddTrainingMenu";

export const TrainingMonthTHeadAddTrainingTH = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  return (
    <th
      className="TMonthTrainingInfo TMonthTrainingAdd"
      onClick={() => {
        setShowAddTrainingMenu(dispatch, true);
      }}
    >
      {children}
    </th>
  );
};
