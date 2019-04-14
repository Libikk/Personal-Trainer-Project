import React from 'react';
import '../styles/about.scss';
import Banner from '../containers/Banner';

import InstagramProfile from '../containers/Instagram/InstagramProfile';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <Banner page="about" />
        <InstagramProfile />
      </div>
    );
  }
}

export default About;
