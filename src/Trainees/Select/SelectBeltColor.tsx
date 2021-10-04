import { ChangeEventHandler } from "react";
import { getEnumKVPs } from "../../Addons/Functional/EnumFunctions";
import { BeltColor } from "../../Redux/Slices/Trainees/ITraineesSlice";

export const SelectBeltColor = ({
  onBeltColorChangeHandler,
  value,
}: {
  onBeltColorChangeHandler: ChangeEventHandler<HTMLSelectElement>;
  value?: number;
}) => (
  <select onChange={onBeltColorChangeHandler} value={value}>
    {getEnumKVPs(BeltColor).map(({ key, value }) => (
      <option
        value={value}
        key={"beltColorKVP " + key + " " + value.toString()}
      >
        {key}
      </option>
    ))}
  </select>
);
