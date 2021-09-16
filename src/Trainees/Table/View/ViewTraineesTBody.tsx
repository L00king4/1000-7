import { useTraineesSelector } from "../../../Redux/Slices/TraineesSlice";
import { birthday2AgeString } from "../../../Addons/Birthday2Age";

export const ViewTraineesTBody = () => {
  const trainees = useTraineesSelector((state) => state.traineesSlice.trainees);
  return (
    <tbody>
      {trainees.map((trainee) => (
        <tr
          key={[trainee.id.toString(), trainee.fullname, trainee.birthday].join(
            " "
          )}
        >
          <td>{trainee.fullname}</td>
          <td>{trainee.ageGroup}</td>
          <td>{birthday2AgeString(trainee.birthday)}</td>
          <td>{trainee.beltColor}</td>
        </tr>
      ))}
    </tbody>
  );
};
