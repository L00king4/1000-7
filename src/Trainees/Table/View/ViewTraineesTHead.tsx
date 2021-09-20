import { SortingTarget } from "../../../Redux/Slices/Trainees/ITraineesSlice";
import { SortableTH } from "../Shared/Components/SortableTH";

export const ViewTraineesTHead = () => {
  const sortingTarget: SortingTarget = "both";
  return (
    <thead>
      <tr>
        <SortableTH sortableProp={"fullname"} sortingTarget={sortingTarget}>
          Fullname
        </SortableTH>
        <SortableTH sortableProp={"ageGroup"} sortingTarget={sortingTarget}>
          Age Group
        </SortableTH>
        <SortableTH sortableProp={"birthday"} sortingTarget={sortingTarget}>
          Birthday/Age
        </SortableTH>
        <SortableTH sortableProp={"beltColor"} sortingTarget={sortingTarget}>
          Belt Color
        </SortableTH>
      </tr>
    </thead>
  );
};
