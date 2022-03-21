import React from "react";

const Button = (props) => {
  return (
    <>
      <button type={props.type} onClick={props.onClick}>
        {props.buttonText}
        {/* <img src="/images/search-icon.png" alt="Search"></img> */}
      </button>
    </>
  );
};

export default Button;
