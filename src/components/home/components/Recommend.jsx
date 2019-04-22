import React from 'react'
import { RecommendItem,RecommendApp,RecommendCode,RecommendLetter } from '../style'
import member from '../../../images/member.png'
import copyright from '../../../images/copyright.png'
import university from '../../../images/university.png'
import serial from '../../../images/serial.png'

class Recommend extends React.Component{
    render(){
        return (
            <>
                <RecommendItem imgUrl={member}></RecommendItem>
                <RecommendItem imgUrl={serial}></RecommendItem>
                <RecommendItem imgUrl={copyright}></RecommendItem>
                <RecommendItem imgUrl={university}></RecommendItem>
                <RecommendApp>
                    <RecommendCode></RecommendCode>
                    <RecommendLetter>
                        <p>下载简书手机App ></p>
                        <p style={{fontSize:"12px",color:'#aaa',marginTop:'8px'}}>随时随地发现和创作内容</p>
                    </RecommendLetter>
                </RecommendApp>
            </>
        )
    }
}

export default Recommend