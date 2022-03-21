import React from "react";
import Button from "./Button";

const Form = (props) => {
  const handleQuerySubmit = (event) => {
    event.preventDefault();
    props.setQuery(event.target.input.value);
    console.log(props.query);
  };

  return (
    <>
      <form onSubmit={handleQuerySubmit}>
        <input
          name="input"
          type="text"
          placeholder="Enter stock symbol..."
        ></input>
        <Button type="submit" buttonText="Search" />
      </form>
    </>
  );
};

export default Form;
