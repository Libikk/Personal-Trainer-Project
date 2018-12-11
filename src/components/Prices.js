import React from 'react';
import '../styles/prices.scss';

class Prices extends React.Component {
  tibia = () => {
    console.log('ssss')
  }
  render() {
    return (
      <div className="container">
        THIS IS PricesPricesPricesPrices page
        <button onClick={() => console.log('thisi s test')}>test</button>
      </div>
    );
  }
}

export default Prices;
