import React from 'react'
import turstpix from '../images/card-images.png';
import cardphone from '../images/iPhone14ProMockup1.png'

function Texter() {
    return (
        <div>
            <section className='text-way'>
                <div className="container">
                    <div className="row pt-4 pb-4">
                        <h4 className='mobile-text-1'>BOOK AIRPORT TAXI</h4>
                        <h2 className="mobile-text-2">Airport transfers to & from your accommodation</h2>
                        <div className="col-12 col-md-6">
                            <div className="main-host">
                                <ul>
                                    
                                    <li className='invoke1'><h4>Competitive Prices</h4></li>
                                    <li><p>All bookings are fully inclusive pricing - no hidden extras.</p></li>

                                </ul>
                                <ul>
                                    <li className='invoke2'><h4 >  Easy Bookings</h4></li>
                                    <li><p>Booking a local taxi with us is very easy, from anywhere, at home, at any time from web or app.</p></li>

                                </ul>
                                <ul>
                                    <li className='invoke3'><h4>Competitive Prices</h4></li>
                                    <li><p>Our dedicated customer support team will always help you to solve any of your queries.</p></li>

                                </ul>


                            </div>
                            <div className="card-picture">
                                    <img src={turstpix} class="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-end">
                            <div className="screen-img">
                                <img src={cardphone} className='img-fluid custom-app' alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Texter
