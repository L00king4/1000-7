import { AxiosAdapter, AxiosResponse } from "axios";

const ErrorStatus = -1;
const UnchangedStatus = 0;

export const DoOnStatus = (actions: {
  successStatusAction: (res: AxiosResponse) => void;
  errorStatusAction?: Function;
  unchangedStatusAction?: Function;
}) => {
  return (res: AxiosResponse) => {
    switch (res.data) {
      case ErrorStatus:
        if (actions.errorStatusAction) {
          actions.errorStatusAction();
        }
        break;
      case UnchangedStatus:
        if (actions.unchangedStatusAction) {
          actions.unchangedStatusAction();
        }
        break;
      default:
        actions.successStatusAction(res);
        break;
    }
  };
};
