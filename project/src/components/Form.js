import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Form = (props) => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (input) => {
    setDescription(input);
  };

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    props.setQuery(event.target.input.value);
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleQuerySubmit}>
        <Input
          name="input"
          value={description}
          type="text"
          placeholder="Enter stock symbol..."
          onChange={handleDescriptionChange}
        />
        <Button type="submit" text="Search" />
      </form>
    </>
  );
};

export default Form;
