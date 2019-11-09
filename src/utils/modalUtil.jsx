import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../assets/styles/components/Modal.css";

const Toggle = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);
  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById("modal")
  );

export { Toggle, Modal };
