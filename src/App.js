import React, { useState } from "react";
import "./App.css";
import OutPut from "./Components/output/outputs";
import User from "./Components/User/User";
import Modal from "./Components/Modal/Modal";
import BackDrop from "./Components/Backdrop/Backdrop";
function App() {
  const [output, setOutput] = useState([]);
  const [showModal, setModal] = useState(false);
  const [errorType, setErrorType] = useState("");
  const publisher = (a, b) => {
    console.log(typeof a, typeof b);
    console.log(a === "");
    if (a === "" && b === "") {
      setErrorType("one");
      setModal(true);
    } else if (Number(b) <= 0) {
      setErrorType("two");
      setModal(true);
    } else {
      // errorType = "";
      let temp = [...output, { name: a, age: b }];
      setOutput(temp);
      console.log(output);
    }
  };
  const modalClose = () => {
    setModal(false);
  };
  const removeHandler = (p) => {
    setModal(p);
  };
  return (
    <div className="App">
      <BackDrop show={showModal} removeModal={removeHandler}>
        <User subscriber={publisher} />
        <div className="outputContainer">
          {output.length > 0
            ? output.map((el) => {
                return <OutPut key={el.name} name={el.name} age={el.age} />;
              })
            : null}
        </div>
      </BackDrop>
      {showModal ? <Modal Type={errorType} Fun={modalClose} /> : null}
    </div>
  );
}

export default App;
