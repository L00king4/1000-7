import { ChangeEventHandler } from "react";
import { getBeltColorKVPs } from "../ITrainees";

export const SelectBeltColor = ({
  onBeltColorChangeHandler,
  defaultValue,
}: {
  onBeltColorChangeHandler: ChangeEventHandler<HTMLSelectElement>;
  defaultValue?: number;
}) => (
  <select onChange={onBeltColorChangeHandler} defaultValue={defaultValue}>
    {getBeltColorKVPs().map(({ name, value }) => (
      <option
        value={value}
        key={"beltColorKVP " + name + " " + value.toString()}
      >
        {name}
      </option>
    ))}
  </select>
);
