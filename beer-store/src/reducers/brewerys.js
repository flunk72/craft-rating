
const initialState = {
  brewerys: []
}

const brewerys = (state = initialState, action) => {
switch(action.type) {
  case 'BREWERY_LOADED':
    return { brewerys: action.payload }
  default:
    return state;
};
}

export default brewerys;