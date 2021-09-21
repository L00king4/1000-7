/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Content = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      border: 1px black solid;
      background-color: #a7a7a7;
    `}
  >
    {children}
  </div>
);

export default Content;
