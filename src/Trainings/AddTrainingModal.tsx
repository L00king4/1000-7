import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../Addons/Components/Modal";
import { ModalBody } from "../Addons/Components/ModalBody";
import { ModalFooter } from "../Addons/Components/ModalFooter";
import { setShowAddTrainingMenu } from "../Redux/Services/TrainingsService";
import { getTrainingShowedBooleans } from "../Redux/Slices/Trainings/TrainingsSlice";
import { useGlobalSelector } from "../Redux/Store";

export const AddTrainingModal = () => {
  const dispatch = useDispatch();
  const showAddTrainingMenu = useGlobalSelector(
    getTrainingShowedBooleans
  )?.showAddTraining;
  return (
    <Fragment>
      {showAddTrainingMenu && (
        <Modal
          hideModalFunc={() => {
            setShowAddTrainingMenu(dispatch, false);
          }}
        >
          <Fragment>
            <ModalBody>
              <Fragment>
                <p>Fields with * MUST be filled!</p>
                <div>
                  Name*: <input type="text" />
                </div>
                <div>
                  Costs*: <input type="number" />
                </div>
                <div>
                  Date*: <input type="datetime-local" />
                </div>
                <div>
                  Description: <textarea />
                </div>
              </Fragment>
            </ModalBody>
            <ModalFooter>
              <div>Add Training</div>
            </ModalFooter>
          </Fragment>
        </Modal>
      )}
    </Fragment>
  );
};
