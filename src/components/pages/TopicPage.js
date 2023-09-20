// TopicPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Topics } from './Topics'; // Import your data

function TopicPage() {
  const { classId, topicId } = useParams(); // Get the classId and topicId from the URL parameters
console.log('Can you see this?')
  // Find the selected topic based on classId and topicId
  const selectedClass = Topics.find((classItem) => classItem.id.toString() === classId);
  const selectedTopic = selectedClass.topics.find((topic) => topic.id.toString() === topicId);

  if (!selectedTopic) {
    // Handle the case where the topic is not found
    return <div>Topic not found</div>;
  }

  return (
    <div>
      <h2>{selectedTopic.name}</h2>
      <p>Duration: {selectedTopic.duration}</p>
      {/* Display other topic content here */}
    </div>
  );
}

export default TopicPage;
