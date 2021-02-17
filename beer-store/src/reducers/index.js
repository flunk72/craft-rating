
const initialState = {
  crafts: [

  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CRAFTS_LOADED': 
      return { crafts: action.payload } 
    default:
      return state;
  };
}

export default reducer;