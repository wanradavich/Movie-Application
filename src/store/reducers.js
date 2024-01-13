// reducers.js
const initialState = {
    faveList: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVE_LIST':
        return { ...state, faveList: [...state.faveList, action.payload] };
  
      case 'REMOVE_FROM_FAVE_LIST':
        return {
          ...state,
          faveList: state.faveList.filter((movie) => movie.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;