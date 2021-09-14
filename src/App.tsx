/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Competitions } from "./Competitions/Competitions";
import { Content } from "./HeadFootSide/Content";
import Header from "./HeadFootSide/Header";
import "./App.css";
import { AddCompetition } from "./AddCompetitions/AddCompetitions";

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
            path="/Competitions/Add"
            component={() => <AddCompetition />}
          />
        </Switch>
      </Content>
    </div>
  </BrowserRouter>
);

export default App;
