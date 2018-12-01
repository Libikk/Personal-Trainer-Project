import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Layout;
