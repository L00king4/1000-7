import { ChangeEventHandler } from "react";

export const InputBirthday = ({
  onBirthdayChangeHandler,
  defaultValue,
}: {
  onBirthdayChangeHandler: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
}) => (
  <input
    type="date"
    defaultValue={defaultValue}
    onChange={onBirthdayChangeHandler}
  />
);
