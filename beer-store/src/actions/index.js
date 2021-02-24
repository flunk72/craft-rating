
const craftsLoaded = (newCrafts) => {
  return {
    type: 'CRAFTS_LOADED',
    payload: newCrafts
  }
}

const brewerysLoaded = (newBrewerys) => {
  return {
    type: 'BREWERY_LOADED',
    payload: newBrewerys
  }
}

export {
  craftsLoaded,
  brewerysLoaded
}