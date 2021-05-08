import React, { useState } from "react";
import "./User.css";
const User = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameHandler = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(typeof name, age);
    props.subscriber(name, age);
    setName("");
    setAge("");
  };
  return (
    <div className="user-container" onSubmit={submitHandler}>
      <form className="input-container">
        <label className="label">Name</label>
        <input type="text" onChange={nameHandler} value={name}></input>
        <label className="label">Age</label>
        <input type="number" onChange={ageHandler} value={age}></input>
        <input value="submit" type="submit" className="submit-button"></input>
      </form>
    </div>
  );
};
export default User;
