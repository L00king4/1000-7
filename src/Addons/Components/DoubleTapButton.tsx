/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Component, useState } from "react";
import { JsxElement } from "typescript";

export const DoubleTapButton = ({
  buttonText,
  onApproveClickHandler,
}: {
  buttonText: string;
  onApproveClickHandler: Function;
}) => {
  const [toApprove, setToApprove] = useState(false);
  const resetDefaultHandler = () => {
    setToApprove(!toApprove);
  };

  return toApprove ? (
    <button
      css={css`
        display: inline-block;
        align-items: center;
        justify-content: center;
      `}
      onClick={() => {
        onApproveClickHandler();
        resetDefaultHandler();
      }}
    >
      Confirm {buttonText}?
    </button>
  ) : (
    <button
      css={css`
        display: inline-block;
        align-items: center;
        justify-content: center;
      `}
      onClick={resetDefaultHandler}
    >
      {buttonText}
    </button>
  );
};
