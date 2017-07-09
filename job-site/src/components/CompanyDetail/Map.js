
import React from 'react'

export default class Map extends React.Component{
    render(){
        return (
            <div id="wrap-map">
                <iframe src={this.props.data.google_map} frameBorder="0" allowFullScreen={true}></iframe>
            </div>
        )
    }
}
