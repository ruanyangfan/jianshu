import styled from 'styled-components'
import logo from '../../images/nav-logo.png'
import beta from '../../images/nav-beta.png'

export const HeaderWapper = styled.div`
    height: 56px;
    width: 100%;
    position: relative;
    z-index: 999;
`
export const HeaderIn = styled.div`
    position: fixed;
    width: 100%;
    background: #fff;
`
export const Login = styled.a.attrs({
    href:'/'
})` width: 100px;
    height: 56px;
    display: inline-block;
    background: url(${logo});
    background-size: contain;
    position: absolute;
`
export const Nav = styled.div`
    width: calc(100% - 380px);
    height: 56px;
    margin: 0 auto;
    line-height: 56px;
    text-align: center;
`
export const NavItem = styled.a.attrs({
    href: '/'
})`
    &.left {
        float: left;
        width: 64px;
    }
    &.right {
        float: right;
        width: 56px;
    }
    &.active {
        color: #ea6f5a;
        font-size: 18px;
    }
    &.beta {
        height: 56px;
        background: url(${beta}) no-repeat;
        background-position: 0 10px;
        background-size: contain;
    }
    padding: 0 10px;
    color: #969696;
`

export const SearchWrap = styled.div`
    float: left;
    height: 56px;
    margin-left: 20px;
    position: relative;
    .iconfont{ 
        position: absolute;
        right: 5px;
        bottom: 11px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
    }
`

export const SearchInfo = styled.div`
    width: 240px;
    border: 1px solid #ddd;
    margin-top: 5px;
    overflow: hidden;
    padding: 0 10px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2)
`
export const SearchInfoTitle = styled.div`
    width: calc(100% - 10px);
    margin: 5px auto;
    font-size: 14px;
    height: 30px;
    overflow: hidden;
    line-height: 30px;
`
export const SearchTitleLeft = styled.div`
    float: left;
    color: #777;
`
export const SearchTitleRight = styled.div`
    float: right;
    color: #666;
    cursor: pointer;
`
export const SearchItem = styled.span`
    display: inline-block;
    line-height: 14px;
    float: left;
    border: 1px solid #999;
    padding: 5px;
    margin: 5px;
    color: #868686;
    font-size: 12px;
`
export const SearchInput = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 120px;
    border-radius: 20px;
    padding: 0 20px;
    outline: none;
    border: none;
    background: #ddd;
    height: 40px;
    &.focused {
        width: 220px;
        background: #ddd;
    }
    &.slide-enter{
        transition: all .3s;
    }
    &.slide-enter-active{}
    &.slide-exit{
        transition: all .3s; 
    }
    &.slide-exit-active{}
`

export const NavSearch = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    line-height: 30px;
    height: 56px;
`
export const Sign = styled.a.attrs({
    href: '/'
})`
    width: 60px;
    height: 30px;
    border: 1px solid #ea6f5a;
    color: #ea6f5a;
    display: inline-block;
    border-radius: 16px;
    margin: 13px 10px 0 0;
`
export const Write = styled.a.attrs({
    href: '/'
})`
    width: 80px;
    height: 30px;
    background-color: #ea6f5a;
    color: #fff;
    display: inline-block;
    border-radius: 16px;
    margin-right: 10px;
`