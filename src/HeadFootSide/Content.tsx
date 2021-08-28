/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

export const Content = ({ children }: Props) => (
  <div
    css={css`
      flex: 80%;
    `}
  >
    {children}
  </div>
);

export default Content;
