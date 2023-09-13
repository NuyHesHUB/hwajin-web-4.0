import React from 'react';
/* Styled */
import '../styled/Footer.css';
/* Image */
import Logo from '../assets/image/logo.png';

const Footer = () => {
    return (
        <div id='footer' className='w-screen'>
            <div className='footer-wrap'>
                <div className='footer-container'>
                    <div className='footer-logo-box'>
                        <img src={Logo} alt="footerlogo"/>
                    </div>
                    <div className='footer-text-box'>
                        <div className='top-text-box text-flex'>
                            <div>
                                <p>
                                    화진로보틱스 주식회사 | 대표이사 : 강화진
                                </p>
                            </div>
                            <div style={{display:'none'}}>
                                <p>
                                    문의 help@robotos.kr
                                </p>
                            </div>
                        </div>
                        <div className='center-text-box text-flex'>
                            <p>
                                사업자등록번호 : 323-87-01693
                            </p>
                        </div>
                        <div className='bottom-text-box text-flex'>
                            <p>
                                경기도 화성시 동탄영천로 150 동탄실리콘앨리 A동 15층
                            </p>
                        </div>
                        <div className='bottom-text-box text-flex'>
                            <p>
                               {/*  All Rights Reserved Hwajinrobotics Inc. */}
                               Copyright&copy; Hwajinrobotics Inc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;