import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defalutState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
})

export default (state = defalutState,actions) => {
    switch(actions.type){
        case actionTypes.SEARCH_FOCUS : return state.set('focused',true)
        case actionTypes.SEARCH_BLUR : return state.set('focused',false)
        case actionTypes.CHANGE_LIST : return state.set('list',actions.data).set('totalPage',actions.totalPage)
        case actionTypes.MOUSE_ENTER : return state.set('mouseIn',true)
        case actionTypes.MOUSE_LEAVE : return state.set('mouseIn',false)
        case actionTypes.TOGGLE_PAGE : return state.set('page',actions.page)
        default: return state  
    }
    
}