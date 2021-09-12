/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../ApiEndpoints";
import { CompetitionStore, GlobalStoreActions } from "../../Redux/GlobalStore";
import { CompetitionTraineeModel } from "../ICompetitions";

export const AddCompetitionPaymentButton = ({
  competitionStore,
  trainee,
}: {
  competitionStore: CompetitionStore;
  trainee: CompetitionTraineeModel;
}) => {
  const dispatch = useDispatch();
  const AddCompetitionPayment = (amount: number) => {
    axios
      .post(api.Competitions.Payments.Add, {
        eventID: competitionStore.competition.id,
        amount: amount,
        traineeID: trainee.id,
      })
      .then((res) => {
        if (res.data === 1) {
          dispatch({
            type: GlobalStoreActions.CompetitionStore.SortedTrainees.UPDATE_ONE,
            oneCompetitionStore: competitionStore,
            oneSortedTrainee: {
              ...trainee,
              amountPayed: trainee.amountPayed + amount,
            },
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
          AddCompetitionPayment(competitionStore.competition.toPay);
        }}
      >
        Pay {competitionStore.competition.toPay}
      </button>
      <input type="number" onChange={onAmountChangeHandler} />
      <button onClick={() => AddCompetitionPayment(amount)}>
        Pay {amount}
      </button>
    </div>
  );
};

export default AddCompetitionPaymentButton;
