/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { Competitions } from "./Competitions/Competitions";
import { Content } from "./HeadFootSide/Content";
import Header from "./HeadFootSide/Header";
import "./App.css";
import { AddCompetition } from "./Competitions/AddCompetitions";
import { TraineesTable } from "./Trainees/TraineesTable";
import { Trainings } from "./Trainings/Trainings";
import { TraineesBlock } from "./Trainees/TraineesBlock";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <LeftSide /> */}
        <Header />
        <Content>
          <Switch>
            <Route
              exact
              path="/Competitions"
              component={() => <Competitions />}
            />
            <Route
              exact
              path="/Trainees/Table"
              component={() => <TraineesTable />}
            />
            <Route
              exact
              path="/Trainees/Block"
              component={() => <TraineesBlock />}
            />
            <Route exact path="/Trainings" component={() => <Trainings />} />
          </Switch>
        </Content>
      </div>
    </BrowserRouter>
  );
};

withRouter(App);
export default App;
