import React from "react";

const VerticalNavbar = ({ classes, onClassSelect }) => {
  return (
    <div className="vertical-navbar">
      <h2>Classes</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>
            <button onClick={() => onClassSelect(cls.id)}>{cls.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalNavbar;
