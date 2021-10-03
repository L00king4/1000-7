import React, { useEffect, useState } from "react";

export const Modal = ({
  hideModalFunc,
  children,
}: {
  hideModalFunc: () => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const win: Window = window;
    const fireIfClickedOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      console.log("asdasd");
      if (target.className === "modal") {
        hideModalFunc();
        win.removeEventListener("click", fireIfClickedOutside);
      }
    };
    win.addEventListener("click", fireIfClickedOutside);
  }, []);
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};
