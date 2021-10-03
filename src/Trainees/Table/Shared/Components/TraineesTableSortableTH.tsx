import { useDispatch } from "react-redux";
import { sortTrainees } from "../../../../Redux/Services/TraineesService";
import {
  SortableProp,
  SortingTarget,
} from "../../../../Redux/Slices/Trainees/ITraineesSlice";
import { useTraineesSelector } from "../../../../Redux/Slices/Trainees/TraineesSlice";
import { useGlobalSelector } from "../../../../Redux/Store";

export const TraineesTableSortableTH = ({
  sortableProp,
  children,
  sortingTarget = "both",
}: {
  sortableProp: SortableProp;
  sortingTarget: SortingTarget;
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const sortingSettings =
    useGlobalSelector(useTraineesSelector).settings.sorting;
  const onSortClickHandler = () => {
    sortTrainees(dispatch, {
      sortableProp: sortableProp,
      sortingMethod: sortingSettings.sortingMethod,
      sortingTarget: sortingTarget,
    });
  };
  return (
    <th className="TraineesEntry" onClick={() => onSortClickHandler()}>
      {children}
      {sortingSettings.sortingMethod !== "default" &&
        sortingSettings.sortableProp === sortableProp &&
        " " + sortingSettings.sortingMethod}
    </th>
  );
};
