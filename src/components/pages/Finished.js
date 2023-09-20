import React, { useEffect, useState } from "react";
import { Topics } from "./Topics";


const Finished = () => {
  // State to store the filtered classes
  const [completedClasses, setCompletedClasses] = useState([]);

  useEffect(() => {
    // Retrieve completed topics from local storage
    const completedTopics = JSON.parse(localStorage.getItem("completedTopics")) || [];

    // Filter classes based on completed topics
    const filteredClasses = Topics.filter((cls) =>
      cls.topics.some((topic) =>
        completedTopics.some(
          (completedTopic) =>
            completedTopic.classId === cls.id && completedTopic.topicId === topic.id
        )
      )
    );

    setCompletedClasses(filteredClasses);
  }, []);

  return (
    <div>
      <h2>Finished Classes</h2>
      {completedClasses.length === 0 ? (
        <p>No classes have been completed yet.</p>
      ) : (
        <ul>
          {completedClasses.map((cls) => (
            <li key={cls.id}>
              <h3>{cls.name}</h3>
              <p>Credits: {cls.credits}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Finished;
