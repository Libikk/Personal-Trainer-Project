import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
import loadingBarCount from '../reducer/loadingBarCountReducer';


const store = createStore(
  combineReducers({
    reducer,
    loadingBarCount,
    loadingBar: loadingBarReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
