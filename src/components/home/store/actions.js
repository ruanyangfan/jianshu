import * as ActionTypes from './actionTypes'
import axios from 'axios'

const getHomeAction = (data) => {
    return {
        type: ActionTypes.CHANGE_HOME_LIST,
        data
    }
}

const getMoreList = (data) => {
    return {
        type: ActionTypes.MORE_LIST,
        data
    }
}
export const getHomeList = () => {
    return (dispatch) => {
        axios.get('/api/homelist.json').then(res => {
            dispatch(getHomeAction(res.data.article))
        })
    }
}

export const loadMore = () => {
    return (dispatch) => {
        axios.get('/api/morelist.json').then(res => {
            dispatch(getMoreList(res.data.article))
        })
    }
}

export const toTop = (res) => {
    return {
        type: ActionTypes.TO_TOP,
        res
    }
}


