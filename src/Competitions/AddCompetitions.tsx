/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import moment from "moment";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../Addons/Components/Modal";
import { addCompetitionEntry } from "../Redux/Services/CompetitionsService";
import { NoIDCompetitionModel } from "../Redux/Slices/Competitions/ICompetitionsSlice";

export const AddCompetition = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [topay, setTopay] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const dispatch = useDispatch();

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const descriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const topayHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopay(parseFloat(e.target.value));
  };
  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const runchecks = () => {
    if (date === undefined) {
      return -1;
    }
    return 0;
  };
  const addCompetitionHandler = () => {
    if (runchecks() === 0) {
      const noidCompetition: NoIDCompetitionModel = {
        name: name,
        description: description,
        toPay: topay,
        date: moment(date),
      };
      addCompetitionEntry(dispatch, noidCompetition);
    }
  };

  return (
    //AddCompAttMenu
    <Fragment>
      <div onClick={() => setShowModal(true)} className="AddCompButton">
        Add Competition
      </div>
      {showModal && (
        <Modal
          hideModalFunc={() => {
            setShowModal(false);
          }}
        >
          <p>Fields with * MUST be filled!</p>
          <div>
            Name*: <input type="text" onChange={nameHandler} />
          </div>
          <div>
            Costs*: <input type="number" onChange={topayHandler} />
          </div>
          <div>
            Date*: <input type="datetime-local" onChange={dateHandler} />
          </div>
          <div>
            Description: <textarea onChange={descriptionHandler} />
          </div>
          <button onClick={addCompetitionHandler}>Add Competition</button>
        </Modal>
      )}
    </Fragment>
  );
};
