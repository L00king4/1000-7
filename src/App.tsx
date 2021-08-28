/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListCompetitions, ViewCompetition } from "./Events/Competitions";
import { Idle } from "./Idle";
import LeftSide from "./HeadFootSide/LeftSide";
import { Content } from "./HeadFootSide/Content";
import Header from "./HeadFootSide/Header";

export const App = () => (
  <BrowserRouter>
    <div
    // css={css`
    //   display: flex;
    //   flex-wrap: nowrap;
    //   box-sizing: border-box;
    // `}
    >
      {/* <LeftSide /> */}
      <Header />
      <Content>
        <Routes>
          <Route path="Competitions" element={<ListCompetitions />} />
          <Route path="*" element={<Idle />} />
          {/* <Route path="Competitions/:id" element={<ViewCompetition  />} /> */}
        </Routes>
      </Content>
    </div>
  </BrowserRouter>
);

export default App;
