import React from 'react';
import '../styles/home.scss';
import huj from '../images/owl.jpg';
import hujj from '../images/ow2l.png';

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        This is Home page
        <button onClick={() => console.log('thisi s test')}>test</button>
        ffffffffffff
        <img alt="awl" src={hujj} />
        <img alt="awl" src={huj} />
      </div>
    );
  }
}

export default Home;
