import React, { useEffect } from 'react';
/* Styled */
import '../styled/Home.css'
/* Hook */
import useScrollFadeIn from '../Hook/useScrollFadeIn';
/* Library */
import WAVES from 'vanta/src/vanta.waves';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-scroll';


const Home = () => {

    /* Scroll Event Hook */
    const fadeIn1 = useScrollFadeIn('bannerup', 1, 0);
    const fadeIn2 = useScrollFadeIn('bannerup', 1, 100);
    const fadeIn3 = useScrollFadeIn('bannerup', 1, 200);

    /* Vanta.js */
    useEffect(() => {
        WAVES({
            el: '#vantaWaves',
            mouseControls: true,
            touchControls: false,
            gyroControls: false,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x03133d,
            shininess: 50.00,
            zoom: 0.9
        })
    },[])
    
    return (
        <div id='home' className='w-100'> 
            <div id='vantaWaves' className='w-100 relative home-wrap'>
                <div className='hero'>
                    <h1 ref={fadeIn1.ref} style={fadeIn1.style}>상상 그 이상</h1>
                    <p ref={fadeIn2.ref} style={fadeIn2.style}>IT기술과 서비스로 더 나은 삶을 향해</p>
                    <Link to="about" smooth={true} duration={500} style={{cursor:'pointer'}}>
                        <div ref={fadeIn3.ref} style={fadeIn3.style} className='border-solid border-2 border-white mt-16 flex justify-center items-center more-btn'>
                            <span>VIEW MORE</span>
                        </div>
                    </Link>
                </div>
                <div className='scroll-wrap'>
                    <div className='rounded-3xl border-2 border-white scroll-btn flex justify-center items-center'>
                        <IoIosArrowDown className='arrow-btn' color='#fff' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;