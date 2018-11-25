const initialState = {
  myNutritionList: false,
  searchResult: false,
  singleItemNutrition: null,
  error: false,
};

const reducer = (state = initialState, action) => {
 // console.log('this is reducer', action.type, action.payload);

  switch (action.type) {
    case 'AA': {
      console.log('this is reducer', action.type, action.payload);
      return Object.assign({}, state, { myNutritionList: action.payload });
    }
    case 'BB': {
      console.log('this is reducer', action.type, action.payload);
      return Object.assign({}, state, { myNutritionList: action.payload });
    }
    default: return state;
  }
};
export default reducer;
