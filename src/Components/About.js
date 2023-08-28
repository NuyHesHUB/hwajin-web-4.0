import React, { useEffect } from 'react';
/* Styled */
import '../styled/About.css';
/* Vanta.js */
import NET from 'vanta/src/vanta.net';
/* Hook */
import useScrollFadeIn from '../Hook/useScrollFadeIn';

const About = () => {

    /* Scroll Event Hook */
    const fadeIn1 = useScrollFadeIn('up', 1, 0);
    const fadeIn2 = useScrollFadeIn('left', 1, 0);

    useEffect(() => {
        NET({
            el: '#vantaNet',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3FA9F5,
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
                    <h3 className='mobile-inovation'>CREATIVE INNOVATION</h3>
                    <p className='about-title'>ABOUT</p>
                    <h2>끊임없는 연구와</h2>
                    <h2><u>도전정신</u>을 지향합니다</h2>
                    <p className='about-contents1'><u>기술과 서비스</u>로 더 나은 삶을 향해</p>
                    <div>
                        <p>
                            {/* 우리의 목표는 뛰어난 기술과 서비스를 제공하여 <br/>
                            사회 발전과 혁신을 주도하는 <br/>
                            선도적인 기업으로 발전하는 것입니다. <br/> */}
                            {/* 화진로보틱스는 항상 도전정신으로 <br/>
                            미래의 가능성을 확장합니다. <br/>
                            우리의 목표는 기술과 서비스의 힘으로 개인과 사회, <br/>
                            모두에게 더 나은 삶을 제공하는 것입니다. <br/> */}
                            우리가 가지고 있는 기술로 <br/>
                            모두가 이롭고 더 편리한 서비스를 누릴 수 있도록 <br/>
                            창의적으로 매일 노력하고 개선하고 있습니다. <br/>
                        </p>
                    </div>
                    <h3 className='desktop-inovation'>CREATIVE INNOVATION</h3>
                </div>
                <div ref={fadeIn2.ref} style={fadeIn2.style} className='vanta-wrap'>
                    <div id='vantaNet'>
                        <div>
                            <p>
                                {/* 우리의 목표는 뛰어난 기술과 서비스를 제공하여 <br/>
                                사회 발전과 혁신을 주도하는 <br/>
                                선도적인 기업으로 발전하는 것입니다. <br/> */}
                                {/* 화진로보틱스는 항상 도전정신으로 <br/>
                                미래의 가능성을 확장합니다. <br/>
                                우리의 목표는 기술과 서비스의 힘으로 개인과 사회, <br/>
                                모두에게 더 나은 삶을 제공하는 것입니다. <br/> */}
                                우리가 가지고 있는 기술로 <br/>
                                모두가 이롭고 더 편리한 서비스를 누릴 수 있도록 <br/>
                                창의적으로 매일 노력하고 개선하고 있습니다. <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;