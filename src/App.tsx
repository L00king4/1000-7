/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Competitions } from "./Competitions/Competitions";
import { Content } from "./HeadFootSide/Content";
import Header from "./HeadFootSide/Header";
import "./App.css";
import { AddCompetition } from "./Competitions/AddCompetitions";
import { Trainees } from "./Trainees/Table/TraineesTable";
import { Trainings } from "./Trainings/Trainings";

export const App = () => (
  <BrowserRouter>
    <div
      css={css`
        display: block;
      `}
    >
      {/* <LeftSide /> */}
      <Header />
      <Content>
        <Switch>
          <Route
            exact
            path="/Competitions"
            component={() => <Competitions />}
          />
          <Route exact path="/Trainees" component={() => <Trainees />} />
          <Route exact path="/Trainings" component={() => <Trainings />} />
        </Switch>
      </Content>
    </div>
  </BrowserRouter>
);

export default App;
