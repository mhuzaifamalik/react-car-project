import React from 'react'
import codebar from '../images/downloaded.png'
import appscreen from '../images/Group39376.png'

function MobileScreen() {
  return (
    <div>
      <section className='textmoral'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="screen-1">
                            <h4>ANDROID, IOS</h4>
                            <h2>#1 LOS ANGELES AIRPORT Taxi Booking & Bride SHARE</h2>
                            <h3>DOWNLOAD OUR APP</h3>
                            <img src={
                                codebar
                            } className='img-fluid holder'  alt="img" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-end">
                        <img src={appscreen} className="img-fluid screenmap" alt="img" />
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default MobileScreen
