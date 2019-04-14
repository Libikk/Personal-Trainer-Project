import React from 'react';
import '../styles/home.scss';
import Banner from '../containers/Banner';
import Interview from '../icons/interview.svg';
import Training from '../icons/training.svg';
import Trophy from '../icons/trophy.svg';
import Steps from '../../appPageFeed/steps.json';

import ptSession from '../images/pt_session.jpg';

const icons = {
  Interview,
  Training,
  Trophy,
};

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        {/* <img src={ptSession} alt="pt_session" /> */}
        <Banner page="home" />
        <div className="homepage__header">
          <h1>HOW IT WORKS</h1>
          <div className="homepage__steps">
            {Steps.map((e, index) => {
              const Icon = icons[e.iconName];
              return (
                <div className="steps__single-step" key={e.stepTitle}>
                  <header>
                    <h1><span>Step</span>{` ${index + 1}. `}{e.stepTitle}</h1>
                  </header>
                  <div className="single-step__body">
                    <Icon />
                    <span className="body__subtitle">{e.subTitle}</span>
                    <span className="body__text">{e.text}</span>
                  </div>
                  <span className="body__button primary-button">
                    <a href={`./${e.buttonName.toLowerCase()}`}>{e.buttonName}</a>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
