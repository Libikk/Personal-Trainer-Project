import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

export default function Navbar() {
  return (
    <ul className="navbar-container">
      <li><Link href="/" to="/">Home</Link></li>
      <li><Link href="/aboutme" to="/aboutme">About Me</Link></li>
      <li><Link href="/transformations" to="/transformations">Transformations</Link></li>
    </ul>
  );
}
