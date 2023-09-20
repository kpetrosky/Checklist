import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HorizontalNavBar from "./components/HorizontalNavBar";
import ClassList from "./components/pages/ClassList";
import AddClass from "./components/pages/AddClass";
import Planner from "./components/pages/Planner";
import Finished from "./components/pages/Finished";
import TopicPage from "./components/pages/TopicPage";
import IntroToGrad from "./components/IntroToGrad";
import { Topics } from "./components/pages/Topics"; // Import the class data

function App() {
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [planner, setPlanner] = useState([]);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [completedTopicsByClass, setCompletedTopicsByClass] = useState({});

  const handleClassSelect = (classId) => {
    setSelectedClassId(classId);
  };

  const handleTopicClick = (classId, topicId) => {
    // Check if the topic is already completed
    const isCompleted = completedTopics.some(
      (completedTopic) =>
        completedTopic.classId === classId && completedTopic.topicId === topicId
    );

    if (isCompleted) {
      // Topic is completed, so remove it from completedTopics
      const updatedCompletedTopics = completedTopics.filter(
        (completedTopic) =>
          !(completedTopic.classId === classId && completedTopic.topicId === topicId)
      );
      setCompletedTopics(updatedCompletedTopics);
    } else {
      // Topic is not completed, so add it to completedTopics
      setCompletedTopics([
        ...completedTopics,
        { classId, topicId },
      ]);
    }

    // Update completed topics by class
    const completedTopicsForClass = completedTopics.filter(
      (completedTopic) => completedTopic.classId === classId
    );
    setCompletedTopicsByClass({
      ...completedTopicsByClass,
      [classId]: completedTopicsForClass.map((topic) => topic.topicId),
    });
  };

  const addClass = (className) => {
    const selectedClass = Topics.find((cls) => cls.name === className);
    if (selectedClass && !planner.find((cls) => cls.id === selectedClass.id)) {
      setPlanner([...planner, selectedClass]);
    }
  };

  const clearCompletedTopics = () => {
    // Clear completedTopics state
    setCompletedTopics([]);

    // Clear completedTopics from local storage
    localStorage.removeItem('completedTopics');
  };

  return (
    <Router>
      <div className="App">
        <HorizontalNavBar Topics={Topics} onClassSelect={handleClassSelect} />
        <div className="content">
          {selectedClassId !== null ? (
            <ClassList
              classId={selectedClassId}
              Topics={Topics}
              completedTopics={completedTopics}
              onTopicClick={handleTopicClick}
            />
          ) : (
            <p>Select a class from the sidebar</p>
          )}

          {/* Conditionally render the "Completed Topics" section */}
          {selectedClassId !== null && completedTopicsByClass[selectedClassId]?.length === Topics.find((cls) => cls.id === selectedClassId).topics.length && (
            <Finished />
          )}

          {/* Display saved topics here */}
          {completedTopics.length > 0 && (
            <div className="saved-topics">
              <h2>Saved Topics:</h2>
              <ul>
                {completedTopics.map((completedTopic, index) => {
                  const selectedClass = Topics.find((cls) => cls.id === completedTopic.classId);
                  const selectedTopic = selectedClass.topics.find((topic) => topic.id === completedTopic.topicId);

                  return (
                    <li key={index}>
                      Class: {selectedClass.name}, Topic: {selectedTopic.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <AddClass addClass={addClass} />
        <Planner planner={planner} />
        <button onClick={clearCompletedTopics}>Clear Completed Topics</button>

        {/* Define your routes within the <Routes> component */}
        <Routes>
          {/* Define your existing routes */}
          <Route path="/topic/:classId/:topicId" element={<TopicPage classes={Topics} completedTopics={completedTopics} />} />

          {/* Define a route for "/IntroToGrad" */}
          <Route path="/IntroToGrad" element={<IntroToGrad data={Topics} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
