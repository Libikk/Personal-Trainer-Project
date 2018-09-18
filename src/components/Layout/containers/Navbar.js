import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <ul>
      <li><Link href="/home" to="/home">About</Link></li>
      <li><Link href="/aboutme" to="/aboutme">About Me</Link></li>
      <li><Link href="/transformations" to="/transformations">Transformations</Link></li>
    </ul>
  );
}
