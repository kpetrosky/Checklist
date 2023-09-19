import React from "react";

const ClassList = ({ classes, completedTopics, onTopicClick }) => {
  // Function to handle the save action
  const handleSave = () => {
    // Save completedTopics to local storage
    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
    alert("Topics have been saved!");
  };

  return (
    <div>
      <h2>Class List</h2>
      {classes.map((cls) => (
        <div key={cls.id}>
          <h3>{cls.name}</h3>
          <p>Credits: {cls.credits}</p>
          <ul>
            {cls.topics.map((topic) => (
              <li
                key={topic.id}
                className={
                  completedTopics.some(
                    (completedTopic) =>
                      completedTopic.classId === cls.id &&
                      completedTopic.topicId === topic.id
                  )
                    ? "completed-topic"
                    : ""
                }
                onClick={() => onTopicClick(cls.id, topic.id)}
              >
                {topic.name} ({topic.duration})
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Render the Save button */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ClassList;
