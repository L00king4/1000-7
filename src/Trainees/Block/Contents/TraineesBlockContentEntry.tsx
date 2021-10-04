import {
  AgeGroup,
  Trainee2EditingTraineeKVP,
} from "../../../Redux/Slices/Trainees/ITraineesSlice";

export const TraineesBlockContentEntry = ({
  trainee2editingtraineeKVP,
}: {
  trainee2editingtraineeKVP: Trainee2EditingTraineeKVP;
}) => {
  const { fullname, birthday, ageGroup, beltColor } =
    trainee2editingtraineeKVP.trainee;
  return (
    <div className="TraineesBlockContentEntry">
      <div>Fullname: {fullname}</div>
      <div>AgeGroup: {AgeGroup[ageGroup]}</div>
    </div>
  );
};
