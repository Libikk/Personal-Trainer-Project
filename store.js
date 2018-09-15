import { createStore } from 'redux';
import reducer from './src/reducers/index';

export const initStore = initialState => createStore(reducer, initialState);
