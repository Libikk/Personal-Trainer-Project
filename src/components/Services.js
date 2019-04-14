import React from 'react';
import '../styles/services.scss';
import Banner from '../containers/Banner';
import services from '../../appPageFeed/services.json';
import logo from '../images/banana.png';
import ApprovalIcon from '../icons/approval.svg';
// eslint-disable import/no-dynamic-require

class Services extends React.Component {
  render() {
    return (
      <div className="services__container">
        <Banner page="services" />
        <div className="services__options">
          {
              services.map(singleService => (
                <div className="options__single-option" key={singleService.serviceName}>
                  <img src={require(`../images/${singleService.imageUrl}`) } alt={singleService.serviceName} />
                  {singleService.serviceName}
                </div>))
            }
        </div>
        <div className="about-wrapper">
          <section className="about-results">
            <div className="about-results__header">
              <h1>
                ABOUT<br />
                <span className="results"> RESULTS</span>
              </h1>
              <img alt="logo" src={logo} />
            </div>
            <div className="about-results__body">
              <ul>
                <li><ApprovalIcon /> I show you <b>the best</b>, I don't show you the worst.</li>
                <li><ApprovalIcon /> I show you <b>people who follow the plans</b>, not those who are all talk.</li>
                <li><ApprovalIcon /> I show you <b>those who inspire even us</b> with their commitment to their results.</li>
                <li><ApprovalIcon /> You cannot get results exactly like these. <b>You are unique</b> and that means you can only get your own best possible results.</li>
                <li><ApprovalIcon /> Your <b>results are a function of time spent</b> following the plan; your <b>genetic response</b> to the right exercise and diet program; <b>how hard you train;</b> how <b>consistently</b> you come to the gym; <b>how disciplined you are</b> with your diet; & your starting point.</li>
                <li><ApprovalIcon /> Oftentimes the lower your starting point (poor fitness, terrible body composition) <b>the better your results</b>.</li>
                <li><ApprovalIcon /> I cannot do the work for you and the results you see here are a testament to the <b>work ethic of our clients</b>.</li>
                <li><ApprovalIcon /> Our reputation is that I are the best trainers in the world for helping you to unlock your potential, & I can lead you to the door, give you the key, even turn the handle and push the door open, but I cannot walk through it for you.</li>
              </ul>
              <span><b>In the end the result is down to you.</b></span>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Services;
