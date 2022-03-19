import React, { useState } from "react";

const Form = (props) => {
  const handleQuerySubmit = (event) => {
    event.preventDefault();
    props.setQuery(event.target.input.value);
    console.log(props.query);
  };

  return (
    <>
      <form onSubmit={handleQuerySubmit}>
        <input name="input" type="text" placeholder="Enter stock..."></input>
        <button type="submit">
          Search
          {/* <img src="/images/search-icon.png" alt="Search"></img> */}
        </button>
      </form>
    </>
  );
};

export default Form;
