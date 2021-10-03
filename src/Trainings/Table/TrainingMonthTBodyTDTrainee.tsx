import React from "react";

export const TrainingMonthTBodyTDTrainee = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const asd = (ddd: string) => {
    console.log(ddd);
  };
  return <td className="TMonthTrainee">{children}</td>;
};
