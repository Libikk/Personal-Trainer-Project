import React from 'react';
import Navbar from './Navbar';
import '../styles/header.scss';
import hujj from '../images/logo_white.png';


export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <img className="header__logo" alt="ddd" src={hujj} />
        <Navbar location={this.props.location} />
      </div>
    );
  }
}
