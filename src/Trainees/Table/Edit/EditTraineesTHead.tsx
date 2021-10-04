import { SortingTarget } from "../../../Redux/Slices/Trainees/ITraineesSlice";
import { TraineesTableSortableTH } from "../Shared/Components/TraineesTableSortableTH";

export const EditTraineesTHead = () => {
  const sortingTarget: SortingTarget = "both";
  return (
    <thead className="TraineesTableTHead">
      <tr>
        <TraineesTableSortableTH
          sortableProp={"fullname"}
          sortingTarget={sortingTarget}
        >
          Fullname
        </TraineesTableSortableTH>
        <TraineesTableSortableTH
          sortableProp={"ageGroup"}
          sortingTarget={sortingTarget}
        >
          Age Group
        </TraineesTableSortableTH>
        <TraineesTableSortableTH
          sortableProp={"birthday"}
          sortingTarget={sortingTarget}
        >
          Birthday
        </TraineesTableSortableTH>
        <TraineesTableSortableTH
          sortableProp={"birthday"}
          sortingTarget={sortingTarget}
        >
          Age
        </TraineesTableSortableTH>
        <TraineesTableSortableTH
          sortableProp={"beltColor"}
          sortingTarget={sortingTarget}
        >
          Belt
        </TraineesTableSortableTH>
      </tr>
    </thead>
  );
};
