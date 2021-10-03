import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../Addons/Components/Modal";
import { setShowAddTrainingMenu } from "../Redux/Services/TrainingsService";
import { getTrainingShowedBooleans } from "../Redux/Slices/Trainings/TrainingsSlice";
import { useGlobalSelector } from "../Redux/Store";
import { AddTrainingMenu } from "./AddTrainingMenu";

export const AddTrainingMenuModal = () => {
  const dispatch = useDispatch();
  const showAddTrainingMenu = useGlobalSelector(
    getTrainingShowedBooleans
  )?.AddTrainingMenu;
  return (
    <Fragment>
      {showAddTrainingMenu && (
        <Modal
          hideModalFunc={() => {
            setShowAddTrainingMenu(dispatch, false);
          }}
        >
          <AddTrainingMenu />
        </Modal>
      )}
    </Fragment>
  );
};
