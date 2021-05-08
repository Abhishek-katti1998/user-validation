import "./output.css";
const OutPut = (props) => {
  return (
    <div className="output">
      Person Name is {props.name} and age is {props.age}
    </div>
  );
};
export default OutPut;
