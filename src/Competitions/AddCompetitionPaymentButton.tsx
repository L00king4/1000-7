/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../ApiEndpoints";
import { CompetitionModel, CompetitionTraineeModel } from "./ICompetitions";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AddCompetitionPaymentButton = ({
  competition,
  trainee,
  fetchSortedTrainees,
}: {
  competition: CompetitionModel;
  trainee: CompetitionTraineeModel;
  fetchSortedTrainees: Function;
}) => {
  const dispatch = useDispatch();
  const AddCompetitionPayment = (amount: number) => {
    axios
      .post(api.Competitions.Payments.Add, {
        eventID: competition.id,
        amount: amount,
        traineeID: trainee.id,
      })
      .then((res) => {
        if (res.data === 1) {
          dispatch({
            type: "UPDATE_ONE",
            one: { ...trainee, amountPayed: trainee.amountPayed + amount },
          });
        }
        //fetchSortedTrainees();
      });
  };
  const [amount, setAmount] = useState(0);
  const onAmountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  };
  return (
    <div>
      <button
        onClick={() => {
          AddCompetitionPayment(competition.toPay);
        }}
      >
        Pay {competition.toPay}
      </button>
      <input type="number" onChange={onAmountChangeHandler} />
      <button onClick={() => AddCompetitionPayment(amount)}>
        Pay {amount}
      </button>
    </div>
  );
};

export default AddCompetitionPaymentButton;
