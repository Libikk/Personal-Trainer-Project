import React from 'react';
import '../styles/services.scss';

class Services extends React.Component {
  tibia = () => {
    console.log('ssss')
  }
  render() {
    return (
      <div className="container">
        THIS IS Services page ee!!
        <button onClick={() => console.log('thisi s test')}>test</button>
      </div>
    );
  }
}

export default Services;
