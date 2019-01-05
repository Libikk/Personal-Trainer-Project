import React from 'react';
import '../styles/footer.scss';

import FacebookIcon from '../icons/facebook.svg';
import TwitterIcon from '../icons/twitter.svg';
import InstagramIcon from '../icons/instagram.svg';
import YoutubeIcon from '../icons/youtube.svg';
import EmailIcon from '../icons/email.svg';
import PhoneIcon from '../icons/phone.svg';
import LocationIcon from '../icons/location.svg';


export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <section className="content__contact">
            <span><PhoneIcon /> (0) 7704438594</span>
            <span><LocationIcon /> The Gym London Kingsbury, 632-640 Kingsbury Road, London NW9 9HN</span>
            <span><EmailIcon /> developer@kregielmarek.com</span>
          </section>
          <div className="thin-line" />
          <p className="content__icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YoutubeIcon />
          </p>
          <p className="content__copyrights" >© 2018 <a href="https://github.com/Libikk">Marek Kregiel</a> All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}
