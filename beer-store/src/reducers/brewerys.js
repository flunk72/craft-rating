
const initialState = {
  brewerys: [
    {
      id: 1,
      title: 'Saldens'
    },
    {
      id: 2,
      title: 'Rewort'
    },
    {
      id: 3,
      title: 'Jaws'
    }
  ]
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