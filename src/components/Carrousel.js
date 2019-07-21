import React, { Component } from 'react'
import girl from './1.jpg';
import boy from './2.jpg';
import teenGirl from './3.jpg';


export default class Carrousel extends Component {
    render() {
        return (
            <div className="container-fluid bg-blue p-0 py-5">
                <div className="row-fluid">
                    <div id="carousel" className="carousel slide w-100 mt-4" data-ride="carousel" data-interval="false" >
                        <ol className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1 " ></li>
                            <li data-target="#carousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="row align-items-center justify-content-center">
                                    <img className="col-md-2 offset-md-2 col-sm-5 col-xs-12  mx-sm-0 img1" alt="img-girl" src={girl}></img>
                                    <div className="col-md-7 col-sm-7 col-xs-12 text-white">
                                        <p className="blockquote m-xs-3">
                                            "I can only recommend both this theme and the Component
                                            developer behind it to other people. quick & helpful support!"
                                        </p>
                                        Jane Roe
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row align-items-center justify-content-center">
                                    <img className="col-md-2 offset-md-2  col-sm-5  col-xs-12 mx-sm-0 img1" alt="img-boy" src={boy}></img>
                                    <div className="col-md-7 col-sm-7 col-xs-12 text-white px-3">
                                        <p className="blockquote m-xs-3">
                                            "I can only recommend both this theme and the Component
                                            developer behind it to other people. quick & helpful support!"
                                        </p>
                                        Jonh Roe
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row align-items-center justify-content-center">
                                    <img className="col-md-2 offset-md-2 col-sm-5 col-xs-12 m-sm-0 img1" alt="img-teenfirl" src={teenGirl}></img>
                                    <div className="col-md-7 col-sm-7  col-xs-12 text-white m-xs-3">
                                        <p className="blockquote">
                                            "I can only recommend both this theme and the Component
                                            developer behind it to other people. quick & helpful support!"
                                        </p>
                                        Jane Roe
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
