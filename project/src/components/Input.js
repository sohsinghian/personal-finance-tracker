import React from "react";

const Input = (props) => {
  const handleInput = (event) => {
    event.preventDefault();
    props.onChange(event.target.value);
  };

  return (
    <input
      name={props.name}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={handleInput}
    ></input>
  );
};

export default Input;
