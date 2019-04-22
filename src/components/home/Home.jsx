import React from 'react'
import { connect } from 'react-redux'
import {HomeBody,HomeLeft,HomeRight,BackTop} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import * as Actions from './store/actions'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.backTop = this.backTop.bind(this)
    }
    backTop(){
        window.scrollTo(0,0)
    }
    componentDidMount(){
        this.props.homeList()
        document.addEventListener('scroll',this.props.handleScroll)
    }
    render(){
        const {hidden} = this.props
        return (
            <HomeBody>
                <HomeLeft>
                    <img className='banner' src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"></img>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                </HomeRight>
                <BackTop onClick={this.backTop} className={hidden?'hidden':''}>
                    <span className='iconfont'>&#xe62c;</span>
                </BackTop>
            </HomeBody>
        )
    }
}

const mapState = (state) => {
    return {
        hidden: state.get('home').get('hidden')
    }
}

const mapDispatch = (dispatch) => {
    return {
        homeList: () => {
            dispatch(Actions.getHomeList())
        },
        handleScroll: () => {
            if(document.documentElement.scrollTop > 200 ){
                dispatch(Actions.toTop(false))
            }else{
                dispatch(Actions.toTop(true))
            }
        }
    }
}

export default connect(mapState,mapDispatch)(Home)