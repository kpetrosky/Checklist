// src/components/AddClass.js
import React from "react";

const AddClass = ({ addClass }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const className = e.target.className.value;
    addClass(className);
    e.target.reset();
  };

  return (
    <div>
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="className" placeholder="Class Name" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddClass;
