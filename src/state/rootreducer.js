import { combineReducers } from 'redux'
import musicReducers from './reducer'
const RootReducer = combineReducers({
    musics: musicReducers,
    
})
export default RootReducer