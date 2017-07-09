/**
 * Created by Asus on 4/17/2017.
 */
import React, { Component } from 'react'


class SocialBlock extends Component{
    render(){
        return (
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <div className="social-box facebook">
                        <i className="fa fa-facebook"></i>
                        <div className="chart-wrapper">
                            <canvas id="social-box-chart-1" height="90"></canvas>
                        </div>
                        <ul>
                            <li>
                                <strong>89k</strong>
                                <span>friends</span>
                            </li>
                            <li>
                                <strong>459</strong>
                                <span>feeds</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="social-box twitter">
                        <i className="fa fa-twitter"></i>
                        <div className="chart-wrapper">
                            <canvas id="social-box-chart-2" height="90"></canvas>
                        </div>
                        <ul>
                            <li>
                                <strong>973k</strong>
                                <span>followers</span>
                            </li>
                            <li>
                                <strong>1.792</strong>
                                <span>tweets</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">

                    <div className="social-box linkedin">
                        <i className="fa fa-linkedin"></i>
                        <div className="chart-wrapper">
                            <canvas id="social-box-chart-3" height="90"></canvas>
                        </div>
                        <ul>
                            <li>
                                <strong>500+</strong>
                                <span>contacts</span>
                            </li>
                            <li>
                                <strong>292</strong>
                                <span>feeds</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="social-box google-plus">
                        <i className="fa fa-google-plus"></i>
                        <div className="chart-wrapper">
                            <canvas id="social-box-chart-4" height="90"></canvas>
                        </div>
                        <ul>
                            <li>
                                <strong>894</strong>
                                <span>followers</span>
                            </li>
                            <li>
                                <strong>92</strong>
                                <span>circles</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialBlock;