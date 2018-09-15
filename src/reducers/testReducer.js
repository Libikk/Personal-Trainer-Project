const initialState = {
  isSearchBarShown: false,
    isSearchBarFixed: false,
    isHeaderMenuOpen: false,
    isMapOpen: false,
    isOffersFilteringShown: false,
    isDesktopView: null,
    isTabletView: null,
    isMobileView: null,
    activeTips: true,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH_BAR':
      return Object.assign({}, state, { isSearchBarShown: !state.isSearchBarShown });
    case 'CHANGE_SEARCH_BAR_FIXED':
    default: return state;
  }
};

export default testReducer;
