General:

1. [DONE] Add Arrows for opening/closing child elements from parent (https://www.w3schools.com/howto/howto_css_arrows.asp).
2. Add Logs

Table:
Round every <tr>.

---

Events:

1. Be able to add all youngs/elders/both to event.
2. Filter by Age Group.
3.

---

Trainees:

1. Optimise SaveAll button in TraineeTable.tsx, to send only changed editingTrainees.
2. Make <td>s less in width (TraineeTable.tsx...).
3. TraineeTable.tsx sorting by each column.
4. Move all axios posts/gets to services.
5. [DONE] Filtering for specific columns.
6. Double-tap(click) on trainee to update it.
7.

---

Competitions:

1. Make Competition list sorted by months.
2. Make chechmark for trainees, who payed fully.
3. Add ageGroup prop to Competition Model and its usages.

---

Trainings:

1. On click on payed trainingday => small popup with date of payment + delete payment button.
2. Hold-slide for several Training-days-selection and eventual payment.
3.

Ripped out page/Restricted days -> Not Attended.
White days -> Attended and not payed.
Green days -> Attended and payed.
Ripped out page/Restricted Green days -> Not Attended and payed.
PayedSpans are displayed as small head on every payed <tr>.
