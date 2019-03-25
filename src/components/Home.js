import React from 'react';
import '../styles/home.scss';
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
        <img src={ptSession} alt="pt_session" />
        <div>
          <h1>YOUR DESIRE TO CHANGE IS WHAT DRIVES ME!</h1>
          <div className="thin-line" />
          <div className="homepage__steps">
            {Steps.map((e) => {
              const Icon = icons[e.iconName];
              return (
                <div className="steps__single" key={e.stepTitle}>
                  {e.stepTitle}
                  <Icon />
                  <span>{e.subTitle}</span>
                  {e.text}
                  <a href={e.buttonName.toLowerCase()}>{e.buttonName}</a>
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
