import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import siler1 from '../images/image1.webp'
import silder2 from '../images/image3.webp'
import silder4 from '../images/businesswoman.avif'
import silder5 from '../images/blurred-street.jpg'
import silder6 from '../images/imgpsh_fullsize_anim.jpg'
import silder7 from '../images/imgpsh_fullsize_anim15.jpg'
import silder8 from '../images/imgpsh_fullsize_animjpg.jpg'
import silder9 from '../images/154imgpsh_fullsize_anim.jpg'
import silder10 from '../images/154imgpsh_fullsize_anim.jpg'
import silder11 from '../images/268.jpg'
import silder12 from '../images/26.jpg'
import silder13 from '../images/25.jpg'

import { Autoplay, Pagination,Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay, Navigation]);





function Userfriendly() {


    return (
        <div>
            <section className='texture'>
                <div className="container">

                    <div className="row ">
                        <div className="col-12 col-md-6">
                            <div className="user-friendly">

                                <h2>User-friendly & handy Mobile App</h2>
                                <ul>
                                    <li> <FontAwesomeIcon className='iconic' icon={faCircleCheck} style={{ color: '#000000' }} />Order a car in 3 steps</li>
                                    <li> <FontAwesomeIcon className='iconic' icon={faCircleCheck} style={{ color: '#000000' }} />Choose the class of car you want</li>
                                    <li> <FontAwesomeIcon className='iconic' icon={faCircleCheck} style={{ color: '#000000' }} />Order a car for family friends and employees</li>
                                    <li> <FontAwesomeIcon className='iconic' icon={faCircleCheck} style={{ color: '#000000' }} />Pay by cash, card, Apple Pay or Google Pay</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="app-form">
                            
                                <div className="row">
              <div className="col-12 col-md-12">
              <div className="Banner-slider">
                <Swiper
                  slidesPerView={2}
                  centeredSlides={true}
                  spaceBetween={0}
                  grabCursor={true}
                  pagination={false} 
                  loop={true}
                  modules={[Pagination]}
                  autoplay={{ delay: 2500 }}
                  className="mySwiper"
                  initialSlide={6} 
                >
                  <SwiperSlide><div>
                    <img src={siler1} className='image-fluid' alt="img" style={{ width: '100%'  }} /></div></SwiperSlide>
                  <SwiperSlide>
                    <img src={silder2} class="images-fluid" alt="img" style={{ width: '100%' }} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src={silder4} class="images-fluid" alt="img" style={{ width: '100%'  }}/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={silder5} className='image-fluid' alt="img"  style={{ width: '100%' }} />
                  </SwiperSlide>
                  <SwiperSlide><img src={silder6} className='image-fluid' alt="img"  style={{ width: '100%'  }} /></SwiperSlide>
                  <SwiperSlide><img src={silder7} className='image-fluid' alt="img"  style={{ width: '100%' }} /></SwiperSlide>
                </Swiper>
              </div>
              </div>
            </div>
            <div className="row">
           <div className="col-12 col-md-12">
              <div className="Banner-slider">
                <Swiper
                  slidesPerView={2}
                  centeredSlides={true}
                  spaceBetween={0}
                  grabCursor={true}
                  pagination={false} 
                  loop={true}
                  modules={[Pagination]}
                  autoplay={{ delay: 2500 }}
                  className="mySwiper loop-right"
                  initialSlide={1} 
                >
                  <SwiperSlide><div>
                    <img src={silder8} className='image-fluid' alt="img" style={{ width: '100%' }} /></div></SwiperSlide>
                  <SwiperSlide>
                    <img src={silder9} class="images-fluid" alt="img" style={{ width: '100%' }} />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src={silder10} class="images-fluid" alt="img" style={{ width: '100%'}}/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={silder11} className='image-fluid' alt="img"  style={{ width: '100%'  }} />
                  </SwiperSlide>
                  <SwiperSlide><img src={silder12} className='image-fluid' alt="img"  style={{ width: '100%' }} /></SwiperSlide>
                  <SwiperSlide><img src={silder13} className='image-fluid' alt="img"  style={{ width: '100%' }} /></SwiperSlide>
                </Swiper>
              </div>

            </div>
           </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Userfriendly
