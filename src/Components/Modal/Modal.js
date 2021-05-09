import "./Modal.css";
import React from "react";
import ReactDom from "react-dom";
const ModalOverlay = (props) => {
  let message;
  if (props.Type === "one") {
    message = "Input cant be Non empty";
  }
  if (props.Type === "two") {
    message = "Input age should be a positive number";
  }
  const closeHandler = () => {
    document.querySelector(".Backdrop").style.opacity = 1;
    props.Fun();
  };
  return (
    <div className="Modal-container">
      <header className="Modal-header">
        <h3 className="header">Invalid Input</h3>
      </header>
      <div className="Modal-content">
        <p>{message}</p>
      </div>
      <button className="Modal-close" onClick={closeHandler}>
        OK
      </button>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <ModalOverlay Fun={props.Fun} Type={props.Type} />,
        document.querySelector("#overlay")
      )}
    </React.Fragment>
  );
};
export default Modal;
