/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CompetitionTraineeModel } from "./ICompetitions";

export const CompetitionTrainee = ({
  trainee,
}: {
  trainee: CompetitionTraineeModel;
}) => {
  return (
    <div
      css={css`
        display: inline;
        margin-right: 30px;
      `}
    >
      {trainee.fullname} : {trainee.amountPayed}
    </div>
  );
};
