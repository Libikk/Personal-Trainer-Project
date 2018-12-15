import LoadingBar from 'react-redux-loading-bar';
import React from 'react';
import Navbar from './Navbar';
import '../styles/header.scss';
import hujj from '../images/logo_white.png';


export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <LoadingBar maxProgress={100} />
        <img className="header__logo" alt="ddd" src={hujj} />
        <Navbar location={this.props.location} />
      </div>
    );
  }
}
