import { useTraineesSelector } from "../../../Redux/Slices/Trainees/TraineesSlice";
import { AgeGroup, BeltColor } from "../../ITrainees";
import { ViewTraineesTBodyTD } from "./ViewTraineesTBodyTD";
import { SortingMethodEnum } from "../../../Addons/Functional/Sorting";
import { birthday2Age } from "../../../Addons/Functional/Birthday2Age";

export const ViewTraineesTBody = () => {
  const traineesStore = useTraineesSelector((state) => state.traineesSlice);
  const trainees = traineesStore.trainees;
  const { sorting, filtering } = traineesStore.settings;

  return (
    <tbody className="spaced">
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
              {birthday2Age(trainee.birthday)}
            </ViewTraineesTBodyTD>
            <ViewTraineesTBodyTD>
              {BeltColor[trainee.beltColor]}
            </ViewTraineesTBodyTD>
          </tr>
        ))}
    </tbody>
  );
};
