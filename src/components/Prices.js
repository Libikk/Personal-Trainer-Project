import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hideLoadingBar, showLoadingBar } from '../browser/actions';
import '../styles/prices.scss';
import prices from '../../appPageFeed/prices.json';

class Prices extends React.Component {
  render() {
    return (
      <div className="prices">
        {
          prices.map(pricing => (
            <section className="prices__container" key={pricing.title}>
              <div className="thin-line" />
              <header className="container__section-title">{pricing.title}</header>
              <div className="container__prices-options">
                {pricing.plans.map((plan, index) => (
                  <div className="prices-options__single-option" key={plan.sessionPrice}>
                    <header>Option {index + 1}</header>
                    <div className="body">
                      <span className="single-option__session">${plan.sessionPrice}<span>/session</span></span>
                      <span className="single-option__session-month">${plan.totalCost / plan.periodValue}/month</span>
                      <span>Total sessions: {plan.totalSessionsAmount}</span>
                      {
                        plan.saving === 0 ? null : <span>Savings: {plan.saving}</span>
                      }
                    </div>
                  </div>))
                }
              </div>
            </section>
          ))
        }
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
