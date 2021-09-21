import { TrainingsMonth } from "./Table/TrainingsMonth";

export const Trainings = () => {
  return (
    <div>
      <TrainingsMonth />
      <button>NEXT</button>
      <button>PREVIOS</button>
      <button>
        GOTO <input type="month" name="" id="" />
      </button>
    </div>
  );
};
