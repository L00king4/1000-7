/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Competitions } from "./Competitions/Competitions";
import { Idle } from "./Idle";
import { Content } from "./HeadFootSide/Content";
import Header from "./HeadFootSide/Header";
import "./App.css";
import { AddCompetition } from "./Competitions/AddCompetitions";

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
        <Routes>
          <Route path="Competitions" element={<Competitions />} />
          <Route path="Competitions/Add" element={<AddCompetition />} />
          <Route path="*" element={<Idle />} />
          {/* <Route path="Competitions/:id" element={<ViewCompetition  />} /> */}
        </Routes>
      </Content>
    </div>
  </BrowserRouter>
);

export default App;
