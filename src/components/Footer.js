import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="bg-footer">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-2">
                            <h4>Robust.</h4>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3">
                                    <ul className="adress">
                                        <h4 className="h6 mb-4">Address</h4>
                                        <li>City Hall</li>
                                        <li>212 Street</li>
                                        <li>Lawoma</li>
                                        <li>735</li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="adress">
                                        <h4 className="h6 mb-4">Popular Services</h4>
                                        <li><a className="explore-pages" href="">Payment Center</a></li>
                                        <li><a className="explore-pages" href="">Contact Directory</a></li>
                                        <li><a className="explore-pages" href="">Forms</a></li>
                                        <li><a className="explore-pages" href="">News and Updates</a></li>
                                        <li><a className="explore-pages" href="">FAQs</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="adress">
                                        <h4 className="h6 mb-4">Website Information</h4>
                                        <li><a className="explore-pages" href="">Website Tutorial</a></li>
                                        <li><a className="explore-pages" href="">Accessibility</a></li>
                                        <li><a className="explore-pages" href="">Disclaimer</a></li>
                                        <li><a className="explore-pages" href="">Privacy Policy</a></li>
                                        <li><a className="explore-pages" href="">FAQs</a></li>
                                        <li><a className="explore-pages" href="">Webmaster</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <ul className="adress">
                                        <h4 className="h6 mb-4">Company</h4>
                                        <li><a className="explore-pages" href="">Our team</a></li>
                                        <li><a className="explore-pages" href="">About</a></li>
                                        <li><a className="explore-pages" href="">Contact</a></li>
                                        <li><a className="explore-pages" href="">Purchase</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-dark text-footer">© 2018 - <a className="explore-pages text-dark" href="">Robust UI Kit.</a></p>
                </div>
            </div>
        )
    }
}
