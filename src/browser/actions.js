// export const testAction = searchData => dispatch =>
//   dispatch({
//     type: 'AA',
//     payload: searchData,
//   });


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
