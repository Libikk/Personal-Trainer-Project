import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

class Navbar extends React.Component {
  render() {
    const routes = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'About' },
      { href: '/services', text: 'Services' },
      { href: '/prices', text: 'Prices' },
      { href: '/transformations', text: 'Transformations' },
      { href: '/contact', text: 'Contact' },
    ];

    return (
      <ul className="navbar-container">
        {routes.map(route => (
          <li key={route.href} className={route.href === this.props.location.pathname ? 'selected-route' : null}>
            <Link href={route.href} to={route.href}>
              {route.text}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default (Navbar);
