import React from 'react'

import coloredLogo from '../images/logo.png'
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="d-lg-none navbar-brand" to="//">
              
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbrand-center d-lg-block  mx-auto navbar-brand" to="/build/">
              <img className="img-fluid" src={coloredLogo} alt="img" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             
              <ul className="navbar-nav misson ms-auto ">
                <li className="nav-item btn1 custom-nav-item">
                  
                 <a className='going-new' href="/">REGISTER</a> 
                  
                </li>
                <li className="nav-item btn2 custom-nav-item">
                  <a className='SignIn'  href="/" role="button">
                  SIGN IN </a>
                </li>


              </ul>

            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
