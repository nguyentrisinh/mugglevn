import React from 'react';
import ShowMore from 'react-show-more';
import MultiLine from '../Helper/MultiLine'


export default class DescriptionCompany extends React.Component{
    render(){
        return (
            <div className='description'>
                <h1 className="name">{this.props.data.name}</h1>
                <h3 className="slogan">{this.props.data.bio}</h3>
                <div className="bio">
                <ShowMore
                    lines={2}
                    more='Show more'
                    less='Show less'
                >
                    {MultiLine(this.props.data.overview)}
                </ShowMore>
                </div>

                {/*<p className="bio">{this.props.data.description}</p>*/}
            </div>
        )
    }
}