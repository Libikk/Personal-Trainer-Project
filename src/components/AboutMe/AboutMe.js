import React from 'react';
import './AboutMe.scss';

class AboutMe extends React.Component {
  tibia = () => {
    console.log('ssss')
  }
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
