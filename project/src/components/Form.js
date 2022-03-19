import React, { useState } from "react";

const Form = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <>
      <form onSubmit={handleQuerySubmit}>
        <input
          value={query}
          type="text"
          placeholder="Enter stock..."
          onChange={handleQueryChange}
        ></input>
        <button type="submit">
          Search
          {/* <img src="/images/search-icon.png" alt="Search"></img> */}
        </button>
      </form>
    </>
  );
};

export default Form;
