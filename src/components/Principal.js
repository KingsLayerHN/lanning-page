import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Principal extends Component {
    render() {
        return (
            <div className="principal">
                <Navbar />
                <div className="intro-content py-6 text-center">
                    <div className="container ">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-10 col-sm-8 col-lg-6 mx-auto text-center">
                                <h1 className="display-4 d-inline-block d-none font-weight-bold">Robust UI Kit</h1>
                                <p className=" blockquote mb-3 ">
                                    Robust is a premium theme built with Bootstrap. The theme
                                    is fully customizable & can be used for any type of application.
                                </p>
                                <button className="btn btn-success btn-lg mx-1 blockquote" type="button">Get Started</button>
                                <button className="btn btn-outline-light btn-lg mx-1 blockquote" type="button">Components</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
