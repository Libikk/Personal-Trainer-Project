import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction, testActionBB } from '../browser/actions';
import huj from '../images/owl.jpg';
import hujj from '../images/ow2l.png';

class Transformations extends React.Component {
  componentWillMount = () => {
    this.props.testActionBB('BBBBBBBBBBBB');
    console.log('COMPONENT WILL MOUNTS');
  }
  render() {
    // console.log('ptops and this', this.props, this);

    return (
      <div>
        THIS IS Transformations ggggggggggggggg
        <img alt="awl" src={hujj} />
        <img alt="awl" src={huj} />

      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    testAction,
    testActionBB,
  }, dispatch);
}

export default connect(state => state, matchDispatchToProps)(Transformations);
