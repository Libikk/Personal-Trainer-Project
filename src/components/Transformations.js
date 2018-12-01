import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction, testActionBB } from '../browser/actions';



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
        <button onClick={() => this.props.testActionBB('BBBBBBBBBBBB')}> testActionBB</button>
        <button onClick={() => this.props.testAction('xxxxxxx')}> dispatch action</button>
        <button onClick={() => console.log('thisi s test', this.props)}>test</button>
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
