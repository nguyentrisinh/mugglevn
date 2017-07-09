import React from 'react';
import AboutUsItem  from "./AboutUsItem";
import { PropTypes } from 'react';


export default class AboutUs extends React.Component {
    render() {
        return (
            <div className="about-us-wrap">
                <h5 className="title">Về chúng tôi</h5>
                <AboutUsItem data={this.props.data}/>
            </div>
        )
    }
}

AboutUs.propTypes={
    data:PropTypes.object.isRequired
}