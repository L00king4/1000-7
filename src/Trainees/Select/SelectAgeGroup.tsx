import { ChangeEventHandler } from "react";
import { getAgeGroupKVPs } from "../ITrainees";

export const SelectAgeGroup = ({
  onAgeGroupChangeHandler,
  defaultValue,
}: {
  onAgeGroupChangeHandler: ChangeEventHandler<HTMLSelectElement>;
  defaultValue?: number;
}) => (
  <select onChange={onAgeGroupChangeHandler} defaultValue={defaultValue}>
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
