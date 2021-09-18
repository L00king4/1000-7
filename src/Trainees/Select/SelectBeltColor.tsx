import { ChangeEventHandler } from "react";
import { getBeltColorKVPs } from "../ITrainees";

export const SelectBeltColor = ({
  onBeltColorChangeHandler,
  value,
}: {
  onBeltColorChangeHandler: ChangeEventHandler<HTMLSelectElement>;
  value?: number;
}) => (
  <select onChange={onBeltColorChangeHandler} value={value}>
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
