import { useTraineesSelector } from "../../../Redux/Slices/Trainees/TraineesSlice";
import { birthday2AgeString } from "../../../Addons/Functions/Birthday2Age";
import { AgeGroup, BeltColor } from "../../ITrainees";
import { ViewTraineesTBodyTD } from "./ViewTraineesTBodyTD";
import { SortingMethodEnum } from "../../../Addons/Sorting";

export const ViewTraineesTBody = () => {
  const traineesStore = useTraineesSelector((state) => state.traineesSlice);
  const trainees = traineesStore.trainees;
  const { sorting, filtering } = traineesStore.settings;

  return (
    <tbody>
      {Object.entries(trainees)
        .sort(([xIndex, xTrainee], [yIndex, yTrainee]) => {
          const xvalue = xTrainee[sorting.sortableProp]?.toString() ?? "99";
          const yvalue = yTrainee[sorting.sortableProp]?.toString() ?? "99";
          return (
            SortingMethodEnum[sorting.sortingMethod] *
            xvalue.localeCompare(yvalue)
          );
        })
        .map(([index, trainee]) => (
          <tr key={["VIEWTRAINEE ", trainee.id.toString()].join(" ")}>
            <ViewTraineesTBodyTD>{trainee.fullname}</ViewTraineesTBodyTD>
            <ViewTraineesTBodyTD>
              {AgeGroup[trainee.ageGroup]}
            </ViewTraineesTBodyTD>
            <ViewTraineesTBodyTD>
              {birthday2AgeString(trainee.birthday)}
            </ViewTraineesTBodyTD>
            <ViewTraineesTBodyTD>
              {BeltColor[trainee.beltColor]}
            </ViewTraineesTBodyTD>
          </tr>
        ))}
    </tbody>
  );
};
