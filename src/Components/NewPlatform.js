import React from 'react';
import '../styled/NewPlatform.css';
import Illust from '../assets/robotos-image/illust.png';
import useScrollFadeIn from '../Hook/useScrollFadeIn';

const NewPlatform = () => {
    const fadeIn1 = useScrollFadeIn('up', 1, 0);
    const fadeIn2 = useScrollFadeIn('up', 1, 100);
    return (
        <div id='newPlatForm' className='w-100'>
            <div className='relative w-100 newplatform-wrap'>
                <div className='newplatform-overlay'></div>
                <div className='newplatform-contents-wrap'>
                    <div className='w-100 relative newplatform-img-wrap'>
                        <img src={Illust} alt="platformbackground"/>
                        <div className='illust-bg'></div>
                    </div>
                    <div className='newplatform-text-wrap'>
                        <h2 ref={fadeIn1.ref} style={fadeIn1.style}>
                            새로운 거래 생태계를 <br/>
                            만들어나갑니다 <br/>
                        </h2>
                        <p ref={fadeIn2.ref} style={fadeIn2.style}>
                            구매자와 판매자가 만나 <br/>
                            새로운 경험과 또다른 기회를 만들어가며 <br/>
                            시장의 새로운 패러다임을 <br/>
                            구축하고자 합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPlatform;