import { ViewTraineesTBody } from "./ViewTraineesTBody";
import { ViewTraineesTHead } from "./ViewTraineesTHead";

export const ViewTraineesTable = () => (
  <table className="TraineesTable">
    <ViewTraineesTHead />
    <ViewTraineesTBody />
  </table>
);
