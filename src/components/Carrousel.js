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
                                <div className="row align-items-center">
                                    <img className="col-md-2 offset-2  img1" src={girl}></img>
                                    <div className="col-md-7 text-white">
                                        <p className="blockquote">
                                            "I can only recommend both this theme and the Component
                                            developer behind it to other people. quick & helpful support!"
                                        </p>
                                        Jane Roe
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <img className="col-md-2 offset-2 img-responsive img1" src={boy}></img>
                                    <div className="col-md-7 text-white">
                                        <p className="blockquote ">
                                            "I can only recommend both this theme and the Component
                                            developer behind it to other people. quick & helpful support!"
                                        </p>
                                        Jonh Roe
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <img className="col-md-2 offset-2 img-responsive img1" src={teenGirl}></img>
                                    <div className="col-md-7 text-white">
                                        <p className="blockquote ">
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
