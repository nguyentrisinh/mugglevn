import { combineReducers } from 'redux'
import data from './data'
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
    data,
    form: formReducer

})

export default rootReducer