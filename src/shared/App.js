import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import routes from './routes';
import Navbar from './Navbar';
import NoMatch from './NoMatch';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => {
                return (<Component {...props} {...rest} />);
              }}
            />
          ))}
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(state => state)(App));
