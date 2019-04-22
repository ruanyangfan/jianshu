import React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import {Actions} from './store'
import { HeaderWapper,Login,Nav,NavItem,NavSearch,
        Sign,Write,SearchWrap,SearchInput,SearchInfo,
        SearchItem,SearchInfoTitle,SearchTitleLeft,
        SearchTitleRight,HeaderIn
} from './style'
function Header(props){
    return(
        <HeaderWapper>
            <HeaderIn>
                <Login/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right beta'></NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrap>
                        <CSSTransition in={props.focused} timeout={300} classNames='slide'>
                            <SearchInput className={props.focused?'focused':''}
                            onFocus={() => props.handleFoucus(props.list)}
                            onBlur={props.handleBlur}
                            ></SearchInput>
                        </CSSTransition>
                            <i className="iconfont">&#xe60d;</i>
                        { getShow(props) }
                    </SearchWrap>
                </Nav>
                <NavSearch>
                    <Sign>注册</Sign>
                    <Write>写文章</Write>
                </NavSearch>
            </HeaderIn>
        </HeaderWapper>
    )

}
const getShow = (props) => {
    const { focused,list,handleMouseEnter,handleMouseLeave,mouseIn,handleToggle,page,totalPage } = props
    const newArr = list.toJS().data
    const pageList = []
    if(!(focused||mouseIn)) return 
    if(newArr){
        for(let i = (page - 1)*7;i < page*7;i++){
            pageList.push(
                <SearchItem key={i}>{newArr[i]}</SearchItem>
            )
        }
        return (
            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    <SearchTitleLeft>热门搜索</SearchTitleLeft>
                    <SearchTitleRight onClick={() => handleToggle(page,totalPage)}>换一批</SearchTitleRight>
                </SearchInfoTitle>
                {pageList}
            </SearchInfo>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        mouseIn: state.get('header').get('mouseIn'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFoucus: (list) => {
            (list.size === 0)  && dispatch(Actions.getList())
            dispatch(Actions.focus())
        },
        handleBlur: () => {
            dispatch(Actions.blur())
        },
        handleMouseEnter: () => {
            dispatch(Actions.mouseEnter())
        },
        handleMouseLeave: () => {
            dispatch(Actions.mouseLeave())
        },
        handleToggle: (page,totalPage) => {
            if(page < totalPage){
                dispatch(Actions.togglePage(page + 1))
            }else {
                dispatch(Actions.togglePage(1))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)