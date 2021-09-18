import { ChangeEventHandler } from "react";

export const InputBirthday = ({
  onBirthdayChangeHandler,
  value,
}: {
  onBirthdayChangeHandler: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}) => <input type="date" value={value} onChange={onBirthdayChangeHandler} />;
