import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/transformations.scss';
import { hideLoadingBar, showLoadingBar } from '../browser/actions';
import transformationList from '../../appPageFeed/transformationList.json';
import resultsGuaranteeImage from '../images/guarantee_results.png';
import utils from '../utils';

class Transformations extends React.Component {
  state = {
    transformationLimitDisplay: 3,
  }

  loadMoreTransformations = () => {
    this.setState({ transformationLimitDisplay: this.state.transformationLimitDisplay + 2 });
  }
  render() {
    const sortedTransformations = transformationList.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
    const { transformationLimitDisplay } = this.state;
    const transformationsListRendered = sortedTransformations.slice(0, transformationLimitDisplay).map((e) => {
      const image = require(`../images/${e.images}`);// eslint-disable-line
      return (
        <div className="single-transformation" key={e.personName}>
          <div className="transformation__image-wrapper">
            <img alt="awl" src={image} />
            <img alt="huj" src={resultsGuaranteeImage} />
            {/* <div className="promo">this is under photo</div> */}
          </div>
          <div className="transformation__details">
            <span className="details__person-name">{e.personName} <sup>{utils.getTextUploadTime(e.uploadDate)}</sup></span>
            <div className="details__about-person">{`"${e.aboutPerson}"`}</div>
          </div>
        </div>);
    });
    return (
      <div className="transformations-container">
        <div className="transformations__wrapper">
          {transformationsListRendered}
        </div>
        { transformationLimitDisplay >= sortedTransformations.length ? null : <span className="primary-button load-more" onClick={() => this.loadMoreTransformations()}>Load more</span>}
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
