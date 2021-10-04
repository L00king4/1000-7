import React from "react";
import { useDispatch } from "react-redux";
import { setShowAddTrainingMenu } from "../../Redux/Services/TrainingsService";

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
