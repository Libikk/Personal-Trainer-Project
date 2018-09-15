import { combineReducers } from 'redux';
import testReducer from './testReducer';

const r = { a: 100 }

export default combineReducers({
  r,
  testReducer,
});
