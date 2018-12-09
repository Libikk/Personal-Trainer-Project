import Home from './Home';
import About from './About';
import Services from './Services';
import Prices from './Prices';
import Contact from './Contact';
import Transformations from './Transformations';
import { fetchPopularRepos } from './api';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/services',
    exact: true,
    component: Services,
  },
  {
    path: '/prices',
    exact: true,
    component: Prices,
  },
  {
    path: '/contact',
    exact: true,
    component: Contact,
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
