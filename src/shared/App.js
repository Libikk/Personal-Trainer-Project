import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import Navbar from './Navbar';
import NoMatch from './NoMatch';

class App extends React.Component {
  render() {
    console.log('app.js', __isBrowser__, this.props);
    return (
      <div>
        <Navbar />
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => (<Component {...props} {...rest} />)}
            />
          ))}
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
