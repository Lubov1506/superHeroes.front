import {combineReducers} from 'redux'
import  {heroReducer} from './heroReducer'

const rooReducer = combineReducers({
    hero: heroReducer
})
export default rooReducer
    