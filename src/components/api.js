import { testActionBB } from '../browser/actions';
import store from '../browser/store';

export const fetchPopularRepos = (language = 'all') => {
  // const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  // return fetch(encodedURI)
  //   .then(data => data.json())
  //   .then(repos => repos.items)
  //   .catch((error) => {
  //     console.warn(error);
  //     return null;
  //   });
  console.log('this is api file ', language, store, testActionBB);
  //testActionBB('BBBBBBBBBBB')(store.dispatch);
  return Promise.resolve();
};
