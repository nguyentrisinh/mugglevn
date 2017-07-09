import React from 'react';
import {Footer} from 'react-materialize'

export default class MyFooter extends React.Component{
    render(){
        return(
            <Footer copyrights="&copy; 2017 muggle.vn"

            >
                <h5 className="white-text">muggle.vn</h5>
                <p className="grey-text text-lighten-4">Nơi chia sẻ cơ hội thực tập cho sinh viên IT tại TP.HCM</p>
            </Footer>
        )
    }
}