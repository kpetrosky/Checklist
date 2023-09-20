import React from 'react';
import { Link } from 'react-router-dom';
import './HorizontalNavBar.css'; // Update the CSS file name

function HorizontalNavBar() { // Change the component name
  console.log('Is this visible?'); // Log before the return statement

  return (
    <div className="horizontal-navbar"> {/* Update the CSS class name */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/introtoGrad">Intro to Grad</Link>
      <Link to="/Research Method in IT">Research Method in IT</Link>
      <Link to="/Principles of Mobile and Web App Dev">Principles of Mobile and Web App Dev</Link>
      
    </div>
  );
}

export default HorizontalNavBar; // Update the component name in the export statement

