import Home from './Home';
import Test from './Test';
import Grid from './Grid';
import { fetchPopularRepos } from './api';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  },
  {
    path: '/test',
    exact: true,
    component: Test,
  },
];

export default routes;
