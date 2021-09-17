import { getTraineesStore } from "../../../Redux/Services/TraineesService";
import { EditTraineesTBodyTR } from "./EditTraineesTBodyTR";

export const EditTraineesTBody = () => {
  // const editingTrainees = useTraineesSelector(
  //   (state) => state.traineesSlice.editingTrainees
  //   );
  const editingTrainees = getTraineesStore().editingTrainees;
  return (
    <tbody>
      {editingTrainees.map((trainee, index) => (
        <EditTraineesTBodyTR
          key={[trainee.id.toString(), trainee.fullname, trainee.birthday].join(
            " "
          )}
          trainee={trainee}
          traineeIndex={index}
        />
      ))}
    </tbody>
  );
};
