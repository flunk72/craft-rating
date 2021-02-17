
const craftsLoaded = (newCrafts) => {
  return {
    type: 'CRAFTS_LOADED',
    payload: newCrafts
  }
}

export {
  craftsLoaded
}