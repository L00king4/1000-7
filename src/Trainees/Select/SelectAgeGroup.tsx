import { ChangeEventHandler } from "react";
import { getEnumKVPs } from "../../Addons/Functional/EnumFunctions";
import { AgeGroup } from "../../Redux/Slices/Trainees/ITraineesSlice";

export const SelectAgeGroup = ({
  onAgeGroupChangeHandler,
  value,
}: {
  onAgeGroupChangeHandler: ChangeEventHandler<HTMLSelectElement>;
  value?: number;
}) => (
  <select onChange={onAgeGroupChangeHandler} value={value}>
    {getEnumKVPs(AgeGroup).map(({ key, value }) => (
      <option value={value} key={"ageGroupKVP " + key + " " + value}>
        {key}
      </option>
    ))}
  </select>
);
