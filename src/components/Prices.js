import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideLoadingBar, showLoadingBar } from '../browser/actions';
import '../styles/prices.scss';

class Prices extends React.Component {
  
  componentWillMount() {
    this.props.showLoadingBar();
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('did')
    setTimeout(() => {
      this.props.hideLoadingBar();
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        THIS IS PricesPricesPricesPrices page
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    showLoadingBar,
    hideLoadingBar,
  }, dispatch);
}

export default connect(state => state, matchDispatchToProps)(Prices);
