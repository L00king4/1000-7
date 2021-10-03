/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import AddCompetitionAttendanceButton from "./Buttons/AddCompetitionAttendanceButton";
import RemoveCompetitionAttendanceButton from "./Buttons/RemoveCompetitionAttendanceButton";
import AddCompetitionPaymentButton from "./Buttons/AddCompetitionPaymentButton";
import { CompetitionTrainee } from "./CompetitionTrainee";
import {} from "../Redux/Store";
import { CompetitionEntryKVP } from "./ICompetitions";

export const CompetitionSortedTrainees = ({
  competitionEntryKVP,
}: {
  competitionEntryKVP: CompetitionEntryKVP;
}) => {
  const [showNotAttending, setShowNotAttending] = useState(false);
  const [showAttending, setShowAttending] = useState(true);
  return (
    <div className="CompetitionSortedTrainees">
      <div
        onClick={() => setShowAttending(!showAttending)}
        css={css`
          text-align: center;
          margin-bottom: 30px;
        `}
      >
        Attending:
      </div>
      {showAttending && (
        <ul>
          {competitionEntryKVP.competitionEntry.sortedTrainees.attendingTrainees.map(
            (attendingTrainee, traineeIndex) => (
              <li
                key={
                  competitionEntryKVP.competitionEntry.competition.id.toString() +
                  " " +
                  attendingTrainee.id.toString() +
                  " " +
                  attendingTrainee.fullname
                }
              >
                <RemoveCompetitionAttendanceButton
                  competitionModelKVP={{
                    index: competitionEntryKVP.index,
                    competition:
                      competitionEntryKVP.competitionEntry.competition,
                  }}
                  traineeKVP={{
                    trainee: attendingTrainee,
                    index: traineeIndex,
                  }}
                />
                <CompetitionTrainee
                  trainee={attendingTrainee}
                  showPayedAmount={true}
                />
                <AddCompetitionPaymentButton
                  competitionEntryKVP={competitionEntryKVP}
                  traineeKVP={{
                    trainee: attendingTrainee,
                    index: traineeIndex,
                    type: "attendingTrainees",
                  }}
                />
              </li>
            )
          )}
        </ul>
      )}
      <div
        css={css`
          text-align: center;
          padding-bottom: 30px;
        `}
        onClick={() => setShowNotAttending(!showNotAttending)}
      >
        Not Attending:
      </div>
      {showNotAttending && (
        <ul>
          {competitionEntryKVP.competitionEntry.sortedTrainees.notAttendingTrainees.map(
            (trainee, index) => (
              <li
                key={
                  competitionEntryKVP.competitionEntry.competition.id.toString() +
                  " " +
                  trainee.id.toString() +
                  trainee.fullname +
                  trainee.beltColor.toString()
                }
              >
                <AddCompetitionAttendanceButton
                  competitionModelKVP={{
                    competition:
                      competitionEntryKVP.competitionEntry.competition,
                    index: competitionEntryKVP.index,
                  }}
                  traineeKVP={{ index: index, trainee: trainee }}
                />
                <CompetitionTrainee trainee={trainee} showPayedAmount={false} />
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
