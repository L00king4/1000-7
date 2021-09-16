/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CompetitionTraineeModel } from "./ICompetitions";

export const CompetitionTrainee = ({
  trainee,
  showPayedAmount,
}: {
  trainee: CompetitionTraineeModel;
  showPayedAmount: boolean;
}) => {
  return (
    <div
      css={css`
        display: inline;
        margin-right: 30px;
      `}
    >
      {trainee.fullname} {showPayedAmount && `: ${trainee.amountPayed}`}
    </div>
  );
};
