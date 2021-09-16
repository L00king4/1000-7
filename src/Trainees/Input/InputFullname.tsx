import { ChangeEventHandler } from "react";

export const InputFullname = ({
  onFullnameChangeHandler,
  defaultValue,
}: {
  onFullnameChangeHandler: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
}) => (
  <input
    type="text"
    defaultValue={defaultValue}
    onChange={onFullnameChangeHandler}
  />
);
