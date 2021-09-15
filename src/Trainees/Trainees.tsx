/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainees } from "../Redux/Services/TraineesService";
import { useTraineesSelector } from "../Redux/Slices/TraineesSlice";
import "../css/trainees/Trainees.css";
import { AddTrainee } from "./AddTrainee";

export const Trainees = () => {
  const [showAddTrainee, setShowAddTrainee] = useState(false);
  const traineesStore = useTraineesSelector((state) => state.traineesSlice);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    setShowAddTrainee(!showAddTrainee);
  };
  useEffect(() => {
    fetchTrainees(dispatch);
  }, []);
  return (
    <div>
      <div onClick={onClickHandler}>Add</div>
      {showAddTrainee && <AddTrainee />}
      <table>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Age Group</th>
            <th>Age</th>
            <th>Belt Color</th>
          </tr>
        </thead>
        <tbody>
          {traineesStore.trainees.map((trainee) => (
            <tr
              key={[
                trainee.id.toString(),
                trainee.fullname,
                trainee.birthday,
              ].join(" ")}
            >
              <td>{trainee.fullname}</td>
              <td>{trainee.ageGroup}</td>
              <td>{trainee.birthday}</td>
              <td>{trainee.beltColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
