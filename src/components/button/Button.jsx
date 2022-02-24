import "./button.scss";

const Button = (props) => {
  // console.log(JSON.stringify(props));
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
