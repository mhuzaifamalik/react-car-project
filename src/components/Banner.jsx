import React, {  } from 'react';
// Import Swiper React components


import CenteredTabs from './CenteredTabs';

import './styles.css';

// import required modules



function Banner() {
  return (
    <div>
      <section className='SectionBanner'>
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6">
              <div className="Banner-pt1" data-aos="fade-up">
                <h1>
                  The best way to get wherever you're going
                </h1>
                <p> More than a taxi. Online ride-sharing service. Download
                  Rydelane App and start moving around the city comfortably.</p>
                <button className="banner-btn" data-aos="fade-up">
                  DOWNLOAD RYDELANE
                </button>
              </div>
            </div>
           <div className="col-12 col-md-6">
           <CenteredTabs />
           </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner;
