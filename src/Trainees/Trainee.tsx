/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CompetitionTraineeModel } from "../Competitions/ICompetitions";

export const Trainee = ({ trainee }: { trainee: CompetitionTraineeModel }) => (
  <div
    css={css`
      display: inline;
      margin-right: 30px;
    `}
  >
    {trainee.fullname}
  </div>
);
