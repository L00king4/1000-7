import { useTraineesSelector } from "../../../Redux/Slices/TraineesSlice";
import { EditTraineesTBodyTR } from "./EditTraineesTBodyTR";

export const EditTraineesTBody = () => {
  const editingTrainees = useTraineesSelector(
    (state) => state.traineesSlice.editingTrainees
  );
  // const editingTrainees = getTraineesStore().editingTrainees;
  return (
    <tbody>
      {editingTrainees.map((trainee, index) => (
        <EditTraineesTBodyTR
          key={["EDITTRAINEE ", trainee.id.toString()].join(" ")}
          trainee={trainee}
          traineeIndex={index}
        />
      ))}
    </tbody>
  );
};
