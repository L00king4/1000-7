import { getTraineesStore } from "../../Redux/Services/TraineesService";
import { Trainee2EditingTraineeKVP } from "../../Redux/Slices/Trainees/ITraineesSlice";
import { useGlobalSelector } from "../../Redux/Store";
import { TraineesBlockContentEntry } from "./Contents/TraineesBlockContentEntry";
import { TraineesBlockContentEntryAddTrainee } from "./Contents/TraineesBlockContentEntryAddTrainee";

export const TraineesBlockContent = () => {
  const { editingTrainees, trainees } = useGlobalSelector(getTraineesStore);
  return (
    <div className="TraineesBlockContent">
      <TraineesBlockContentEntryAddTrainee />
      {trainees
        .map<Trainee2EditingTraineeKVP>((trainee, index) => {
          return {
            editingTrainee: editingTrainees[index],
            index: index,
            trainee: trainee,
          };
        })
        .map((trainee2editingtraineeKVP) => (
          <TraineesBlockContentEntry
            key={
              trainee2editingtraineeKVP.index +
              " TRAINEE2EDITING " +
              trainee2editingtraineeKVP.trainee.fullname
            }
            trainee2editingtraineeKVP={trainee2editingtraineeKVP}
          />
        ))}
    </div>
  );
};
