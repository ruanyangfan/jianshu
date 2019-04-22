import styled from 'styled-components'
import code from '../../images/qrcode.png'

export const HomeBody = styled.div`
    width: 960px;
    margin: 30px auto;
    padding-left: 20px;
    overflow: hidden;
    position: relative;
`
export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    .banner {
        width: 625px;
    }
`
export const HomeRight = styled.div`
    width: 290px;
    padding: 0 5px; 
    float: right;
`
export const ListItem = styled.div`
    margin-top: 30px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    position: relative;
    padding-bottom: 20px;
`
export const ListItemLeft = styled.div`
    width: 460px;
    display: inline-block;
    min-height: 100px;
    .title{
        font-weight: bold;
        font-size: 18px;
        line-height: 1.5;
    }
    .content{
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`
export const ListItemRight = styled.a.attrs({
    href: '/'
})`
    .pic {
        position: absolute;
        right: 0;
        width: 150px;
    }
`
export const RecommendItem = styled.div`
    cursor: pointer;
    width: 100%;
    height: 50px;
    background: url(${props => props.imgUrl});
    background-size: contain;
    margin-bottom: 5px;
`
export const RecommendApp = styled.div`
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
    height: 80px;
    margin-top: 10px;
    padding: 10px 20px;
`
export const RecommendCode = styled.div`
    width: 60px;
    height: 60px;
    display: inline-block;
    background: url(${code});
    background-size: contain;
    vertical-align: middle;
`
export const RecommendLetter = styled.div`
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
`
export const LoadMore = styled.div`
    width: 100%;
    background: #888;
    color: #fff;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    margin-top: 30px;
    cursor: pointer;
`
export const BackTop = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    position: fixed;
    bottom: 70px;
    right: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    &.hidden{
        display:none;
    }
`