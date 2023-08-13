import React, { useEffect, useRef, useState } from 'react';
import '../styled/Service.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination'; 
import { Pagination, Autoplay, Navigation } from "swiper";
import Logo from '../assets/image/robotos-logo.png';
import Mockup from '../assets/robotos-image/mockup-image.png';
/* import Video from '../assets/video/light-bg.mp4'; */
import Mbg1 from '../assets/robotos-image/mobile-bg.png';
import Mbg2 from '../assets/robotos-image/mobile-bg2.png';
import useScrollFadeIn from '../Hook/useScrollFadeIn';

const Service = () => {
    /* desk-slide-01  */
    const fadeIn1 = useScrollFadeIn('up', 1, 0);
    const fadeIn2 = useScrollFadeIn('left', 1, 0);
    /* desk-slide-02  */
    const fadeIn3 = useScrollFadeIn('up', 1, 0);
    const fadeIn4 = useScrollFadeIn('left', 1, 0);
    /* mobile-slide-01  */
    const fadeIn5 = useScrollFadeIn('up', 1, 0);
    const fadeIn6 = useScrollFadeIn('left', 1, 0);
    /* mobile-slide-02  */
    const fadeIn7 = useScrollFadeIn('up', 1, 0);
    const fadeIn8 = useScrollFadeIn('left', 1, 0);

    return (
        <div id='service' className='w-100'>
            {/* <h2 className='mobile-service'>SERVICE</h2> */}
            {/* <p className='mobile-content'>AI 매칭 플랫폼으로 더 나은 비즈니스 환경을 만들어 나갑니다.</p> */}
            <div className='desktop-service-wrap'>
                <div className='relative flex items-center desktop-service-wrap'>
                    <Swiper
                        className='desktop-swiper'
                        autoplay={{
                            delay: 10000,
                        }}
                        modules={[Pagination, Autoplay]}
                        speed={500}
                        loop={false}
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
                    >
                        <SwiperSlide>
                            <div className='slide-wrap relative'>
                                <video autoPlay muted loop playsInline className='absolute top-0 left-0 video-wrap'>
                                    <source src={`${process.env.PUBLIC_URL}/video/light-bg.mp4`} type="video/mp4" />
                                </video>
                                {/* <div className='absolute top-0 left-0 mobile-bg-wrap'>
                                    <img src={Mbg} alt="mobilebg"/>
                                </div> */}
                                <div className='slide-contents-wrap'>
                                    <div ref={fadeIn1.ref} style={fadeIn1.style} className='flex flex-col left-contents-wrap-01'>
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
                                        <img ref={fadeIn2.ref} style={fadeIn2.style} src={Mockup} alt="mockup"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide-wrap relative'>
                                <video autoPlay muted loop playsInline className='absolute top-0 left-0 video-wrap'>
                                    <source src={`${process.env.PUBLIC_URL}/video/light-bg.mp4`} type="video/mp4" />
                                </video>
                                {/* <div className='absolute top-0 left-0 mobile-bg-wrap'>
                                    <img src={Mbg} alt="mobilebg"/>
                                </div> */}
                                <div className='slide-contents-wrap second-slide-contents-wrap'>
                                    <div ref={fadeIn3.ref} style={fadeIn3.style} className='flex flex-col left-contents-wrap-01'>
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
                                        <img ref={fadeIn4.ref} style={fadeIn4.style} src={Mockup} alt="mockup"/>
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
            <div className='mobile-service-wrap'>
                <div className='relative flex items-center mobile-service-wrap'>
                    <Swiper
                        className='mobile-swiper'
                        autoplay={{
                            delay: 10000,
                        }}
                        modules={[Navigation, Autoplay]}
                        speed={500}
                        loop={false}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <div className='slide-wrap relative'>
                                <div className='absolute top-0 left-0 mobile-bg-wrap'>
                                    <img src={Mbg2} alt="mobilebg"/>
                                </div>
                                <div className='slide-contents-wrap'>
                                    <div ref={fadeIn5.ref} style={fadeIn5.style} className='flex flex-col left-contents-wrap-01'>
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
                                        <img ref={fadeIn6.ref} style={fadeIn6.style} src={Mockup} alt="mockup"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide-wrap relative'>
                                <div className='absolute top-0 left-0 mobile-bg-wrap'>
                                    <img src={Mbg1} alt="mobilebg"/>
                                </div>
                                <div className='slide-contents-wrap'>
                                    <div ref={fadeIn7.ref} style={fadeIn7.style} className='flex flex-col left-contents-wrap-01'>
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
                                        <img ref={fadeIn8.ref} style={fadeIn8.style} src={Mockup} alt="mockup"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>      
                </div>
            </div>
        </div>
    );
};

export default Service;