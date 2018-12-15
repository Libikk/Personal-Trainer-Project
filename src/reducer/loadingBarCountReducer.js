const initialState = 0;

const loadingBarCountReducer = (state = initialState, action) => {
  let newCount = state;
  switch (action.type) {
    case 'loading-bar/INCREASE':
      newCount += 1;
      return newCount;
    case 'loading-bar/DECREASE':
      newCount -= 1;
      return newCount;
    case 'loading-bar/RESET':
      newCount = 0;
      return newCount;
    default: return state;
  }
};

export default loadingBarCountReducer;
