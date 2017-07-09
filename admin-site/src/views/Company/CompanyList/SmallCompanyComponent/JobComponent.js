/**
 * Created by Asus on 4/20/2017.
 */
import React, { Component } from 'react'
import './JobComponent.css'

class JobComponent extends Component{

    render(){

        var tagRender = this.props.data.tags.map((tag) =>{
            return(
                <button type="button" className="btn btn-danger btn-sm margin">{tag}</button>
            )
        });

        return(
            <div>
                <div className="card card-inverse card-primary border-radius">
                    <div className="card-block">
                        <blockquote className="card-blockquote">
                            <header>
                                <strong className="job-name">{this.props.data.name}</strong>
                            </header>
                            <p className="job-description">{this.props.data.description}</p>
                            <p>Tag:
                                <span>
                                    {tagRender}
                                </span>
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobComponent;