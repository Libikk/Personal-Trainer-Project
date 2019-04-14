import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/layout.scss';

class Layout extends React.Component {
  componentDidMount() {
    const styles = document.getElementById('stylesCSS');
    styles.parentNode.removeChild(styles);
  }

  render() {
    return (
      <div>
        <Header location={this.props.location} />
        <section className="layout-section">
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Layout;
