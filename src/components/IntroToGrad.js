import React from "react";

function IntroToGrad({ data }) {
  console.log('IntroToGrad'); // Add this line

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {data.map((classTopic) => (
        <div key={classTopic.id}>
          <h2>{classTopic.name}</h2>
          <p>Credits: {classTopic.credits}</p>
          <h3>Topics:</h3>
          <ul>
            {classTopic.topics.map((topic) => (
              <li key={topic.id}>
                {topic.name} (Duration: {topic.duration})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default IntroToGrad;
