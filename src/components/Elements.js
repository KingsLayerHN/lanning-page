import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Elements extends Component {
    render() {
        return (

            <div className="bg-elements">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3 offset-2 mt-5 mb-5">
                            <h2>
                                Enormous collection of elements
                            </h2>
                        </div>
                        <div className="col-md-5 mt-5">
                            <p className="blockquote">
                                Robust is a premium theme built with Bootstrap 4, the most popular UI framework.
                                The theme is fully responsive and customizable and can be used for any type of web application.
                            </p>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="row">
                            <div className="col-md-4 media mt-0">
                                <div className="icon bg-primary mr-3 mt-1">
                                    <FontAwesomeIcon icon={['far','id-badge']} />
                                </div>
                                <div className="media-body">
                                    <h4 className="mt-0">
                                        Responsive
                                    </h4>
                                    With mobile, tablet & desktop
                                    support it doesn't matter what
                                    device you're using. Robust is
                                    responsive in all browsers.
                                </div>
                            </div>
                            <div className="col-md-4 media mt-0">
                                <div className="icon bg-warning mr-3 mt-1">
                                    <FontAwesomeIcon icon={['far','hand-scissors']} />
                                </div>
                                <div className="media-body">
                                    <h4 className="mt-0">
                                        Customizable
                                    </h4>
                                    You don't need to be an expert to
                                    customize Robust. Our code is very
                                    readable and well documented.
                                </div>
                            </div>
                            <div className="col-md-4 media">
                                <div className="icon bg-danger mr-3 mt-1">
                                    <FontAwesomeIcon icon={['far','comments']} />
                                </div>
                                <div className="media-body">
                                    <h4 className="mt-0">
                                        Quick support
                                    </h4>
                                    Robust is supported by specialists who provide
                                    quick and effective support. Usually
                                    an email reply takes 24h.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 media mt-5">
                                <div className="icon bg-success mr-3 mt-1">
                                    <FontAwesomeIcon icon={['far','clone']} />
                                </div>
                                <div className="media-body">
                                    <h4 className="mt-0">
                                        Cross browser
                                    </h4>
                                    Robust works perfectly with: Chrome,
                                    Firefox, Safari, Opera and IE 10+.
                                    We're working hard to support them.
                                </div>
                            </div>
                            <div className="col-md-4 media mt-5 mb-5">
                                <div className="icon bg-danger mr-3">
                                    <FontAwesomeIcon icon={['far', 'gem']} />                               
                                </div>
                                <div className="media-body">
                                    <h4 className="mt-0">
                                        Clean code
                                    </h4>
                                    We strictly followed Bootstrap's guidelines to
                                    make your integration as easy as possible.
                                    All code is handwritten.
                                </div>
                            </div>
                            <div className="col-md-4 media mt-5">
                                <div className="icon bg-primary mr-3">
                                    <FontAwesomeIcon icon={['far','arrow-alt-circle-down']} />
                                </div>
                                <div className="media-body">
                                    <h4 className="mt-0">
                                        Free updates
                                    </h4>
                                    From time to time you'll receive
                                    an update containing new components,
                                    improvements and bugfixes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
