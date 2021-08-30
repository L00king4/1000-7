/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

export const Content = ({ children }: Props) => (
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
