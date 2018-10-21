import React from 'react';

export default class Footer extends React.Component {
  test = () => {
    console.log('this is test');
  }
  render() {
    return (
      <div style={{ background: 'blue', color: 'red' }}>
        <button onClick={this.test}>consol</button>
          THIS IS Footer
          aasdasdasdasdasdassaaaaja pierdole gg
      </div>
    );
  }
}
