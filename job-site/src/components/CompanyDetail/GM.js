import React, { Component } from 'react';
import Map from 'google-maps-react';
import Marker from 'google-maps-react'
import InfoWindow from 'google-maps-react'

class SimpleMap extends Component {

    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={}
                        name={'Current location'} />

                <InfoWindow onClose={}>
                    <div>
                        <h1>

                        </h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}
