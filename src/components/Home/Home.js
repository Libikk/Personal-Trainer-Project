import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        This is Home page
        <button onClick={() => console.log('thisi s test')}>test</button>
      </div>
    );
  }
}

export default Home;
