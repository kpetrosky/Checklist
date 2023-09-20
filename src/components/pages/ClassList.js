import React from "react";

const ClassList = ({ classId, Topics, completedTopics, onTopicClick, data }) => {
  // Function to handle the save action
  const handleSave = () => {
    // Save completedTopics to local storage
    localStorage.setItem("completedTopics", JSON.stringify(completedTopics));
    alert("Topics have been saved!");
  };

  // Find the selected class by classId
  const selectedTopic = Topics.find((cls) => cls.id === classId);

  return (
    <div>
      {selectedTopic ? (
        <div>
          <h2>{selectedTopic.name}</h2>
          <p>Credits: {selectedTopic.credits}</p>
          <ul>
            {selectedTopic.topics.map((topic) => (
              <li
                key={topic.id}
                className={
                  completedTopics.some(
                    (completedTopic) =>
                      completedTopic.classId === classId &&
                      completedTopic.topicId === topic.id
                  )
                    ? "completed-topic"
                    : ""
                }
                onClick={() => onTopicClick(classId, topic.id)}
              >
                {topic.name} ({topic.duration})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Select a class from the sidebar</p>
      )}

      {/* Render the Save button */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ClassList;
