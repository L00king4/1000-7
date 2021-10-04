import { useDispatch } from "react-redux";
import { setTraineesShowedBooleans } from "../../../Redux/Services/TraineesService";

export const ViewTraineesTBodyTDFullname = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    setTraineesShowedBooleans(dispatch, { showUpdateTrainee: true });
  };
  return (
    <td
      className="TraineesTableEntry TraineesTableEntryFullname"
      onClick={onClickHandler}
    >
      {children}
    </td>
  );
};
