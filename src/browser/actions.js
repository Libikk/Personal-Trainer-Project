// export const testAction = searchData => dispatch =>
//   dispatch({
//     type: 'AA',
//     payload: searchData,
//   });
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toNumber, delay } from 'lodash';

export const testAction = searchData => ({
  type: 'AA',
  payload: searchData,
});

export const testActionBB = searchData => (dispatch) => {
  dispatch({
    type: 'BB',
    payload: searchData,
  });
};

export const showLoadingBar = () => (dispatch, getState) => {
  dispatch({ type: 'loading-bar/INCREASE' });

  if (toNumber(getState().loadingBarCount) === 1) {
    dispatch(showLoading());
  }
};

export const hideLoadingBar = (msDelay = 200) => (dispatch, getState) => {
  delay(() => {
    dispatch({ type: 'loading-bar/DECREASE' });

    if (toNumber(getState().loadingBarCount) === 0) {
      dispatch(hideLoading());
    }
  }, msDelay);
};

export const resetLoadingBar = () => (dispatch) => {
  dispatch({ type: 'loading-bar/RESET' });
  dispatch(hideLoading());
};
