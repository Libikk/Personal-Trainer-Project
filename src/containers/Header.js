import LoadingBar from 'react-redux-loading-bar';
import React from 'react';
import Navbar from './Navbar';
import '../styles/header.scss';
import hujj from '../images/banana.png';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <LoadingBar maxProgress={100} />
        <div className="header__logo">
          <img alt="ddd" src={hujj} />
        </div>
        <Navbar location={this.props.location} />
      </div>
    );
  }
}
