import "./Modal.css";
import BackDrop from "../Backdrop/Backdrop";
const Modal = (props) => {
  let message;
  console.log(props.Type);
  if (props.Type === "one") {
    message = "Input cant be Non empty";
  }
  if (props.Type === "two") {
    message = "Input age should be a positive number";
  }
  //   if (props.Type === "") {
  //     return;
  //   }
  const closeHandler = () => {
    document.querySelector(".Backdrop").style.opacity = 1;
    props.Fun();
  };
  return (
    <div>
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
    </div>
  );
};
export default Modal;
