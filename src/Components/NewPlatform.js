import React from 'react';
/* Styled */
import '../styled/NewPlatform.css';
/* Hook */
import useScrollFadeIn from '../Hook/useScrollFadeIn';
/* Image */
import Illust from '../assets/robotos-image/illust.png';

const NewPlatform = () => {

    /* Scroll Event Hook */
    const fadeIn1 = useScrollFadeIn('up', 2, 0);
    const fadeIn2 = useScrollFadeIn('up', 2, 0);
    const fadeIn3 = useScrollFadeIn('up', 2, 0);
    
    return (
        <div id='newPlatForm' className='w-100'>
            <div className='relative w-100 newplatform-wrap'>
                <div className='newplatform-overlay'></div>
                <div className='newplatform-contents-wrap'>
                    
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
                    <div ref={fadeIn3.ref} style={fadeIn3.style} className='w-100 relative newplatform-img-wrap'>
                        <img src={Illust} alt="platformbackground"/>
                        {/* <div className='illust-bg'></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPlatform;