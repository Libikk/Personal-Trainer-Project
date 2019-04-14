import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import bannerTexts from '../../appPageFeed/banner.json';
import '../styles/banner.scss';
import GymExercise1 from '../icons/gymExercise1.svg';
import GymExercise2 from '../icons/gymExercise2.svg';
import GymExercise3 from '../icons/gymExercise3.svg';
import GymExercise4 from '../icons/gymExercise4.svg';
import GymExercise5 from '../icons/gymExercise5.svg';
import GymExercise6 from '../icons/gymExercise6.svg';
import GymExercise7 from '../icons/gymExercise7.svg';
import GymExercise8 from '../icons/gymExercise8.svg';
import GymExercise9 from '../icons/gymExercise9.svg';
import GymExercise10 from '../icons/gymExercise10.svg';
import GymExercise11 from '../icons/gymExercise11.svg';

const icons = {
  GymExercise1, GymExercise2, GymExercise3, GymExercise4, GymExercise5, GymExercise6, GymExercise7, GymExercise8, GymExercise9, GymExercise10, GymExercise11,
};


export default class Banner extends React.Component {
  shuffleArray = array => array.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);

  render() {
    return (
      <div className="banner">
        <Carousel emulateTouch showThumbs={false} showStatus={false} autoplay infiniteLoop>
          {
            bannerTexts[this.props.page].map((e) => {
              const bannerIcons = e.icons.map(f => icons[f]);
              return (
                <div className="single" key={e.author + Math.random()}>
                  <span className="single__text">
                  “{e.text}“
                  </span>
                  <span className="single__author">
                    <span>Author: </span>{e.author}
                  </span>
                  <div className="single__icons">
                    {bannerIcons.map((Icon, index) => <Icon key={index + this.props.page} />)}
                  </div>
                </div>);
            })
          }
        </Carousel>
      </div>
    );
  }
}
