import "./Backdrop.css";
const BackDrop = (props) => {
  let body;
  body = document.querySelector(".Backdrop");
  const backDropHandler = () => {
    // body.style.backgroundColor = "";
    if (body === null) return;
    body.style.opacity = 1;
    props.removeModal(false);
  };
  let classes;
  if (props.show) {
    // body.style.backgroundColor = "gray";
    if (body === null) return;
    body.style.opacity = 0.2;
  }
  //   console.log(body);

  return (
    <div className="Backdrop" onClick={backDropHandler}>
      {props.children}
    </div>
  );
};
export default BackDrop;
