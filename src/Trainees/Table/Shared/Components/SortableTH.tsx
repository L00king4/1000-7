import { ReactComponentElement, ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import { SortingMethod } from "../../../../Configs/Sorting";
import { sortTrainees } from "../../../../Redux/Services/TraineesService";
import {
  SortableProp,
  SortingTarget,
} from "../../../../Redux/Slices/Trainees/ITraineesSlice";

export const SortableTH = ({
  sortableProp,
  children,
  sortingTarget = "both",
}: {
  sortableProp: SortableProp;
  sortingTarget: SortingTarget;
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const [sortingMethod, setSortingMethod] = useState<SortingMethod>("default");
  const onSortClickHandler = () => {
    console.log(Object.entries(SortingMethod));
    sortTrainees(dispatch, {
      sortableProp: sortableProp,
      sortingMethod: sortingMethod,
      sortingTarget: sortingTarget,
    });
  };
  return <th onClick={() => onSortClickHandler()}>{children}</th>;
};
