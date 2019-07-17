import React, { Component } from 'react'
import landing from './landing-2.png';
import dashboard from './social-2.png';
import pages from './careers.png';

export default class Discover extends Component {
    render() {
        return (
            <div className="bg-principal">
                <div className="container">
                    <div className="row landing-text">
                        <div className="col-4 offset-2 ">
                            <h2>
                                Discover our landing, app & blog pages
                            </h2>
                        </div>
                        <div className="col-5 blockquote">
                            <p>
                                Robust includes various demo pages for building your
                                custom app, blog or landing page. All code is handwritten,
                                all our components are optimized for desktop, tablet and mobile.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-4">
                            <div className="content-landing">
                                <a href="">
                                    <img className="img-fluid mb-5 img-landing" alt="img esponsive" src={landing}></img>
                                </a>
                                <h4>
                                    Landing
                                </h4>
                                <p className="langing-text">
                                    Make your app look outstanding
                                    between the crowd using our wide variety of page components.
                                </p>
                                <a className="explore-pages" href="">Explore Pages</a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="content-dashboard">
                                <a href="">
                                    <img className="img-fluid mb-5 img-dashboard" alt="img responsive" src={dashboard}></img>
                                </a>
                                <h4>
                                    Dashboard
                                </h4>
                                <p className="dashboard-text">
                                    Create the best possible user experience for your
                                    customers using our app components.
                                </p>
                                <a className="explore-pages" href="">Explore Pages</a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="content-pages">
                                <a href="">
                                    <img className="img-fluid mb-5 img-pages" alt="img responsive" src={pages}></img>
                                </a>
                                <h4>
                                    Pages
                                </h4>
                                <p className="pages-text">
                                    Discover our wide variety of pages including blog,
                                    about, contact and error pages.
                                </p>
                                <a className="explore-pages" href="">Explore Pages</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
