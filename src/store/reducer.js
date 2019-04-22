import { combineReducers } from 'redux-immutable'
import { HeaderReducer } from '../components/header/store'
import { ListReducer } from '../components/home/store'

export default combineReducers({
    header: HeaderReducer,
    home: ListReducer
})