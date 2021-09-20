import { useTraineesSelector } from "../../../Redux/Slices/Trainees/TraineesSlice";
import { birthday2AgeString } from "../../../Addons/Functions/Birthday2Age";
import { AgeGroup, BeltColor } from "../../ITrainees";
import { ViewTraineesTBodyTD } from "./ViewTraineesTBodyTD";

export const ViewTraineesTBody = () => {
  const trainees = useTraineesSelector((state) => state.traineesSlice.trainees);
  return (
    <tbody>
      {trainees.map((trainee) => (
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
