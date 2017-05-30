import { combineReducers } from 'redux'
import teams from './Teams/reducers'
import games from './Games/reducers'

const rootReducer = combineReducers({
  teams,
  games
})

export default rootReducer