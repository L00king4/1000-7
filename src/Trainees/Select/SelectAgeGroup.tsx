import { ChangeEventHandler } from "react";
import { getAgeGroupKVPs } from "../ITrainees";

export const SelectAgeGroup = ({
  onAgeGroupChangeHandler,
  value,
}: {
  onAgeGroupChangeHandler: ChangeEventHandler<HTMLSelectElement>;
  value?: number;
}) => (
  <select onChange={onAgeGroupChangeHandler} value={value}>
    {getAgeGroupKVPs().map(({ name, value }) => (
      <option
        value={value}
        key={"ageGroupKVP " + name + " " + value.toString()}
      >
        {name}
      </option>
    ))}
  </select>
);
