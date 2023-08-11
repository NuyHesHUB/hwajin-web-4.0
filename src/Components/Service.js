import React, { useEffect, useRef, useState } from 'react';
import '../styled/Service.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination'; 
import { Pagination, Autoplay } from "swiper";
import Logo from '../assets/image/robotos-logo.png';
import Mockup from '../assets/robotos-image/mockup-image.png';
import Video from '../assets/video/light-bg.mp4';

const Service = () => {

    return (
        <div id='service' className='w-100 bg-black'>
            {/* <h2 className='mobile-service'>SERVICE</h2> */}
            {/* <p className='mobile-content'>AI 매칭 플랫폼으로 더 나은 비즈니스 환경을 만들어 나갑니다.</p> */}
            <div className='relative flex items-center service-wrap'>
                <Swiper
                    /* effect={'fade'} */
                    autoplay={{
                        delay: 10000,
                    }}
                    modules={[Pagination, /* EffectFade, */ Autoplay]}
                    speed={500}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={false}
                    pagination={{
                        el:'.custom-pagination',
                        clickable: true,
                        bulletClass:"custom_bullet",
                        bulletActiveClass: "swiper-pagination-custom-bullet-active",
                        renderBullet: function (index, className) {
                            return '<div class="'+className+'"></div>'
                        },
                    }}
                    /* pagination={pagination} */
                    /* scrollbar={{ draggable: true }} */
                >
                    <SwiperSlide>
                        <div className='slide-wrap relative'>
                            <video autoPlay muted loop className='absolute top-0 left-0 video-wrap'>
                                <source src={Video} type="video/mp4" />
                            </video>
                            <div className='slide-contents-wrap'>
                                <div className='flex flex-col left-contents-wrap-01'>
                                    <h3>01<u> / 02</u></h3>
                                    <img src={Logo} alt="logo"/>
                                    <h2>AI매칭 플랫폼 로보토스</h2>
                                    <p>
                                        빠른 견적 비교 <br/>
                                        AI매칭 <br/>
                                        스마트 AI인트로<br/>
                                    </p>
                                    <span>COMING SOON</span>
                                </div>
                                <div className='right-mockup-wrap-01'>
                                    <img src={Mockup} alt="mockup"/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-wrap relative'>
                            <video autoPlay muted loop className='absolute top-0 left-0 video-wrap'>
                                <source src={Video} type="video/mp4" />
                            </video>
                            <div className='slide-contents-wrap second-slide-contents-wrap'>
                                <div className='flex flex-col left-contents-wrap-01'>
                                    <h3>02<u> / 02</u></h3>
                                    <img src={Logo} alt="logo"/>
                                    <h2>AI매칭 플랫폼 로보토스</h2>
                                    <h4>로보토스는 E-커머스와 O2O를 결합한 서비스입니다.</h4>
                                    <p>
                                        더이상 발품팔 필요 없습니다! <br/>
                                        정해진 예산에서 딱맞는 판매자를 만나세요. <br/>
                                        AI알고리즘이 자동으로 추천/매칭 시켜줌으로써 <br/>
                                        본인에게 최적화된 경험을 지원해주는 AI기반 <br/>
                                        매칭서비스를 제공합니다.
                                    </p>
                                </div>
                                <div className='right-mockup-wrap-01'>
                                    <img src={Mockup} alt="mockup"/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>         
                <div className="custom-pagination">
                    <div className='custom_bullet'></div>
                    <div className='custom_bullet swiper-pagination-custom-bullet-active'></div>
                </div>       
            </div>
        </div>
    );
};

export default Service;