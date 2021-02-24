import { combineReducers } from 'redux'

import crafts from '../reducers/crafts';
import brewerys from '../reducers/brewerys';


export default combineReducers ({
  crafts,
  brewerys
})
