import React, { Component } from 'react';
import logoSass from './sass.svg';
import logoNpm from './npm.svg';
import logoJquery from './jquery.svg';
import logoWebpack from './webpack.svg';
import logoBootstrap from './bootstrap.svg';
import logoBabel from './babel.svg';

export default class Integrated extends Component {
    render() {
        return (
            <div className="bg-integrated pb-5">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-3 offset-2">
                            <h2>
                                Integrates with all
                                your favorite tools
                            </h2>
                        </div>
                        <div className="col-5 ">
                            <p className="blockquote">
                                Robust uses industry standard build tools
                                and plugins such as Sass, jQuery, Webpack,
                                Babel and npm. All source files and compiled
                                files are included inside the package.
                             </p>
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-md-2 offset-1 sass">
                            <img src={logoSass} className="img-fluid" alt="Sass"></img>
                        </div>
                        <div className="col-md-2 mx-4 bootstrap">
                            <img src={logoBootstrap} className="img-fluid" alt="bootstrap"></img>
                        </div> 
                        <div className="col-md-2 jquery">
                            <img src={logoJquery} className="img-fluid" alt="jquery"></img>
                        </div>       
                        <div className="col-md-2 webpack ml-2">
                            <img src={logoWebpack} className="img-fluid" alt="webpack"></img>
                        </div>  
                        <div className="col-md-2 webpack babel">
                            <img src={logoBabel} className="img-fluid" alt="babel"></img>
                        </div>  
                        <div className="col-md-2 webpack npm">
                            <img src={logoNpm} className="img-fluid" alt="npm"></img>
                        </div>                 
                    </div>
                </div>
            </div>
        )
    }
}
