import React from 'react';
import Footer from './containers/Footer';
import Header from './containers/Header';
import Navbar from './containers/Navbar';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <section>
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Layout;
