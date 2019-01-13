import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

import MenuIcon from '../icons/menu_hamburger.svg';
import MenuCloseIcon from '../icons/menu_close.svg';

class Navbar extends React.Component {
  state = {
    menuOpen: true,
  }

  toggleButton = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }

  render() {
    const routes = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'About' },
      { href: '/services', text: 'Services' },
      { href: '/prices', text: 'Prices' },
      { href: '/transformations', text: 'Transformations' },
      { href: '/contact', text: 'Contact' },
    ];

    const readyRoutes = routes.map(route => (
      <div key={route.href} className={`route ${route.href === this.props.location.pathname ? 'selected-route' : ''}`}>
        <Link href={route.href} to={route.href}>
          <span className="primary-button">{route.text}</span>
        </Link>
      </div>
    ));

    return (
      <div className="navbar-container">
        <div className="navbar-desktop">
          {readyRoutes}
        </div>
        <div className="navbar-mobile">
          <MenuIcon className="mobile__menu-button" onClick={() => this.toggleButton()} />
          {
            this.state.menuOpen ? (
              <div className="mobile__wrapper">
                <div className="wrapper__routes">{readyRoutes}</div>
                <div className="wrapper__close"><MenuCloseIcon onClick={() => this.toggleButton()} /></div>
              </div>
            ) : null
          }

        </div>
      </div>

    );
  }
}

export default (Navbar);
