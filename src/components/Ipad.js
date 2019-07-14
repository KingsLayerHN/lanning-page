
import React, { Component } from 'react';
import ipad from './ipad.png';

export default class Ipad extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mr-auto align-self-center mb-5">
                            <h3>Multi-device support</h3>
                            <p>
                                All pages inside Robust are optimized for mobile,
                                tablet and desktop. It doesn't matter what device you're using.
                            </p>
                            <h3>Well-documented</h3>
                            <p>
                                All Robust's components are well-documented and a Quick Start document
                                is included to speed things up on your side.
                            </p>
                            <h3>3rd party plugins</h3>
                            <p>
                                Robust comes with multiple 3rd party plugins that are easy to use
                                and and combine well with other components.
                            </p>
                        </div>
                        <div className="col-md-5 ml-auto mt-5">
                            <img alt="img-respnsive"  className="img-ipad img-fluid" src={ipad}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
