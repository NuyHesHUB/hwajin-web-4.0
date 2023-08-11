import React, { useEffect } from 'react';
import WAVES from 'vanta/src/vanta.waves';
import { IoIosArrowDown } from 'react-icons/io';
import '../styled/Home.css'

const Home = () => {
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
        <div className='w-100 h-screen'> 
            <div id='vantaWaves' className='w-100 h-screen relative home-wrap'>
                <div className='hero'>
                    <h1>상상 그 이상,</h1>
                    <p>IT기술과 서비스로 더 나은 삶을 향해</p>
                    <div className='border-solid border-2 border-white mt-16 flex justify-center items-center more-btn'>
                        <span>VIEW MORE</span>
                    </div>
                </div>
                <div className='scroll-wrap'>
                    <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-12 rounded-3xl border-2 border-white scroll-btn flex justify-center items-center'>
                        <IoIosArrowDown className='arrow-btn' color='#fff' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;