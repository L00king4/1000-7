/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Competitions } from "./Competitions/Competitions";
import { Content } from "./HeadFootSide/Content";
import Header from "./HeadFootSide/Header";
import "./App.css";
import { AddCompetition } from "./Competitions/AddCompetitions";
import { TraineesTable } from "./Trainees/Table/TraineesTable";

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
          <Route
            exact
            path="/Competitions/Add"
            component={() => <AddCompetition />}
          />
          <Route exact path="/Trainees" component={() => <TraineesTable />} />
        </Switch>
      </Content>
    </div>
  </BrowserRouter>
);

export default App;
