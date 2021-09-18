import { ChangeEventHandler } from "react";

export const InputFullname = ({
  onFullnameChangeHandler,
  value,
}: {
  onFullnameChangeHandler: ChangeEventHandler<HTMLInputElement>;
  value: string;
}) => <input type="text" value={value} onChange={onFullnameChangeHandler} />;
