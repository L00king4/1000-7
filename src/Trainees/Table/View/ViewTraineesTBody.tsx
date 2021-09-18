import { useTraineesSelector } from "../../../Redux/Slices/TraineesSlice";
import { birthday2AgeString } from "../../../Addons/Birthday2Age";
import { AgeGroup, BeltColor } from "../../ITrainees";

export const ViewTraineesTBody = () => {
  const trainees = useTraineesSelector((state) => state.traineesSlice.trainees);
  return (
    <tbody>
      {trainees.map((trainee) => (
        <tr key={["VIEWTRAINEE ", trainee.id.toString()].join(" ")}>
          <td>{trainee.fullname}</td>
          <td>{AgeGroup[trainee.ageGroup]}</td>
          <td>{birthday2AgeString(trainee.birthday)}</td>
          <td>{BeltColor[trainee.beltColor]}</td>
        </tr>
      ))}
    </tbody>
  );
};
