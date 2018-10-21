import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import routes from './routes';
import Layout from './Layout/Layout';
import ErrorPage from './ErrorPage/ErrorPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout >
          <Switch>
            {routes.map(({ path, exact, component: Component, ...rest }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={props => (<Component {...props} {...rest} />)}
              />
            ))}
            <Route render={props => <ErrorPage {...props} />} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(connect(state => state)(App));
