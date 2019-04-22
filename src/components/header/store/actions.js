import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changList = (data) => {
    return {
        type: actionTypes.CHANGE_LIST,
        totalPage: Math.ceil(data.data.length / 7),
        data: fromJS(data)
    }
}

export const focus = () => {
    return {
        type: actionTypes.SEARCH_FOCUS
    }
}

export const blur = () => {
    return {
        type: actionTypes.SEARCH_BLUR
    }
}
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/listdata.json').then((res) => {
            dispatch(changList(res.data))
        })
    }
}
export const mouseEnter = () => {
    return {
        type: actionTypes.MOUSE_ENTER
    }
}
export const mouseLeave = () => {
    return {
        type: actionTypes.MOUSE_LEAVE
    }
}
export const togglePage = (page) => {
    return {
        type: actionTypes.TOGGLE_PAGE,
        page
    }
}