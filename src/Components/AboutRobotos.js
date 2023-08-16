import React from 'react';
/* Styled */
import '../styled/AboutRobotos.css';
/* Hook */
import useScrollFadeIn from '../Hook/useScrollFadeIn';

const AboutRobotos = () => {

    /* Scroll Event Hook */
    const fadeIn1 = useScrollFadeIn('right', 1, 0);
    const fadeIn2 = useScrollFadeIn('left', 1, 0);
    
    return (
        <div id='aboutRobotos' className='w-100 flex'>
            <div className='relative w-100  flex flex-col items-center about-robotos-wrap'>
                <div className='about-robotos-title-wrap'>
                    <h2 className='text-white'>ABOUT ROBOTOS</h2>
                </div>
                <div className='flex about-robotos-img-wrap'>
                    <div ref={fadeIn1.ref} style={fadeIn1.style} className='relative about-robotos-left-wrap'>
                        <div className='about-robotos-overlay left-overlay'></div>
                        <div className='about-robotos-contents-wrap'>
                            <h3 className='text-white'>스마트 AI 인트로</h3>
                            <p className='text-white'>
                                사용자의 기록을 분석하여 <br/>
                                탐색에서 구매, 예약까지의 과정을 단축해 <br/>
                                이용자의 편의를 극대화합니다. <br/>
                            </p>
                            {/* <span className='text-white'>COMING SOON</span> */}
                        </div>
                    </div>
                    <div ref={fadeIn2.ref} style={fadeIn2.style} className='relative about-robotos-right-wrap'>
                        <div className='about-robotos-overlay right-overlay'></div>
                        <div className='about-robotos-contents-wrap'>
                            <h3 className='text-white'>개인 최적화 AI 도구</h3>
                            <p className='text-white'>
                                소비자가 원하는 정보를 학습하여 생성된 알고리즘으로 <br/>
                                소비자에게 적절한 맥락에서 <br/>
                                브랜드 스토리와 매칭경험을 효과적으로 전달합니다.
                            </p>
                            {/* <span className='text-white'>COMING SOON</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutRobotos;