import { ChangeEventHandler } from "react";

export const InputBirthday = ({
  onBirthdayChangeHandler,
  defaultValue,
}: {
  onBirthdayChangeHandler: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
}) => (
  <input type="date" value={defaultValue} onChange={onBirthdayChangeHandler} />
);
