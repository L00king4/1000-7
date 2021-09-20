import { SortingMethodEnum } from "../../../Addons/Sorting";
import { useTraineesSelector } from "../../../Redux/Slices/Trainees/TraineesSlice";
import { EditTraineesTBodyTR } from "./EditTraineesTBodyTR";

export const EditTraineesTBody = () => {
  const traineesStore = useTraineesSelector((state) => state.traineesSlice);
  const editingTrainees = traineesStore.editingTrainees;
  const { sorting, filtering } = traineesStore.settings;
  return (
    <tbody>
      {Object.entries(editingTrainees)
        .sort(([xIndex, xTrainee], [yIndex, yTrainee]) => {
          const xvalue = xTrainee[sorting.sortableProp]?.toString() ?? "99";
          const yvalue = yTrainee[sorting.sortableProp]?.toString() ?? "99";
          return (
            SortingMethodEnum[sorting.sortingMethod] *
            xvalue.localeCompare(yvalue)
          );
        })
        // .filter((x) => x[1].id === 3)
        .map(([s, trainee]) => (
          <EditTraineesTBodyTR
            key={["EDITTRAINEE ", trainee.id.toString()].join(" ")}
            trainee={trainee}
            traineeIndex={Number(s)}
          />
        ))}
    </tbody>
  );
};
