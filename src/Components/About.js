import React, { useEffect } from 'react';
import '../styled/About.css';
import NET from 'vanta/src/vanta.net';
import useScrollFadeIn from '../Hook/useScrollFadeIn';

const About = () => {

    const fadeIn1 = useScrollFadeIn('up', 1, 0);
    const fadeIn2 = useScrollFadeIn('left', 1, 0);

    useEffect(() => {
        NET({
            el: '#vantaNet',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            /* minHeight: 300.00,
            minWidth: 300.00, */
            scale: 1.00,
            scaleMobile: 1.00,
            /* color: 0x0271ff, */
            color: 0x3FA9F5,
            /* backgroundColor: 0x002047, */
            backgroundColor: 0x071A4B,
            points: 7.00,
            spacing: 15.00,
            zoom: 10
        })
        
    },[])
    return (
        <div id='about' className='w-100'>
            <div className='flex justify-between items-center about-wrap'>
                <div ref={fadeIn1.ref} style={fadeIn1.style} className='about-text'>
                    <h3 className='mobile-inovation'>INOVATION</h3>
                    <p className='about-title'>ABOUT</p>
                    <h2>끊임없는 연구와</h2>
                    <h2><u>도전정신</u>을 지향합니다</h2>
                    <p className='about-contents1'><u>기술과 서비스</u>로 더 나은 삶을 향해</p>
                    <div>
                        <p>
                            우리는 최고의 기술과 서비스를 통해<br/>
                            사회의 발전과 혁신에 기여하는<br/>
                            선도적인 기업으로 성장하고자 합니다.
                        </p>
                    </div>
                    <h3 className='desktop-inovation'>INOVATION</h3>
                </div>
                <div ref={fadeIn2.ref} style={fadeIn2.style} className='vanta-wrap'>
                    <div id='vantaNet'>
                        <div>
                            <p>
                                우리는 최고의 기술과 서비스를 통해<br/>
                                사회의 발전과 혁신에 기여하는<br/>
                                선도적인 기업으로 성장하고자 합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;