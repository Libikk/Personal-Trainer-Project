import React from 'react';
import '../styles/about.scss';

class About extends React.Component {
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

export default About;
