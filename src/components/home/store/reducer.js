import { fromJS } from 'immutable' 
import * as ActionTypes from './actionTypes'

const defalutValue = fromJS({
    list: [],
    hidden: true
})

export default (state = defalutValue,actions) => {
    switch(actions.type){
        case ActionTypes.CHANGE_HOME_LIST: return state.set('list',fromJS(actions.data))
        case ActionTypes.MORE_LIST: return state.set('list',state.get('list').concat(fromJS(actions.data)))
        case ActionTypes.TO_TOP: return state.set('hidden',fromJS(actions.res))
        default: return state
    }
}