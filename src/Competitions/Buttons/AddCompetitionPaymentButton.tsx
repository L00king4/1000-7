/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../ApiEndpoints";
import {
  addCompetitionPayment,
  updateCompetition,
} from "../../Redux/Services/CompetitionsService";
import { CompetitionEntry } from "../../Redux/Slices/Competitions/ICompetitionsSlice";
import {
  CompetitionEntryKVP,
  CompetitionTraineeModel,
  TypedCompetitionTraineeModelKVP,
} from "../ICompetitions";

export const AddCompetitionPaymentButton = ({
  competitionEntryKVP,
  traineeKVP,
}: {
  competitionEntryKVP: CompetitionEntryKVP;
  traineeKVP: TypedCompetitionTraineeModelKVP;
}) => {
  const dispatch = useDispatch();
  const AddCompetitionPaymentHandler = (amount: number) => {
    addCompetitionPayment(dispatch, competitionEntryKVP, traineeKVP, amount);
  };
  const [amount, setAmount] = useState(0);
  const onAmountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  };
  const toPay = competitionEntryKVP.competitionEntry.competition.toPay;
  return (
    <div>
      <button
        onClick={() => {
          AddCompetitionPaymentHandler(toPay);
        }}
      >
        Pay {toPay}
      </button>
      <input type="number" onChange={onAmountChangeHandler} />
      <button onClick={() => AddCompetitionPaymentHandler(amount)}>
        Pay {amount}
      </button>
    </div>
  );
};

export default AddCompetitionPaymentButton;
