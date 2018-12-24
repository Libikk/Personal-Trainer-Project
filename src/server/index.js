import express from 'express';
import cors from 'cors';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../components/App';
import routes from '../components/routes';
import store from '../browser/store';

import api from './api';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.use('/api', api);

app.get('*', (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then((data) => {
    const context = { data };
    const markup = renderToString( /* eslint-disable-line */
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>);

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Server side rendered page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
          <link rel="stylesheet" id="stylesCSS" href="style.css">
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
  }).catch(next);
});
app.listen(3000, () => {
  console.log('<> Server is listening on port: 3000'); /* eslint-disable-line */
});

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/
