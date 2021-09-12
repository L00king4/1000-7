/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Competitions } from "./Competitions/Competitions";
import { Idle } from "./Idle";
import { Content } from "./HeadFootSide/Content";
import Header from "./HeadFootSide/Header";
import "./App.css";
import { AddCompetition } from "./AddCompetitions/AddCompetitions";
import { Provider } from "react-redux";
import { globalStore } from "./Redux/GlobalStore";

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
        <Provider store={globalStore}>
          <Routes>
            <Route path="Competitions" element={<Competitions />} />
            <Route path="Competitions/Add" element={<AddCompetition />} />
          </Routes>
        </Provider>
      </Content>
    </div>
  </BrowserRouter>
);

export default App;
