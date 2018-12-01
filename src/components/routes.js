import Home from './Home';
import AboutMe from './AboutMe';
import Transformations from './Transformations';
import { fetchPopularRepos } from './api';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/aboutme',
    exact: true,
    component: AboutMe,
  },
  {
    path: '/transformations',
    exact: true,
    component: Transformations,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  },
  // {
  //   path: '/popular/:id',
  //   component: Grid,
  //   // fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop()),
  // },
];

export default routes;
