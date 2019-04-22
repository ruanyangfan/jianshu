import React from 'react'
import { connect } from 'react-redux'
import { ListItem,ListItemLeft,ListItemRight,LoadMore } from '../style'
import * as Actions from '../store/actions'

function List(props){
    const { list,loadMore } = props
    return(
        <div>{
            list.map((item,index) => {
                return (
                    <ListItem key={index}>
                        <ListItemLeft>
                            <a className='title' href='/'>{ item.get('title') }</a>
                            <p className='content'>{ item.get('content') }</p>
                        </ListItemLeft>
                        <ListItemRight>
                            <img className='pic' src= {item.get('imgUrl')} alt=""/>
                        </ListItemRight>
                    </ListItem>
                )
            })
        }
        <LoadMore onClick={ loadMore }>阅读更多</LoadMore>
        </div>
    )
}

const mapState = (state) => {
    return {
        list: state.getIn(['home','list'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadMore: () => {
            dispatch(Actions.loadMore())
        }
    }
}

export default connect(mapState,mapDispatch)(List)