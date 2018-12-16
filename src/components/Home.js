import React from 'react';
import '../styles/home.scss';

import ptSession from '../images/pt_session.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <img src={ptSession} alt="pt_session" />
      </div>
    );
  }
}

export default Home;
