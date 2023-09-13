import React from 'react';
/* Styled */
import '../styled/Value.css';
/* Hook */
import useScrollFadeIn from '../Hook/useScrollFadeIn';
/* Image */
import Icon1 from '../assets/value-image/value-left-icon.svg'
import Icon2 from '../assets/value-image/value-center-icon.svg'
import Icon3 from '../assets/value-image/value-right-icon.svg'

const Value = () => {

    /* Scroll Event Hook */
    const fadeIn1 = useScrollFadeIn('right', 1, 0);
    const fadeIn2 = useScrollFadeIn('right', 1, 200);
    const fadeIn3 = useScrollFadeIn('right', 1, 400);
    
    return (
        <div id='value' className='w-100 flex items-center'>
            <div className='flex items-center value-wrap'>
                <h2 className='text-center font-bold'>가치 실현</h2>
                <p className='text-center mobile-value-text'>
                    가치 실현은 <u className='font-bold'>우리의 핵심</u>입니다. <br/>
                    우리는 약속을 지키며 그 결과를 만들어내고 있습니다.
                </p>
                <div className='flex justify-center w-full value-contents-wrap'>
                    <div ref={fadeIn1.ref} style={fadeIn1.style}>
                        <div className='relative w-full h-full value-img-wrap'>
                            <div className='v-img-overlay left-img-overlay'></div>
                            <div className='absolute value-text-wrap'>
                                {/* <img src={Icon1} alt="icon"/> */}
                                {/* <p>
                                    우리는 최고의 기술과 서비스를 통해 <br/>
                                    사회의 발전과 혁신에 기여하는 <br/>
                                    선도적인 기업으로 성장하고자 합니다.<br/>
                                </p> */}
                                <p>
                                    우리는 고객들에게 더 나은 서비스를 제공 <br/>
                                    하기 위해 지속적으로 노력합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div ref={fadeIn2.ref} style={fadeIn2.style}>
                        <div className='relative w-full h-full value-img-wrap'>
                            <div className='v-img-overlay right-img-overlay'></div>
                            <div className='absolute value-text-wrap'>
                                {/* <img src={Icon3} alt="icon"/> */}
                                {/* <p>
                                    우리는 고객들과의 <br/>
                                    긴밀한 관계를 통해 <br/>
                                    그들의 니즈를 이해하고 <br/>
                                    더 나은 서비스를 제공하기 위해 <br/>
                                    지속적으로 노력합니다.
                                </p> */}
                                <p>
                                    우리는 자유로운 의사소통과 <br/>
                                    협력을 지원하는 소통 문화를 지향합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div ref={fadeIn3.ref} style={fadeIn3.style}>
                        <div className='relative w-full h-full value-img-wrap'>
                            <div className='v-img-overlay center-img-overlay'></div>
                            <div className='absolute value-text-wrap'>
                                {/* <img src={Icon2} alt="icon"/> */}
                                {/* <p>
                                    우리는 직원들이 자신의 능력을 <br/>
                                    최대한 활용하고 창의적인 아이디어를 <br/>
                                    발휘할 수 있게 자유로운 의사소통과 <br/>
                                    협력을 지원하는 소통 문화를 지향합니다.
                                </p> */}
                                <p>
                                    우리는 최고의 기술과 서비스를 통해 <br/>
                                    선도적인 기업으로 성장하고자 합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Value;