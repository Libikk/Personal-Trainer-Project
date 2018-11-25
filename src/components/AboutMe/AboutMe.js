import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="container">
        THIS IS ABOUT ME PAGE
        <button onClick={() => console.log('thisi s test')}>test</button>
      </div>
    );
  }
}

export default AboutMe;
