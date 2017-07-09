import React from 'react';
import Loading from '../../img/animal.gif'
const style = {
    textAlign:'center',
    display: 'block'
}
const imgStyle={
    margin:'auto'
}
export default class LoadingImage extends React.Component {
    render() {
        return (
            <div style={style}>
                <img style={imgStyle} src={Loading} alt=""/>
            </div>
        )
    }
}