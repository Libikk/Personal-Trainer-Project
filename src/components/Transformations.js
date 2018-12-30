import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideLoadingBar, showLoadingBar } from '../browser/actions';
import huj from '../images/owl.jpg';
import hujj from '../images/ow2l.png';

class Transformations extends React.Component {
  componentWillMount = () => {
    this.props.showLoadingBar();
    axios.get('http://localhost:3000/api/instagramProfile')
      .then((e) => {
        console.log(e.status);
        this.props.hideLoadingBar();
      });
  }
  render() {
    return (
      <div>
        <img alt="awl" src={hujj} />
        <img alt="awl" src={huj} />
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    hideLoadingBar,
    showLoadingBar,
  }, dispatch);
}

export default connect(state => state, matchDispatchToProps)(Transformations);
