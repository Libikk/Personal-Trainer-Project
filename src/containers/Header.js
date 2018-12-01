import React from 'react';
import Navbar from './Navbar';
import '../styles/header.scss';


export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <Navbar />
      </div>
    );
  }
}
