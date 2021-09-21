import { TrainingMonth } from "./Table/TrainingMonth";

export const Trainings = () => {
  return (
    <div>
      <TrainingMonth />
      <button>NEXT</button>
      <button>PREVIOS</button>
      <button>
        GOTO <input type="month" name="" id="" />
      </button>
    </div>
  );
};
