import React from 'react'
import { Link } from "react-router-dom";
import coloredLogo from '../images/logo.png'
function Footer() {
    return (
        <div>
            <section className='footer'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4 col-md-4">
                            <ul className='socailmedia'>
                                <li>
                                    <a href="/">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 col-md-4 d-flex justify-content-center">
                            <img src={
                                coloredLogo
                            } className='img-fluid' alt="img" />
                        </div>
                        <div className="col-4 col-md-4">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="d-lg-none navbar-brand" to="//">

                                </Link>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="navbar-nav misson ms-auto ">
                                        <li className="nav-item btn1 custom-nav-item">

                                            <a className='going-new' href="tel:510-474-0516">REGISTER</a>

                                        </li>
                                        <li className="nav-item btn2 custom-nav-item">
                                            <a className='SignIn' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                                SIGN IN </a>
                                        </li>


                                    </ul>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
