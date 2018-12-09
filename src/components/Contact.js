import React from 'react';
import '../styles/contact.scss';

class Contact extends React.Component {
  tibia = () => {
    console.log('ssss')
  }
  render() {
    return (
      <div className="container">
        THIS IS CONTACT page
        <button onClick={() => console.log('thisi s test')}>test</button>
      </div>
    );
  }
}

export default Contact;
