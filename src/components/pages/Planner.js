// src/components/Planner.js
import React from "react";

const Planner = ({ planner }) => {
  return (
    <div>
      <h2>Planner</h2>
      <ul>
        {planner.map((cls) => (
          <li key={cls.id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Planner;
