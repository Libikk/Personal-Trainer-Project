import React from 'react';
import '../styles/about.scss';

import InstagramProfile from '../containers/Instagram/InstagramProfile';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <InstagramProfile />
      </div>
    );
  }
}

export default About;
