import "../css/Trainings/TrainingMonthNavigation.css";

export const TrainingMonthNavigation = () => {
  return (
    <div className="TMonthNav">
      <button className="TMonthNavButton">PREVIOUS</button>
      <button className="TMonthNavButton">NEXT</button>
      <button className="TMonthNavButton">
        GOTO <input type="month" name="" id="" />
      </button>
    </div>
  );
};
