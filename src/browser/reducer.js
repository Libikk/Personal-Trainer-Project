const initialState = {
    myNutritionList: false,
    searchResult: false,
    singleItemNutrition: null,
    error: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_SEARCH_DATA':
        return Object.assign({}, state, { searchResult: action.payload });
  
      case 'CLEAR_ERROR':
        return Object.assign({}, state, { error: false });
  
      case 'POP_UP_ERROR':
        return Object.assign({}, state, { error: action.payload ? action.payload : true });
  
      case 'CHANGE_ITEM_WEIGHT':
        return Object.assign({}, state);
  
      case 'GET_NUTRITION_DATA': {
        const nutrition = action.payload.data.report.food.nutrients;
        return Object.assign({}, state, {
          singleItemNutrition: {
            name: action.payload.data.report.food.name,
            id: action.payload.data.report.food.ndbno,
            nutrition: [
              { rate: nutrition[1].value, value: nutrition[1].value, nutritionName: 'Kcal' },
              { rate: nutrition[2].value, value: nutrition[2].value, nutritionName: 'Protein' },
              { rate: nutrition[3].value, value: nutrition[3].value, nutritionName: 'Fat' },
              { rate: nutrition[4].value, value: nutrition[4].value, nutritionName: 'Carbohydrates' },
              { rate: nutrition[5].value, value: nutrition[5].value, nutritionName: 'Fiber' },
              { rate: nutrition[21].value, value: nutrition[21].value, nutritionName: 'Vitamin A' },
              { rate: nutrition[14].value, value: nutrition[14].value, nutritionName: 'Vitamin C' },
              { rate: nutrition[23].value, value: nutrition[23].value, nutritionName: 'Vitamin E' },
              { rate: nutrition[11].value, value: nutrition[11].value, nutritionName: 'Potassium' },
              { rate: nutrition[9].value, value: nutrition[9].value, nutritionName: 'Magnesium' },
              { rate: nutrition[12].value, value: nutrition[12].value, nutritionName: 'Sodium' },
              { rate: nutrition[7].value, value: nutrition[7].value, nutritionName: 'Calcium' },
            ] },
        });
      }
      case 'ADD_TO_NUTRITION_PAGE': {
        const newItem = {
          name: state.singleItemNutrition.name,
          id: state.singleItemNutrition.id,
          weight: 100 * action.payload,
          nutrition: state.singleItemNutrition.nutrition.map(single =>
            Object.assign({}, single, { value: Math.round(single.value * action.payload) })),
        };
        const newItemMergedWithCurrentList = state.myNutritionList ?
          { myNutritionList: state.myNutritionList.concat([newItem]) }
          : { myNutritionList: [newItem] };
        localStorage.setItem('nutritionPageList', JSON.stringify(newItemMergedWithCurrentList.myNutritionList));
        return Object.assign({}, state, newItemMergedWithCurrentList);
      }
      case 'REMOVE_ITEM': {
        let updatedNutritionList = [];
        state.myNutritionList.forEach((single) => {
          if (single.id !== action.payload) { updatedNutritionList = updatedNutritionList.concat(single); }
        });
        localStorage.setItem('nutritionPageList', JSON.stringify(updatedNutritionList));
        return Object.assign({}, state, { myNutritionList: updatedNutritionList });
      }
      case 'CHANGE_WEIGHT_OF_MY_ITEM': {
        const updatedNutritionList = state.myNutritionList.map((single) => {
          if (single.id === action.payload.id) {
            return Object.assign({}, single, {
              weight: action.payload.weight,
              nutrition: single.nutrition.map(singleNut =>
                Object.assign({}, singleNut, { value: Math.round((singleNut.rate / 100) * action.payload.weight) })),
            });
          }
          return single;
        });
        localStorage.setItem('nutritionPageList', JSON.stringify(updatedNutritionList));
        return Object.assign({}, state, { myNutritionList: updatedNutritionList });
      }
      case 'FETCH_NUTRITION_PAGE': {
        return Object.assign({}, state, { myNutritionList: action.payload });
      }
      default: return state;
    }
  };
  export default reducer;
  