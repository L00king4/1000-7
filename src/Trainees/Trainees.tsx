import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchTrainees,
  getTraineesStore,
} from "../Redux/Services/TraineesService";
import "../css/Trainees/Trainees.css";
import "../css/Trainees/Trainees.css";
import { useGlobalSelector } from "../Redux/Store";
import { getTraineesShowedBooleans } from "../Redux/Slices/Trainees/TraineesSlice";
import { EditTrainees } from "./Table/Edit/EditTrainees";
import { ViewTrainees } from "./Table/View/ViewTrainees";

export const Trainees = () => {
  const dispatch = useDispatch();
  const showedBooleans = useGlobalSelector(getTraineesShowedBooleans);
  // const debug = useGlobalSelector(getTraineesStore);
  // console.log("STATE", debug);
  useEffect(() => {
    fetchTrainees(dispatch);
  }, []);
  //test
  return (
    <div className="Trainees">
      {showedBooleans?.showUpdateAllTrainees ? (
        <EditTrainees />
      ) : (
        <ViewTrainees />
      )}
    </div>
  );
};
