import React, { useEffect } from 'react';
import NET from 'vanta/src/vanta.net';
import '../styled/Partner.css';

const Partner = () => {

    useEffect(() => {
        NET({
            el: '#partnerVantaNet',
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            /* minHeight: 300.00,
            minWidth: 300.00, */
            scale: 1.00,
            scaleMobile: 1.00,
            /* color: 0x0271ff, */
            color: 0x3FA9F5,
            /* backgroundColor: 0x002047, */
            backgroundColor: 0x051234,
            points: 10.00,
            spacing: 17.00,
            zoom: 20
        })
        
    },[])
    return (
        <div id='partner' className='w-100 flex items-center'>
            <div className='relative w-100 partner-wrap'>
                <div id='partnerVantaNet' className='w-100 relative'>
                    <div className='partner-content-wrap'>
                        <div className='partner-text-wrap'>
                            <h2>당신의 든든한 파트너</h2>
                            <h2>화진로보틱스</h2>
                        </div>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSf05_vX4gy_PY6OYXuyWbosedkNC_sWYiYM53JPgn7tpKLq9g/viewform?usp=sf_link' target='_blank' rel="noreferrer">
                        <div className='partner-box'>
                            <span>제휴문의</span>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;