import { ReactComponentElement, ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getNextSortingMethod,
  SortingMethod,
} from "../../../../Addons/Sorting";
import { sortTrainees } from "../../../../Redux/Services/TraineesService";
import {
  SortableProp,
  SortingTarget,
} from "../../../../Redux/Slices/Trainees/ITraineesSlice";
import { useTraineesSelector } from "../../../../Redux/Slices/Trainees/TraineesSlice";

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
  const sortingSettings = useTraineesSelector(
    (state) => state.traineesSlice.settings.sorting
  );
  const onSortClickHandler = () => {
    sortTrainees(dispatch, {
      sortableProp: sortableProp,
      sortingMethod: sortingSettings.sortingMethod,
      sortingTarget: sortingTarget,
    });
  };
  return (
    <th onClick={() => onSortClickHandler()}>
      {children}
      {sortingSettings.sortingMethod !== "default" &&
        sortingSettings.sortableProp === sortableProp &&
        " " + sortingSettings.sortingMethod}
    </th>
  );
};
