import { SortingMethodEnum } from "../../../Addons/Functional/Sorting";
import { useTraineesSelector } from "../../../Redux/Slices/Trainees/TraineesSlice";
import { useGlobalSelector } from "../../../Redux/Store";
import { EditTraineesTBodyTR } from "./EditTraineesTBodyTR";

export const EditTraineesTBody = () => {
  const traineesStore = useGlobalSelector(useTraineesSelector);
  const editingTrainees = traineesStore.editingTrainees;
  const { sorting, filtering } = traineesStore.settings;
  return (
    <tbody className="spaced">
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
