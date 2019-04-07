import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import bannerTexts from '../../appPageFeed/banner.json';
import '../styles/banner.scss';
import Gym from '../icons/gym.svg';
import Gym2 from '../icons/gym2.svg';
import Gym3 from '../icons/gym3.svg';

const icons = {
  gym1: Gym,
  gym2: Gym2,
  gym3: Gym3,
};

export default class Banner extends React.Component {
    state = {
      text: null,
    }

    // componentDidMount = () => {
    //   const getRandomText = () => bannerTexts[Math.floor(Math.random() * bannerTexts.length)];

    //   this.intervalId = setInterval(() => this.setState({ text: getRandomText() }), 2000);
    // }

    // componentWillUnmount = () => clearInterval(this.intervalId);

    render() {
      return (
        <div className="banner">
          {this.props.page} {this.state.text}
          <Carousel infiniteLoop emulateTouch showThumbs={false} showStatus={false} autoPlay>
            {
              bannerTexts[this.props.page].map((e, index) => {
                const Icon = icons[`gym${index + 1}`];
                return (
                  <div className="single" key={e.author + index}>
                    {e.text} <Icon />
                  </div>);
              })
            }
          </Carousel>
        </div>
      );
    }
}
