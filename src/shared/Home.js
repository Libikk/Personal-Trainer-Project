import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    console.log('state home', this.props)
    return (
      <div>
        Select a Language kurwa
      </div>
    );
  }
}

export default connect(state => state)(Home);
